"use client";

import { useEffect, useState, useRef } from 'react';
import { SITE_CONFIG } from '@/lib/siteConfig';

function CounterItem({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000; // 2 seconds
          const steps = 50;
          const stepTime = duration / steps;
          const increment = value / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-ivory-deep/40 border border-gold/20 shadow-sm relative overflow-hidden group hover:border-gold/50 transition-all">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-bl-full pointer-events-none" />
      <div className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight mb-2">
        <span className="text-gold font-normal">
          {count.toLocaleString()}
        </span>
        <span className="text-crimson font-light">{suffix}</span>
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-charcoal-light font-medium">
        {label}
      </p>
    </div>
  );
}

export default function CounterSection() {
  return (
    <section className="py-20 bg-ivory relative border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
            Pillars of Excellence
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal">
            A Legacy of Trust, Taste & Perfection
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <CounterItem key={idx} value={stat.value} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}
