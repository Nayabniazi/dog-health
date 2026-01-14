import { Hero } from "@/components/landing/Hero";
import { EmpathyMirror } from "@/components/landing/EmpathyMirror";
import dynamic from 'next/dynamic';
import { CaptureForm } from "@/components/landing/CaptureForm";
import { WhatsAppWidget } from "@/components/landing/WhatsAppWidget";

// Lazy load below-the-fold components
const ScienceMechanism = dynamic(() => import('@/components/landing/ScienceMechanism').then(mod => mod.ScienceMechanism), {
  loading: () => <div className="h-96 w-full bg-white animate-pulse" />
});

const SuccessCases = dynamic(() => import('@/components/landing/SuccessCases').then(mod => mod.SuccessCases), {
  loading: () => <div className="h-96 w-full bg-green-50 animate-pulse" />
});

const Authority = dynamic(() => import('@/components/landing/Authority').then(mod => mod.Authority), {
  loading: () => <div className="h-40 w-full bg-white animate-pulse" />
});


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Critical Path: Loaded Immediately */}
      <Hero />
      <EmpathyMirror />
      
      {/* Deferred Loading */}
      <ScienceMechanism />
      <SuccessCases />
      <Authority />
      <CaptureForm />
      <WhatsAppWidget />
      
      {/* Simple Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Veterinary Regenerative Medicine Leon. All rights reserved.</p>
          <p className="mt-2">Medical Director: Dr. [Name Placeholder] | License #12345</p>
        </div>
      </footer>
    </main>
  );
}
