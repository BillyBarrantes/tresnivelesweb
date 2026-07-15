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
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement)
        .value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement)
        .value,
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
      <h2 className="section-title">Envíanos tu consulta</h2>
      <p className="section-text">Y comencemos a trabajar juntos.</p>
      {status === 'success' ? (
        <p style={{ textAlign: 'center', color: '#00D9A8', fontWeight: 600 }}>
          ¡Mensaje enviado con éxito! Te contactaremos pronto.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
          />
          <input type="tel" name="telefono" placeholder="Teléfono" />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={5}
            required
          ></textarea>
          {status === 'error' && (
            <p style={{ color: 'red', fontSize: '0.9rem', margin: 0 }}>
              Error al enviar. Intenta de nuevo.
            </p>
          )}
          <button
            type="submit"
            className="cta-button"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      )}
    </section>
  );
}
