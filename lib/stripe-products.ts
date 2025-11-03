export interface StripeProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  paymentLink: string;
  groupSize: string;
  priceDescription: string;
}

export interface StripeAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  paymentLink: string;
  category: 'tour-addon';
}

export const STRIPE_TOUR_PRODUCTS: StripeProduct[] = [
  // 6-Hour Seattle Essentials
  {
    id: 'per-person-6hour',
    name: '6-Hour Seattle Essentials',
    price: 250.00,
    description: 'Discover Seattle\'s heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, and stroll the waterfront — all with a friendly local guide.',
    paymentLink: 'https://buy.stripe.com/7sY9AV78D0Mv5ZY1bD38401',
    groupSize: 'per-person',
    priceDescription: 'per person'
  },
  {
    id: 'solo-traveler-6hour',
    name: '6-Hour Seattle Essentials (Solo)',
    price: 399.00,
    description: 'Discover Seattle\'s heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, and stroll the waterfront — all with a friendly local guide.',
    paymentLink: 'https://buy.stripe.com/8x2bJ3gJdeDl9cabQh38400',
    groupSize: '1',
    priceDescription: 'solo traveler'
  },
  {
    id: 'family-pack-6hour',
    name: '6-Hour Seattle Essentials (Family Pack)',
    price: 750.00,
    description: 'Discover Seattle\'s heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, and stroll the waterfront — all with a friendly local guide.',
    paymentLink: 'https://buy.stripe.com/3cIfZj0Kf9j18868E538402',
    groupSize: 'family',
    priceDescription: '2 adults + up to 3 kids under 12'
  },
  // 7-Hour Seattle Highlights
  {
    id: 'per-person-7hour',
    name: '7-Hour Seattle Highlights',
    price: 300.00,
    description: 'Everything in the Essentials Tour plus Kerry Park for Seattle\'s iconic skyline view and a pre-ordered Molly Moon\'s Ice Cream pickup — Seasonal and subject to weather conditions.',
    paymentLink: 'https://buy.stripe.com/new-7hour-per-person',
    groupSize: 'per-person',
    priceDescription: 'per person'
  },
  {
    id: 'solo-traveler-7hour',
    name: '7-Hour Seattle Highlights (Solo)',
    price: 450.00,
    description: 'Everything in the Essentials Tour plus Kerry Park for Seattle\'s iconic skyline view and a pre-ordered Molly Moon\'s Ice Cream pickup — Seasonal and subject to weather conditions. ',
    paymentLink: 'https://buy.stripe.com/new-7hour-solo',
    groupSize: '1',
    priceDescription: 'solo traveler'
  },
  {
    id: 'family-pack-7hour',
    name: '7-Hour Seattle Highlights (Family Pack)',
    price: 900.00,
    description: 'Everything in the Essentials Tour plus Kerry Park for Seattle\'s iconic skyline view and a pre-ordered Molly Moon\'s Ice Cream pickup — Seasonal and subject to weather conditions.',
    paymentLink: 'https://buy.stripe.com/new-7hour-family',
    groupSize: 'family',
    priceDescription: '2 adults + up to 3 kids under 12'
  },
  // 8-Hour Seattle Complete
  {
    id: 'per-person-8hour',
    name: '8-Hour Seattle Complete',
    price: 350.00,
    description: 'The ultimate layover adventure. Includes everything in the Essentials Tour, plus Space Needle admission to go inside and visit the observation deck.',
    paymentLink: 'https://buy.stripe.com/new-8hour-per-person',
    groupSize: 'per-person',
    priceDescription: 'per person (includes Space Needle admission)'
  },
  {
    id: 'solo-traveler-8hour',
    name: '8-Hour Seattle Complete (Solo)',
    price: 499.00,
    description: 'The ultimate layover adventure. Includes everything in the Essentials Tour, plus Space Needle admission to go inside and visit the observation deck.',
    paymentLink: 'https://buy.stripe.com/bJe5kFeB5dzh2NMg6x38403',
    groupSize: '1',
    priceDescription: 'solo traveler (includes Space Needle admission)'
  }
];

export const STRIPE_ADD_ONS: StripeAddOn[] = [
  {
    id: 'fremont-troll-dicks-burgers',
    name: "Fremont Troll + Dick's Burgers",
    price: 120.00,
    description: 'Optional curated add-on (requires 9+ hour layover): Visit the famous Fremont Troll and Dick\'s Drive-In for classic Seattle burgers. Price covers coordination, guide time, and transportation. Food not included.',
    paymentLink: 'https://buy.stripe.com/new-addon-fremont-dicks',
    category: 'tour-addon'
  },
  {
    id: 'amazon-spheres-top-pot',
    name: 'Amazon Spheres + Top Pot Donuts',
    price: 120.00,
    description: 'Optional curated add-on (requires 9+ hour layover): Amazon Spheres (outside view) and Top Pot Doughnuts. Price covers coordination, guide time, and transportation. Purchases not included.',
    paymentLink: 'https://buy.stripe.com/new-addon-amazon-toppot',
    category: 'tour-addon'
  },
  {
    id: 'filson-rei-shopping',
    name: 'Filson & REI Shopping Stop',
    price: 120.00,
    description: 'Optional curated add-on (requires 9+ hour layover): Visit Filson Flagship and REI Seattle outdoor store. Price covers coordination, guide time, and transportation. Purchases not included.',
    paymentLink: 'https://buy.stripe.com/new-addon-filson-rei',
    category: 'tour-addon'
  },
  {
    id: 'queen-anne-view-coffee-stop',
    name: 'Queen Anne View & Coffee Stop',
    price: 120.00,
    description: 'After your skyline moment at Kerry Park, stroll through the charming Queen Anne neighborhood to Café Hagen, a Scandinavian-style café known for specialty coffee, pastries, and calm local vibes. No Uber needed — a perfect scenic & relaxing add-on within walking distance.',
    paymentLink: 'https://buy.stripe.com/new-addon-filson-rei',
    category: 'tour-addon'
  }
];

export function getProductByGroupSize(travelers: number, duration: '6h' | '7h' | '8h' = '6h'): StripeProduct | null {
  if (travelers === 1) {
    return STRIPE_TOUR_PRODUCTS.find(p => p.id === `solo-traveler-${duration === '6h' ? '6hour' : duration === '7h' ? '7hour' : '8hour'}`) || null;
  } else if (travelers >= 2 && travelers <= 4) {
    return STRIPE_TOUR_PRODUCTS.find(p => p.id === `per-person-${duration === '6h' ? '6hour' : duration === '7h' ? '7hour' : '8hour'}`) || null;
  } else if (travelers >= 5 && duration !== '8h') {
    // Family pack only available for 6h and 7h tours
    return STRIPE_TOUR_PRODUCTS.find(p => p.id === `family-pack-${duration === '6h' ? '6hour' : '7hour'}`) || null;
  }
  return null;
}

export function calculateTotalPrice(product: StripeProduct, travelers: number, addOns: StripeAddOn[] = []): number {
  let basePrice = 0;

  if (product.groupSize === '1') {
    // Solo traveler - fixed price
    basePrice = product.price;
  } else if (product.groupSize === 'per-person') {
    // Per-person pricing
    basePrice = product.price * travelers;
  } else if (product.groupSize === 'family') {
    // Family pack - fixed price for 2 adults + up to 3 kids under 12
    basePrice = product.price;
  }

  const addOnTotal = addOns.reduce((total, addOn) => total + addOn.price, 0);

  return basePrice + addOnTotal;
}

export function redirectToStripeCheckout(product: StripeProduct, addOns: StripeAddOn[] = []): void {
  // For now, redirect to the main product's Stripe payment link
  // In a more complex setup, you'd create a custom checkout session that includes add-ons
  window.open(product.paymentLink, '_blank');
}


export const STRIPE_TOUR_PRODUCTSTest: StripeProduct[] = [
  // 6-Hour Seattle Essentials
  {
    id: 'per-person-6hour-test',
    name: '6-Hour Seattle Essentials test',
    price: 1.00,
    description: 'Discover Seattle\'s heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, and stroll the waterfront — all with a friendly local guide.',
    paymentLink: 'https://buy.stripe.com/7sY9AV78D0Mv5ZY1bD38401',
    groupSize: 'per-person',
    priceDescription: 'per person'
  },
  {
    id: 'solo-traveler-6hour-test',
    name: '6-Hour Seattle Essentials (Solo)',
    price: 1.00,
    description: 'Discover Seattle\'s heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, and stroll the waterfront — all with a friendly local guide.',
    paymentLink: 'https://buy.stripe.com/8x2bJ3gJdeDl9cabQh38400',
    groupSize: '1',
    priceDescription: 'solo traveler'
  },
  {
    id: 'family-pack-6hour',
    name: '6-Hour Seattle Essentials (Family Pack)',
    price: 750.00,
    description: 'Discover Seattle\'s heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, and stroll the waterfront — all with a friendly local guide.',
    paymentLink: 'https://buy.stripe.com/3cIfZj0Kf9j18868E538402',
    groupSize: 'family',
    priceDescription: '2 adults + up to 3 kids under 12'
  },
  // 7-Hour Seattle Highlights
  {
    id: 'per-person-7hour',
    name: '7-Hour Seattle Highlights',
    price: 300.00,
    description: 'Everything in the Essentials Tour plus Kerry Park for Seattle\'s iconic skyline view and a pre-ordered Molly Moon\'s Ice Cream pickup — Seasonal and subject to weather conditions.',
    paymentLink: 'https://buy.stripe.com/new-7hour-per-person',
    groupSize: 'per-person',
    priceDescription: 'per person'
  },
  {
    id: 'solo-traveler-7hour',
    name: '7-Hour Seattle Highlights (Solo)',
    price: 450.00,
    description: 'Everything in the Essentials Tour plus Kerry Park for Seattle\'s iconic skyline view and a pre-ordered Molly Moon\'s Ice Cream pickup — Seasonal and subject to weather conditions. ',
    paymentLink: 'https://buy.stripe.com/new-7hour-solo',
    groupSize: '1',
    priceDescription: 'solo traveler'
  },
  {
    id: 'family-pack-7hour',
    name: '7-Hour Seattle Highlights (Family Pack)',
    price: 900.00,
    description: 'Everything in the Essentials Tour plus Kerry Park for Seattle\'s iconic skyline view and a pre-ordered Molly Moon\'s Ice Cream pickup — Seasonal and subject to weather conditions.',
    paymentLink: 'https://buy.stripe.com/new-7hour-family',
    groupSize: 'family',
    priceDescription: '2 adults + up to 3 kids under 12'
  },
  // 8-Hour Seattle Complete
  {
    id: 'per-person-8hour',
    name: '8-Hour Seattle Complete',
    price: 350.00,
    description: 'The ultimate layover adventure. Includes everything in the Essentials Tour, plus Space Needle admission to go inside and visit the observation deck.',
    paymentLink: 'https://buy.stripe.com/new-8hour-per-person',
    groupSize: 'per-person',
    priceDescription: 'per person (includes Space Needle admission)'
  },
  {
    id: 'solo-traveler-8hour',
    name: '8-Hour Seattle Complete (Solo)',
    price: 499.00,
    description: 'The ultimate layover adventure. Includes everything in the Essentials Tour, plus Space Needle admission to go inside and visit the observation deck.',
    paymentLink: 'https://buy.stripe.com/bJe5kFeB5dzh2NMg6x38403',
    groupSize: '1',
    priceDescription: 'solo traveler (includes Space Needle admission)'
  }
];
