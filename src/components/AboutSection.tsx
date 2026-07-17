export default function AboutSection() {
  const capabilities = [
    {
      title: 'Ingeniería de Software',
      description:
        'Diseño y despliegue de sistemas robustos a medida, optimizados para la escalabilidad operativa de la empresa. Arquitecturas limpias y bases de datos relacionales estables bajo entornos controlados.',
      stack: 'Python · Node.js · PostgreSQL',
    },
    {
      title: 'Automatización de Procesos',
      description:
        'Modelado e integración de flujos de trabajo asíncronos y automatizaciones operativas complejas. Conexión nativa de sistemas heredados mediante microservicios independientes que garantizan la continuidad del negocio.',
      stack: 'n8n · Python · PostgreSQL',
    },
    {
      title: 'Inteligencia Artificial Aplicada',
      description:
        'Implementación de agentes autónomos especializados y modelos de lenguaje entrenados para resolver tareas específicas de análisis y automatización dentro del flujo operativo empresarial, reduciendo costos perceptibles.',
      stack: 'Gemini · LLM · Python',
    },
    {
      title: 'Plataformas Web Avanzadas',
      description:
        'Construcción de interfaces analíticas de alta densidad y rendimiento crítico. Enfoque absoluto en la velocidad percibida, accesibilidad técnica y optimización del flujo psicológico de usuario.',
      stack: 'React · Node.js · Next.js',
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
        <h2 className="about-header-title">Capacidades Core</h2>
        <p className="about-header-manifest">
          No vendemos tecnología abstracta. Construimos herramientas digitales
          diseñadas para los procesos reales de tu empresa. Hechos, no claims.
        </p>
      </div>

      <div className="capabilities-grid">
        {capabilities.map((cap, i) => (
          <div key={i} className={`capability-panel${i === 2 ? ' capability-panel-full' : ''}`}>
            <span className="capability-mono-id">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3>{cap.title}</h3>
            <p>{cap.description}</p>
            <span className="capability-tech-stack">{cap.stack}</span>
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
