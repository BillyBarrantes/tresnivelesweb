import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tres Niveles - Desarrollo Web y IA",
    template: "%s | Tres Niveles",
  },
  description:
    "Creamos soluciones de software y automatización a la medida para que tu empresa crezca. Desarrollo Web, Automatización de Procesos, Agentes IA.",
  openGraph: {
    title: "Tres Niveles - Desarrollo Web y IA",
    description:
      "Creamos soluciones de software y automatización a la medida para que tu empresa crezca.",
    url: "https://tresniveles.com",
    siteName: "Tres Niveles",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/Logo3N.png",
        width: 1200,
        height: 630,
        alt: "Tres Niveles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tres Niveles - Desarrollo Web y IA",
    description:
      "Creamos soluciones de software y automatización a la medida para que tu empresa crezca.",
  },
  metadataBase: new URL('https://tresniveles.com'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
