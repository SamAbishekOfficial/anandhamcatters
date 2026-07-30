"use client";

import { useState } from 'react';
import { MapPin, Phone, Navigation, Building2, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function TamilNaduMap() {
  const [activeBranch, setActiveBranch] = useState(SITE_CONFIG.branches[0]);

  return (
    <section className="py-24 bg-charcoal text-ivory relative overflow-hidden">
      {/* Ambient background gold lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-crimson/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block">
            One Trusted Catering Network
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl font-light tracking-tight">
            Our Branches Across <span className="italic text-gold">Tamil Nadu</span>
          </h2>
          <p className="text-xs sm:text-sm text-ivory/70 max-w-xl mx-auto font-light leading-relaxed">
            Headquartered in Erode with seamless silver-service catering operations deployed to every corner of the state.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Custom SVG Illustrated Map of Tamil Nadu */}
          <div className="lg:col-span-7 relative bg-charcoal-light/20 p-6 sm:p-10 rounded-3xl border border-gold/20 backdrop-blur-md">
            <div className="relative w-full aspect-[4/3] max-w-[550px] mx-auto">
              
              {/* Tamil Nadu Stylized Contour SVG Path */}
              <svg
                viewBox="0 0 400 450"
                className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Tamil Nadu State Outer Boundary Path */}
                <path
                  d="M160,30 L220,40 L310,90 L340,140 L300,180 L320,240 L280,310 L240,380 L180,420 L160,390 L120,330 L80,290 L60,240 L70,180 L110,120 L160,30 Z"
                  fill="#242424"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  className="transition-colors hover:opacity-90"
                />

                {/* Subtle Network Interconnecting Lines */}
                <g stroke="rgba(201, 168, 76, 0.25)" strokeWidth="1" strokeDasharray="3 3">
                  {SITE_CONFIG.branches.map((b, i) => {
                    const hq = SITE_CONFIG.branches[0];
                    return (
                      <line
                        key={i}
                        x1={`${hq.coords.x * 3.6}`}
                        y1={`${hq.coords.y * 3.8}`}
                        x2={`${b.coords.x * 3.6}`}
                        y2={`${b.coords.y * 3.8}`}
                      />
                    );
                  })}
                </g>

                {/* Branch Pins on Map */}
                {SITE_CONFIG.branches.map((branch) => {
                  const isSelected = activeBranch.id === branch.id;
                  const cx = branch.coords.x * 3.6;
                  const cy = branch.coords.y * 3.8;

                  return (
                    <g
                      key={branch.id}
                      onClick={() => setActiveBranch(branch)}
                      className="cursor-pointer group"
                    >
                      {/* Pulsing ring for selected or HQ */}
                      {isSelected && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="16"
                          fill="rgba(201, 168, 76, 0.2)"
                          className="animate-ping"
                        />
                      )}

                      {/* Gold Pin Outer */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? '10' : '7'}
                        fill={isSelected ? '#9B2335' : '#C9A84C'}
                        stroke="#FAF7F2"
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      {/* Pin Center Dot */}
                      <circle cx={cx} cy={cy} r="3" fill="#FAF7F2" />

                      {/* City Label */}
                      <text
                        x={cx + 12}
                        y={cy + 4}
                        fill={isSelected ? '#C9A84C' : '#FAF7F2'}
                        fontSize="11"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="font-sans pointer-events-none select-none drop-shadow"
                      >
                        {branch.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 bg-charcoal/90 px-3 py-1.5 rounded-full border border-gold/30 flex items-center gap-3 text-[10px] text-ivory/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-crimson border border-white" />
                  <span>HQ / Selected</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold border border-white" />
                  <span>Branch Hub</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Branch Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-ivory text-charcoal p-8 rounded-3xl border border-gold/40 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-charcoal text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl">
                {activeBranch.isHQ ? 'State Headquarters' : 'Regional Branch'}
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-crimson text-xs uppercase font-medium tracking-wider">
                  <Building2 className="w-4 h-4 text-gold" />
                  <span>Anandam Groups Network</span>
                </div>
                <h3 className="font-editorial text-3xl font-normal text-charcoal">
                  {activeBranch.name}
                </h3>
              </div>

              <div className="space-y-4 text-xs text-charcoal-light border-y border-gold/20 py-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{activeBranch.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-crimson transition-colors font-medium text-charcoal">
                    {activeBranch.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-medium uppercase tracking-wider text-charcoal-muted block">
                  Services Available at this Hub:
                </span>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {['Wedding Banquets', 'Royal Buffets', 'Live Food Counters', 'Corporate Dinners'].map((s, idx) => (
                    <span key={idx} className="bg-ivory-deep px-3 py-1 rounded-full text-charcoal flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-gold" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeBranch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-crimson hover:bg-crimson-hover text-ivory text-xs uppercase tracking-widest py-3.5 rounded-full font-medium transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  <span>Get Directions to Branch</span>
                </a>
              </div>
            </div>

            {/* Quick Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {SITE_CONFIG.branches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBranch(b)}
                  className={`text-xs px-4 py-2 rounded-full border transition-all ${
                    activeBranch.id === b.id
                      ? 'bg-gold text-charcoal border-gold font-medium'
                      : 'border-white/20 text-ivory/80 hover:border-gold/50'
                  }`}
                >
                  {b.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
