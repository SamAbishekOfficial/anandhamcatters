import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata = {
  title: 'Traditional Catering & Wedding Banquets — Anandam Groups',
  description: 'Authentic 26-course banana leaf wedding feasts (Thirumana Virundhu) and traditional catering by Anandam Groups across Erode and Tamil Nadu.',
};

export default function CateringPage() {
  const COURSES = [
    'Traditional Paal Payasam & Paruppu Payasam',
    'Crispy Medu Vada & Sweet Jangiri / Mysore Pak',
    'Steamed White Rice with Pure Cow Ghee & Paruppu',
    'Authentic South Indian Sambhar & Poondu Rasam',
    'Vatha Kuzhambu & Mor Kuzhambu',
    'Poriyal, Kootu, Avial & Urulai Roast',
    'Appalam, Inji Puli, Cut Mango & Lemon Pickles',
    'Fresh Sweet Curd, Butter Milk & Beeda Paan',
  ];

  return (
    <div className="pt-28 pb-20 space-y-20 bg-ivory">
      
      {/* Header Banner */}
      <section className="bg-charcoal text-ivory py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block">
            Signature Royal Banquet
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light">
            Traditional <span className="italic text-gold">Catering Services</span>
          </h1>
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto font-light leading-relaxed">
            Honoring South Indian wedding traditions with 26 authentic delicacies served on fresh banana leaves with silver-service grace.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">
              Pure Sacred Traditions
            </span>
            <h2 className="font-editorial text-4xl font-light text-charcoal">
              The Royal Banana Leaf <span className="italic text-crimson">Feast Experience</span>
            </h2>
            <p className="text-sm text-charcoal-light font-light leading-relaxed">
              In Tamil Nadu culture, the wedding feast is the ultimate expression of love and hospitality. Anandam Groups preserves every ritual — from laying clean banana leaves with the tip pointing left, to serving sweet items first as a harbinger of auspiciousness.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                Authentic 26-Item Virundhu Course Sequence:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-charcoal-light">
                {COURSES.map((course, i) => (
                  <div key={i} className="flex items-center gap-2 bg-ivory-deep p-3 rounded-xl border border-gold/20">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="bg-crimson hover:bg-crimson-hover text-ivory text-xs uppercase tracking-widest px-8 py-4 rounded-full font-medium transition-all shadow-lg flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Us to Book</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white text-xs uppercase tracking-widest px-8 py-4 rounded-full font-medium transition-all shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-gold/40">
              <Image
                src="/images/file_0000000008f08206b801c20a7d7c8218.png"
                alt="Traditional Banana Leaf Feast"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Visual Showcase Strip */}
      <section className="bg-ivory-deep py-20 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">Visual Brochure</span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal">Synchronized Royal Banquet Service</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: '/images/file_00000000207c82089a07161b33b19439.png', title: 'Grand Wedding Dining Hall' },
              { img: '/images/file_00000000a1d882069231ddc06ba97986.png', title: 'VIP Silver Plate Service' },
              { img: '/images/file_0000000074fc8209a84533694b58b8a2.png', title: 'Traditional Sweet Spread' },
            ].map((item, idx) => (
              <div key={idx} className="bg-ivory rounded-2xl overflow-hidden border border-gold/30 shadow-md">
                <div className="relative w-full aspect-[4/3]">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-editorial text-lg text-charcoal">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
