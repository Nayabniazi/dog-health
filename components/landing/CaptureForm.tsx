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
            <p className="mt-2 text-gray-600">
              Privacidad garantizada. Solo te contactamos con fines médicos.
            </p>
          </div>

          {state.success ? (
            <div className="rounded-lg bg-green-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Solicitud Recibida</h3>
              <p className="mt-2 text-gray-600">{state.message}</p>
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
                    Síntoma Principal
                  </label>
                  <select
                    name="symptom"
                    id="symptom"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm"
                  >
                    <option value="limping">Cojera / Dificultad para caminar</option>
                    <option value="pain">Dolor Crónico</option>
                    <option value="post-surgery">Recuperación Post-cirugía</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              {/* Payment Section */}
              <div className="rounded-lg bg-blue-50 p-4 border border-blue-100 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Costo de la Consulta: $600 MXN (~30 USD)</p>
                  <p className="text-xs text-blue-700">El pago se procesará al confirmar su cita.</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center rounded-md bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent/90 disabled:opacity-70"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  "AGENDAR CONSULTA"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
