export default function AboutSection() {
  const capabilities = [
    {
      title: 'Software operativo',
      description:
        'Sistemas internos, portales y herramientas a medida para ordenar procesos que hoy dependen de hojas, mensajes o tareas manuales.',
      outcome: 'Menos fricción entre áreas',
      stack: 'Next.js · Node.js · PostgreSQL',
    },
    {
      title: 'Automatización de Procesos',
      description:
        'Flujos que conectan tareas, alertas, aprobaciones y sistemas existentes sin interrumpir la operación actual.',
      outcome: 'Operación más predecible',
      stack: 'n8n · Python · PostgreSQL',
    },
    {
      title: 'IA aplicada al negocio',
      description:
        'Agentes y modelos integrados a tareas reales: análisis, soporte, clasificación, extracción de información y asistencia operativa.',
      outcome: 'IA con función concreta',
      stack: 'LLM · Python · APIs',
    },
    {
      title: 'Analítica y BI',
      description:
        'Dashboards, reportes y modelos de datos para convertir información dispersa en decisiones claras y accionables.',
      outcome: 'Decisiones con evidencia',
      stack: 'Power BI · SQL · Dashboards',
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
    <section id="servicios" className="page-section about-section">
      <div className="about-header">
        <span className="section-kicker">Soluciones</span>
        <h2 className="about-header-title">Capacidades para operar mejor.</h2>
        <p className="about-header-manifest">
          3N combina software, automatización, analítica e IA para resolver
          problemas concretos de operación. Menos discurso tecnológico, más
          sistemas que sostienen el trabajo diario.
        </p>
      </div>

      <div className="capabilities-grid">
        {capabilities.map((cap, i) => {
          const pills = cap.stack.split(' · ').map((t, j) => (
            <span key={j} className="tech-pill">{t}</span>
          ));
          return (
            <div key={i} className={`capability-panel${i >= 2 ? ' capability-panel-full' : ''}`}>
              {i === 2 ? (
                <div className="capability-panel-inner">
                  <div>
                    <span className="capability-mono-id">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3>{cap.title}</h3>
                    <p>{cap.description}</p>
                    <span className="capability-outcome">{cap.outcome}</span>
                    <div className="capability-tech-stack">{pills}</div>
                  </div>
                  <div className="bento-image-wrapper">
                    <div className="solution-mini-panel">
                      <span>Flujo recomendado</span>
                      <strong>Detectar → Automatizar → Medir</strong>
                      <p>La IA entra después de entender el proceso, no antes.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <span className="capability-mono-id">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                  <span className="capability-outcome">{cap.outcome}</span>
                  <div className="capability-tech-stack">{pills}</div>
                </>
              )}
            </div>
          );
        })}
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
