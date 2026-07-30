import { SITE_CONFIG } from './siteConfig';

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "CateringService"],
        "@id": `${SITE_CONFIG.url}/#organization`,
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url,
        "logo": `${SITE_CONFIG.url}/images/anandham_logo.png`,
        "image": `${SITE_CONFIG.url}/images/file_000000000f6081f491d57c7972dd75c8.png`,
        "description": SITE_CONFIG.description,
        "telephone": SITE_CONFIG.phoneRaw,
        "email": SITE_CONFIG.email,
        "priceRange": "₹₹₹",
        "servesCuisine": ["South Indian", "North Indian", "Chettinad", "Continental", "Tandoori", "Live Counters"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Erode",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "State", "name": "Tamil Nadu" },
          { "@type": "City", "name": "Erode" },
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Coimbatore" },
          { "@type": "City", "name": "Madurai" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "22:00"
        }
      }
    ]
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
