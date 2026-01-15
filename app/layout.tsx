import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://regeneracioncelular.mascotasbadog.com'),
  title: "Medicina Regenerativa Veterinaria BaDog | Terapia Celular Avanzada",
  description: "Restaura la movilidad de tu mascota a través de Terapia de Células Madre y PRP sin los riesgos de la cirugía tradicional. Especialistas certificados en León.",
  keywords: ["Células Madre Veterinarias León", "Tratamiento Artritis Perro", "Medicina Regenerativa Gatos", "Movilidad Mascotas León", "Veterinario No Quirúrgico", "PRP Perros", "Displasia de Cadera Perro"],
  authors: [{ name: "Medicina Regenerativa Veterinaria BaDog" }],
  creator: "Medicina Regenerativa Veterinaria BaDog",
  publisher: "Medicina Regenerativa Veterinaria BaDog",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Medicina Regenerativa Veterinaria BaDog | Salva la Movilidad de tu Mascota",
    description: "No es Solo Medicina. Es Su Oportunidad de Volver a Correr. Terapia Avanzada de Células Madre y PRP.",
    url: 'https://regeneracioncelular.mascotasbadog.com',
    siteName: 'Medicina Regenerativa Veterinaria BaDog',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tratamiento de Células Madre para Mascotas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Medicina Regenerativa Veterinaria BaDog | Terapia Celular",
    description: "Recupera la calidad de vida de tu mejor amigo. Tratamientos regenerativos avanzados en León.",
    images: ['/images/hero-image.jpg'],
  },
  alternates: {
    canonical: 'https://regeneracioncelular.mascotasbadog.com',
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png', // Assuming same icon for now, best to resize
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="antialiased">
        <HeaderWrapper />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
      </body>
    </html>
  );
}
