'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

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
  const sectionRef = useScrollReveal({ threshold: 0.15, staggerDelay: 150 });

  return (
    <section className="page-section" id="problema" ref={sectionRef}>
      <h2 className="section-title reveal">
        El problema no es tu operación.<br />Es el software que tienes.
      </h2>
      <p className="section-subtitle reveal">
        Tres problemas que el software debería resolver — y que siguen
        frenando a empresas como la tuya.
      </p>
      <div className="pain-list">
        {pains.map((pain, i) => (
          <div key={i} className="pain-item reveal">
            <span className="pain-item-number">{String(i + 1).padStart(2, '0')}</span>
            <div className="pain-item-content">
              <h3>{pain.title}</h3>
              <p>{pain.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pain-pullquote reveal">
        <div className="pain-pullquote-line"></div>
        <p>
          Cada uno de estos problemas tiene una respuesta directa:
          entregas con documentación, integraciones con respaldo
          y código que no se abandona después de la firma.
        </p>
      </div>
    </section>
  );
}
