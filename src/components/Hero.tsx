'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

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
        <p className="hero-pretitle reveal">Ingeniería de Software e IA</p>
        <h1 className="hero-title reveal">
          Construimos software que resuelve problemas reales.
        </h1>
        <p className="hero-subtitle reveal">
          Software a medida, automatización de procesos e inteligencia
          artificial aplicada directamente a tu operación real. Sin promesas
          de marketing, sin integraciones que fallen.
        </p>
        <div className="hero-actions reveal">
          <a href="#contacto" className="cta-button">
            Agendar Auditoría
          </a>
          <a href="#servicios" className="hero-cta-secondary">
            Ver capacidades &rarr;
          </a>
        </div>
      </div>
      <div className="hero-terminal reveal">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-label">3N_AGENT &mdash; zsh</span>
        </div>
        <div className="terminal-body">
          <p className="terminal-line" style={{ '--i': '0' } as React.CSSProperties}>
            <span className="term-ok">[OK]</span> INITIALIZING 3N_CORE_AGENT...
          </p>
          <p className="terminal-line" style={{ '--i': '1' } as React.CSSProperties}>
            <span className="term-run">[RUNNING]</span> Optimizing database indexes (PostgreSQL)...
          </p>
          <p className="terminal-line" style={{ '--i': '2' } as React.CSSProperties}>
            <span className="term-run">[RUNNING]</span> Deploying microservices pipeline...
          </p>
          <p className="terminal-line" style={{ '--i': '3' } as React.CSSProperties}>
            <span className="term-succ">[SUCCESS]</span> AI pipeline integrated successfully.
          </p>
          <p className="terminal-line" style={{ '--i': '4' } as React.CSSProperties}>
            <span className="term-succ">[SUCCESS]</span> 3N system ready. 0 errors.
          </p>
        </div>
      </div>
    </section>
  );
}
