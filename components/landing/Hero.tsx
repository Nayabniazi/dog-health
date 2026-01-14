import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-12 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Veterinary Regenerative Medicine in Leon
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-display">
              It’s Not Just Medicine. <br />
              <span className="text-primary">It’s Their Chance to Run Again.</span>
            </h1>

            <p className="max-w-[600px] text-lg text-gray-600 md:text-xl/relaxed">
              Restore your pet's mobility through Advanced Cell Therapy without the risks of traditional surgery.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#consultation"
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-bold text-white transition-all hover:bg-accent/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                SCHEDULE DIAGNOSTIC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
            {/* LCP Optimization: Standard img tag for immediate render or Next/Image with priority */}
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 border border-gray-200">
              <div className="flex h-full w-full items-center justify-center bg-gray-50 text-gray-400">
                {/* Replace with <Image src="..." priority ... /> */}
                <span className="text-lg font-medium text-center px-4">
                  High-Res Vet Image <br />
                  <span className="text-sm text-gray-400">(Preload Priority)</span>
                </span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-4 border border-gray-200 md:block animate-fade-in-up">
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
                  <p className="text-sm font-medium text-gray-500">Success Rate</p>
                  <p className="text-xl font-bold text-gray-900">98.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
