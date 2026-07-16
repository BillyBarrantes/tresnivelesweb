export default function PortfolioSection() {
  return (
    <section id="portafolio" className="page-section">
      <h2 className="section-title">Áreas de Expertise</h2>
      <p className="section-subtitle">
        Construimos soluciones en las áreas que realmente transforman la
        operación de una empresa.
      </p>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <span>Automatización Operativa</span>
        </div>
        <div className="portfolio-item">
          <span>Plataformas Web</span>
        </div>
        <div className="portfolio-item">
          <span>Agentes de IA</span>
        </div>
      </div>
    </section>
  );
}
