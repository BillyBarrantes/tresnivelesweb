export default function AboutSection() {
  const capabilities = [
    {
      title: 'Ingeniería de Software',
      description:
        'Desarrollamos sistemas internos, plataformas escalables y herramientas digitales adaptadas a procesos reales de negocio. Construimos con Python, Node.js y React.',
    },
    {
      title: 'Automatización de Procesos',
      description:
        'Automatizamos tareas repetitivas y flujos operativos, integrando sistemas existentes con n8n y bases de datos en PostgreSQL.',
    },
    {
      title: 'Inteligencia Artificial',
      description:
        'Implementamos agentes de IA, asistentes conversacionales y modelos de lenguaje basados en Gemini, con impacto medible en la operación diaria.',
    },
    {
      title: 'Plataformas Web',
      description:
        'Creamos experiencias web de alto rendimiento con React, Node.js y arquitectura moderna centrada en la funcionalidad y la velocidad.',
    },
  ];

  const steps = [
    {
      title: 'Diagnosticamos',
      description:
        'Analizamos tu operación, identificamos los procesos que pueden optimizarse y definimos juntos el alcance técnico y los objetivos de negocio.',
    },
    {
      title: 'Construimos',
      description:
        'Desarrollamos con metodología ágil, integración continua y pruebas constantes. Sin silos, sin entregas sorpresa, sin código sin documentar.',
    },
    {
      title: 'Acompañamos',
      description:
        'Entregamos con soporte post-implementación, documentación clara y la posibilidad de evolucionar el producto según cambie tu operación.',
    },
  ];

  return (
    <section id="servicios" className="page-section">
      <h2 className="section-title">Cómo aportamos</h2>
      <p className="section-subtitle">
        No vendemos tecnología abstracta. Construimos herramientas digitales
        diseñadas para los procesos reales de tu empresa.
      </p>
      <div className="capability-list">
        {capabilities.map((cap, i) => (
          <div key={i} className="capability-item">
            <h3>{cap.title}</h3>
            <p>{cap.description}</p>
          </div>
        ))}
      </div>
      <h3 className="subsection-heading">Así trabajamos</h3>
      <div className="process-inline">
        {steps.map((step, i) => (
          <div key={i} className="process-inline-item">
            <span className="process-inline-number">{String(i + 1).padStart(2, '0')}</span>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
