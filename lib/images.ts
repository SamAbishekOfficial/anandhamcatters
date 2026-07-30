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

export const BRAND_LOGO = '/images/anandham_logo.png';

// Ordered Hero Slides from /images/hero-home/ (1, 1.1, 2, 2.1, 3, 3.1, 4, 4.1, 5, 5.1, 6, 7, 8)
export const HERO_SLIDES = [
  { src: '/images/hero-home/1.png', title: 'Royal Event Setup', subtitle: 'Pristine luxury catering arrangements by Anandam Groups' },
  { src: '/images/hero-home/1.1.png', title: 'Grand Banquet Dining', subtitle: 'Exquisite food station architecture for memorable celebrations' },
  { src: '/images/hero-home/2.png', title: 'Illuminated Food Counters', subtitle: 'Warm ambient lighting showcasing live culinary counters' },
  { src: '/images/hero-home/2.1.png', title: 'Live Cooking Theater', subtitle: 'Freshly prepared delicacies served directly to your guests' },
  { src: '/images/hero-home/3.png', title: 'Artisanal Dessert & Drink Display', subtitle: 'Refreshing welcome drinks, botanical coolers, and sweet counters' },
  { src: '/images/hero-home/3.1.png', title: 'Gourmet Fruit & Beverage Bar', subtitle: 'Handcrafted fresh juices, mocktails, and carved fruit islands' },
  { src: '/images/hero-home/4.png', title: 'Traditional South Indian Virundhu', subtitle: 'Authentic 26-dish banana leaf banquets & silver plate service' },
  { src: '/images/hero-home/4.1.png', title: 'Statewide Catering Network', subtitle: 'Serving weddings & galas across Erode and all Tamil Nadu' },
  { src: '/images/hero-home/5.png', title: 'Live Street Food & Chaat Stalls', subtitle: 'Interactive Pani Puri, Samosa, and regional snack counters' },
  { src: '/images/hero-home/5.1.png', title: 'Interactive Food Stalls', subtitle: 'Engaging live cooking stations for guests of all ages' },
  { src: '/images/hero-home/6.png', title: 'Nostalgic 90s Petty Shop Counter', subtitle: 'Unique vintage snack stalls bringing fond memories to events' },
  { src: '/images/hero-home/7.png', title: 'Live Chocolate Fountain Bar', subtitle: 'Cascading warm chocolate dipped fruits and marshmallows' },
  { src: '/images/hero-home/8.png', title: 'Traditional Paan & Digestive Counter', subtitle: 'Aromatic Meetha Paan crafted live at event conclusion' },
];

// Stall Categories using exact renamed image files provided by the user
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
        src: '/images/pani poori counter.png',
        tag: 'Live Chaat'
      },
      {
        id: 'chocolate-fountain-1',
        title: 'Chocolate Fountain Counter',
        caption: 'Cascading warm chocolate fountain with fresh fruits & treats',
        src: '/images/Chocolate fountain counter.png',
        tag: 'Live Dessert'
      },
      {
        id: 'chocolate-fountain-2',
        title: 'Grand Chocolate Fountain Stall',
        caption: 'Interactive dip counter featuring milk and dark chocolate streams',
        src: '/images/chocolate fountain2.png',
        tag: 'Live Dessert'
      },
      {
        id: '90s-petty-shop',
        title: "90's Petty Shop Counter",
        caption: 'Nostalgic South Indian vintage candy & snack counter experience',
        src: "/images/90's petty shop counter.png",
        tag: 'Theme Counter'
      },
      {
        id: 'ice-cream-stall',
        title: 'Live Ice Cream Counter',
        caption: 'Handcrafted scoops, matka kulfi & festive ice cream toppings',
        src: '/images/ice cream counter.png',
        tag: 'Live Counter'
      },
      {
        id: 'food-counter',
        title: 'Hot Starter & Snack Counter',
        caption: 'Sizzling hot appetizers served right off the live griddles',
        src: '/images/food counter.png',
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
        src: '/images/fresh juice counter.png',
        tag: 'Juice Bar'
      },
      {
        id: 'fresh-juice-2',
        title: 'Live Mocktail & Juice Bar',
        caption: 'Botanical coolers, Nannari sharbat & citrus fruit infusions',
        src: '/images/fresh juice counter2.png',
        tag: 'Mocktail Bar'
      },
      {
        id: 'juice-counter',
        title: 'Welcome Drink Station',
        caption: 'Chilled fruit punches and herbal refreshments for arriving guests',
        src: '/images/Juice counter.png',
        tag: 'Welcome Bar'
      },
      {
        id: 'drinks-counter',
        title: 'Craft Beverage Island',
        caption: 'Traditional Elaneer payasam coolers & mocktail varieties',
        src: '/images/drinks counter.png',
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
        src: '/images/fruit carving counter.png',
        tag: 'Carving Display'
      },
      {
        id: 'fruit-carving-2',
        title: 'Royal Fruit Sculpture Display',
        caption: 'Decorative carved fruit arrangements adding visual grandeur',
        src: '/images/fruit carving.png',
        tag: 'Carving Display'
      },
      {
        id: 'fruit-counter-1',
        title: 'Fresh Exotic Fruit Counter',
        caption: 'Sliced exotic and seasonal fruits served fresh',
        src: '/images/fruit counter.png',
        tag: 'Fruit Island'
      },
      {
        id: 'fruit-counter-2',
        title: 'Gourmet Fruit Platter Station',
        caption: 'Curated fruit platters with honey and natural drizzles',
        src: '/images/fruit counter 2.png',
        tag: 'Fruit Island'
      },
      {
        id: 'dessert-counter',
        title: 'Traditional Sweet & Dessert Island',
        caption: 'Mysore Pak, Laddu, Halwa & artisanal pastries',
        src: '/images/dessert counter.png',
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
        src: '/images/beeda counter.png',
        tag: 'Live Paan'
      },
      {
        id: 'beeda-counter-2',
        title: 'Traditional Beeda Stall',
        caption: 'Customized digestive paan variations for post-feast satisfaction',
        src: '/images/beeda counter 2.png',
        tag: 'Live Paan'
      },
      {
        id: 'beeda-counter-3',
        title: 'Flavored Paan Corner',
        caption: 'Chocolate paan, fire paan & ice paan variations',
        src: '/images/beeda counter 3.png',
        tag: 'Live Paan'
      },
      {
        id: 'beeda-pan-counter',
        title: 'Digestive & Mukhwas Station',
        caption: 'Assorted aromatic mouth fresheners & betel nut preparations',
        src: '/images/beeda pan counter.png',
        tag: 'Digestives'
      }
    ]
  },
  {
    id: 'buffet-stall-views',
    name: 'Buffet Canopies & Event Setups',
    description: 'Illuminated food aisles, seating arrangements & hospitalities',
    stalls: [
      {
        id: 'stall-view-1',
        title: 'Illuminated Food Stall Corridor',
        caption: 'Architectural lighting with continuous food stall pathways',
        src: '/images/Stall view.png',
        tag: 'Stall Setup'
      },
      {
        id: 'stall-view-2',
        title: 'Grand Event Stall Village',
        caption: 'Custom decorated canopy stalls for wedding receptions',
        src: '/images/Stall view 1.png',
        tag: 'Stall Setup'
      },
      {
        id: 'welcome-girls',
        title: 'Traditional Welcome Hospitality',
        caption: 'Gracious traditional hospitality stewards greeting your arriving guests',
        src: '/images/Welcome girls.png',
        tag: 'Hospitality'
      },
      {
        id: 'table-chair',
        title: 'Royal Seating & Banquet Arrangement',
        caption: 'Elegantly draped dining tables & comfortable seating layouts',
        src: '/images/table chair.png',
        tag: 'Banquet Decor'
      }
    ]
  }
];
