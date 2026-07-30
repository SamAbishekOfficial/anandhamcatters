export interface StallCategory {
  id: string;
  name: string;
  description: string;
  stalls: {
    id: string;
    title: string;
    caption: string;
    src: string;
    tag: string;
  }[];
}

export interface RentalCategory {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  items: {
    id: string;
    title: string;
    src: string;
    tag: string;
  }[];
}

export const BRAND_LOGO = '/images/anandham_logo.webp';

// Ordered Hero Slides from /images/hero-home/ (1, 1.1, 2, 2.1, 3, 3.1, 4, 5, 6, 7, 8)
export const HERO_SLIDES = [
  { src: '/images/hero-home/1.webp', title: 'Royal Event Setup', subtitle: 'Pristine luxury catering arrangements by Anandham Catters' },
  { src: '/images/hero-home/1.1.webp', title: 'Grand Banquet Dining', subtitle: 'Exquisite food station architecture for memorable celebrations' },
  { src: '/images/hero-home/2.webp', title: 'Illuminated Food Counters', subtitle: 'Warm ambient lighting showcasing live culinary counters' },
  { src: '/images/hero-home/2.1.webp', title: 'Live Cooking Theater', subtitle: 'Freshly prepared delicacies served directly to your guests' },
  { src: '/images/hero-home/3.webp', title: 'Artisanal Dessert & Drink Display', subtitle: 'Refreshing welcome drinks, botanical coolers, and sweet counters' },
  { src: '/images/hero-home/3.1.webp', title: 'Gourmet Fruit & Beverage Bar', subtitle: 'Handcrafted fresh juices, mocktails, and carved fruit islands' },
  { src: '/images/hero-home/4.webp', title: 'Traditional South Indian Virundhu', subtitle: 'Authentic 26-dish banana leaf banquets & silver plate service' },
  { src: '/images/hero-home/5.webp', title: 'Live Street Food & Chaat Stalls', subtitle: 'Interactive Pani Puri, Samosa, and regional snack counters' },
  { src: '/images/hero-home/6.webp', title: 'Nostalgic 90s Petty Shop Counter', subtitle: 'Unique vintage snack stalls bringing fond memories to events' },
  { src: '/images/hero-home/7.webp', title: 'Live Chocolate Fountain Bar', subtitle: 'Cascading warm chocolate dipped fruits and marshmallows' },
  { src: '/images/hero-home/8.webp', title: 'Traditional Paan & Digestive Counter', subtitle: 'Aromatic Meetha Paan crafted live at event conclusion' },
];

// Live Stall Categories
export const STALL_CATEGORIES: StallCategory[] = [
  {
    id: 'live-counters-stalls',
    name: 'Interactive Live Food Stalls',
    description: 'Hot, made-to-order culinary counters bringing theater and flavor to your event',
    stalls: [
      {
        id: 'pani-puri',
        title: 'Live Pani Puri & Chaat Counter',
        caption: 'Crispy Pani Puri, Sev Puri & tangy chaat made fresh to order',
        src: '/images/pani poori counter.webp',
        tag: 'Live Chaat'
      },
      {
        id: 'chocolate-fountain-1',
        title: 'Chocolate Fountain Counter',
        caption: 'Cascading warm chocolate fountain with fresh fruits & treats',
        src: '/images/Chocolate fountain counter.webp',
        tag: 'Live Dessert'
      },
      {
        id: 'chocolate-fountain-2',
        title: 'Grand Chocolate Fountain Stall',
        caption: 'Interactive dip counter featuring milk and dark chocolate streams',
        src: '/images/chocolate fountain2.webp',
        tag: 'Live Dessert'
      },
      {
        id: '90s-petty-shop',
        title: "90's Petty Shop Counter",
        caption: 'Nostalgic South Indian vintage candy & snack counter experience',
        src: "/images/90's petty shop counter.webp",
        tag: 'Theme Counter'
      },
      {
        id: 'ice-cream-stall',
        title: 'Live Ice Cream Counter',
        caption: 'Handcrafted scoops, matka kulfi & festive ice cream toppings',
        src: '/images/ice cream counter.webp',
        tag: 'Live Counter'
      },
      {
        id: 'food-counter',
        title: 'Hot Starter & Snack Counter',
        caption: 'Sizzling hot appetizers served right off the live griddles',
        src: '/images/food counter.webp',
        tag: 'Live Counter'
      }
    ]
  },
  {
    id: 'beverages-juices',
    name: 'Fresh Juice & Beverage Bars',
    description: 'Refreshing natural juices, botanical coolers, and welcome drink setups',
    stalls: [
      {
        id: 'fresh-juice-1',
        title: 'Fresh Fruit Juice Counter',
        caption: '100% natural, cold-pressed seasonal fruit juices made live',
        src: '/images/fresh juice counter.webp',
        tag: 'Juice Bar'
      },
      {
        id: 'fresh-juice-2',
        title: 'Live Mocktail & Juice Bar',
        caption: 'Botanical coolers, Nannari sharbat & citrus fruit infusions',
        src: '/images/fresh juice counter2.webp',
        tag: 'Mocktail Bar'
      },
      {
        id: 'juice-counter',
        title: 'Welcome Drink Station',
        caption: 'Chilled fruit punches and herbal refreshments for arriving guests',
        src: '/images/Juice counter.webp',
        tag: 'Welcome Bar'
      },
      {
        id: 'drinks-counter',
        title: 'Craft Beverage Island',
        caption: 'Traditional Elaneer payasam coolers & mocktail varieties',
        src: '/images/drinks counter.webp',
        tag: 'Beverage Bar'
      }
    ]
  },
  {
    id: 'fruit-carving',
    name: 'Artisan Fruit & Dessert Displays',
    description: 'Intricately carved fruit sculptures and luxury sweet spreads',
    stalls: [
      {
        id: 'fruit-carving-1',
        title: 'Artisan Fruit Carving Counter',
        caption: 'Hand-carved watermelon, papaya & melon centerpiece sculptures',
        src: '/images/fruit carving counter.webp',
        tag: 'Carving Display'
      },
      {
        id: 'fruit-carving-2',
        title: 'Royal Fruit Sculpture Display',
        caption: 'Decorative carved fruit arrangements adding visual grandeur',
        src: '/images/fruit carving.webp',
        tag: 'Carving Display'
      },
      {
        id: 'fruit-counter-1',
        title: 'Fresh Exotic Fruit Counter',
        caption: 'Sliced exotic and seasonal fruits served fresh',
        src: '/images/fruit counter.webp',
        tag: 'Fruit Island'
      },
      {
        id: 'fruit-counter-2',
        title: 'Gourmet Fruit Platter Station',
        caption: 'Curated fruit platters with honey and natural drizzles',
        src: '/images/fruit counter 2.webp',
        tag: 'Fruit Island'
      },
      {
        id: 'dessert-counter',
        title: 'Traditional Sweet & Dessert Island',
        caption: 'Mysore Pak, Laddu, Halwa & artisanal pastries',
        src: '/images/dessert counter.webp',
        tag: 'Dessert Spread'
      }
    ]
  },
  {
    id: 'paan-beeda',
    name: 'Traditional Paan & Digestive Counters',
    description: 'Freshly crafted Meetha Paan and digestives at event conclusion',
    stalls: [
      {
        id: 'beeda-counter-1',
        title: 'Royal Meetha Paan Counter',
        caption: 'Sweet betel leaf paan crafted live with gulkand and spices',
        src: '/images/beeda counter.webp',
        tag: 'Live Paan'
      },
      {
        id: 'beeda-counter-2',
        title: 'Traditional Beeda Stall',
        caption: 'Customized digestive paan variations for post-feast satisfaction',
        src: '/images/beeda counter 2.webp',
        tag: 'Live Paan'
      },
      {
        id: 'beeda-counter-3',
        title: 'Flavored Paan Corner',
        caption: 'Chocolate paan, fire paan & ice paan variations',
        src: '/images/beeda counter 3.webp',
        tag: 'Live Paan'
      },
      {
        id: 'beeda-pan-counter',
        title: 'Digestive & Mukhwas Station',
        caption: 'Assorted aromatic mouth fresheners & betel nut preparations',
        src: '/images/beeda pan counter.webp',
        tag: 'Digestives'
      }
    ]
  }
];

// Buffet & Rental Categories for Buffets Page (100% Factual Titles & WebP Images)
export const RENTAL_CATEGORIES: RentalCategory[] = [
  {
    id: 'stall-rental',
    name: 'Stall Rental',
    thumbnail: '/images/stall-rental/1.webp',
    description: 'Illuminated food stall canopies, carved wooden counter structures, and event archways',
    items: [
      { id: 'sr-1', title: 'Illuminated Stall Canopy Corridor', src: '/images/stall-rental/1.webp', tag: 'STALL RENTAL' },
      { id: 'sr-2', title: 'Reception Food Stall Setup', src: '/images/stall-rental/2.webp', tag: 'STALL RENTAL' },
      { id: 'sr-3', title: 'Carved Wooden Counter Canopy', src: '/images/stall-rental/3.webp', tag: 'STALL RENTAL' },
      { id: 'sr-4', title: 'Gold Archway Food Counter Stall', src: '/images/stall-rental/4.webp', tag: 'STALL RENTAL' },
      { id: 'sr-5', title: 'Traditional Wood Counter Canopy', src: '/images/stall-rental/5.webp', tag: 'STALL RENTAL' },
      { id: 'sr-6', title: 'Backlit Canopy Food Station', src: '/images/stall-rental/6.webp', tag: 'STALL RENTAL' },
      { id: 'sr-7', title: 'Outdoor Food Stall Canopy Layout', src: '/images/stall-rental/7.webp', tag: 'STALL RENTAL' },
      { id: 'sr-8', title: 'Pavilion Canopy Counter Structure', src: '/images/stall-rental/8.webp', tag: 'STALL RENTAL' },
      { id: 'sr-9', title: 'Grand Illuminated Entrance Canopy', src: '/images/stall-rental/9.webp', tag: 'STALL RENTAL' },
      { id: 'sr-10', title: 'Royal Wedding Food Stall Pavilion', src: '/images/stall-rental/10.webp', tag: 'STALL RENTAL' },
    ]
  },
  {
    id: 'chair-table-rental',
    name: 'Chair & Table Rental',
    thumbnail: '/images/chair-table-rental/file_000000000dd0822f89ec72cd8c957969.webp',
    description: 'Cloth-draped banquet dining tables, covered banquet chairs, and outdoor dining arrangements',
    items: [
      { id: 'ctr-1', title: 'Yellow & White Draped Banquet Seating', src: '/images/chair-table-rental/file_000000000dd0822f89ec72cd8c957969.webp', tag: 'CHAIR & TABLE RENTAL' },
      { id: 'ctr-2', title: 'Round Banquet Dining Tables & Chairs', src: '/images/chair-table-rental/file_0000000030ac822fb3f3c129516cf4b4.webp', tag: 'CHAIR & TABLE RENTAL' },
      { id: 'ctr-3', title: 'Draped Reception Dining Table Setup', src: '/images/chair-table-rental/file_000000003c30822fba0bb61cc1a8ba80.webp', tag: 'CHAIR & TABLE RENTAL' },
      { id: 'ctr-4', title: 'Event Hall Seating & Table Setup', src: '/images/chair-table-rental/file_000000004dc4822f91ace8569c86309a.webp', tag: 'CHAIR & TABLE RENTAL' },
      { id: 'ctr-5', title: 'Covered Banquet Chairs with Satin Bow Wraps', src: '/images/chair-table-rental/file_000000006110822f9a9e2de2ba91944c.webp', tag: 'CHAIR & TABLE RENTAL' },
      { id: 'ctr-6', title: 'Banquet Hall Dining Chair Arrangement', src: '/images/chair-table-rental/file_000000006fd4822fae5c7cd95d2ed509.webp', tag: 'CHAIR & TABLE RENTAL' },
      { id: 'ctr-7', title: 'Traditional Dining Hall Chair & Table Layout', src: '/images/chair-table-rental/file_000000008770822fbaa129b924ea9bf5.webp', tag: 'CHAIR & TABLE RENTAL' },
      { id: 'ctr-8', title: 'Grand Banquet Hall Seating Arrangement', src: '/images/chair-table-rental/file_00000000bd088230b3b2ad50377cef76.webp', tag: 'CHAIR & TABLE RENTAL' },
      { id: 'ctr-9', title: 'Outdoor Lawn Round Tables & Covered Banquet Chairs', src: '/images/chair-table-rental/file_00000000c318822f87aa004dd73e7436.webp', tag: 'CHAIR & TABLE RENTAL' },
    ]
  },
  {
    id: 'cooking-rental',
    name: 'Cooking Utility Rental',
    thumbnail: '/images/cooking-rental/1.webp',
    description: 'Commercial gas burners, traditional brass samovar urns, copper cauldrons, and live cooking equipment',
    items: [
      { id: 'cr-1', title: 'Gas Stove & Burner Sets', src: '/images/cooking-rental/1.webp', tag: 'COOKING UTILITY' },
      { id: 'cr-2', title: 'Brass Samovar Tea Urn', src: '/images/cooking-rental/2.webp', tag: 'COOKING UTILITY' },
      { id: 'cr-3', title: 'Copper Biryani Cauldron (Handi / Kopparai)', src: '/images/cooking-rental/3.webp', tag: 'COOKING UTILITY' },
      { id: 'cr-4', title: 'Steam Boiler & Idli Unit', src: '/images/cooking-rental/4.webp', tag: 'COOKING UTILITY' },
      { id: 'cr-5', title: 'Cooking Utensil & Ladle Set', src: '/images/cooking-rental/5.webp', tag: 'COOKING UTILITY' },
    ]
  }
];
