export default function PortfolioSection() {
  return (
    <section id="portafolio" className="page-section">
      <h2 className="section-title">Lo que construimos</h2>
      <div className="portfolio-grid">
        <div className="portfolio-card">
          <h3>Sistemas de Gestión Interna</h3>
          <p>
            ERPs modulares, dashboards operativos, sistemas de inventario y
            seguimiento de producción diseñados a la medida del negocio.
          </p>
        </div>
        <div className="portfolio-card">
          <h3>Plataformas Web Transaccionales</h3>
          <p>
            Portales corporativos, marketplaces, integración de APIs y
            sistemas con alto volumen de datos y usuarios concurrentes.
          </p>
        </div>
        <div className="portfolio-card">
          <h3>Asistentes con IA Conversacional</h3>
          <p>
            Chatbots inteligentes, agentes virtuales de atención al cliente
            y automatización de respuestas basadas en modelos de lenguaje.
          </p>
        </div>
      </div>
    </section>
  );
}
