import { MapPin, Phone, Mail, Clock, MessageCircle, Building2, Navigation } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata = {
  title: 'Contact Us — Reserve Anandam Groups Catering',
  description: 'Get in touch with Anandam Groups catering team. Main Headquarters in Erode, Tamil Nadu. Call +91 63849 50356 or email samabishehofficial@gmail.com.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 bg-ivory">
      
      {/* Header Banner */}
      <section className="bg-charcoal text-ivory py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block">
            Direct Catering Hotline
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light">
            Contact <span className="italic text-gold">Anandam Groups</span>
          </h1>
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto font-light leading-relaxed">
            Reach out directly via Call or WhatsApp for instant date reservations and menu discussions.
          </p>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Main Card */}
          <div className="bg-ivory-card border border-gold/40 p-8 sm:p-10 rounded-3xl space-y-8 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">
                State Headquarters
              </span>
              <h2 className="font-editorial text-3xl text-charcoal">
                Erode Central Office
              </h2>
            </div>

            <ul className="space-y-6 text-xs text-charcoal-light font-light border-y border-gold/20 py-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-charcoal font-medium text-sm">Headquarters Address</span>
                  <span>Perundurai Road, Erode, Tamil Nadu 638011</span>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <span className="block text-charcoal font-medium text-sm">Direct Call Hotline</span>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-crimson font-medium text-base hover:underline">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <span className="block text-charcoal font-medium text-sm">Official Email</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-charcoal hover:text-gold transition-colors font-medium">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <span className="block text-charcoal font-medium text-sm">Office Hours</span>
                  <span>Monday — Sunday: 8:00 AM — 10:00 PM</span>
                </div>
              </li>
            </ul>

            <div className="space-y-3 pt-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="w-full bg-crimson hover:bg-crimson-hover text-ivory text-xs uppercase tracking-widest py-4 rounded-xl font-medium transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Us Now ({SITE_CONFIG.phone})</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-widest py-4 rounded-xl font-medium transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Branch Directory */}
          <div className="bg-charcoal text-ivory p-8 sm:p-10 rounded-3xl border border-gold/30 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Building2 className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-medium">Network Directory</span>
              </div>
              <h3 className="font-editorial text-3xl font-light">
                Branches Across <span className="italic text-gold">Tamil Nadu</span>
              </h3>
              <p className="text-xs text-ivory/70 font-light leading-relaxed">
                Direct catering logistics deployed to marriage halls and celebration venues across:
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                {SITE_CONFIG.branches.map((b) => (
                  <div key={b.id} className="p-3 rounded-xl bg-white/5 border border-white/10 text-ivory/90">
                    <span className="font-medium text-gold block">{b.name}</span>
                    <span className="text-[11px] text-ivory/60">{b.address.split(',')[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-ivory/60 text-center">
              <span>Primary Service Area: All 38 Districts of Tamil Nadu</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
