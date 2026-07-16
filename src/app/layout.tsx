import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "3N Tres Niveles — Software, Automatización e IA",
    template: "%s | 3N Tres Niveles",
  },
  description:
    "Desarrollamos software a medida, automatizamos procesos operativos e implementamos inteligencia artificial con impacto medible en tu empresa.",
  openGraph: {
    title: "3N Tres Niveles — Software, Automatización e IA",
    description:
      "Desarrollamos software a medida, automatizamos procesos operativos e implementamos inteligencia artificial con impacto medible en tu empresa.",
    url: "https://tresniveles.com",
    siteName: "3N Tres Niveles",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/Logo3N.png",
        width: 922,
        height: 296,
        alt: "3N Tres Niveles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3N Tres Niveles — Software, Automatización e IA",
    description:
      "Desarrollamos software a medida, automatizamos procesos operativos e implementamos inteligencia artificial con impacto medible.",
  },
  metadataBase: new URL('https://tresniveles.com'),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
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
