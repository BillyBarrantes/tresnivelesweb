import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
};

export default function PrivacidadPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Política de Privacidad</h1>
        <p className="legal-date">Actualización: julio 2026</p>

        <section>
          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>3N Tres Niveles</strong> (en adelante, &laquo;3N&raquo;) es la entidad responsable del
            tratamiento de los datos personales recogidos a través de este sitio web.
          </p>
          <p>
            Correo electrónico de contacto: <a href="mailto:hola@3n.pe">hola@3n.pe</a>
            {/* TODO: validar email legal dedicado si existe */}
          </p>
          {/* TODO: confirmar razón social exacta, RUC y domicilio legal */}
        </section>

        <section>
          <h2>2. Datos que recogemos</h2>
          <p>Podemos recoger y tratar las siguientes categorías de datos personales:</p>
          <ul>
            <li><strong>Datos de contacto:</strong> nombre, correo electrónico, teléfono y mensaje proporcionados a través del formulario de contacto.</li>
            <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la visita, recogidos mediante herramientas de analítica web.</li>
            <li><strong>Datos de proyectos:</strong> imágenes, videos y descripciones de desarrollos que el cliente comparta voluntariamente para fines de portafolio o diagnóstico.</li>
            {/* TODO: confirmar si se recogen datos adicionales (cookies de terceros, demos, etc.) */}
          </ul>
        </section>

        <section>
          <h2>3. Finalidad del tratamiento</h2>
          <p>Utilizamos tus datos para las siguientes finalidades:</p>
          <ul>
            <li>Responder a consultas y solicitudes de información enviadas a través del formulario de contacto.</li>
            <li>Proveer los servicios contratados de software, automatización, inteligencia artificial y analítica.</li>
            <li>Agendar demostraciones o reuniones comerciales.</li>
            <li>Mostrar trabajos realizados en el portafolio del sitio web, previo consentimiento del cliente.</li>
            <li>Mejorar la experiencia de navegación y el rendimiento del sitio web.</li>
          </ul>
        </section>

        <section>
          <h2>4. Base legal</h2>
          <p>
            El tratamiento de tus datos se basa en tu consentimiento explícito al aceptar esta política y en la
            ejecución de una relación contractual o precontractual cuando solicitas nuestros servicios.
          </p>
        </section>

        <section>
          <h2>5. Destinatarios y subprocesadores</h2>
          <p>
            No cedemos tus datos personales a terceros sin tu consentimiento, salvo obligación legal.
            Podemos compartir datos con proveedores de servicios de infraestructura tecnológica necesarios
            para la operación del sitio web y la prestación de servicios, como servicios de hosting, email y
            almacenamiento en la nube.
          </p>
          {/* TODO: listar proveedores/subprocesadores concretos una vez confirmados: proveedor de hosting, plataforma de email, servicio cloud, etc. */}
        </section>

        <section>
          <h2>6. Transferencias internacionales</h2>
          <p>
            Es posible que algunos de los proveedores de servicios mencionados se encuentren ubicados fuera de
            Perú. En tales casos, 3N garantiza que dichas transferencias se realizan con salvaguardas adecuadas
            (cláusulas contractuales tipo, decisiones de adecuación o mecanismos equivalentes).
          </p>
          {/* TODO: confirmar ubicación exacta de servidores y mecanismos de transferencia */}
        </section>

        <section>
          <h2>7. Plazo de retención</h2>
          <p>
            Conservamos tus datos personales mientras dure la relación comercial o, en ausencia de esta,
            durante el tiempo necesario para cumplir con las obligaciones legales aplicables. Una vez cumplidas
            dichas obligaciones, los datos serán eliminados de forma segura.
          </p>
          {/* TODO: confirmar plazo exacto de retención con asesoría legal */}
        </section>

        <section>
          <h2>8. Derechos del usuario</h2>
          <p>
            Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales
            (derechos ARCO). También puedes solicitar la portabilidad de tus datos y la limitación del tratamiento.
            Para ejercer estos derechos, escríbenos a <a href="mailto:hola@3n.pe">hola@3n.pe</a>.
          </p>
        </section>

        <section>
          <h2>9. Política de inteligencia artificial y decisiones automatizadas</h2>
          <p>
            En 3N utilizamos modelos de inteligencia artificial como parte de los servicios que ofrecemos a
            nuestros clientes. Esta sección detalla cómo tratamos los datos en el contexto de la IA:
          </p>
          <ul>
            <li><strong>Datos utilizados:</strong> Solo procesamos los datos que el cliente nos proporciona
            expresamente para el desarrollo o implementación de soluciones de IA. No utilizamos datos de
            clientes para entrenar modelos genéricos sin autorización explícita.</li>
            <li><strong>Finalidad:</strong> Los modelos de IA se aplican a tareas específicas solicitadas por
            el cliente: clasificación, extracción de información, asistencia operativa, análisis predictivo,
            entre otras.</li>
            <li><strong>Decisiones automatizadas:</strong> No tomamos decisiones automatizadas que produzcan
            efectos jurídicos significativos sobre los usuarios sin supervisión humana. Cualquier resultado
            generado por IA es revisable y validable por el cliente.</li>
            <li><strong>Proveedores de IA:</strong> Podemos utilizar servicios de proveedores externos de
            modelos de IA (APIs de terceros) bajo acuerdos de confidencialidad y protección de datos.</li>
            <li><strong>Retención:</strong> Los datos utilizados en soluciones de IA se conservan según los
            plazos acordados con cada cliente y se eliminan al término del servicio, salvo que el cliente
            solicite su devolución.</li>
          </ul>
          {/* TODO: confirmar proveedores de IA específicos y términos de retención */}
        </section>

        <section>
          <h2>10. Seguridad</h2>
          <p>
            Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos personales
            contra el acceso no autorizado, la pérdida, la alteración o la divulgación: cifrado SSL,
            control de acceso, firewalls y políticas internas de seguridad.
          </p>
        </section>

        <section>
          <h2>11. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política de privacidad periódicamente. La fecha de la última actualización
            aparece al inicio del documento. Te recomendamos revisar esta página para mantenerte informado.
          </p>
        </section>

        <section>
          <h2>12. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política o sobre el tratamiento de tus datos personales, puedes
            escribirnos a <a href="mailto:hola@3n.pe">hola@3n.pe</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
