import Image from 'next/image';
import { capabilities, coreTech, steps } from '@/data/capabilities';

const techSvg: Record<string, string> = {
  Python: '/images/python.svg',
  'Node.js': '/images/nodejs.svg',
  PostgreSQL: '/images/postgresql.svg',
  React: '/images/react_wordmark_light.svg',
  Supabase: '/images/supabase_wordmark_light.svg',
  ChatGPT: '/images/chatgpt.svg',
  n8n: '/images/n8n.svg',
  'Power BI': '/images/power-bi.svg',
};

export default function AboutSection() {

  return (
    <section id="servicios" className="page-section about-section">
      <div className="about-header">
        <span className="section-kicker">Soluciones</span>
        <h2 className="about-header-title">Capacidades que ordenan tu operación.</h2>
        <p className="about-header-manifest">
          3N combina software, automatización, analítica e IA para resolver
          problemas reales de operación. Menos promesas técnicas, más
          sistemas que sostienen el día a día.
        </p>
      </div>

      <div className="capabilities-grid">
        {capabilities.map((cap, i) => (
          <div key={i} className={`capability-panel${i === 2 || i === 3 ? ' capability-panel-full' : ''}`}>
            {i === 3 ? (
              <div className="capability-panel-inner">
                <div>
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                  <div className="capability-use-cases">
                    {cap.useCases.map((u) => (
                      <span key={u} className="capability-use-case">{u}</span>
                    ))}
                  </div>
                  <span className="capability-outcome">{cap.outcome}</span>
                </div>
                <div className="analytics-dashboard">
                  <div className="db-top">
                    <span className="db-eyebrow">Panel operativo</span>
                    <span className="db-badge">Sin incidencias</span>
                  </div>
                  <div className="db-grid">
                    {['Logística', 'Inventario', 'Órdenes', 'Proveedores'].map((area) => (
                      <div key={area} className="db-card">
                        <span className="db-dot"></span>
                        <span className="db-label">{area}</span>
                        <span className="db-sub">Conectado</span>
                      </div>
                    ))}
                  </div>
                  <div className="db-bars">
                    <span className="db-section-label">Procesos activos</span>
                    {['Recepción', 'Validación', 'Despacho'].map((p, j) => (
                      <div key={p} className="db-bar">
                        <span className="db-bar-label">{p}</span>
                        <span className="db-bar-track">
                          <span className="db-bar-fill" style={{ width: `${60 + j * 15}%` }}></span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="db-footer">Visibilidad operativa en tiempo real</div>
                </div>
              </div>
            ) : i === 2 ? (
              <div className="capability-panel-inner">
                <div>
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                  <div className="capability-use-cases">
                    {cap.useCases.map((u) => (
                      <span key={u} className="capability-use-case">{u}</span>
                    ))}
                  </div>
                  <span className="capability-outcome">{cap.outcome}</span>
                </div>
                <div className="bento-image-wrapper">
                  <div className="solution-mini-panel">
                    <span>Enfoque de implementación</span>
                    <strong>Proceso → Dato → IA aplicada</strong>
                    <p>La IA resuelve cuando el proceso está claro y los datos conectados.</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <div className="capability-use-cases">
                  {cap.useCases.map((u) => (
                    <span key={u} className="capability-use-case">{u}</span>
                  ))}
                </div>
                {i === 1 && (
                  <div className="automation-flow">
                    <div className="af-node">
                      <span className="af-label">Entrada</span>
                      <span className="af-desc">Dato o tarea operativa</span>
                    </div>
                    <span className="af-arrow">→</span>
                    <div className="af-node af-node-primary">
                      <span className="af-label">Decisión / Automatización</span>
                      <span className="af-desc">Reglas, flujo, validación</span>
                    </div>
                    <span className="af-arrow">→</span>
                    <div className="af-node">
                      <span className="af-label">Salida / Seguimiento</span>
                      <span className="af-desc">Registro, notificación, monitoreo</span>
                    </div>
                  </div>
                )}
                <span className="capability-outcome">{cap.outcome}</span>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="tech-cluster">
        <span className="tech-cluster-label">Tecnologías que operamos</span>
        <div className="tech-cluster-pills">
          {coreTech.map((t) => {
            const svg = techSvg[t];
            return svg ? (
              <span key={t} className="tech-pill">
                <Image src={svg} alt={t} width={0} height={14} style={{ width: 'auto', height: '1rem' }} unoptimized />
              </span>
            ) : (
              <span key={t} className="tech-pill">{t}</span>
            );
          })}
        </div>
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
