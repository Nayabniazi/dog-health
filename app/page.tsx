import { Hero } from "@/components/landing/Hero";
import { EmpathyMirror } from "@/components/landing/EmpathyMirror";
import dynamic from 'next/dynamic';
import { CaptureForm } from "@/components/landing/CaptureForm";
import { WhatsAppWidget } from "@/components/landing/WhatsAppWidget";

// Lazy load below-the-fold components
const ScienceMechanism = dynamic(() => import('@/components/landing/ScienceMechanism').then(mod => mod.ScienceMechanism), {
  loading: () => <div className="h-96 w-full bg-white animate-pulse" />
});

const SuccessCases = dynamic(() => import('@/components/landing/SuccessCases').then(mod => mod.SuccessCases), {
  loading: () => <div className="h-96 w-full bg-green-50 animate-pulse" />
});

const Authority = dynamic(() => import('@/components/landing/Authority').then(mod => mod.Authority), {
  loading: () => <div className="h-40 w-full bg-white animate-pulse" />
});


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "Medicina Regenerativa Veterinaria BaDog",
            "description": "Restaura la movilidad de tu mascota a través de Terapia de Células Madre y PRP sin los riesgos de la cirugía tradicional. Especialistas en León, Guanajuato.",
            "image": "https://regeneracioncelular.mascotasbadog.com/images/hero-image.jpg",
            "@id": "https://regeneracioncelular.mascotasbadog.com",
            "url": "https://regeneracioncelular.mascotasbadog.com",
            "telephone": "+524772492828",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "León",
              "addressRegion": "Guanajuato",
              "addressCountry": "MX"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.1221,
              "longitude": -101.6826
            },
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/mascotasbadog", 
              "https://www.instagram.com/mascotasbadog" 
            ]
          })
        }}
      />
      {/* Critical Path: Loaded Immediately */}
      <Hero />
      <EmpathyMirror />
      
      {/* Deferred Loading */}
      <ScienceMechanism />
      <SuccessCases />
      <Authority />
      <CaptureForm />
      <WhatsAppWidget />
      
      {/* Simple Footer */}
      <footer className="bg-secondary border-t border-white/10 py-12 text-center text-white/60 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Medicina Regenerativa Veterinaria BaDog. Todos los derechos reservados.</p>
          <p className="mt-2">Director Médico: Dr. [Nombre] | Cédula #12345</p>
        </div>
      </footer>
    </main>
  );
}
