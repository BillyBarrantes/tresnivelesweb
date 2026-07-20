import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '3N Tres Niveles',
    url: 'https://tresniveles.com',
    logo: 'https://tresniveles.com/images/Logo3N.png',
    description:
      'Desarrollo de software, automatización e inteligencia artificial para empresas.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressCountry: 'PE',
    },
    knowsAbout: [
      'Software a medida',
      'Automatización de procesos',
      'Inteligencia artificial',
      'Analítica y BI',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de tecnología',
      itemListElement: [
        {
          '@type': 'Service',
          name: 'Software operativo',
          description:
            'Sistemas internos, portales y herramientas a medida.',
        },
        {
          '@type': 'Service',
          name: 'Automatización de procesos',
          description:
            'Flujos que conectan tareas, alertas y sistemas.',
        },
        {
          '@type': 'Service',
          name: 'IA aplicada al negocio',
          description:
            'Agentes y modelos integrados a tareas reales.',
        },
        {
          '@type': 'Service',
          name: 'Analítica y BI',
          description:
            'Dashboards y modelos de datos para decisiones operativas.',
        },
      ],
    },
  };

  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
