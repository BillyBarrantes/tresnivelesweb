import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getResend } from '@/lib/resend';

const contactSchema = z.object({
  nombreApellidos: z.string().min(1, 'El nombre es obligatorio').max(100),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(1, 'El teléfono es obligatorio').max(20),
  tipoNecesidad: z.string().min(1, 'Selecciona un tipo de necesidad'),
  mensaje: z.string().min(1, 'El mensaje es obligatorio').max(5000),
  empresa: z.string().max(100).optional().default(''),
  cargo: z.string().max(100).optional().default(''),
  aceptaPrivacidad: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
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

    const { nombreApellidos, email, telefono, tipoNecesidad, mensaje, empresa, cargo } = parsed.data;

    const resend = getResend();
    await resend.emails.send({
      from: process.env.CONTACT_FROM ?? 'Contacto Web <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuevo contacto de ${nombreApellidos}`,
      text: [
        `Nombre: ${nombreApellidos}`,
        `Email: ${email}`,
        `Teléfono: ${telefono}`,
        `Tipo de necesidad: ${tipoNecesidad}`,
        `Empresa: ${empresa || 'No proporcionada'}`,
        `Cargo: ${cargo || 'No proporcionado'}`,
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
