export default function AboutSection() {
  return (
    <section id="nosotros" className="page-section about-section">
      <div className="about-text-content">
        <h2 className="section-title left-align">
          Tecnología que funciona<br />para negocios que crecen
        </h2>
        <p className="section-text left-align">
          En 3N construimos software a medida, automatizamos procesos
          operativos complejos y aplicamos inteligencia artificial donde
          realmente genera valor. Trabajamos con empresas que necesitan
          soluciones sólidas, no promesas.
        </p>
      </div>

      <div id="servicios" className="capabilities-grid">
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
        <img src="/images/python.svg" alt="Python" />
        <img src="/images/nodejs.svg" alt="Node.js" />
        <img src="/images/react_wordmark_light.svg" alt="React" />
        <img src="/images/postgresql.svg" alt="PostgreSQL" />
        <img src="/images/supabase_wordmark_light.svg" alt="Supabase" />
        <img src="/images/gemini_wordmark.svg" alt="Gemini" />
      </div>
    </section>
  );
}
