'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

type FormData = {
  nombreApellidos: string;
  email: string;
  telefono: string;
  tipoNecesidad: string;
  mensaje: string;
  empresa: string;
  cargo: string;
  aceptaPrivacidad: boolean;
};

const necesidades = [
  'Diagnóstico de procesos operativos',
  'Automatización de procesos',
  'Software a medida',
  'IA aplicada al negocio',
  'Analítica y BI',
  'Consultoría general',
  'Otro',
];

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    nombreApellidos: '',
    email: '',
    telefono: '',
    tipoNecesidad: '',
    mensaje: '',
    empresa: '',
    cargo: '',
    aceptaPrivacidad: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.aceptaPrivacidad) return;
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          nombreApellidos: '', email: '', telefono: '', tipoNecesidad: '',
          mensaje: '', empresa: '', cargo: '', aceptaPrivacidad: false,
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="page-section">
      <h2 className="section-title">Hablemos de tu operación</h2>
      <p className="section-text">
        Describe los procesos que necesitas ordenar y recibe una
        propuesta sin compromiso.
      </p>
      {status === 'success' ? (
        <p className="section-text contact-success-msg">
          Recibimos tu solicitud. Nuestro equipo la revisará y te contactará
          para agendar una evaluación de tus procesos.
        </p>
      ) : (
        <>
        <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text" name="nombreApellidos" placeholder="Nombre y apellidos *" required
            value={formData.nombreApellidos} onChange={handleChange}
          />
          <input
            type="email" name="email" placeholder="Correo electrónico *" required
            value={formData.email} onChange={handleChange}
          />
          <input
            type="tel" name="telefono" placeholder="Teléfono *" required
            value={formData.telefono} onChange={handleChange}
          />
          <select
            name="tipoNecesidad" required
            value={formData.tipoNecesidad} onChange={handleChange}
            className="contact-select"
          >
            <option value="" disabled>Tipo de necesidad o servicio de interés *</option>
            {necesidades.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <textarea
            name="mensaje" placeholder="Describe los procesos que necesitas ordenar *" rows={4} required
            value={formData.mensaje} onChange={handleChange}
          />
          <input
            type="text" name="empresa" placeholder="Empresa (opcional)"
            value={formData.empresa} onChange={handleChange}
          />
          <input
            type="text" name="cargo" placeholder="Cargo (opcional)"
            value={formData.cargo} onChange={handleChange}
          />
          {status === 'error' && (
            <p className="contact-error-msg">
              Ocurrió un error al enviar. Intenta de nuevo.
            </p>
          )}
          <div className="contact-submit-row">
            <label className="contact-checkbox-label">
              <input
                type="checkbox" name="aceptaPrivacidad" required
                checked={formData.aceptaPrivacidad} onChange={handleChange}
                className="contact-checkbox"
              />
              <span>He leído y acepto la <a href="/privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a> *</span>
            </label>
            <button type="submit" className="cta-button" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <span className="btn-loading">
                  <span className="spinner"></span>
                  Enviando…
                </span>
              ) : (
                  'Solicitar diagnóstico'
              )}
            </button>
          </div>
        </form>
        </div>
        <div className="contact-close">
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Evaluación sin compromiso</span>
          </div>
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Propuesta ajustada a tu operación</span>
          </div>
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Soporte y evolución incluidos</span>
          </div>
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Tus datos se manejan bajo nuestra <a href="/privacidad" target="_blank" rel="noopener noreferrer">política de privacidad</a></span>
          </div>
        </div>
        <div className="contact-whatsapp-wrapper">
        <a
          href="https://wa.me/51907948972?text=Hola%2C%20quisiera%20consultar%20por%20los%20servicios%20de%203N"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-whatsapp-link"
        >
          <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-whatsapp-icon">
            <path d="M8 1C4.14 1 1 4.14 1 8c0 1.38.41 2.66 1.12 3.72L1 15l3.32-.87A6.95 6.95 0 008 15c3.86 0 7-3.14 7-7s-3.14-7-7-7zm3.08 9.95c-.2.56-.7.9-1.23 1.02-.35.08-.81.12-2.63-.57-2.2-.83-3.63-2.72-3.8-2.96-.17-.24-.9-1.2-.9-2.3 0-1.1.58-1.64.79-1.87.2-.22.44-.28.59-.28.15 0 .29 0 .42.01.14.01.33-.05.53.41.2.46.68 1.59.74 1.7.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.03 1.34 1.67.92.82 1.7 1.07 1.94 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.39.69 1.63.81.24.12.4.18.46.28.06.1.06.58-.14 1.14z" fill="currentColor"/>
          </svg>
          También por WhatsApp
        </a>
        </div>
        </>
      )}
    </section>
  );
}
