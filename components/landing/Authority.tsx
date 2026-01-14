import { Award, ShieldCheck, Microscope } from "lucide-react";

export function Authority() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 font-display">
          Specialists in Dogs, Cats, and Exotic Species
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos */}
          <div className="flex flex-col items-center gap-2">
            <Award className="h-12 w-12 text-primary" />
            <span className="font-bold text-sm">Board Certified</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="h-12 w-12 text-primary" />
            <span className="font-bold text-sm">FDA Compliant</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Microscope className="h-12 w-12 text-primary" />
            <span className="font-bold text-sm">Advanced Lab</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-serif font-bold text-xl">
                L
            </div>
            <span className="font-bold text-sm">Leon Veterinary</span>
          </div>
        </div>
      </div>
    </section>
  );
}
