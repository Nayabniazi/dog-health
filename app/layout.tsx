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
  title: "Medicina Regenerativa Veterinaria BaDog | Terapia Celular Avanzada",
  description: "Restaura la movilidad de tu mascota a través de Terapia de Células Madre y PRP sin los riesgos de la cirugía tradicional. Especialistas certificados en León.",
  keywords: ["Células Madre Veterinarias León", "Tratamiento Artritis Perro", "Medicina Regenerativa Gatos", "Movilidad Mascotas León", "Veterinario No Quirúrgico"],
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
  },
  alternates: {
    canonical: 'https://regeneracioncelular.mascotasbadog.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <HeaderWrapper />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
      </body>
    </html>
  );
}
