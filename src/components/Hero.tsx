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
        <p className="hero-pretitle reveal">Desarrollo de Software & IA</p>
        <h1 className="hero-title reveal">
          El software debería resolver<br />problemas, no crearlos
        </h1>
        <p className="hero-subtitle reveal">
          Desarrollamos software a medida, automatizamos procesos e
          implementamos inteligencia artificial donde realmente genera valor
          — sin promesas vacías, sin integraciones frágiles, sin código
          abandonado.
        </p>
        <div className="hero-actions reveal">
          <a href="#contacto" className="cta-button">
            Agendar Auditoría de Procesos
          </a>
          <a href="#proceso" className="hero-cta-secondary">
            Conoce nuestra metodología
          </a>
        </div>
      </div>
    </section>
  );
}
