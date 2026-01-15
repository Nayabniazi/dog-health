import { Award, ShieldCheck, Microscope, PawPrint } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function Authority() {
  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Reveal width="100%" type="fade-down">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 font-display">
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
