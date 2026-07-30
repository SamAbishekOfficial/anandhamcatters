import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Award, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-20 pb-12 border-t border-gold/30 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold">
                <Image
                  src="/images/anandham_logo.png"
                  alt="Anandam Groups Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-editorial text-2xl tracking-wider text-ivory font-semibold block">
                  ANANDAM
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gold uppercase font-medium block">
                  GROUPS • CATERING
                </span>
              </div>
            </div>

            <p className="text-xs text-ivory/70 leading-relaxed font-light">
              Tamil Nadu’s premier culinary brand for grand weddings, royal banana leaf banquets, lavish buffet spreads, and live interactive food counters.
            </p>

            <div className="flex items-center gap-2 text-gold text-xs">
              <Award className="w-4 h-4 text-gold" />
              <span>Over 25 Years of Culinary Craftsmanship</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-editorial text-xl text-ivory tracking-wide border-b border-gold/30 pb-2 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs tracking-wider">
              {['Home', 'About Us', 'Catering Services', 'Wedding Banquets', 'Buffet Setups', 'Live Stations', 'Photo Gallery', 'Testimonials', 'Booking Process', 'FAQs', 'Contact Us'].map((item) => {
                const slug = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-').replace('photo-', '').replace('-us', '')}`;
                return (
                  <li key={item}>
                    <Link
                      href={slug}
                      className="hover:text-gold transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                      <span>{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-editorial text-xl text-ivory tracking-wide border-b border-gold/30 pb-2 inline-block">
              Contact & Inquiry
            </h3>
            <ul className="space-y-3.5 text-xs text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-ivory font-medium">Headquarters</span>
                  <span>{SITE_CONFIG.headquarters}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-gold transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-gold transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Key Branches */}
          <div className="space-y-4">
            <h3 className="font-editorial text-xl text-ivory tracking-wide border-b border-gold/30 pb-2 inline-block">
              Branch Network
            </h3>
            <p className="text-xs text-ivory/70 leading-relaxed">
              Serving major celebration hubs across Tamil Nadu:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SITE_CONFIG.branches.map((b) => (
                <div key={b.id} className="p-2 rounded bg-white/5 border border-white/5 text-ivory/80">
                  <span className="font-medium text-gold block">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <p>© {new Date().getFullYear()} Anandam Groups. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/faqs" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/faqs" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Get Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
