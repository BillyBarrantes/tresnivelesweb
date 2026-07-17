'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pipelineSteps = [
    { label: 'Datos operativos', status: 'Conectado' },
    { label: 'Flujo automatizado', status: 'En operación' },
    { label: 'Reporte ejecutivo', status: 'Listo' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('is-visible');
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="inicio" ref={sectionRef}>
      <div className="hero-text">
        <p className="hero-pretitle reveal">Software, automatización y BI aplicado</p>
        <h1 className="hero-title reveal">
          Convertimos operación, datos e IA en sistemas que sí trabajan.
        </h1>
        <p className="hero-subtitle reveal">
          Diseñamos software a medida, automatizaciones y analítica para que
          tu empresa ordene procesos, conecte sistemas y tome decisiones con
          información confiable.
        </p>
        <div className="hero-actions reveal">
          <a href="#contacto" className="cta-button">
            Evaluar mi operación
          </a>
          <a href="#servicios" className="hero-cta-secondary">
            Ver soluciones
          </a>
        </div>
      </div>
      <div className="hero-product reveal" aria-label="Panel operativo de Tres Niveles">
        <div className="product-panel-header">
          <div>
            <span className="product-eyebrow">Panel operativo</span>
            <h2>Resumen de implementación</h2>
          </div>
          <span className="product-status">Sistema activo</span>
        </div>

        <div className="product-kpi-grid">
          <div className="product-kpi">
            <span>Procesos mapeados</span>
            <strong>Documentados</strong>
          </div>
          <div className="product-kpi">
            <span>Integraciones</span>
            <strong>ERP · CRM · BI</strong>
          </div>
        </div>

        <div className="product-flow">
          {pipelineSteps.map((step, i) => (
            <div key={step.label} className="product-flow-step">
              <span className="flow-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{step.label}</strong>
                <p>{step.status}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="product-insight">
          <span className="product-insight-label">Recomendación IA</span>
          <p>
            Priorizar automatización del flujo con mayor fricción antes de
            escalar reportes ejecutivos.
          </p>

        </div>
      </div>
    </section>
  );
}
