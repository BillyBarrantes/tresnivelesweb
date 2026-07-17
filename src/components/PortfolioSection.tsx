export default function PortfolioSection() {
  const items = [
    {
      title: 'Arquitectura documentada',
      description:
        'Cada sistema se entrega con documentación técnica, tests automatizados y procedimientos de deploy. Tu equipo puede operarlo sin depender de nosotros.',
    },
    {
      title: 'Integración trazable',
      description:
        'Conexión con sistemas existentes mediante APIs documentadas. Rollback y validación en cada cambio sin interrumpir la operación activa.',
    },
    {
      title: 'IA con función operativa',
      description:
        'Modelos integrados a tareas reales: clasificación, extracción y análisis. Sin prototipos, sin demos sin uso — solo implementación útil.',
    },
  ];

  return (
    <section id="portafolio" className="page-section">
      <h2 className="section-title">Implementación confiable</h2>
      <div className="portfolio-list">
        {items.map((item, i) => (
          <div key={i} className="portfolio-list-item">
            <span className="portfolio-list-number">{String(i + 1).padStart(2, '0')}</span>
            <div className="portfolio-list-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
