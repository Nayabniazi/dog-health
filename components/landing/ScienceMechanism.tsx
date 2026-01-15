import { TestTube, Droplet, Bone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function ScienceMechanism() {
  const mechanisms = [
    {
      icon: TestTube,
      title: "Células Madre",
      description: "Reparando cartílago y tejido óseo desde la fuente usando terapia autóloga.",
    },
    {
      icon: Droplet,
      title: "Plasma Rico en Plaquetas (PRP)",
      description: "Bio-estimulación natural para eliminar dolor crónico y acelerar la curación.",
    },
    {
      icon: Bone,
      title: "Ácido Hialurónico",
      description: "Lubricación mecánica de grado médico para restaurar la fluidez articular.",
    },
  ];

  return (
    <section id="science" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">El Mecanismo Único</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              El Poder de Curación Reside <br /> Dentro de Sus Propias Células.
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid gap-8 md:grid-cols-3" stagger={0.2}>
          {mechanisms.map((item, index) => (
            <StaggerItem key={index} type="scale">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-200 transition-all hover:bg-gray-50 hover:-translate-y-2 hover:shadow-xl duration-300 h-full">
                <div className="h-16 w-16 rounded-2xl bg-green-50 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal width="100%" delay={0.6} type="fade-up">
          <div className="mt-16 rounded-3xl bg-secondary p-8 md:p-12 text-center text-white overflow-hidden relative group">
            <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <h3 className="text-2xl font-bold font-display mb-4 !text-white">Precisión de Laboratorio</h3>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Cada tratamiento se prepara específicamente para tu perro, bajo protocolos médicos avanzados que respetan su cuerpo, su edad y su historia. Aquí no tratamos diagnósticos, tratamos vidas que merecen seguir moviéndose sin dolor.
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
