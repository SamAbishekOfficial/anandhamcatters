"use client";

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function StickyInquire() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Contact Bar"
      className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 bg-charcoal/90 text-ivory p-2.5 pl-5 pr-3 rounded-full border border-gold/40 shadow-2xl backdrop-blur-md animate-fadeIn"
    >
      <div className="flex flex-col pr-2">
        <span className="text-[10px] uppercase tracking-widest text-gold font-medium">
          Anandam Groups Catering
        </span>
        <span className="text-xs font-editorial text-ivory/90">
          Book Your Event
        </span>
      </div>

      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="bg-gold/20 hover:bg-gold/30 text-gold text-xs uppercase tracking-wider px-3.5 py-2 rounded-full font-medium transition-colors flex items-center gap-1.5 border border-gold/30"
      >
        <Phone className="w-3.5 h-3.5" />
        <span>Call</span>
      </a>

      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-wider px-4 py-2 rounded-full font-medium transition-all shadow-md flex items-center gap-1.5"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
