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
                    No es Solo Medicina. <br />
                    <span className="text-primary">Es Su Oportunidad de Volver a Correr.</span>
                    </h1>
                </StaggerItem>
                <StaggerItem>
                    <p className="max-w-[600px] text-lg text-gray-600 md:text-xl/relaxed mt-6">
                    Restaura la movilidad de tu mascota a través de Terapia Celular Avanzada sin los riesgos de la cirugía tradicional.
                    </p>
                </StaggerItem>
                <StaggerItem>
                    <div className="flex flex-col gap-4 sm:flex-row mt-8">
                    <a
                        href="#consultation"
                        onClick={(e) => handleScrollTo(e, '#consultation')}
                        className="relative overflow-hidden inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-b from-[#F2C94C] via-[#D4AF37] to-[#B29026] px-10 text-base font-bold text-[#203452] shadow-xl shadow-[#D4AF37]/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] border border-[#F2E4A8]/40 cursor-pointer"
                    >
                        <span className="relative z-10 flex items-center drop-shadow-sm">
                            AGENDAR DIAGNÓSTICO
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:animate-[shine_1s_infinite]" />
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
