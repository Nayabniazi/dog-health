import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppWidget() {
  return (
    <Link
      href="https://wa.me/5211234567890?text=Hello,%20I%20saw%20your%20Stem%20Cell%20treatment%20and%20would%20like%20more%20information%20for%20my%20pet."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110 hover:bg-[#20bd5a]"
      aria-label="Contact on WhatsApp"
    >
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500"></span>
      </span>
      <MessageCircle className="h-8 w-8" />
    </Link>
  );
}
