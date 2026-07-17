const projects = [
  {
    title: 'Sistemas de Gestión Interna',
    description:
      'ERPs modulares, dashboards operativos, sistemas de inventario y seguimiento de producción diseñados a la medida del negocio.',
  },
  {
    title: 'Plataformas Web Transaccionales',
    description:
      'Portales corporativos, marketplaces, integración de APIs y sistemas con alto volumen de datos y usuarios concurrentes.',
  },
  {
    title: 'Asistentes con IA Conversacional',
    description:
      'Chatbots inteligentes, agentes virtuales de atención al cliente y automatización de respuestas basadas en modelos de lenguaje.',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="page-section">
      <h2 className="section-title">Lo que construimos</h2>
      <div className="portfolio-list">
        {projects.map((project, i) => (
          <div key={i} className="portfolio-list-item">
            <span className="portfolio-list-number">{String(i + 1).padStart(2, '0')}</span>
            <div className="portfolio-list-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
