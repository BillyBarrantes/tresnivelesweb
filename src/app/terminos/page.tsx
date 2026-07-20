import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos del Servicio',
};

export default function TerminosPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Términos del Servicio</h1>
        <p className="legal-date">Actualización: julio 2026</p>

        <section>
          <h2>1. Servicios</h2>
          <p>
            <strong>Tres Niveles S.A.C.</strong> (en adelante, &laquo;3N&raquo;), identificada con RUC
            20606324911 y domicilio en Calle Ciro Alegría 607 - Lima, Perú, ofrece servicios de desarrollo
            de software a medida, automatización de procesos, inteligencia artificial aplicada, analítica
            y BI, y consultoría tecnológica. Los servicios se describen en detalle en la propuesta
            comercial o contrato firmado entre las partes.
          </p>
          <p>
            Este sitio web tiene fines informativos y de contacto. La contratación de servicios se formaliza
            mediante un acuerdo independiente.
          </p>
        </section>

        <section>
          <h2>2. Uso del sitio web</h2>
          <p>
            Al utilizar este sitio web <strong>www.tresniveles.com</strong>, el usuario se compromete a:
          </p>
          <ul>
            <li>Proporcionar información veraz y actualizada en el formulario de contacto.</li>
            <li>No utilizar el sitio web para fines ilícitos o no autorizados.</li>
            <li>No introducir malware, virus o cualquier código dañino.</li>
          </ul>
          <p>
            3N se reserva el derecho de restringir el acceso al sitio web ante el incumplimiento de estas
            condiciones.
          </p>
        </section>

        <section>
          <h2>3. Propiedad intelectual</h2>
          <p>
            El contenido de este sitio web (textos, imágenes, logotipos, diseño) es propiedad de 3N o se
            utiliza con licencia. Queda prohibida su reproducción total o parcial sin autorización expresa.
          </p>
          <p>
            En el marco de los servicios contratados:
          </p>
          <ul>
            <li>El cliente conserva la propiedad intelectual de sus datos y contenidos.</li>
            <li>3N tiene el derecho de mostrar el trabajo realizado, incluyendo logos, capturas de pantalla
            y videos de demostración, como parte de su portafolio comercial, salvo acuerdo en contrario
            entre las partes.</li>
          </ul>
        </section>

        <section>
          <h2>4. Confidencialidad</h2>
          <p>
            Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada
            durante la prestación de los servicios. Esta obligación se mantiene vigente incluso después de
            finalizada la relación contractual.
          </p>
        </section>

        <section>
          <h2>5. Limitación de responsabilidad</h2>
          <p>
            Los servicios se proporcionan dentro de los alcances definidos en el acuerdo correspondiente.
            3N no será responsable por daños indirectos, pérdida de datos o interrupción del negocio
            derivados del uso de los servicios, salvo en los casos previstos por la ley aplicable.
          </p>
        </section>

        <section>
          <h2>6. Terminación</h2>
          <p>
            Cualquiera de las partes puede dar por terminada la relación contractual según lo estipulado
            en el acuerdo firmado. En caso de incumplimiento grave, la parte afectada puede resolver el
            contrato de forma inmediata.
          </p>
        </section>

        <section>
          <h2>7. Ley aplicable y jurisdicción</h2>
          <p>
            Estos términos se rigen por la legislación de la República del Perú, incluyendo la Ley
            N.° 29733, Ley de Protección de Datos Personales. Cualquier controversia se somete a la
            jurisdicción de los jueces y tribunales de Lima, Perú.
          </p>
        </section>

        <section>
          <h2>8. Contacto</h2>
          <p>
            Para consultas sobre estos términos, puedes escribirnos a{' '}
            <a href="mailto:contacto@tresniveles.com">contacto@tresniveles.com</a> o llamarnos al{' '}
            <a href="tel:+51907948972">+51 907 948 972</a>.
          </p>
          <p>
            Tres Niveles S.A.C. — Calle Ciro Alegría 607 - Lima, Perú — RUC 20606324911
          </p>
        </section>
      </div>
    </main>
  );
}
