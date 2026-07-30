import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, HeartHandshake, Utensils, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata = {
  title: 'About Us — 25+ Years of Royal Catering Heritage',
  description: 'Learn about Anandam Groups, Erode’s premier catering brand dedicated to authentic South Indian culinary craftsmanship, royal banana leaf virundhu, and state-wide banquets.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 bg-ivory">
      
      {/* Header Banner */}
      <section className="bg-charcoal text-ivory py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block">
            Our Heritage & Values
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light">
            The Story of <span className="italic text-gold">Anandam Groups</span>
          </h1>
          <p className="text-sm sm:text-base text-ivory/70 max-w-2xl mx-auto font-light leading-relaxed">
            Founded in Erode in 1999, we have grown into Tamil Nadu’s most revered culinary brand, blending authentic South Indian recipes with world-class banquet hospitality.
          </p>
        </div>
      </section>

      {/* Main Narrative Section with Edge-to-Edge Visuals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">
              Quarter Century of Culinary Mastery
            </span>
            <h2 className="font-editorial text-4xl font-light text-charcoal">
              Preserving Royal Recipes, <span className="italic text-crimson">Elevating Banquets</span>
            </h2>
            <p className="text-sm text-charcoal-light font-light leading-relaxed">
              Over the last 25 years, Anandam Groups has catered over 500+ grand weddings, state functions, and corporate banquets, delighting more than 2,000,000 guests across Tamil Nadu.
            </p>
            <p className="text-sm text-charcoal-light font-light leading-relaxed">
              Our culinary philosophy centers on pure ingredients, uncompromised authentic spice blends freshly ground in-house, and traditional silver and banana leaf service. Every event is managed by master chefs and trained silver-service stewards to ensure zero waiting time and flawless presentation.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-ivory-deep border border-gold/30">
                <ShieldCheck className="w-6 h-6 text-gold mb-2" />
                <h4 className="font-medium text-xs text-charcoal uppercase tracking-wider">FSSAI Certified</h4>
                <p className="text-[11px] text-charcoal-muted">100% strict hygiene & safety protocols</p>
              </div>
              <div className="p-4 rounded-xl bg-ivory-deep border border-gold/30">
                <HeartHandshake className="w-6 h-6 text-crimson mb-2" />
                <h4 className="font-medium text-xs text-charcoal uppercase tracking-wider">State-Wide Network</h4>
                <p className="text-[11px] text-charcoal-muted">12 branch hubs across Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gold/40">
              <Image
                src="/images/file_0000000057cc82098fc6779fc9a8542a.png"
                alt="Anandam Groups Master Chefs and Catering Setup"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Core Pillars */}
      <section className="bg-ivory-deep py-20 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">
              What Sets Us Apart
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal">
              Our Immutable <span className="italic text-crimson">Pillars</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authentic Spice Formulations',
                desc: 'We never use commercial premixes. All masala powders, ghee, and Chettinad spice blends are slow-roasted and stone-ground in our Erode central kitchen.',
                icon: Utensils,
              },
              {
                title: 'Synchronized Hospitality',
                desc: 'Our uniformed service staff are trained in traditional etiquette, ensuring every guest on the banana leaf row receives hot, fresh course refills simultaneously.',
                icon: Award,
              },
              {
                title: '50+ Live Interactive Stalls',
                desc: 'From live Dosa griddles to wood-fired Claypot Biryani stations, we bring the theater of live cooking directly into your event hall.',
                icon: HeartHandshake,
              },
            ].map((p, idx) => (
              <div key={idx} className="bg-ivory p-8 rounded-2xl border border-gold/30 space-y-4 shadow-md">
                <p.icon className="w-8 h-8 text-gold" />
                <h3 className="font-editorial text-2xl text-charcoal font-normal">{p.title}</h3>
                <p className="text-xs text-charcoal-light font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal text-ivory p-12 rounded-3xl border border-gold/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">Ready to Plan Your Event?</span>
            <h3 className="font-editorial text-3xl font-light">Experience the Magic of Anandam Groups</h3>
          </div>
          <Link
            href="/contact"
            className="bg-crimson hover:bg-crimson-hover text-ivory text-xs uppercase tracking-widest px-8 py-4 rounded-full font-medium shadow-xl shrink-0"
          >
            Contact Master Banquet Team
          </Link>
        </div>
      </section>
    </div>
  );
}
