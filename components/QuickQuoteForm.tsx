"use client";

import { useState } from 'react';
import { Send, CheckCircle2, Phone, Calendar, Users, MapPin, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Banquet',
    date: '',
    guests: '200',
    city: 'Erode',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-ivory-card border border-gold/30 p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
      {/* Gold decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full pointer-events-none" />

      {submitted ? (
        <div className="text-center py-12 space-y-4 animate-fadeIn">
          <div className="w-16 h-16 bg-gold/20 text-crimson rounded-full flex items-center justify-center mx-auto border border-gold">
            <CheckCircle2 className="w-8 h-8 text-gold" />
          </div>
          <h3 className="font-editorial text-3xl text-charcoal">
            Thank You, {formData.name}!
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-light max-w-md mx-auto font-light leading-relaxed">
            Your catering inquiry for <strong className="text-charcoal font-medium">{formData.eventType}</strong> on <strong className="text-charcoal font-medium">{formData.date || 'your upcoming date'}</strong> has been received. Our master banquet manager will contact you at <strong className="text-crimson font-medium">{formData.phone}</strong> within 2 hours.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-widest text-gold hover:text-gold-dark font-semibold border-b border-gold pb-0.5"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">
              Direct Banquet Consultation
            </span>
            <h3 className="font-editorial text-3xl text-charcoal font-normal">
              Request Your <span className="italic text-crimson">Custom Quote</span>
            </h3>
            <p className="text-xs text-charcoal-light font-light">
              Fill in minimal details below for instant menu options and per-plate pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-ivory border border-gold/30 rounded-xl px-4 py-3 text-xs text-charcoal placeholder-charcoal-muted focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-ivory border border-gold/30 rounded-xl px-4 py-3 pl-9 text-xs text-charcoal placeholder-charcoal-muted focus:outline-none focus:border-gold transition-colors"
                />
                <Phone className="w-3.5 h-3.5 text-gold absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                Event Type *
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full bg-ivory border border-gold/30 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-gold transition-colors"
              >
                <option value="Wedding Banquet">Grand Wedding Banquet (Thirumana Virundhu)</option>
                <option value="Luxury Buffet">Luxury Buffet Setup</option>
                <option value="Live Food Stations">Live Interactive Food Stations</option>
                <option value="Corporate Gala">Corporate Gala / Luncheon</option>
                <option value="Private Celebration">Private Family Celebration</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                Proposed Event Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-ivory border border-gold/30 rounded-xl px-4 py-3 pl-9 text-xs text-charcoal focus:outline-none focus:border-gold transition-colors"
                />
                <Calendar className="w-3.5 h-3.5 text-gold absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                Approximate Guest Count
              </label>
              <div className="relative">
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-ivory border border-gold/30 rounded-xl px-4 py-3 pl-9 text-xs text-charcoal focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="100">100 - 300 Guests</option>
                  <option value="500">300 - 800 Guests</option>
                  <option value="1000">800 - 2,000 Guests</option>
                  <option value="2500">2,000+ Grand Guests</option>
                </select>
                <Users className="w-3.5 h-3.5 text-gold absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                Event City / Town in TN
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Erode / Chennai / Coimbatore"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-ivory border border-gold/30 rounded-xl px-4 py-3 pl-9 text-xs text-charcoal focus:outline-none focus:border-gold transition-colors"
                />
                <MapPin className="w-3.5 h-3.5 text-gold absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
              Specific Dietary / Cuisine Preferences (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Traditional South Indian Pure Veg, Live Dosa counter, Chettinad Biryani station..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-ivory border border-gold/30 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full bg-crimson hover:bg-crimson-hover text-ivory text-xs uppercase tracking-[0.2em] py-4 rounded-xl font-medium transition-all shadow-xl shadow-crimson/20 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
            <span>Get Tailored Catering Quote Now</span>
            <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] text-center text-charcoal-muted font-light">
            🔒 Your contact details are kept strictly confidential. No spam guaranteed.
          </p>
        </form>
      )}
    </div>
  );
}
