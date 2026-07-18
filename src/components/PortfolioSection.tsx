import { projects } from '@/data/projects';

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="page-section">
      <h2 className="section-title">Implementación confiable</h2>
      <div className="portfolio-list">
        {projects.map((item, i) => (
          <div key={item.id} className="portfolio-list-item">
            <span className="portfolio-list-number">{String(i + 1).padStart(2, '0')}</span>
            <div className="portfolio-list-content">
              <span className="portfolio-industry-badge">{item.industry}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="portfolio-tech-pills">
                {item.tech.map((t) => (
                  <span key={t} className="portfolio-tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
