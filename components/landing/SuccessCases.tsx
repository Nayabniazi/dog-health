import { Play } from "lucide-react";

export function SuccessCases() {
  return (
    <section className="bg-green-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 group cursor-pointer border border-gray-800">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-md rounded-xl">
                <p className="text-white font-medium">The Case of "Bruno"</p>
                <p className="text-gray-300 text-sm">Day 1 Limping vs. Week 4 Running</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Real Results. <br />
              Irrefutable Social Proof.
            </h2>
            <p className="text-lg text-gray-600">
              "We were told surgery was the only option. Three weeks after the treatment, Bruno was chasing his ball again like a puppy."
            </p>

            <div className="pt-6 border-t border-green-200">
              <p className="text-4xl font-bold text-primary font-display">500+</p>
              <p className="text-gray-600 font-medium">Patients in Leon have avoided the operating room.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
