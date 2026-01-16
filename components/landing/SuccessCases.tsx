'use client';

import { Reveal } from "@/components/ui/Reveal";

export function SuccessCases() {
  return (
    <section id="success-stories" className="bg-green-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
             <Reveal width="100%" delay={0.2} blur type="scale" duration={0.7}>
               <div 
                 className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl"
               >
                  <iframe 
                    src="https://drive.google.com/file/d/1pCQ1c5CjIh-2drISKYG-6YZreHfULdeH/preview" 
                    width="100%" 
                    height="100%" 
                    className="absolute inset-0 border-0"
                    allow="autoplay; encrypted-media; fullscreen" 
                    allowFullScreen
                    title="Video de Caso de Éxito"
                  ></iframe>
               </div>
             </Reveal>
          </div>

          
          <div className="order-1 lg:order-2 space-y-6">
            <Reveal type="fade-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
                Resultados Reales. <br />
                Prueba Social Irrefutable.
              </h2>
            </Reveal>
            
            <Reveal delay={0.2} type="fade-right">
              <p className="text-lg text-gray-600">
                &quot;Nos dijeron que la cirugía era la única opción. Tres semanas después del tratamiento, Bruno perseguía su pelota de nuevo como un cachorro.&quot;
              </p>
            </Reveal>
            
            <Reveal delay={0.4} type="fade-right">
              <div className="pt-6 border-t border-green-200">
                  <p className="text-4xl font-bold text-primary font-display">500+</p>
                  <p className="text-gray-600 font-medium">Pacientes en León han evitado el quirófano.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
