'use client';

import { useActionState } from "react";
import { submitLead, type FormState } from "@/app/actions";
import { Loader2, CreditCard } from "lucide-react";

const initialState: FormState = {
  success: false,
  message: "",
};

export function CaptureForm() {
  const [state, action, isPending] = useActionState(submitLead, initialState);

  return (
    <section id="consultation" className="bg-gray-900 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 border border-gray-200 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
              Inicia el Viaje de Recuperación Hoy
            </h2>
            
            {/* Trust Block */}
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
               <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  <div className="flex text-yellow-400">
                     {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                     ))}
                  </div>
                  <span className="font-medium text-gray-800">Opiniones en Google</span>
               </div>
               <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-gray-800">500+ mascotas evaluadas</span>
               </div>
            </div>

            <p className="mt-4 text-gray-600">
              Privacidad garantizada. Solo te contactamos con fines médicos.
            </p>
          </div>

          {state.success ? (
            <div className="rounded-lg bg-green-50 p-6 text-center border border-green-100">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">¡Registro Exitoso!</h3>
              <p className="mt-2 text-gray-600">
                Tu información clínica ha sido recibida. <br/>
                <span className="font-semibold text-gray-900">Paso Final:</span> Realiza el pago de la evaluación para confirmar tu cita.
              </p>
              
              <a 
                href="https://wa.me/524772492828?text=Hola,%20ya%20envi%C3%A9%20mis%20datos%20en%20el%20formulario.%20Quiero%20realizar%20el%20pago%20de%20$600%20MXN%20para%20agendar%20la%20evaluaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:scale-105"
              >
                <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                PAGAR Y CONFIRMAR CITA
              </a>
              <p className="mt-3 text-xs text-gray-500">
                Se abrirá WhatsApp para finalizar tu pago seguro.
              </p>
            </div>
          ) : (
            <form action={action} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre del Propietario
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                  Número de WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  id="whatsapp"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="+52 (___) ___ ____"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="petType" className="block text-sm font-medium text-gray-700">
                    Tipo de Mascota y Edad
                  </label>
                  <input
                    type="text"
                    name="petType"
                    id="petType"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Perro, 8 años"
                  />
                </div>

                <div>
                  <label htmlFor="symptom" className="block text-sm font-medium text-gray-700">
                    Preocupación Principal
                  </label>
                  <select
                    name="symptom"
                    id="symptom"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm"
                  >
                    <option value="pain">Dolor Crónico / Movilidad</option>
                    <option value="chronic">Condición Crónica Degenerativa</option>
                    <option value="post-surgery">Recuperación Post-cirugía</option>
                    <option value="general">Evaluación General / Preventiva</option>
                  </select>
                </div>
              </div>

              {/* Payment Section */}
              <div className="rounded-lg bg-blue-50 p-4 border border-blue-100 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Costo de la Consulta: $600 MXN</p>
                  <p className="text-xs text-blue-700">El pago es requerido para confirmar su cita.</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center rounded-md bg-accent px-8 py-4 text-base font-bold text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-70 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  "CONTINUAR AL PAGO ($600 MXN)"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
