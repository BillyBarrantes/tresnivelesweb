'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement).value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
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
        Cuéntanos sobre tu proyecto. Te enviaremos una propuesta detallada,
        sin compromiso.
      </p>
      {status === 'success' ? (
        <p className="section-text" style={{ color: 'var(--color-text)' }}>
          Recibimos tu mensaje. Te enviaremos una propuesta ajustada a lo que nos cuentas.
        </p>
      ) : (
        <>
        <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <input type="tel" name="telefono" placeholder="Teléfono" />
          <textarea name="mensaje" placeholder="Cuéntanos sobre tu proyecto" rows={4} required />
          {status === 'error' && (
            <p style={{ color: 'var(--color-text)', fontSize: '0.875rem', margin: 0 }}>
              Ocurrió un error al enviar. Intenta de nuevo.
            </p>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button type="submit" className="cta-button" disabled={status === 'sending'}>
               {status === 'sending' ? 'Enviando...' : 'Solicitar evaluación'}
            </button>
          </div>
        </form>
        </div>
        <div className="contact-close">
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Propuesta detallada sin compromiso</span>
          </div>
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Respuesta en máximo 2 días hábiles</span>
          </div>
          <div className="contact-close-item">
            <span className="contact-close-icon">→</span>
            <span>Soporte post-implementación incluido</span>
          </div>
        </div>
        </>
      )}
    </section>
  );
}
