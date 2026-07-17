'use client';

import { useEffect, useRef } from 'react';

const pains = [
  {
    title: 'Software que no cumple lo que promete',
    description:
      'Sistemas que llegan incompletos, mal documentados y sin posibilidad de escalar. El proveedor desaparece después de cobrar.',
  },
  {
    title: 'Integraciones que interrumpen la operación',
    description:
      'Cada conexión entre sistemas existentes se convierte en un riesgo. Migrar datos da miedo porque nadie garantiza que no se pierdan.',
  },
  {
    title: 'Código sin soporte ni evolución',
    description:
      'El proyecto se entrega y se abandona. No hay mantenimiento, no hay mejoras, no hay respuesta cuando algo falla en producción.',
  },
];

export default function PainSection() {
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
    <section className="page-section" id="problema" ref={sectionRef}>
      <h2 className="section-title reveal">
        El problema no es tu operación.<br />Es el software que tienes.
      </h2>
      <p className="section-subtitle reveal">
        Antes de ofrecer una solución, identificamos el origen real de la
        fricción técnica que frena tu empresa.
      </p>
      <div className="pain-grid">
        {pains.map((pain, i) => (
          <div key={i} className={`pain-card reveal reveal-delay-${i + 1}`}>
            <span className="pain-number">{String(i + 1).padStart(2, '0')}</span>
            <h3>{pain.title}</h3>
            <p>{pain.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
