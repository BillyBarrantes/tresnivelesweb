import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getResend } from '@/lib/resend';

const contactSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio').max(100),
  email: z.string().email('Email inválido'),
  telefono: z.string().max(20).optional().default(''),
  mensaje: z.string().min(1, 'El mensaje es obligatorio').max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { nombre, email, telefono, mensaje } = parsed.data;

    const resend = getResend();
    await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuevo contacto de ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Teléfono: ${telefono || 'No proporcionado'}`,
        `Mensaje: ${mensaje}`,
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
