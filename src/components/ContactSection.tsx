'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export default function ContactSection() {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="page-section">
      <h2 className="section-title">¿Listo para empezar?</h2>
      <p className="section-text">
        Cuéntanos qué procesos necesitas ordenar. Recibirás una propuesta detallada
        sin compromiso.
      </p>
      {status === 'success' ? (
        <p className="section-text contact-success-msg">
          Recibimos tu mensaje. Te enviaremos una propuesta ajustada a lo que nos cuentas.
        </p>
      ) : (
        <>
        <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text" name="nombre" placeholder="Nombre" required
            value={formData.nombre} onChange={handleChange}
          />
          <input
            type="email" name="email" placeholder="Correo electrónico" required
            value={formData.email} onChange={handleChange}
          />
          <input
            type="tel" name="telefono" placeholder="Teléfono"
            value={formData.telefono} onChange={handleChange}
          />
          <textarea
            name="mensaje" placeholder="Describe los procesos que necesitas ordenar" rows={4} required
            value={formData.mensaje} onChange={handleChange}
          />
          {status === 'error' && (
            <p className="contact-error-msg">
              Ocurrió un error al enviar. Intenta de nuevo.
            </p>
          )}
          <div className="contact-submit-row">
            <button type="submit" className="cta-button" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <span className="btn-loading">
                  <span className="spinner"></span>
                  Enviando…
                </span>
              ) : (
                'Solicitar evaluación'
              )}
            </button>
            <p className="contact-privacy-note">
              Tratamos tus datos con confidencialidad y solo los usamos para responder a tu consulta.
            </p>
          </div>
        </form>
        </div>
        <div className="contact-close">
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Evaluación inicial sin compromiso</span>
          </div>
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Propuesta ajustada según el alcance</span>
          </div>
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Acompañamiento post-implementación</span>
          </div>
        </div>
        </>
      )}
    </section>
  );
}
