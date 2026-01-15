'use client';

import { Play, Pause } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useState, useRef } from "react";

export function SuccessCases() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="success-stories" className="bg-green-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
             <Reveal width="100%" delay={0.2} blur type="scale" duration={0.7}>
               <div 
                 className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 group cursor-pointer border border-gray-800 shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                 onClick={togglePlay}
               >
                  <video 
                    ref={videoRef}
                    src="/videos/dog-running.mp4"
                    className="h-full w-full object-cover"
                    poster="/images/video-poster-placeholder.jpg" 
                    playsInline
                    loop
                    muted
                    autoPlay
                    onEnded={() => setIsPlaying(false)}
                  />
                  
                  {/* Overlay - Hidden when playing */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="relative h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                          <Play className="h-8 w-8 text-white fill-white ml-1" />
                      </div>
                  </div>

                  {/* Caption - Hidden when playing */}
                  <div className={`absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-md rounded-xl transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                      <p className="text-white font-medium">The Case of "Bruno"</p>
                      <p className="text-gray-300 text-sm">Day 1 Limping vs. Week 4 Running</p>
                  </div>
               </div>
             </Reveal>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <Reveal type="fade-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
                Real Results. <br />
                Irrefutable Social Proof.
              </h2>
            </Reveal>
            
            <Reveal delay={0.2} type="fade-right">
              <p className="text-lg text-gray-600">
                "We were told surgery was the only option. Three weeks after the treatment, Bruno was chasing his ball again like a puppy."
              </p>
            </Reveal>
            
            <Reveal delay={0.4} type="fade-right">
              <div className="pt-6 border-t border-green-200">
                  <p className="text-4xl font-bold text-primary font-display">500+</p>
                  <p className="text-gray-600 font-medium">Patients in Leon have avoided the operating room.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
