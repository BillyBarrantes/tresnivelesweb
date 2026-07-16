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
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = section.querySelectorAll('.hero-fade');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="inicio" ref={sectionRef}>
      <div className="hero-text">
        <p className="hero-pretitle hero-fade">Desarrollo de Software & IA</p>
        <h1 className="hero-title hero-fade">
          Construimos software que<br />resuelve problemas reales
        </h1>
        <p className="hero-subtitle hero-fade">
          Automatizamos procesos operativos, desarrollamos plataformas web
          avanzadas e implementamos inteligencia artificial con impacto medible
          en tu operación.
        </p>
        <a href="#contacto" className="cta-button hero-fade">
          Agendar Auditoría de Procesos
        </a>
      </div>

      <div className="hero-visual hero-fade" aria-hidden="true">
        <div className="hero-visual-inner">
          <div className="hero-visual-ring"></div>
          <div className="hero-visual-dot"></div>
          <div className="hero-visual-dot"></div>
          <div className="hero-visual-dot"></div>
        </div>
      </div>
    </section>
  );
}
