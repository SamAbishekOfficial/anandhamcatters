"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Exact sequence of 13 slides from /images/hero-home/ (1, 1.1, 2, 2.1, 3, 3.1, 4, 4.1, 5, 5.1, 6, 7, 8)
const HERO_SLIDE_PATHS = [
  '/images/hero-home/1.png',
  '/images/hero-home/1.1.png',
  '/images/hero-home/2.png',
  '/images/hero-home/2.1.png',
  '/images/hero-home/3.png',
  '/images/hero-home/3.1.png',
  '/images/hero-home/4.png',
  '/images/hero-home/4.1.png',
  '/images/hero-home/5.png',
  '/images/hero-home/5.1.png',
  '/images/hero-home/6.png',
  '/images/hero-home/7.png',
  '/images/hero-home/8.png',
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 6-Second Automatic Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDE_PATHS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDE_PATHS.length) % HERO_SLIDE_PATHS.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDE_PATHS.length);
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight - 60,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full h-screen min-h-[550px] bg-black overflow-hidden select-none">
      
      {/* Full Bleed Image Showcase - Directly Under Floating Translucent Header */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={HERO_SLIDE_PATHS[currentSlide]}
            alt={`Hero Slide ${currentSlide + 1}`}
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Stretched Vertical Left Arrow Button (<) - NO Circle */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-0 top-0 bottom-0 z-30 w-16 sm:w-24 flex items-center justify-start pl-4 sm:pl-8 text-ivory/80 hover:text-gold transition-all duration-300 hover:bg-gradient-to-r hover:from-black/50 hover:to-transparent group cursor-pointer"
      >
        <span className="font-serif text-6xl sm:text-8xl font-light transform scale-y-[1.8] group-hover:scale-y-[2.1] transition-transform drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          &lt;
        </span>
      </button>

      {/* Stretched Vertical Right Arrow Button (>) - NO Circle */}
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-0 top-0 bottom-0 z-30 w-16 sm:w-24 flex items-center justify-end pr-4 sm:pr-8 text-ivory/80 hover:text-gold transition-all duration-300 hover:bg-gradient-to-l hover:from-black/50 hover:to-transparent group cursor-pointer"
      >
        <span className="font-serif text-6xl sm:text-8xl font-light transform scale-y-[1.8] group-hover:scale-y-[2.1] transition-transform drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          &gt;
        </span>
      </button>

      {/* Elegant Scroll Down / Explore Indicator at Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer group" onClick={scrollToNextSection}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-ivory transition-colors">
          Explore
        </span>
        <div className="w-8 h-8 rounded-full border border-gold/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300 animate-bounce shadow-lg">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

    </section>
  );
}
