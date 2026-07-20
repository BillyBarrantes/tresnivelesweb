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
            <strong>Tres Niveles S.A.C.</strong> (en adelante, &laquo;3N&raquo;), identificada con RUC
            20606324911, con domicilio en Calle Ciro Alegría 607 - Lima, Perú, es la entidad responsable
            del tratamiento de los datos personales recogidos a través de este sitio web.
          </p>
          <p>
            Correo electrónico de contacto general:{' '}
            <a href="mailto:contacto@tresniveles.com">contacto@tresniveles.com</a>
          </p>
          <p>
            Correo electrónico para asuntos de privacidad y datos personales:{' '}
            <a href="mailto:lbarrantes@tresniveles.com">lbarrantes@tresniveles.com</a>
          </p>
          <p>Teléfono: <a href="tel:+51907948972">+51 907 948 972</a></p>
        </section>

        <section>
          <h2>2. Datos que recogemos</h2>
          <p>Podemos recoger y tratar las siguientes categorías de datos personales:</p>
          <ul>
            <li><strong>Datos de contacto:</strong> nombre y apellidos, correo electrónico, teléfono, tipo de necesidad o servicio de interés, empresa y cargo, proporcionados a través del formulario de contacto.</li>
            <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la visita, recogidos mediante herramientas de analítica web.</li>
            <li><strong>Datos de proyectos:</strong> documentos, imágenes y videos que el cliente comparta voluntariamente para fines de diagnóstico, desarrollo o portafolio.</li>
            <li><strong>Datos operativos:</strong> información relacionada con procesos operativos que el cliente proporcione en el marco de los servicios contratados.</li>
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
            ejecución de una relación contractual o precontractual cuando solicitas nuestros servicios, todo
            ello conforme a la Ley N.° 29733, Ley de Protección de Datos Personales, y su Reglamento.
          </p>
        </section>

        <section>
          <h2>5. Destinatarios y subprocesadores</h2>
          <p>
            No cedemos tus datos personales a terceros sin tu consentimiento, salvo obligación legal.
            Para la operación del sitio web y la prestación de servicios, utilizamos los siguientes
            proveedores:
          </p>
          <ul>
            <li><strong>Infraestructura y hosting:</strong> Supabase y Google Cloud.</li>
            <li><strong>Correo corporativo:</strong> contacto@tresniveles.com.</li>
            <li><strong>Automatización interna:</strong> n8n y Python.</li>
            <li><strong>Proveedores de inteligencia artificial:</strong> OpenAI, Gemini y Deep Seek.</li>
          </ul>
        </section>

        <section>
          <h2>6. Inteligencia artificial y decisiones automatizadas</h2>
          <p>
            En 3N utilizamos modelos de inteligencia artificial como parte de los servicios que ofrecemos a
            nuestros clientes. Esta sección detalla cómo tratamos los datos en el contexto de la IA:
          </p>
          <ul>
            <li><strong>Datos que procesa la IA:</strong> datos de formularios, conversaciones, documentos, imágenes y datos operativos proporcionados por el cliente en el marco del servicio contratado.</li>
            <li><strong>Entrenamiento de modelos:</strong> No utilizamos datos de clientes para entrenar modelos genéricos sin autorización explícita.</li>
            <li><strong>Supervisión humana:</strong> Todas las soluciones de IA implementadas incluyen supervisión humana. No se toman decisiones automatizadas que produzcan efectos jurídicos significativos sin intervención de una persona.</li>
            <li><strong>Proveedores de IA:</strong> OpenAI, Gemini y Deep Seek, todos bajo acuerdos de confidencialidad y protección de datos.</li>
          </ul>
        </section>

        <section>
          <h2>7. Transferencias internacionales</h2>
          <p>
            No realizamos transferencias internacionales de datos personales fuera del territorio peruano
            en el marco de las finalidades descritas en esta política.
          </p>
        </section>

        <section>
          <h2>8. Plazo de retención</h2>
          <p>
            Conservamos tus datos personales durante un plazo máximo de 12 meses desde el último contacto,
            salvo que exista una obligación legal distinta o una relación contractual vigente que requiera
            un plazo de retención mayor. Una vez cumplido el plazo, los datos serán eliminados de forma segura.
          </p>
        </section>

        <section>
          <h2>9. Derechos del usuario (ARCO)</h2>
          <p>
            La Ley N.° 29733, Ley de Protección de Datos Personales, te otorga los siguientes derechos,
            que puedes ejercer en cualquier momento:
          </p>
          <ul>
            <li><strong>Acceso:</strong> Solicitar información sobre los datos personales que tenemos sobre ti. Atenderemos tu solicitud en un plazo máximo de 20 días hábiles.</li>
            <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos. Atenderemos tu solicitud en un plazo máximo de 10 días hábiles.</li>
            <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios para las finalidades descritas. Atenderemos tu solicitud en un plazo máximo de 10 días hábiles.</li>
            <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos para fines específicos. Atenderemos tu solicitud en un plazo máximo de 10 días hábiles.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, escríbenos al correo{' '}
            <a href="mailto:lbarrantes@tresniveles.com">lbarrantes@tresniveles.com</a>, indicando el
            derecho que deseas ejercer y los datos necesarios para identificarte. La persona responsable
            de atender estas solicitudes es el Responsable de Privacidad y Protección de Datos de Tres
            Niveles S.A.C.
          </p>
        </section>

        <section>
          <h2>10. Seguridad</h2>
          <p>
            Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos personales
            contra el acceso no autorizado, la pérdida, la alteración o la divulgación: cifrado SSL,
            control de acceso, firewalls y políticas internas de seguridad. Los datos se almacenan en
            Supabase y Google Cloud, ambos con estándares de seguridad reconocidos.
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
          <h2>12. Contacto del responsable de privacidad</h2>
          <p>
            Si tienes preguntas sobre esta política o sobre el tratamiento de tus datos personales, puedes
            escribir al Responsable de Privacidad y Protección de Datos de Tres Niveles S.A.C. al correo{' '}
            <a href="mailto:lbarrantes@tresniveles.com">lbarrantes@tresniveles.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
