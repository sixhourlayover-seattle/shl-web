import React from 'react';

export const GlobalText = {
  bookNow: "Book Now",
  learnHowItWorks: "Learn How It Works",
  viewAllFAQs: "View All FAQs",
  bookYourTourNow: "Book Your Tour Now",
  callUsNow: "Call Us Now",
  emailQuestions: "Email Questions",
  bookYourAdventureToday: "Book Your Adventure Today",
  footerSlogan: "Making layovers memorable, one city at a time.",
  quickLinks: "Quick Links",
  legal: "Legal",
  copyright: `© ${new Date().getFullYear()} The Six-Hour Layover, Seattle`,
  homeLink: "🏠 Home",
  howItWorksLink: "⚙️ How It Works",
  pricingLink: "💰 Tours & Pricing",
  faqLink: "❓ FAQs",
  aboutLink: "👥 About",
  contactLink: "📞 Contact",
  termsLink: "📄 Terms of Service",
  privacyLink: "🔒 Privacy Policy",
  appName: "The Six-Hour Layover",
  email: "Email",
  emailAddress: "booking@sixhourlayover.com",
  phone: "Phone",
  phoneNumber: "(206) 486-6398",
};

export const AboutPageText = {
  title: "About Us",
  subtitle: "Out to the city. Back on time. Turn your layover into the highlight of your trip.",
  description: <>The Six-Hour Layover was created for travelers who want more than airport lounges. In just a few hours, we'll take you from <strong>SEA Airport into Seattle's highlights</strong> &mdash; Pike Place Market, waterfront views, and local stories &mdash; and get you back with a guaranteed <strong>2-hour buffer</strong> before boarding.</>,
  privateTours: <>Our tours are <strong>private and stress-free</strong>, with <strong>multilingual options</strong> available.</>,
  multilingualTitle: "Multilingual Tours Available",
  alwaysAvailable: "Always Available",
  englishTours: <><strong>English</strong> - All tours are conducted in English by default</>,
  uponRequest: "Upon Request",
  additionalLanguages: "Additional languages available subject to guide availability:",
  languages: ['Mandarin', 'Japanese', 'Spanish', 'French', 'Turkish'],
  moreComingSoon: "More coming soon",
  confirmLanguage: <><strong>Please confirm your preferred language when booking.</strong></>,
  ourStoryTitle: "Our Story",
  ourStorySubtitle: "Born from the simple idea that layovers shouldn't be wasted time",
  byTheNumbers: "By the Numbers",
  whatDrivesUs: "What Drives Us",
  whatDrivesUsSubtitle: "Our core values shape every tour we create and every experience we deliver",
  ourMissionTitle: "Our Mission",
  ourMissionDescription: <>To transform every layover into a highlight of your journey. We believe that even a few hours in a new city can create lasting memories, and we're here to make that happen &mdash; stress-free, perfectly timed, and unforgettable.</>,
  missionSlogan: "Making layovers memorable, one city at a time",
  readyToExperience: "Ready to Experience Seattle?",
  readyToExperienceSubtitle: "Join the thousands of travelers who've discovered that layovers can be the best part of their journey",
};

export const TEAM_VALUES = [
  {
    title: "Local Expertise",
    description: "Our guides are Seattle locals who know the city inside and out. We share authentic experiences, not tourist traps.",
    icon: "🌟"
  },
  {
    title: "Layover Specialists",
    description: "We understand the unique challenges of layover travel. Every detail is designed around tight schedules and stress-free experiences.",
    icon: "✈️"
  },
  {
    title: "Guaranteed Reliability",
    description: "Your flight is our priority. We track delays, monitor traffic, and guarantee you'll be back with time to spare.",
    icon: "⏰"
  },
  {
    title: "Personal Touch",
    description: "Small groups, personalized attention, and flexibility to adapt to your interests and pace.",
    icon: "💙"
  }
];

export const STORY_POINTS = [
  {
    title: "The Problem We Solved",
    content: "Too many travelers waste precious layover hours stuck in the airport, missing the chance to experience amazing cities like Seattle. Long layovers can be boring, but short ones feel too risky to leave the airport."
  },
  {
    title: "Our Solution",
    content: "We created the perfect middle ground: expertly timed tours that maximize your Seattle experience while guaranteeing you'll make your next flight. No stress, no guesswork, just unforgettable memories."
  },
  {
    title: "Why Seattle?",
    content: "Seattle is the perfect layover city. With efficient light rail connections, world-class food, iconic landmarks, and stunning views all within reach, you can genuinely experience the city in just a few hours."
  }
];

export const STATS = [
  { number: "20+", label: "Countries Served" },
  { number: "100%", label: "On-Time Return Rate" },
  { number: "6", label: "Perfect Hours" },
  { number: "1000+", label: "Happy Travelers" }
];

export const BookPageText = {
  title: "Book Your Seattle Adventure",
  subtitle: "Just a few steps to secure your perfect Seattle layover experience",
};

export const ContactPageText = {
  title: "Contact Us",
  subtitle: "Ready to book your Seattle layover adventure? We're here to help make it happen.",
  bookingInfoTitle: "Booking Information",
  bookingInfoSubtitle: "Here's what to expect when you contact us",
  quickQuestionsTitle: "Quick Questions",
  quickQuestionsSubtitle: "Common questions we get from travelers",
  serviceInfoTitle: "Service Information",
  businessHours: "Business Hours",
  phoneSupport: "Phone Support:",
  phoneSupportHours: "7 days a week\n8:00 AM - 8:00 PM PST",
  emailResponse: "Email Response:",
  emailResponseHours: "2-4 hours during business hours",
  serviceArea: "Service Area",
  airport: "Airport:",
  airportName: "Seattle-Tacoma International (SEA)",
  tourAreas: "Tour Areas:",
  tourAreasList: "Downtown Seattle\nPike Place Market\nWaterfront & Space Needle\nKerry Park (Premium tours)",
  emergencyTitle: "Day-of-Tour Emergency",
  emergencySubtitle: "If you need to reach us on the day of your tour (flight changes, delays, etc.), call us immediately:",
  emergencyHotline: "(206) 486-6398",
  emergencyNote: "We monitor this line closely on tour days to handle any last-minute changes",
  ctaTitle: "Ready to Book Your Seattle Adventure?",
  ctaSubtitle: "Contact us today and we'll take care of all the details for your perfect layover experience",
};

export const CONTACT_METHODS = [
  {
    title: "Email Us",
    subtitle: "Best for booking and detailed questions",
    contact: "booking@sixhourlayover.com",
    href: "mailto:booking@sixhourlayover.com?subject=Seattle Layover Tour Booking",
    icon: "📧",
    description: "We typically respond within 2-4 hours during business hours"
  },
  {
    title: "Call Us",
    subtitle: "For urgent questions or immediate assistance",
    contact: "(206) 486-6398",
    href: "tel:+12064866398",
    icon: "📞",
    description: "Available 7 days a week, 8 AM - 8 PM PST"
  }
];

export const BOOKING_INFO = [
  {
    title: "What We Need",
    items: [
      "Your flight arrival and departure times",
      "Number of travelers (ages of children if applicable)",
      "Any special requests or preferences",
      "Preferred tour option (6, 7, or 8-hour)"
    ]
  },
  {
    title: "What We'll Send",
    items: [
      "Booking confirmation with all details",
      "Your guide's contact information",
      "Detailed meeting instructions",
      "Flight tracking confirmation"
    ]
  }
];

export const FAQ_QUICK = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 24-48 hours in advance, though we can often accommodate same-day bookings if you contact us early."
  },
  {
    question: "What if my flight is delayed?",
    answer: "No problem! We track your flight in real-time and adjust pickup times automatically. Your tour will still happen."
  },
  {
    question: "Can I cancel or reschedule?",
    answer: "Yes, we offer free cancellation up to 24 hours before your tour. Rescheduling is also flexible based on availability."
  }
];

export const FaqPageText = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about your Seattle layover adventure",
  ctaTitle: "Still have questions?",
  ctaSubtitle: "Contact us directly — we'll make sure your layover is stress-free from start to finish.",
};

export const FAQ_SECTIONS = [
  {
    title: "Flight Delays & Timing",
    icon: "✈️",
    color: "from-blue-500 to-cyan-500",
    faqs: [
      {
        question: "What if my flight is delayed or arrives early?",
        answer: "No problem — we track your flight in real time. If your plane lands later or earlier than expected, your Layover Concierge will adjust the pickup time so you never miss your tour."
      },
      {
        question: "Is 6 hours really enough to explore Seattle?",
        answer: "Absolutely. We've designed this as a condensed, stress-free experience that saves you the hassle of figuring things out on your own. No waiting in long lines, no rushing between places, no worrying about souvenirs. Our layover specialists guide you through Seattle's highlights so you can enjoy food, views, and photos &mdash; and still return to the airport with time to spare.\n\nMost people say, \"I've been to Seattle, but only in the airport.\" With us, you'll leave saying, \"I really felt Seattle\" &mdash; with stories, photos, and memories worth sharing."
      },
      {
        question: "Where do we meet at the airport?",
        answer: "Your Concierge greets you right at the Arrivals Baggage Claim area (with a sign) and will also send you a WhatsApp/text update before you land. We'll guide you to the Uber pickup point, handle the ride coordination, and start your adventure together."
      },
      {
        question: "Can I bring my luggage?",
        answer: "We recommend using the luggage storage service at SEA Airport for convenience. The cost is about $10–15 per bag, and guests pay this fee directly to the storage provider &mdash; it is not included in your tour price."
      }
    ]
  },
  {
    title: "Cancellation, Booking & Transportation",
    icon: "💳",
    color: "from-green-500 to-emerald-500",
    faqs: [
      {
        question: "How much does it cost?",
        answer: "Tours are priced simply:\n- Solo Traveler — $399\n- 2–3 Travelers — $250 pp\n- 4–5 Travelers — $220 pp\n- Family Pack — $750 flat (2 adults + up to 3 kids under 12)\n- Extra kids (under 12) — $199 each\n\nSee our Tours & Pricing page for details."
      },
      {
        question: "How do I book and pay?",
        answer: "All bookings are made online through our secure system - simply click the \"Book Now\" button. We accept all major cards, and you will receive instant confirmation."
      },
      {
        question: "How are children priced?",
        answer: "Children aged 0–3 join free.\nFamily Pack includes 2 adults + up to 3 kids under 12 for $750 flat.\nExtra kids under 12 are $199 each."
      },
      {
        question: "Who provides the transportation during the tour?",
        answer: "For all of our tours, transportation is arranged through Uber/Lyft ride-share services. These providers carry $1 million in liability coverage per ride, which protects all passengers in the event of an accident.\n\nWe handle all the logistics &mdash; meeting your driver, coordinating pickup/drop-off, and keeping the schedule on track &mdash; but we do not own or operate the vehicles. This means the rides are fully insured by Uber/Lyft, while we focus on ensuring your journey is smooth and stress-free."
      },
      {
        question: "What if I need to cancel?",
        answer: "No problem. You'll receive a full refund with at least 24 hours' notice &mdash; our goal is to keep things stress-free and flexible."
      },
      {
        question: "Are there refunds?",
        answer: "Yes &mdash; if your flight is cancelled or you cancel more than 24 hours in advance, you'll receive a full refund."
      }
    ]
  },
  {
    title: "Private vs. Group",
    icon: "👥",
    color: "from-purple-500 to-pink-500",
    faqs: [
      {
        question: "Is this a private tour or group tour?",
        answer: "The Seattle Highlights Layover Tour is private &mdash; just you, your group, and your Layover Specialist.\n\nThe Pike Place Market Food Tour is a small-group partner experience and may include other travelers.\n\nEither way, you'll enjoy seamless airport pickup, timing, and our guaranteed on-time return."
      },
      {
        question: "Do you offer tours in my language?",
        answer: "Tours are always available in English. Additional languages &mdash; including Mandarin, French, Turkish, Japanese, and Spanish &mdash; are offered upon request and subject to guide availability. Please confirm your preferred language when booking. More languages coming soon."
      }
    ]
  },
  {
    title: "On-Time Guarantee",
    icon: "⏰",
    color: "from-orange-500 to-red-500",
    faqs: [
      {
        question: "Will I miss my flight?",
        answer: "No. Every tour includes a 2-hour buffer built in. If traffic or delays occur, we'll adjust the schedule to get you back on time."
      },
      {
        question: "How do you make sure I'm back with time to spare?",
        answer: "Every tour is built around your flight schedule. We track traffic and flights in real time and guarantee you'll be back at SEA with at least a 2-hour buffer before boarding. Peace of mind is part of the service."
      }
    ]
  },
  {
    title: "Physical Demand & Accessibility",
    icon: "🚶",
    color: "from-indigo-500 to-purple-500",
    faqs: [
      {
        question: "Is the tour physically demanding?",
        answer: "No. Tours are light walking only, with plenty of rest stops. They're suitable for all ages, including children, and we can adjust pacing for families if needed."
      },
      {
        question: "Is this family-friendly?",
        answer: "Absolutely. We welcome kids, seniors, and multigenerational groups. Tours are flexible in pacing, with rest breaks and food stops that work for families."
      }
    ]
  },
  {
    title: "Customization",
    icon: "⚙️",
    color: "from-teal-500 to-blue-500",
    faqs: [
      {
        question: "Can I customize my layover tour?",
        answer: "Yes. Tell us your preferences (more food, less walking, specific landmarks) and your Concierge will adapt the route."
      },
      {
        question: "Can I add food or coffee stops?",
        answer: "Definitely! Choose from our Add-Ons Menu (Dick's Burger, Top Pot Coffee, Molly Moon's Ice Cream, Starbucks Reserve) when booking."
      },
      {
        question: "Can I bring home souvenirs from Seattle?",
        answer: "Yes! Every Six-Hour Layover guest receives a reusable tote bag, and you can pre-order local favorites like chowder, cheese, coffee, cherries, or smoked salmon. We'll have everything packed and ready when you arrive.\n\nSee our Gift Tote Pre-Order page for details."
      }
    ]
  },
  {
    title: "Weather",
    icon: "🌧️",
    color: "from-slate-500 to-gray-500",
    faqs: [
      {
        question: "What happens if there's bad weather?",
        answer: "Seattle's weather is part of the charm! We provide umbrellas and adjust pacing &mdash; and if needed, we switch to indoor highlights like Chihuly Garden, MoPOP, or the Starbucks Reserve Roastery."
      }
    ]
  }
];

export const HowItWorksPageText = {
  title: "How It Works",
  subtitle: "From airport pickup to guaranteed on-time return — here's how we make your Seattle layover unforgettable",
  whatMakesUsDifferentTitle: "What Makes Us Different",
  whatMakesUsDifferentSubtitle: "We're not just a tour company — we're layover specialists who understand the unique challenges of short airport connections",
  transportationTitle: "Transportation Details",
  transportationSubtitle: "Here's what you need to know about getting around",
  rideServiceTitle: "Ride Service",
  rideServiceDescription: "Transportation is arranged through Uber/Lyft ride-share services with $1 million liability coverage per ride.",
  rideServicePoint1: "• We handle all coordination and logistics",
  rideServicePoint2: "• Professional drivers with full insurance",
  rideServicePoint3: "• Direct airport-to-downtown service",
  luggageStorageTitle: "Luggage Storage",
  luggageStorageDescription: "SEA Airport offers secure Smarte Carte storage for $10-15 per bag (paid directly to storage provider).",
  luggageStoragePoint1: "• We guide you through the storage process",
  luggageStoragePoint2: "• Secure, monitored storage facility",
  luggageStoragePoint3: "• Easy retrieval upon return",
  ctaTitle: "Ready to Experience Seattle?",
  ctaSubtitle: "Book your layover tour today and transform your airport downtime into an unforgettable Seattle adventure",
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Book Your Tour",
    description: "Contact us via email or phone to secure your spot. We'll send confirmation details and track your flight.",
    icon: "📧",
    details: [
      "Email <strong>booking@sixhourlayover.com</strong> or call <strong>(206) 486-6398</strong>",
      "We'll confirm your booking and send you detailed instructions",
      "Flight tracking begins 24 hours before arrival"
    ]
  },
  {
    step: 2,
    title: "Airport Arrival & Meet-Up",
    description: "Land at SEA, clear customs, and meet your guide at baggage claim with a personalized sign.",
    icon: "🛬",
    details: [
      "Your guide meets you at baggage claim with a sign",
      "We help coordinate luggage storage if needed ($10-15 per bag)",
      "Quick briefing on the day's itinerary and timing"
    ]
  },
  {
    step: 3,
    title: "Transportation to Downtown",
    description: "Your guide coordinates Uber/Lyft rides and accompanies you downtown. Relax and enjoy the ride!",
    icon: "🚗",
    details: [
      "Guide handles all ride coordination and payment logistics",
      "Travel time: ~30 minutes to downtown Seattle",
      "Learn about Seattle during the scenic drive"
    ]
  },
  {
    step: 4,
    title: "Explore Seattle",
    description: "Visit Pike Place Market, see the fish toss, explore the waterfront, and enjoy curated local experiences.",
    icon: "🎯",
    details: [
      "Pike Place Market tour with insider knowledge",
      "Watch the famous fish throwing demonstration", 
      "Waterfront stroll with Space Needle views",
      "Optional add-ons: local food, coffee, or extended sightseeing"
    ]
  },
  {
    step: 5,
    title: "Return to Airport",
    description: "With a guaranteed 2-hour buffer, we ensure you're back at SEA with plenty of time for your next flight.",
    icon: "⏰",
    details: [
      "Departure timed with 2-hour buffer before your flight",
      "Guide accompanies you back to the airport",
      "Drop-off at the correct terminal for your departure"
    ]
  }
];

export const WHAT_MAKES_US_DIFFERENT = [
  {
    title: "Real-Time Flight Tracking",
    description: "We monitor your flight status and adjust pickup times automatically. No missed connections.",
    icon: "✈️"
  },
  {
    title: "Guaranteed On-Time Return",
    description: "Every tour includes a 2-hour buffer. We track traffic and adjust schedules to ensure you never miss your flight.",
    icon: "⏰"
  },
  {
    title: "Luggage Storage Guidance",
    description: "We help you navigate SEA's luggage storage options and guide you through the process.",
    icon: "🧳"
  },
  {
    title: "Local Expertise",
    description: "Our guides are Seattle locals who know the best spots, shortcuts, and hidden gems.",
    icon: "🌟"
  },
  {
    title: "Stress-Free Logistics",
    description: "We handle transportation coordination, timing, and all the details so you can just enjoy Seattle.",
    icon: "🎯"
  },
  {
    title: "Flexible Customization",
    description: "Tell us your preferences and we'll adapt the route. More food? Less walking? We've got you covered.",
    icon: "⚙️"
  }
];

export const HomePageText = {
  title: "Just 6 Hours in Seattle?",
  subtitle: "We've Got You!",
  description: "No stress. No guesswork. Just food, views, and a timed-to-perfection plan that gets you back for boarding.",
  shortLayovers: "Designed for layovers as short as 6 hours",
  meetup: "Meet-up at SEA Airport",
  features: "Food, views, photos, and a take-home treat",
  luggage: "Luggage storage guidance included",
  bookNow: "Book Now — Secure your Seattle layover today",
  lovedBy: "Loved by travelers from 20+ countries",
  thinking: "You're probably thinking…",
  thinking1Title: "“Six hours? Is that even enough?”",
  thinking1Description: "Absolutely. We've designed this as a condensed, <strong>no stress</strong> experience that <strong>skips lines</strong>, avoids hassles, and guides you through Seattle's highlights — food, views, and photos — all with <strong>time to spare</strong>.",
  thinking2Title: "“I don't want the stress of figuring out transportation.”",
  thinking2Description: "No stress at all. We handle the pickup, guide you through the city, and return you to the airport—zero guesswork.",
  thinking3Title: "“What about my luggage?”",
  thinking3Description: "Easy. SEA Airport offers secure Smarte Carte storage. Simply check your bags before your tour begins, and we'll guide you every step from there.",
  thinking4Title: "“I just want to taste, see, and feel Seattle—fast.”",
  thinking4Description: "That's exactly what we do. Local bites, skyline views, and iconic stops, all packed into a smooth, unforgettable layover.",
  whyItWorksTitle: "Why It Works",
  whyItWorksSubtitle: "Smart. Seamless. Unforgettable.",
  whyItWorksDescription: <>Most travelers waste hours stuck in the airport — <strong>but not you!</strong><br/>Our guided Seattle layover tours transform downtime into a highlight of your trip. From airport meet-up and smooth transfers into the city, to curated stops and a guaranteed <strong>2-hour buffer</strong> before your flight, every moment is stress-free.<br/>You'll return with stories, photos, and a little Seattle gift in hand.</>,
  journeyTitle: "Your Seattle Six-Hour Journey",
  journeySubtitle: "Choose your perfect Seattle layover experience",
  preview: "Preview Selected Tour",
  hidePreview: "Hide Preview",
  contact: "Contact",
  email: "Email",
  emailAddress: "booking@sixhourlayover.com",
  phone: "Phone",
  phoneNumber: "(206) 486-6398",
  countries: "20+",
  countriesLabel: "Countries",
  perfectTime: "6hrs",
  perfectTimeLabel: "Perfect Time",
  ctaTitle: "Seattle's best bites, views, and a guaranteed on-time return.",
  ctaSubtitle: "Loved by travelers from 20+ countries",
};

export const PricingPageText = {
  title: "Tours & Pricing",
  subtitle: "Choose your perfect Seattle layover adventure",
  pricingTitle: "Pricing",
  pricingSubtitle: "Ages 4+ count as travelers. Children 0–3 join free.",
  specialOffers: "Special Offers",
  familyBundle: "Family Bundle",
  familyBundleDescription: "<strong>2 adults + 2 children (ages 4–11) = $799 total</strong>",
  extraKids: "Extra Kids",
  extraKidsDescription: "<strong>Extra Kids (under 12): $199 each</strong><br />Add to Family Pack",
  pricingNote: "Children 0–3 join free. Children 4+ are priced as adults unless included in a Family Bundle.",
  whatsIncluded: "What's Always Included",
  giftTote: "🎁 Seattle Gift Tote",
  giftToteDescription: "Take a piece of Seattle home with you.",
  giftToteBundle: "Bundle any 3 for just",
  giftTotePrice: "$110",
  addOnsTitle: "Optional Add-Ons",
  addOnsSubtitle: "Quick bites & coffee upgrades during your layover (for longer layovers or upgrades)",
  oneAddOn: "1 Add-On",
  oneAddOnPrice: "$40",
  perPerson: "per person",
  twoAddOns: "2 Add-Ons",
  twoAddOnsPrice: "$75",
  popular: "Popular",
  threeAddOns: "3 Add-Ons",
  threeAddOnsPrice: "$110",
  cancellationPolicy: "Cancellation Policy",
  cancellationPolicyDescription: "Free cancellation up to 24 hours before your tour. No hidden fees.",
  tourNote: "<strong>Note:</strong> Each tour is a <strong>6-hour total experience</strong>, including airport pickup, guided sightseeing, and a guaranteed on-time return with a 2-hour flight buffer.",
  contact: "Contact Us",
  ctaTitle: "Ready to Book Your Seattle Adventure?",
  ctaSubtitle: "Join thousands of travelers who've made their layover unforgettable",
};

export const PrivacyPageText = {
  title: "Privacy Policy",
  description: "We collect minimal analytics to improve the app's performance and UX. No personal data is sold or shared.",
  whatWeCollect: "What we collect",
  anonymousUsage: "Anonymous usage events (if analytics enabled)",
  serverLogs: "Basic server logs (errors and performance metrics)",
  contact: "Contact",
  contactEmail: "Email: hello@sixhourlayover.com",
};

export const TermsPageText = {
  title: "Terms of Service",
  description: "Use at your own risk. Always leave generous time buffers for airport procedures.",
  liabilityTitle: "Liability",
  liabilityDescription: "We are not liable for missed flights, delays, or changes in local conditions.",
};

export const BookingFormText = {
  successTitle: "Booking Confirmed!",
  successMessage: "Thank you for booking your Seattle layover tour! We've received your request and will send you a confirmation email within 30 minutes with all the details.",
  whatsNext: "What's Next?",
  whatsNextItems: [
    "You'll receive a confirmation email with tour details",
    "We'll start tracking your flight 24 hours before arrival",
    "Your guide will contact you on the day of your tour",
    "We'll send meeting instructions and contact info"
  ],
  close: "Close",
  modalTitle: "Book Your Seattle Tour",
  step1: "Personal Information",
  step2: "Flight Details",
  step3: "Tour Preferences",
  step4: "Review & Confirm",
  firstName: "First Name",
  firstNamePlaceholder: "Enter your first name",
  lastName: "Last Name",
  lastNamePlaceholder: "Enter your last name",
  email: "Email Address",
  emailPlaceholder: "Enter your email address",
  phone: "Phone Number",
  phonePlaceholder: "Enter your phone number",
  flightInfo: "Flight Information",
  flightInfoNote: "We'll track your flights in real-time and adjust pickup times automatically if there are delays.",
  arrivalFlight: "Arrival Flight",
  departureFlight: "Departure Flight",
  date: "Date",
  time: "Time",
  flightNumber: "Flight Number",
  flightNumberPlaceholder: "e.g., AA1234",
  departureFlightNumberPlaceholder: "e.g., UA5678",
  tourOption: "Choose Your Tour",
  totalTravelers: "Total Travelers",
  adults: "Adults (13+)",
  children: "Children (0-12)",
  childrenAges: "Children's Ages",
  childrenAgesPlaceholder: "e.g., 8, 10, 12",
  addOns: "Add-Ons (Optional)",
  specialRequests: "Special Requests",
  specialRequestsPlaceholder: "Any special requests, accessibility needs, or preferences?",
  dietaryRestrictions: "Dietary Restrictions",
  dietaryRestrictionsPlaceholder: "Any dietary restrictions or allergies?",
  bookingSummary: "Booking Summary",
  personalInfo: "Personal Information",
  flightDetails: "Flight Details",
  tourSelection: "Tour Selection",
  agreeToTerms: "I agree to the <a href=\"/terms\" class=\"text-purple-600 hover:underline\" target=\"_blank\">Terms of Service</a> and <a href=\"/privacy\" class=\"text-purple-600 hover:underline\" target=\"_blank\">Privacy Policy</a>. I understand that this tour includes a guaranteed 2-hour buffer before my departure flight and that cancellations are free up to 24 hours before the tour.",
  previous: "Previous",
  next: "Next Step",
  confirmBooking: "Confirm Booking",
  submitting: "Submitting...",
  errors: {
    firstName: "First name is required",
    lastName: "Last name is required",
    email: "Email is required",
    invalidEmail: "Email is invalid",
    phone: "Phone number is required",
    arrivalDate: "Arrival date is required",
    arrivalTime: "Arrival time is required",
    arrivalFlight: "Arrival flight is required",
    departureDate: "Departure date is required",
    departureTime: "Departure time is required",
    departureFlight: "Departure flight is required",
    agreeToTerms: "You must agree to the terms and conditions",
    submit: "Booking submission failed. Please try again.",
  }
};

export const MascotSectionText = {
  defaultTitle: "Meet Our Mascot",
  defaultName: "Dog Name",
  defaultRole: "Chief Happiness Officer",
  defaultDescription: "Add your dog's description here",
  defaultImageAlt: "Our mascot",
  goodBoy: "“Good Boy”",
  inChinese: "In Chinese",
  retired: "Retired",
  fromAdventures: "From Adventures",
  cta: "Want to meet our mascot on your tour?",
  bookNow: "Book Your Seattle Adventure",
};

export const MobileNavText = {
  plan: "Plan",
  privacy: "Privacy",
  terms: "Terms",
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Tours & Pricing", href: "/pricing" },
  { name: "FAQs", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];
