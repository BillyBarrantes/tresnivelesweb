'use client';

import { useEffect, useRef } from 'react';

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

export default function ProcessSection() {
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
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="page-section" id="proceso" ref={sectionRef}>
      <h2 className="section-title reveal">Cómo trabajamos</h2>
      <p className="section-subtitle reveal">
        Un proceso claro, sin rodeos. Desde el diagnóstico hasta la entrega
        y el soporte continuo.
      </p>
      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={i} className={`process-step reveal reveal-delay-${i + 1}`}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
