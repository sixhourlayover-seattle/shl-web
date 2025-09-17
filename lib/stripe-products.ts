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
  {
    id: 'solo-traveler-6hour',
    name: 'Solo Traveler (6-Hour Layover Tour)',
    price: 399.00,
    description: 'Six-Hour Layover guided tour in Seattle including Pike Place Market, Seattle Waterfront, and airport transfer by Link Light Rail. Includes 2-hour buffer before flight.',
    paymentLink: 'https://buy.stripe.com/8x2bJ3gJdeDl9cabQh38400',
    groupSize: '1',
    priceDescription: '1 guest'
  },
  {
    id: '2-3-travelers-6hour',
    name: '2–3 Travelers (6-Hour Layover Tour)',
    price: 250.00,
    description: 'Six-Hour Layover guided tour in Seattle for 2–3 travelers. Includes Pike Place Market, Seattle Waterfront, and airport transfer by Link Light Rail. Includes 2-hour buffer before flight.',
    paymentLink: 'https://buy.stripe.com/7sY9AV78D0Mv5ZY1bD38401',
    groupSize: '2-3',
    priceDescription: 'per person'
  },
  {
    id: 'family-pack',
    name: 'Family Pack (2 adults + up to 3 kids)',
    price: 750.00,
    description: 'Six-Hour Layover guided tour for families (2 adults + up to 3 kids under 12). Includes Pike Place Market, Seattle Waterfront, and airport transfer by Link Light Rail. Includes 2-hour buffer before flight.',
    paymentLink: 'https://buy.stripe.com/3cIfZj0Kf9j18868E538402',
    groupSize: '2+3',
    priceDescription: '2 adults + up to 3 kids under 12'
  },
  {
    id: 'extra-child',
    name: 'Extra Child (Family Pack add-on)',
    price: 199.00,
    description: 'Add an additional child to a Family Pack booking. Includes same tour experience as Family Pack participants.',
    paymentLink: 'https://buy.stripe.com/bJe5kFeB5dzh2NMg6x38403',
    groupSize: '+1',
    priceDescription: 'additional child'
  }
];

export const STRIPE_ADD_ONS: StripeAddOn[] = [
  {
    id: 'dicks-burger-fremont-troll',
    name: "Dick's Burger + Fremont Troll",
    price: 80.00,
    description: 'Optional add-on stop: Dick\'s Drive-In (classic Seattle burger) and Fremont Troll photo stop. Price covers coordination, guide time, and Uber detour. Food not included.',
    paymentLink: 'https://buy.stripe.com/dRm7sN64z2UD9ca7A138404',
    category: 'tour-addon'
  },
  {
    id: 'starbucks-reserve-roastery',
    name: 'Starbucks Reserve Roastery',
    price: 80.00,
    description: 'Optional add-on stop: Starbucks Reserve Roastery on Capitol Hill. Price covers coordination, guide time, and Uber detour. Food and drinks not included.',
    paymentLink: 'https://buy.stripe.com/00w4gBgJd1Qzbki4nP38405',
    category: 'tour-addon'
  },
  {
    id: 'amazon-spheres-top-pot',
    name: 'Amazon Spheres + Top Pot Donuts',
    price: 80.00,
    description: 'Optional add-on stop: Amazon Spheres (outside view) and Top Pot Doughnuts. Price covers coordination, guide time, and Uber detour. Purchases not included.',
    paymentLink: 'https://buy.stripe.com/3cIaEZgJd66P4VU6vX38406',
    category: 'tour-addon'
  },
  {
    id: 'filson-rei-shopping',
    name: 'Filson & REI Shopping Stop',
    price: 80.00,
    description: 'Optional add-on stop: Visit Filson Flagship and REI Seattle outdoor store. Price covers coordination, guide time, and Uber detour. Purchases not included.',
    paymentLink: 'https://buy.stripe.com/dRmdRbeB57aTgEC2fH38408',
    category: 'tour-addon'
  },
  {
    id: 'molly-moons-ice-cream',
    name: "Molly Moon's Ice Cream (Kerry Park route only)",
    price: 30.00,
    description: 'Optional add-on stop near Kerry Park: Molly Moon\'s Ice Cream. Price covers coordination and guide time. Ice cream not included.',
    paymentLink: 'https://buy.stripe.com/00w3cx78D3YHagef2t38407',
    category: 'tour-addon'
  }
];

export function getProductByGroupSize(travelers: number): StripeProduct | null {
  if (travelers === 1) {
    return STRIPE_TOUR_PRODUCTS.find(p => p.id === 'solo-traveler-6hour') || null;
  } else if (travelers >= 2 && travelers <= 3) {
    return STRIPE_TOUR_PRODUCTS.find(p => p.id === '2-3-travelers-6hour') || null;
  } else if (travelers >= 4) {
    return STRIPE_TOUR_PRODUCTS.find(p => p.id === 'family-pack') || null;
  }
  return null;
}

export function calculateTotalPrice(product: StripeProduct, travelers: number, addOns: StripeAddOn[] = []): number {
  let basePrice = 0;

  if (product.id === 'solo-traveler-6hour') {
    basePrice = product.price;
  } else if (product.id === '2-3-travelers-6hour') {
    basePrice = product.price * travelers;
  } else if (product.id === 'family-pack') {
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