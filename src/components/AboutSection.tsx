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
        <h2 className="about-header-title">Soluciones para cada desafío operativo.</h2>
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
                <div className="capability-content">
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
                  <div className="db-metrics">
                    <span className="db-metric">
                      <strong>12</strong>
                      <span>Procesos activos</span>
                    </span>
                    <span className="db-metric">
                      <strong>2.4s</strong>
                      <span>Tiempo promedio</span>
                    </span>
                    <span className="db-metric">
                      <strong>94%</strong>
                      <span>Precisión</span>
                    </span>
                  </div>
                  <div className="db-chart-row">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="db-donut">
                      <g transform="rotate(-90 50 50)">
                        <circle cx="50" cy="50" r="36" fill="none" stroke="#E3E0D8" strokeWidth="9" />
                        <circle cx="50" cy="50" r="36" fill="none" stroke="#2F6B4F" strokeWidth="9" strokeDasharray="79.2 226.2" strokeDashoffset="0" />
                        <circle cx="50" cy="50" r="36" fill="none" stroke="#66645D" strokeWidth="9" strokeDasharray="63.3 226.2" strokeDashoffset="-79.2" />
                        <circle cx="50" cy="50" r="36" fill="none" stroke="#4A4842" strokeWidth="9" strokeDasharray="49.8 226.2" strokeDashoffset="-142.5" />
                        <circle cx="50" cy="50" r="36" fill="none" stroke="#8C8A82" strokeWidth="9" strokeDasharray="33.9 226.2" strokeDashoffset="-192.3" />
                      </g>
                    </svg>
                    <div className="db-legend">
                      <span className="db-legend-item"><span className="db-legend-dot" style={{opacity: 0.5}}></span>Logística 35%</span>
                      <span className="db-legend-item"><span className="db-legend-dot" style={{opacity: 0.35}}></span>Inventario 28%</span>
                      <span className="db-legend-item"><span className="db-legend-dot" style={{opacity: 0.25}}></span>Órdenes 22%</span>
                      <span className="db-legend-item"><span className="db-legend-dot" style={{opacity: 0.15}}></span>Proveedores 15%</span>
                    </div>
                  </div>
                  <div className="db-bars">
                    <span className="db-section-label">Volumen por proceso</span>
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
                <div className="capability-content">
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
                  <svg viewBox="0 0 340 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="flow-diagram-svg">
                    <rect x="12" y="40" width="76" height="80" rx="12" fill="#F0EFE8" stroke="#D4D2C8" strokeWidth="1" />
                    <text x="50" y="75" textAnchor="middle" fill="#151512" fontSize="13" fontWeight="500">Proceso</text>
                    <text x="50" y="95" textAnchor="middle" fill="#66645D" fontSize="10">reglas operativas</text>
                    <path d="M92 80h16" stroke="#66645D" strokeWidth="1.2" opacity="0.5" />
                    <path d="M104 74l5 6-5 6" stroke="#66645D" strokeWidth="1.2" opacity="0.5" fill="none" />
                    <rect x="116" y="40" width="76" height="80" rx="12" fill="#F0EFE8" stroke="#D4D2C8" strokeWidth="1" />
                    <text x="154" y="75" textAnchor="middle" fill="#151512" fontSize="13" fontWeight="500">Datos</text>
                    <text x="154" y="95" textAnchor="middle" fill="#66645D" fontSize="10">estructurados</text>
                    <path d="M196 80h16" stroke="#66645D" strokeWidth="1.2" opacity="0.5" />
                    <path d="M208 74l5 6-5 6" stroke="#66645D" strokeWidth="1.2" opacity="0.5" fill="none" />
                    <rect x="220" y="34" width="108" height="92" rx="14" fill="#2F6B4F" fillOpacity="0.06" stroke="#2F6B4F" strokeOpacity="0.22" strokeWidth="1.2" />
                    <text x="274" y="76" textAnchor="middle" fill="#151512" fontSize="14" fontWeight="500">IA aplicada</text>
                    <text x="274" y="98" textAnchor="middle" fill="#66645D" fontSize="10">modelos + datos reales</text>
                  </svg>
                  <p className="bento-caption">La IA resuelve cuando el proceso está claro y los datos conectados.</p>
                </div>
              </div>
            ) : (
              <div className="capability-content">
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
              </div>
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
