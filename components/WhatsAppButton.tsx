"use client";

import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Gold Pulsing Outer Ring */}
      <div className="absolute -inset-2 rounded-full bg-gold/20 animate-ping pointer-events-none group-hover:bg-gold/40 transition-colors" />

      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Anandam Groups Catering"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-transform transform group-hover:scale-105"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>

      {/* Tooltip on Hover */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal text-ivory text-xs px-3 py-1.5 rounded-lg whitespace-nowrap border border-gold/30 shadow-xl pointer-events-none">
        Chat on WhatsApp
      </div>
    </div>
  );
}
