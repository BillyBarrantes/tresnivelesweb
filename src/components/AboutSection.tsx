export default function AboutSection() {
  return (
    <section id="nosotros" className="page-section about-section">
      <div className="about-text-content">
        <h2 className="section-title left-align">
          Conozca a Tres<br />Niveles
        </h2>
        <p className="section-text left-align">
          Somos un equipo que impulsa a empresas y personas a transformar sus
          ideas en soluciones reales, aprovechando el poder de la inteligencia
          artificial y las últimas tecnologías. Creamos, potenciamos y adaptamos
          herramientas digitales para que trabajen a tu favor, de forma más
          inteligente, ágil y efectiva, impulsando así tu crecimiento y éxito.
        </p>
        <a href="#contacto" className="cta-button">
          Contáctanos
        </a>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <p className="stat-label">Clientes satisfechos</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">+50</span>
          <p className="stat-label">Proyectos completados</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">+5</span>
          <p className="stat-label">Más de 5 años de experiencia</p>
        </div>
      </div>

      <div id="servicios" className="services-new">
        <div className="services-grid">
          <div className="service-card-new">
            <img
              src="/images/imagen_desarrollosoft.svg"
              alt="Icono Desarrollo de Software"
              className="service-icon"
            />
            <h3>Desarrollo de Software</h3>
            <p>
              Creamos soluciones personalizadas para potenciar tu negocio, desde
              sistemas internos hasta plataformas escalables.
            </p>
          </div>
          <div className="service-card-new">
            <img
              src="/images/imagen_desarrolloweb.svg"
              alt="Icono Desarrollo Web"
              className="service-icon"
            />
            <h3>Desarrollo Web</h3>
            <p>
              Diseñamos y desarrollamos sitios web modernos, funcionales y
              adaptados a tus objetivos.
            </p>
          </div>
          <div className="service-card-new">
            <img
              src="/images/imagen_automatiza.svg"
              alt="Icono Automatización de Procesos"
              className="service-icon"
            />
            <h3>Automatización de Procesos</h3>
            <p>
              Optimizamos y reducimos tareas repetitivas para aumentar la
              eficiencia de tu empresa.
            </p>
          </div>
          <div className="service-card-new">
            <img
              src="/images/imagen_agente.svg"
              alt="Icono Agentes IA"
              className="service-icon"
            />
            <h3>Agentes IA</h3>
            <p>
              Implementamos soluciones basadas en IA para potenciar la toma de
              decisiones y la interacción con clientes.
            </p>
          </div>
        </div>
      </div>

      <div className="tech-logos">
        <div className="logo-set">
          <img src="/images/javascript.svg" alt="JavaScript" />
          <img src="/images/python.svg" alt="Python" />
          <img src="/images/postgresql.svg" alt="PostgreSQL" />
          <img src="/images/wordpress.svg" alt="WordPress" />
          <img
            src="/images/supabase_wordmark_light.svg"
            alt="Supabase"
          />
          <img
            src="/images/react_wordmark_light.svg"
            alt="React"
          />
          <img src="/images/pandacss.svg" alt="Pandacss" />
          <img src="/images/nodejs.svg" alt="Node.js" />
          <img src="/images/json.svg" alt="JSON" />
          <img src="/images/gemini_wordmark.svg" alt="Gemini" />
          <img src="/images/flutter.svg" alt="Flutter" />
          <img src="/images/figma.svg" alt="Figma" />
          <img src="/images/github_light.svg" alt="GitHub" />
          <img src="/images/html5.svg" alt="HTML5" />
        </div>
        <div className="logo-set" aria-hidden="true">
          <img src="/images/javascript.svg" alt="JavaScript" />
          <img src="/images/python.svg" alt="Python" />
          <img src="/images/postgresql.svg" alt="PostgreSQL" />
          <img src="/images/wordpress.svg" alt="WordPress" />
          <img
            src="/images/supabase_wordmark_light.svg"
            alt="Supabase"
          />
          <img
            src="/images/react_wordmark_light.svg"
            alt="React"
          />
          <img src="/images/pandacss.svg" alt="Pandacss" />
          <img src="/images/nodejs.svg" alt="Node.js" />
          <img src="/images/json.svg" alt="JSON" />
          <img src="/images/gemini_wordmark.svg" alt="Gemini" />
          <img src="/images/flutter.svg" alt="Flutter" />
          <img src="/images/figma.svg" alt="Figma" />
          <img src="/images/github_light.svg" alt="GitHub" />
          <img src="/images/html5.svg" alt="HTML5" />
        </div>
      </div>
    </section>
  );
}
