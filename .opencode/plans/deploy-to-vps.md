# Plan de despliegue — tresniveles.com en VPS

**Basado en**: Opción A (Next.js + Node server + Resend, sin cambios de código)
**Proyecto**: mi-proyecto-web-next → tresniveles.com
**Última actualización**: Julio 2026

---

## 1. Requisitos del servidor

| Recurso | Mínimo | Recomendado |
|---|---|---|
| **CPU** | 1 vCPU | 2 vCPU |
| **RAM** | 1 GB | 2 GB |
| **Disco** | 10 GB SSD | 20 GB SSD |
| **SO** | Ubuntu 22.04 / Debian 12 | Ubuntu 24.04 |
| **Node.js** | 20.x LTS | 22.x LTS |
| **Dominio** | tresniveles.com (DNS apuntando al VPS) | — |

**Proveedores sugeridos** (ordenados por costo):

| Proveedor | Plan mínimo | Costo/mes |
|---|---|---|
| **Hetzner** | CX22 (2 vCPU, 4 GB RAM) | ~€4 |
| **DigitalOcean** | Basic Droplet (1 vCPU, 1 GB) | $6 |
| **Netcup** | VPS 1000 G11 | ~€3.50 |
| **AWS Lightsail** | 1 vCPU, 1 GB | $3.50 (primer mes) |

---

## 2. Variables de entorno

Se necesitan exactamente **3 variables** en producción:

| Variable | Valor esperado | Origen |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | Dashboard de Resend |
| `CONTACT_EMAIL` | `contacto@tresniveles.com` | Correo destino de los leads |
| `CONTACT_FROM` | `Contacto Web <contacto@tresniveles.com>` | Remitente (dominio debe estar verificado en Resend) |

> **Importante**: El dominio `tresniveles.com` debe estar verificado en Resend para poder enviar con `CONTACT_FROM`. Si aún no está verificado, Resend acepta `onboarding@resend.dev` como fallback (el código ya lo contempla en la línea 34 de `route.ts`).

Archivo `.env.production` en el servidor (NUNCA comitear):

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=contacto@tresniveles.com
CONTACT_FROM="Contacto Web <contacto@tresniveles.com>"
```

---

## 3. Estructura del servidor

```
/var/www/tresniveles.com/
├── .env.production          ← variables de entorno
├── .next/                   ← build output (generado)
├── node_modules/            ← dependencias (generado)
├── public/                  ← assets estáticos
├── src/                     ← código fuente
├── package.json
├── next.config.ts
└── ecosystem.config.cjs     ← configuración PM2 (crear)
```

---

## 4. Paso a paso del deploy inicial

### 4.1. Preparar el servidor

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 22 LTS
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs git nginx certbot python3-certbot-nginx

# Verificar
node -v  # ≥22
npm -v   # ≥10
```

### 4.2. Clonar y configurar

```bash
# Crear directorio
sudo mkdir -p /var/www/tresniveles.com
sudo chown -R $USER:$USER /var/www/tresniveles.com

# Clonar repo
git clone <url-del-repo> /var/www/tresniveles.com

# Crear archivo de entorno (pegar las 3 variables)
vim /var/www/tresniveles.com/.env.production

# Instalar dependencias
cd /var/www/tresniveles.com
npm ci --omit=dev
# NOTA: si el build requiere devDependencies (typescript, eslint), usa:
npm ci
```

### 4.3. Build

```bash
# Cargar variables de entorno y construir
NODE_ENV=production npx next build
```

El build genera la carpeta `.next/` con los archivos optimizados.

### 4.4. Configurar PM2

Crear `/var/www/tresniveles.com/ecosystem.config.cjs`:

```javascript
module.exports = {
  apps: [{
    name: 'tresniveles-web',
    cwd: '/var/www/tresniveles.com',
    script: 'node_modules/.bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
    env_file: '.env.production',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '500M',
    error_file: '/var/log/tresniveles/error.log',
    out_file: '/var/log/tresniveles/out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }]
};
```

```bash
# Crear directorio de logs
sudo mkdir -p /var/log/tresniveles
sudo chown -R $USER:$USER /var/log/tresniveles

# Iniciar con PM2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup  # sigue instrucciones para systemd
```

### 4.5. Configurar Nginx + SSL

Crear `/etc/nginx/sites-available/tresniveles.com`:

```nginx
server {
    listen 80;
    server_name tresniveles.com www.tresniveles.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name tresniveles.com www.tresniveles.com;

    # SSL — se obtienen con certbot (paso siguiente)
    ssl_certificate /etc/letsencrypt/live/tresniveles.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tresniveles.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;

    # Reverse proxy a Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
        proxy_send_timeout 60s;
    }

    # Seguridad adicional
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Logs
    access_log /var/log/nginx/tresniveles-access.log;
    error_log /var/log/nginx/tresniveles-error.log;
}
```

```bash
# Activar sitio
sudo ln -s /etc/nginx/sites-available/tresniveles.com /etc/nginx/sites-enabled/
sudo nginx -t

# Obtener SSL (certbot crea la config automáticamente)
sudo certbot --nginx -d tresniveles.com -d www.tresniveles.com

# Recargar Nginx
sudo systemctl reload nginx
```

### 4.6. Configurar DNS

En el panel de tu proveedor de dominio, crear registros:

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `<IP del VPS>` |
| A | `www` | `<IP del VPS>` |

---

## 5. Proceso de deploy continuo (actualizaciones)

```bash
# En el servidor
cd /var/www/tresniveles.com
git pull origin main
npm ci
NODE_ENV=production npx next build
pm2 restart tresniveles-web
```

Para automatizar, se puede conectar VPS al repo con un webhook o GitHub Actions + SSH deploy.

---

## 6. Checklist de verificación post-despliegue

Antes de declarar la migración completa:

### 6.1. Sitio web

| # | Verificación | Cómo |
|---|---|---|
| 1 | HTTPS funciona | `curl -I https://tresniveles.com` → 200 |
| 2 | www redirige | `curl -I https://www.tresniveles.com` → 301 a tresniveles.com |
| 3 | Páginas cargan | Abrir `/`, `/privacidad`, `/terminos` en navegador |
| 4 | Header animado funciona | Scroll up/down, logo cambia "3 Niveles" ↔ "3N" |
| 5 | Mobile responsive | Viewport ≤768px: hamburger menu, logo compacto |

### 6.2. Formulario de contacto

| # | Verificación | Cómo |
|---|---|---|
| 1 | API Route responde | `curl -X POST https://tresniveles.com/api/contact -H "Content-Type: application/json" -d '{"nombreApellidos":"Test","email":"test@test.com","telefono":"999999999","tipoNecesidad":"Diagnóstico de procesos operativos","mensaje":"Prueba","empresa":"","cargo":"","aceptaPrivacidad":true}'` → `{"ok":true}` |
| 2 | Correo llega | Revisar bandeja de `contacto@tresniveles.com` tras el test |
| 3 | Validación funciona | Enviar datos incompletos → debe responder 400 con errores |
| 4 | CSP no bloquea fetch | Abrir consola del navegador, enviar formulario real, verificar que no hay errores de CSP en la petición a `/api/contact` |

### 6.3. Infraestructura

| # | Verificación | Cómo |
|---|---|---|
| 1 | PM2 activo | `pm2 list` → `online` |
| 2 | Nginx activo | `sudo systemctl status nginx` → `active (running)` |
| 3 | SSL válido | `curl -I https://tresniveles.com` → certificado no expirado |
| 4 | Logs sin errores | `tail -f /var/log/tresniveles/error.log` — sin errores recurrentes |
| 5 | Reinicio automático | `pm2 startup` configurado → reiniciar VPS y verificar que todo sube solo |

### 6.4. Resend

| # | Verificación | Cómo |
|---|---|---|
| 1 | API key activa | Dashboard de Resend → API Keys → verificar que la key no expiró |
| 2 | Dominio verificado | Dashboard de Resend → Domains → `tresniveles.com` debe estar `Verified` |
| 3 | Límites de envío | Revisar usage mensual en Resend (plan gratuito: 100 emails/día, 3000/mes) |

---

## 7. Rollback

Si algo falla y necesitas volver a Vercel mientras tanto:

```bash
# 1. En el VPS
pm2 stop tresniveles-web

# 2. En Vercel Dashboard — redeploy del último build exitoso
# 3. DNS: apuntar tresniveles.com → Vercel (CNAME a cname.vercel-dns.com)
```

No hay pérdida de datos porque Resend es independiente del hosting.

---

## 8. Costos mensuales estimados

| Concepto | Costo |
|---|---|
| VPS (Hetzner CX22) | ~€4 |
| Dominio tresniveles.com | ya pagado |
| Resend (plan gratuito) | $0 |
| SSL (Let's Encrypt) | $0 |
| **Total** | **~€4/mes** |

Vs. Vercel Pro ($20/mes) o Vercel Enterprise (personalizado).