"use client";

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getFAQSchema } from '@/lib/schema';

export const FAQS = [
  {
    question: "What scale of events does Anandam Groups cater to?",
    answer: "We specialize in both intimate gatherings starting from 100 guests up to massive royal wedding banquets catering to over 5,000+ guests with synchronized silver-service hospitality."
  },
  {
    question: "Do you offer live food stalls and interactive cooking counters?",
    answer: "Yes! We offer live Dosa & Appam counters, Chettinad Claypot Biryani stations, Tandoori & Kebab grills, Live Chaat corners, High-Tea davara coffee stations, and Nitrogen Kulfi bars."
  },
  {
    question: "Where are Anandam Groups catering services available?",
    answer: "Our primary state headquarters is in Erode, Tamil Nadu. We operate across all major districts including Chennai, Coimbatore, Madurai, Salem, Tiruchirappalli, Tiruppur, Karur, and destination venues throughout South India."
  },
  {
    question: "Can we customize the wedding menu for banana leaf and buffet services?",
    answer: "Absolultely. Every menu is custom crafted based on your family traditions, regional authentic recipes, dietary needs (100% Pure Veg or Non-Veg banquets), and fusion preferences."
  },
  {
    question: "How far in advance should we book Anandam Groups for a wedding?",
    answer: "For peak muhurtham dates, we recommend booking 3 to 6 months in advance to guarantee date availability and private food tasting sessions."
  },
  {
    question: "What measures do you take to maintain hygiene and food quality?",
    answer: "We strictly adhere to FSSAI food safety standards. All live stalls and buffet setups undergo rigorous thermal monitoring, eco-friendly disposables or premium brassware sanitization, and professional uniformed staff handling."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqSchema = getFAQSchema(FAQS);

  return (
    <section className="py-20 bg-ivory relative">
      {/* Inject FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">
            Clear Insights & Answers
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal font-normal">
            Frequently Asked <span className="italic text-crimson">Questions</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-ivory-deep/80 border-gold/50 shadow-md'
                    : 'bg-ivory-card border-gold/20 hover:border-gold/30'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-editorial text-xl sm:text-2xl text-charcoal font-normal"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gold shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-crimson' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-charcoal-light font-light leading-relaxed pl-14 border-t border-gold/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
