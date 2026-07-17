import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="servicios" className="page-section">
      <h2 className="section-title">
        Así construimos soluciones<br />que sí funcionan
      </h2>
      <p className="section-subtitle">
        No vendemos tecnología abstracta. Construimos herramientas digitales
        diseñadas para los procesos reales de tu empresa.
      </p>
      <div className="capabilities-grid">
        <div className="capability-card">
          <h3>Software Engineering</h3>
          <p>
            Desarrollamos sistemas internos, plataformas escalables y
            herramientas digitales adaptadas a procesos reales de negocio.
          </p>
        </div>
        <div className="capability-card">
          <h3>Process Automation</h3>
          <p>
            Automatizamos tareas repetitivas y flujos operativos con n8n,
            Python e integración de sistemas existentes.
          </p>
        </div>
        <div className="capability-card">
          <h3>AI & Intelligence</h3>
          <p>
            Implementamos agentes de IA, asistentes conversacionales y
            modelos predictivos con impacto medible en la operación.
          </p>
        </div>
        <div className="capability-card">
          <h3>Advanced Web Platforms</h3>
          <p>
            Creamos experiencias web de alto rendimiento con arquitectura
            moderna, rendimiento optimizado y diseño funcional.
          </p>
        </div>
      </div>
      <div className="tech-logos">
        <Image src="/images/python.svg" alt="Python" width={80} height={28} />
        <Image src="/images/nodejs.svg" alt="Node.js" width={80} height={28} />
        <Image src="/images/react_wordmark_light.svg" alt="React" width={80} height={28} />
        <Image src="/images/postgresql.svg" alt="PostgreSQL" width={80} height={28} />
        <Image src="/images/supabase_wordmark_light.svg" alt="Supabase" width={80} height={28} />
        <Image src="/images/gemini_wordmark.svg" alt="Gemini" width={80} height={28} />
      </div>
    </section>
  );
}
