'use client';

import { useState, useRef } from 'react';
import { projects } from '@/data/projects';

const industryColors: Record<string, string> = {
  Logística: '#4A6FA5',
  Retail: '#8B7E6B',
  Industria: '#2F6B4F',
};

export default function PortfolioSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const toggleCard = (id: string) => {
    setExpandedId((prev) => {
      const next = prev === id ? null : id;
      if (gridRef.current) {
        gridRef.current.classList.toggle('has-expanded', next !== null);
      }
      return next;
    });
  };

  return (
    <section id="portafolio" className="page-section">
      <h2 className="section-title">Implementación confiable</h2>
      <p className="section-subtitle">
        Tres sistemas reales que ordenan operaciones, conectan áreas
        y demuestran que software, automatización e IA funcionan
        cuando se construyen con criterio.
      </p>
      <div className="project-grid" ref={gridRef}>
        {projects.map((item) => {
          const isExpanded = expandedId === item.id;
          const color = industryColors[item.industry] || '#66645D';

          return (
            <div
              key={item.id}
              className={`project-card${isExpanded ? ' expanded' : ''}`}
              onClick={() => toggleCard(item.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleCard(item.id);
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
            >
              <div
                className="project-card-visual"
                style={{
                  background: `linear-gradient(135deg, ${color}18, ${color}08)`,
                }}
              >
                {item.mediaSrc && item.mediaType === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="project-card-video"
                  >
                    <source src={item.mediaSrc} />
                  </video>
                ) : (
                  <div
                    className="project-card-pattern"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, ${color}15 1.5px, transparent 1.5px)`,
                      backgroundSize: '32px 32px',
                    }}
                  />
                )}
              </div>
              <div className="project-card-body">
                <span className="portfolio-industry-badge">{item.industry}</span>
                <h3>{item.title}</h3>
                <span className="project-card-type">{item.capabilities[0]}</span>
                <div className={`project-card-details${isExpanded ? ' visible' : ''}`}>
                  <p>{item.description}</p>
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="project-card-processes">
                      <span className="project-card-processes-label">Procesos activos</span>
                      {item.highlights.map((h, i) => (
                        <span key={i} className="project-card-process" style={{ animationDelay: `${i * 0.12}s` }}>
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="portfolio-tech-pills">
                    {item.tech.map((t) => (
                      <span key={t} className="portfolio-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="project-card-expand-icon" aria-hidden="true">
                  <span className="project-card-expand-text">
                    {isExpanded ? 'Menos' : 'Más'}
                  </span>
                  <span className={`project-card-chevron${isExpanded ? ' rotated' : ''}`} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
