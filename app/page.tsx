import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CounterSection from '@/components/CounterSection';
import TamilNaduMap from '@/components/TamilNaduMap';
import MasonryGallery from '@/components/MasonryGallery';
import FAQSection from '@/components/FAQSection';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section (Clean full-bleed showcase with header separation & explore scroll indicator) */}
      <HeroSection />

      {/* 2. Live Stalls Showcase Grid (Main Focus) */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gold/30 pb-6 gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block">
                Signature Event Offerings
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-light text-charcoal">
                Live Food Stalls & <span className="italic text-crimson">Buffet Concepts</span>
              </h2>
            </div>
            <Link
              href="/buffet-stalls"
              className="bg-charcoal hover:bg-gold text-ivory hover:text-charcoal text-xs uppercase tracking-widest px-6 py-3.5 rounded-full font-medium transition-all shadow-md flex items-center gap-2 self-start md:self-auto"
            >
              <span>Explore All Live Stalls</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Highlighted Live Stalls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Live Dosa & Appam Counter',
                caption: 'Ghee Dosa, Podi Dosa & Soft Appams with 4 chutneys',
                src: '/images/food counter.png',
                tag: 'South Indian Live',
              },
              {
                title: 'Pani Puri & Chaat Corner',
                caption: 'Crispy Pani Puri & Sev Puri made fresh to order',
                src: '/images/pani poori counter.png',
                tag: 'Live Street Chaat',
              },
              {
                title: 'Chocolate Fountain Counter',
                caption: 'Cascading warm chocolate with fresh fruits & treats',
                src: '/images/Chocolate fountain counter.png',
                tag: 'Live Dessert',
              },
              {
                title: "90's Petty Shop Counter",
                caption: 'Nostalgic South Indian vintage candy & snack experience',
                src: "/images/90's petty shop counter.png",
                tag: 'Theme Counter',
              },
              {
                title: 'Fresh Fruit Juice Counter',
                caption: '100% natural, cold-pressed seasonal fruit juices made live',
                src: '/images/fresh juice counter.png',
                tag: 'Juice Bar',
              },
              {
                title: 'Kumbakonam Davara Coffee',
                caption: 'Traditional degree coffee frothed live in brass davara sets',
                src: '/images/beeda counter.png',
                tag: 'Live Paan & Coffee',
              },
            ].map((stall, idx) => (
              <div
                key={idx}
                className="bg-ivory-card border border-gold/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-charcoal">
                    <Image
                      src={stall.src}
                      alt={stall.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal/90 text-gold border border-gold/40 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium">
                      {stall.tag}
                    </div>
                  </div>
                  <div className="px-6 pb-4 space-y-1">
                    <h3 className="font-editorial text-2xl text-charcoal font-normal">
                      {stall.title}
                    </h3>
                    <p className="text-xs text-charcoal-light font-light">
                      {stall.caption}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1">
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-ivory border border-gold/40 hover:bg-gold text-charcoal text-[11px] uppercase tracking-wider py-2.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-gold group-hover:text-charcoal" />
                    <span>Inquire Via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Animated Counter Section */}
      <CounterSection />

      {/* 4. Portfolio Section with Updated Names */}
      <section className="py-24 bg-ivory-deep/40 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block">
              Signature Event Offerings
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-light text-charcoal">
              Live Food Stalls & <span className="italic text-crimson">Buffet Concepts</span>
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto" />
          </div>

          <MasonryGallery />
        </div>
      </section>

      {/* 5. Interactive Tamil Nadu Map */}
      <TamilNaduMap />

      {/* 6. Direct Contact Banner */}
      <section className="py-20 bg-charcoal text-ivory">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block">
            Direct Reservations
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl font-light">
            Book Anandam Groups for Your <span className="italic text-gold">Event</span>
          </h2>
          <p className="text-xs sm:text-sm text-ivory/70 max-w-xl mx-auto font-light leading-relaxed">
            Headquartered in Erode with live stall deployment across all districts in Tamil Nadu.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="bg-crimson hover:bg-crimson-hover text-ivory text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium transition-all shadow-xl flex items-center gap-3"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium transition-all shadow-xl flex items-center gap-3"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <FAQSection />
    </div>
  );
}
