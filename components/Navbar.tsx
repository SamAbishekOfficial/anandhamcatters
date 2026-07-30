"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Buffet & Live Stalls', href: '/buffet-stalls' },
  { name: 'Banana Leaf Feasts', href: '/catering' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal/60 backdrop-blur-lg py-2 border-b border-gold/30 shadow-2xl'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent backdrop-blur-[2px] py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold/60 group-hover:border-gold transition-all shadow-md">
              <Image
                src="/images/anandham_logo.png"
                alt="Anandam Groups Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-editorial text-xl tracking-wider text-ivory font-semibold block leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                ANANDAM
              </span>
              <span className="text-[8px] tracking-[0.22em] text-gold uppercase font-semibold block mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                GROUPS • CATERING
              </span>
            </div>
          </Link>

          {/* Translucent High-Contrast Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors hover:text-gold relative py-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] ${
                    isActive ? 'text-gold' : 'text-ivory'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold rounded-full shadow-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 text-[11px] tracking-wider text-ivory hover:text-gold transition-colors font-semibold border border-gold/50 bg-black/40 hover:bg-black/60 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-md"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>Call</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full font-semibold transition-all shadow-lg flex items-center gap-1.5"
            >
              <MessageCircle className="w-3 h-3 fill-white stroke-none" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden text-ivory hover:text-gold p-1.5 transition-colors drop-shadow"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 md:hidden animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-editorial text-2xl text-ivory/90 hover:text-gold transition-colors border-b border-white/10 pb-2.5 ${
                  pathname === link.href ? 'text-gold pl-2 border-gold/40' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-2.5 pt-4 border-t border-gold/20">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 w-full border border-gold/40 text-gold py-3 rounded-full font-medium text-xs uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white py-3 rounded-full font-medium text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
