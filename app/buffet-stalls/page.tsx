import Image from 'next/image';
import { Phone, MessageCircle, Flame, Sparkles, UtensilsCrossed } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { STALL_CATEGORIES } from '@/lib/images';

export const metadata = {
  title: 'Live Food Stalls & Buffet Setups — Anandam Groups',
  description: 'Explore Anandam Groups live food stall concepts and luxury illuminated buffets in Tamil Nadu: Live Dosa, Claypot Biryani, Tandoori, Chaat, Nitrogen Kulfi & Davara Coffee.',
};

export default function BuffetStallsPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 bg-ivory">
      
      {/* Header Banner */}
      <section className="bg-charcoal text-ivory py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block">
            Interactive Culinary Theater
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light">
            Live Food Stalls & <span className="italic text-gold">Buffet Setups</span>
          </h1>
          <p className="text-xs sm:text-sm text-ivory/80 max-w-xl mx-auto font-light leading-relaxed">
            Sizzling hot, made-to-order culinary counters and architectural buffet aisles for your event.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="bg-crimson hover:bg-crimson-hover text-ivory text-xs uppercase tracking-[0.2em] px-7 py-3 rounded-full font-medium transition-all shadow-lg flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call Us: {SITE_CONFIG.phone}</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] px-7 py-3 rounded-full font-medium transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stall Categories Visual Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {STALL_CATEGORIES.map((category) => (
          <div key={category.id} className="space-y-8">
            
            {/* Category Title Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gold/30 pb-4 gap-2">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium block">
                  Stall Category
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal font-normal">
                  {category.name}
                </h2>
              </div>
              <p className="text-xs text-charcoal-light font-light max-w-sm">
                {category.description}
              </p>
            </div>

            {/* Visual Stalls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.stalls.map((stall) => (
                <div
                  key={stall.id}
                  className="bg-ivory-card border border-gold/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Visual Photo */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-charcoal">
                      <Image
                        src={stall.src}
                        alt={stall.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-charcoal/90 text-gold border border-gold/40 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium backdrop-blur-md">
                        {stall.tag}
                      </div>
                    </div>

                    {/* Minimal Caption */}
                    <div className="px-6 pb-2 space-y-1.5">
                      <h3 className="font-editorial text-2xl text-charcoal font-normal leading-snug">
                        {stall.title}
                      </h3>
                      <p className="text-xs text-charcoal-light font-light leading-relaxed">
                        {stall.caption}
                      </p>
                    </div>
                  </div>

                  {/* Direct WhatsApp Pill for this specific stall */}
                  <div className="px-6 pb-6 pt-2">
                    <a
                      href={`https://wa.me/916384950356?text=Hi%20Anandam%20Groups%2C%20I%20am%20interested%20in%20including%20the%20${encodeURIComponent(stall.title)}%20for%20my%20event.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-ivory border border-gold/40 hover:border-gold hover:bg-gold/10 text-charcoal text-[11px] uppercase tracking-wider py-2.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-charcoal"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-gold group-hover:text-charcoal" />
                      <span>Inquire This Stall</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* Bottom Action Strip */}
      <section className="bg-charcoal text-ivory py-16 border-t border-gold/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">
            Direct Reservations
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-light">
            Want These Live Stalls at Your Event?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="bg-crimson hover:bg-crimson-hover text-ivory text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium transition-all shadow-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium transition-all shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
