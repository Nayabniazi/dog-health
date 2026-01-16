'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-12 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <Reveal type="fade-down" delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Medicina Regenerativa Veterinaria en León
              </div>
            </Reveal>

            <Stagger stagger={0.15}>
                <StaggerItem>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-display">
                    Terapia de Células Madre <br />
                    <span className="text-primary">para Perros y Gatos en León</span>
                    </h1>
                </StaggerItem>
                <StaggerItem>
                    <p className="max-w-[600px] text-lg text-gray-600 md:text-xl/relaxed mt-6">
                    Evaluación veterinaria especializada para determinar si tu mascota es candidata para tratamientos regenerativos.
                    </p>
                </StaggerItem>
                
                {/* Clarification Box */}
                <StaggerItem>
                    <div className="mt-6 rounded-lg bg-blue-50 border border-blue-100 p-4 max-w-[500px]">
                        <p className="font-bold text-blue-900 text-sm mb-2">¿Qué incluye la evaluación de $600 MXN?</p>
                        <ul className="space-y-1 text-sm text-blue-800">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                Evaluación médica veterinaria 1 a 1
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                Revisión de historial y condición actual
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                Dictamen de candidatura para terapia
                            </li>
                        </ul>
                        <p className="text-xs text-blue-600 mt-3 italic">
                            *El costo es solo por la evaluación médica. El tratamiento se cotiza tras el diagnóstico.
                        </p>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <div className="flex flex-col gap-4 mt-8">
                        <a
                            href="#consultation"
                            onClick={(e) => handleScrollTo(e, '#consultation')}
                            className="relative overflow-hidden w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-b from-[#F2C94C] via-[#D4AF37] to-[#B29026] px-8 text-base font-bold text-[#203452] shadow-xl shadow-[#D4AF37]/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] border border-[#F2E4A8]/40 cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center drop-shadow-sm text-center">
                                AGENDAR EVALUACIÓN MÉDICA – $600 MXN
                                <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                            </span>
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:animate-[shine_1s_infinite]" />
                        </a>

                        <a
                            href="https://wa.me/524772492828?text=Hola,%20tengo%20dudas%20sobre%20la%20evaluaci%C3%B3n%20m%C3%A9dica%20para%20mi%20mascota."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center text-gray-500 hover:text-green-600 transition-colors text-sm font-medium gap-2 py-2"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            ¿Tienes dudas? Chat en WhatsApp
                        </a>
                    </div>
                </StaggerItem>
            </Stagger>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
            {/* LCP Optimization: Removed Reveal animation to ensure immediate visibility */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-2xl relative">
                <Image 
                src="/images/hero-image.jpg"
                alt="Veterinario examinando un perro con microscopio"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden md:block">
                <Reveal delay={0.8} type="fade-right">
                    <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-green-600"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            </div>
                            <div>
                            <p className="text-sm font-medium text-gray-500">Tasa de Éxito</p>
                            <p className="text-xl font-bold text-gray-900">98.5%</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
