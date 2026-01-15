import { AlertCircle, Activity, Frown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function EmpathyMirror() {
  const symptoms = [
    {
      icon: AlertCircle,
      text: "¿Luchan por levantarse en la mañana?",
    },
    {
      icon: Activity,
      text: "¿Dudan al subir escaleras o saltar al sofá?",
    },
    {
      icon: Frown,
      text: "¿Han perdido su entusiasmo por los paseos diarios?",
    },
  ];

  return (
    <section id="symptoms" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal width="100%" type="fade-down">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Verlos Sufrir es la <br />
              Parte Más Difícil para Cualquier Dueño.
            </h2>
          </Reveal>

          <Stagger className="space-y-6" stagger={0.2}>
            {symptoms.map((item, index) => (
              <StaggerItem key={index}>
                <div
                  className="flex items-center gap-4 rounded-lg bg-white p-6 border border-gray-200 transition-colors hover:bg-gray-50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-lg font-medium text-gray-700">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal width="100%" delay={0.5} type="fade">
            <p className="mt-10 text-center text-gray-500">
              Esto no es solo "vejez". Es una condición médica que requiere un especialista.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
