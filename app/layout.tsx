import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyInquire from '@/components/StickyInquire';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { getLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — Premium Indian Catering, Royal Buffets & Live Food Stalls`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Anandam Groups',
    'Catering Services Erode',
    'Tamil Nadu Wedding Catering',
    'Traditional Banana Leaf Catering',
    'Luxury Buffet Setups',
    'Live Food Stalls Catering',
    'Chettinad Catering',
    'Best Wedding Caterer Chennai Coimbatore',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} — Royal Indian Catering Services`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/file_000000000f6081f491d57c7972dd75c8.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Luxury Buffet Catering`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/anandham_logo.png" />
        {/* Inject JSON-LD Schema Server-Side */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-ivory text-charcoal min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyInquire />
        <WhatsAppButton />
      </body>
    </html>
  );
}
