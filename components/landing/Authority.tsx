import { Award, ShieldCheck, Microscope, PawPrint } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function Authority() {
  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Why Evaluation Matters Section */}
        <Reveal width="100%" type="fade-down">
            <div className="mx-auto max-w-3xl text-center mb-16 rounded-2xl bg-gray-50 border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 font-display">
                    ¿Por qué se requiere una evaluación médica?
                </h2>
                <div className="grid gap-6 md:grid-cols-3 text-left">
                    <div className="flex flex-col gap-2">
                        <div className="h-1 w-12 bg-primary rounded-full"></div>
                        <h3 className="font-bold text-gray-900 text-sm">Filtro de Candidatura</h3>
                        <p className="text-sm text-gray-600">No todas las mascotas son aptas para terapia regenerativa. Debemos asegurar que funcionará.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="h-1 w-12 bg-primary rounded-full"></div>
                        <h3 className="font-bold text-gray-900 text-sm">Seguridad Médica</h3>
                        <p className="text-sm text-gray-600">Evaluamos condiciones preexistentes para garantizar un procedimiento seguro y efectivo.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="h-1 w-12 bg-primary rounded-full"></div>
                        <h3 className="font-bold text-gray-900 text-sm">Tratamiento A Medida</h3>
                        <p className="text-sm text-gray-600">Dosificación y protocolos personalizados basados en el diagnóstico específico.</p>
                    </div>
                </div>
            </div>
        </Reveal>

        <Reveal width="100%" type="fade-down">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 font-display text-center">
            ¿Por qué BaDog?
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500" stagger={0.1}>
          {/* Mock Logos */}
          <StaggerItem type="scale">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <PawPrint className="h-12 w-12 text-primary transition-transform group-hover:scale-110 duration-300" />
              <span className="font-bold text-sm">Especialistas en perros, gatos y especies exóticas</span>
            </div>
          </StaggerItem>
          <StaggerItem type="scale">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <Award className="h-12 w-12 text-primary transition-transform group-hover:scale-110 duration-300" />
              <span className="font-bold text-sm">Médicos veterinarios certificados</span>
            </div>
          </StaggerItem>
          <StaggerItem type="scale">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <ShieldCheck className="h-12 w-12 text-primary transition-transform group-hover:scale-110 duration-300" />
              <span className="font-bold text-sm">Protocolos clínicos alineados a normativas internacionales</span>
            </div>
          </StaggerItem>
          <StaggerItem type="scale">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <Microscope className="h-12 w-12 text-primary transition-transform group-hover:scale-110 duration-300" />
              <span className="font-bold text-sm">Laboratorio avanzado para diagnósticos y tratamientos regenerativos</span>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
