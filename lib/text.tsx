import React from 'react';

export const GlobalText = {
  bookNow: "Book Your Seattle Tour",
  learnHowItWorks: "Learn How It Works",
  viewAllFAQs: "View All FAQs",
  bookYourTourNow: "Book Your Seattle Tour",
  callUsNow: "Call Us Now",
  emailQuestions: "Email Questions",
  bookYourAdventureToday: "Book Your Seattle Tour",
  footerSlogan: "Making layovers memorable — one city at a time.",
  quickLinks: "Quick Links",
  legal: "Legal",
  copyright: `© ${new Date().getFullYear()} The Six-Hour Layover, Seattle`,
  homeLink: "🏠 Home",
  howItWorksLink: "⚙️ How It Works",
  pricingLink: "💰 Tours & Pricing",
  faqLink: "❔ FAQs",
  aboutLink: "👥 About",
  contactLink: "📞 Contact",
  termsLink: "📄 Terms of Service",
  privacyLink: "🔒 Privacy Policy",
  appName: "The Six-Hour Layover",
  email: "Email",
  emailAddress: "booking@sixhourlayover.com",
  phone: "Phone",
  phoneNumber: "(206) 928‑1277",
  whatsapp: "WhatsApp",
  whatsappNumber: "(206) 928‑1277",
  nonprofit: "🌱 Community Cultural Program (Nonprofit)"
};

export const AboutPageText = {
  // 1️⃣ Rename Section: About Us -> Why Us
  title: "Why Us",

  // 2️⃣ Replace long paragraph with one short paragraph (exact wording)
  description: (
    <>
      Out to the city. Back on time.
      <br /><br />

      The Six-Hour Layover is designed for travelers with limited time who want a calm, well-planned way to <strong>experience Seattle</strong>.
      <br /><br />

      Each experience is thoughtfully timed to reduce risk and help travelers return to the airport <strong>comfortably</strong>.
    </>
  ),

  multilingualTitle: "Multilingual Tours Available",
  alwaysAvailable: "Always Available",
  englishTours: (
    <>
      <strong>English</strong> - All tours are conducted in English by default
    </>
  ),
  uponRequest: "Upon Request",
  additionalLanguages: "Additional languages available subject to guide availability:",
  languages: ["Mandarin", "Spanish", "German", "French", "Japanese"],
  moreComingSoon: "More coming soon",
  confirmLanguage: (
    <>
      <strong>Please confirm your preferred language when booking.</strong>
    </>
  ),

  // “Our Story” Section – Rename & Replace
  ourStoryTitle: "How We Think About Your Layover",
  ourStorySubtitle: (
    <>
      When you only have a few hours in an unfamiliar city, more information doesn’t help.
      <br /><br />

      <strong>What helps is</strong>
      <br />

      knowing someone has already thought through timing, routes, and potential issues.
    </>
  ),



  byTheNumbers: "By the Numbers",

  // 7️⃣ Rename “What Drives Us”
  whatDrivesUs: "What Travelers Value Most",

  // Mission section (no changes)
  ourMissionTitle: "Our Mission",
  ourMissionDescription: (
    <>
      Our mission is simple: to turn every layover into a highlight of your journey — We
      design thoughtful, well-timed experiences that allow travelers to step into a city
      with confidence and return to the airport with appropriate time built into the itinerary.
      Along the way, we value cultural exchange, human connection, and working with people who 
      care deeply about sharing their city with others.
    </>
  ),
  missionSlogan: "Making layovers memorable, one city at a time",
  trainedGuideTeam:
    "Every tour is backed by a trained guide team, ensuring reliability even in rare last-minute changes.",
};



export const TEAM_VALUES = [
  {
    title: "Local Expertise",
    description: "Guides are Seattle locals who share authentic experiences.",
    icon: "🌟"
  },
  {
    title: "Layover Specialists",
    description: "We understand tight schedules; every detail is planned with precision.",
    icon: "✈️"
  },
  {
    title: "Guaranteed Reliability",
    description: "We monitor flights and traffic so you return with time to spare.",
    icon: "⏰"
  },
  {
    title: "Personal Touch",
    description: "Small groups and friendly guides who welcome you like family and friends.",
    icon: "💙"
  },
  {
    title: "Community Values",
    description: "We believe travel can create meaningful human connections. Our work supports individuals who are passionate about welcoming travelers, sharing local culture, and building experience through real-world interaction.",
    icon: "🤝"
  }
];

export const STORY_POINTS = [
  {
    title: "Our Story",
    content: "Inspired by the idea that layovers shouldn't be wasted."
  },
  {
    title: "The Problem",
    content: "Most travelers waste hours in airports."
  },
  {
    title: "Our Solution",
    // content: "Expertly timed tours that maximize your Seattle experience while guaranteeing your flight."
    content: "Thoughtfully timed tours that maximize your Seattle experience while planning around your flight schedule."
  },
  {
    title: "Why Seattle?",
    content: "Fast Light Rail, world-class food, iconic views all within minutes — perfect for a layover."
  }
];

export const STATS = [
  { number: "6, 7, 8", label: "Perfect Hours — Choose the tour that fits your layover" },
  // { number: "2-Hour", label: "Flight Buffer — Guaranteed return to SEA on time" },
  { number: "Built-In", label: "Flight Buffer — Appropriate return time planned around your departure" },
  { number: "100%", label: "Private Tours — Just you and your group, every time" },
  { number: "1 Loyal", label: "Mascot + Local Friends — Guai Guai (our good boy) and your guide-friend in Seattle, welcoming you like family" }
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
  emergencyHotline: "(206) 928‑1277",
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
    contact: "(206) 928‑1277",
    href: "tel:+12069281277",
    icon: "📞",
    description: "Available 7 days a week, 8 AM - 8 PM PST"
  },
  {
    title: "WhatsApp Us",
    subtitle: "Quick messaging and instant responses",
    contact: "(206) 928‑1277",
    href: "https://wa.me/12069281277",
    icon: "💬",
    description: "Fast messaging for quick questions and updates"
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
    answer: "No problem! We track your flight in real-time and adjust pickup times automatically. We’ll reassess the available time and adjust the itinerary when feasible. If the remaining layover is too short for a safe city visit, we’ll discuss the best available option with you."
  },
  {
    question: "Can I cancel or reschedule?",
    answer: "Yes, we offer free cancellation up to 24 hours before your tour. Rescheduling is also flexible based on availability."
  }
];

export const FaqPageText = {
  title: "Frequently Asked Questions",
  subtitle: "Helpful information for planning your Seattle layover",
  ctaTitle: "Still have questions?",
  ctaSubtitle: "Contact us directly for clarification before booking.",
};

export const FAQ_SECTIONS = [
  /* 1. Timing & Flight */
  {
    title: "Timing & Flight",
    icon: "✈️",
    color: "from-blue-500 to-cyan-500",
    faqs: [
      {
        question: "What if my flight is delayed or arrives early?",
        answer:
          "We monitor your flight status and adjust pickup timing when possible. All tours are planned with built-in buffer time to help you return comfortably."
      },
      {
        question: "Will I miss my flight?",
        answer:
          "Tours are designed with buffer time before departure. If conditions change, we adjust the route or return earlier when needed. Events outside our control (weather, airline changes, airport security delays) may affect timing. We recommend travel insurance for extra peace of mind."
      }
    ]
  },

  /* 2. Meetup & Logistics */
  {
    title: "Meetup & Logistics",
    icon: "📍",
    color: "from-indigo-500 to-purple-500",
    faqs: [
      {
        question: "Where will the guide meet me?",
        answer:
          // "Your Layover Specialist will meet you at your arrival gate or as close as possible inside SEA-TAC Airport. You’ll receive coordination details before landing."
          "Your Layover Specialist will coordinate your meeting at SEA-TAC Airport and provide clear meeting instructions before you arrive. You’ll receive coordination details before landing."
      },
      {
        question: "How do we get around the city?",
        answer:
          "Transportation includes Link Light Rail (included) and optional pre-arranged private airport transfers. We do not operate our own vehicles; all rides are provided by licensed third-party services."
      }
    ]
  },

  /* 3. Luggage */
  {
    title: "Luggage",
    icon: "🧳",
    color: "from-slate-500 to-gray-600",
    faqs: [
      {
        question: "Can I bring my luggage?",
        answer:
          "Yes. We recommend using the airport luggage storage service for convenience. Luggage storage fees are paid directly to the provider and are not included in your tour price."
      }
    ]
  },

  /* 4. Pricing & Booking */
  {
    title: "Pricing & Booking",
    icon: "💳",
    color: "from-green-500 to-emerald-500",
    faqs: [
      {
        question: "How much does the tour cost?",
        answer:
          "Pricing varies by tour length and group size. Please refer to the Pricing section for current rates."
      },
      {
        question: "How do I book and pay?",
        answer:
          "All bookings are made online through our secure system. Major credit cards are accepted, and confirmation is sent immediately."
      }
    ]
  },

  /* 5. Cancellation */
  {
    title: "Cancellation",
    icon: "❌",
    color: "from-red-500 to-orange-500",
    faqs: [
      {
        question: "What if I need to cancel?",
        answer:
          "Free cancellation is available up to 24 hours before your tour. Cancellations within 24 hours are non-refundable."
      }
    ]
  },

  /* 6. Accessibility & Language */
  {
    title: "Accessibility & Language",
    icon: "♿",
    color: "from-teal-500 to-blue-500",
    faqs: [
      {
        question: "Is the tour physically demanding or family-friendly?",
        answer:
          "The tour involves light walking with flexible pacing and rest stops. Suitable for most ages, including families and seniors."
      },
      {
        question: "Do you offer tours in my language?",
        answer:
          "Tours are always available in English. Mandarin and Japanese may be available upon request, subject to guide availability."
      }
    ]
  },

  /* 6. Customization */
  {
    title: "Customization",
    icon: "🎨",
    color: "from-teal-500 to-blue-500",
    faqs: [
      {
        question: "Can I customize stops or add food breaks?",
        answer:
          "Your guide can adjust pacing and stops when time allows. Food and drinks are purchased separately unless specifically noted."
      }
    ]
  }
];


export const HowItWorksPageText = {
  title: "How It Works",
  subtitle: "From airport pickup to a thoughtfully planned return — here’s how we make your Seattle layover unforgettable.",
  whatMakesUsDifferentTitle: "What Makes Us Different",
  whatMakesUsDifferentSubtitle: "We're not just a tour company — we're layover specialists who understand the unique challenges of short airport connections",
  transportationTitle: "Transportation Details",
  transportationSubtitle: "Here's what you need to know about getting around",
  rideServiceTitle: "Ride Service",
  rideServiceDescription: "Airport ↔ Downtown transportation is via Link Light Rail. Your guide accompanies you and provides Seattle and local context during the journey. Between Pike Place Market and the Waterfront, your guide uses the optimized walking route via the Overlook Walk. Your guide manages all logistics and timing.",
  rideServicePoint1: "• We handle all coordination and logistics",
  rideServicePoint2: "• Professional drivers with full insurance",
  rideServicePoint3: "• Direct airport-to-downtown service",
  luggageStorageTitle: "Luggage Storage",
  luggageStorageDescription: "SEA Airport offers secure Smarte Carte storage for a fee (paid directly to storage provider).",
  luggageStoragePoint1: "• We guide you through the storage process",
  luggageStoragePoint2: "• Secure, monitored storage facility",
  luggageStoragePoint3: "• Easy retrieval upon return",
  luggageStoragePoint4: "• View pricing and details",

  transportationTitle2: "What Does a 6-, 7-, or 8-Hour Layover Experience Mean?",
  transportationDescription: "The 6-, 7-, and 8-hour options refer to your total available layover window, not only the time spent at individual attractions. Your experience begins when you meet your guide at SEA and includes the guided journey into Seattle, curated city time, the return trip, and an appropriate airport return buffer. Your guide remains with you throughout the experience, including travel time, sharing local context and helping you make the most of the time available.",
  luggageStorageLinkUrl:
    "https://smartecarte.com/seattle-tacoma/",
  ctaTitle: "Ready to Experience Seattle?",
  ctaSubtitle: "Book your layover tour today and transform your airport downtime into an unforgettable Seattle adventure",
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: 'STEP 1',
    title: "Book Your Tour",
    description: "Contact us via email or phone to secure your spot. We'll send confirmation details and track your flight.",
    icon: "📧",
    details: [
      "Email <strong>booking@sixhourlayover.com</strong> or call <strong>(206) 928‑1277</strong>",
      "We'll confirm your booking and send you detailed instructions",
      "Flight tracking begins 24 hours before arrival"
    ]
  },
  {
    step: 'STEP 2',
    title: "Airport Arrival & Meet-Up",
    description: "Land at SEA, clear customs, and meet your guide at baggage claim with a personalized sign.",
    icon: "🛬",
    details: [
      "Your guide meets you at baggage claim with a sign",
      "We help coordinate luggage storage if needed.",
      "Quick briefing on the day's itinerary and timing"
    ]
  },
  {
    step: 'STEP 3',
    title: "Transportation to Downtown",
    description: "Your guide travels with you on the Link Light Rail between SEA Airport and downtown Seattle.",
    icon: "🚗",
    details: [
      "Your guide provides Seattle and local context during the journey",
      "Enjoy a simple, direct connection between SEA Airport and downtown Seattle",
      // "Learn about Seattle during the scenic journey"
    ]
  },
  {
    step: 'STEP 4',
    title: "Explore Seattle",
    description: "Experience Seattle's highlights with our curated tour options designed for different layover lengths.",
    icon: "🎯",
    details: [
      "6h Seattle Essentials – Pike Place Market + Waterfront",
      "7h Seattle Highlights – Pike Place Market + Waterfront + Iconic Seattle skyline view (Kerry Park)",
      "8h Seattle Complete – Pike Place Market + Space Needle admission (go inside, observation deck visit included)",
      "Optional curated add-ons available for 9+ hour layovers"
    ]
  },
  {
    step: 'STEP 5',
    title: "Return to Airport",
    description: "Tours include built-in buffer time to help ensure a smooth and timely return to SEA-TAC Airport.",
    icon: "⏰",
    details: [
      // "Departure planned with a 2-hour buffer before your flight",
      // "Guide accompanies you back to the airport on the Link Light Rail",
      // "Guide helps ensure you reach the correct terminal for your departure"
      "Return is planned with an appropriate airport buffer.",
      "Your guide accompanies you back to SEA Airport and helps you navigate to the appropriate terminal area for your departure."
    ]
  }
];

export const WHAT_MAKES_US_DIFFERENT = [
  {
    title: "Real-Time Flight Monitoring",
    description: "We monitor your flight status and adjust tour timing when needed to help keep your layover experience on track.",
    icon: "✈️"
  },
  {
    title: "Planned for a Smooth, Timely Return",
    description: "Every itinerary is planned around your flight schedule, with appropriate return time built in to support a comfortable airport connection.",
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
    title: "Expert Local Guidance",
    description: "We help shape your experience around your interests, pace, and available time — with practical local recommendations along the way.",
    icon: "⚙️"
  }
];

export const HomePageText = {
  title: "Just 6 Hours in Seattle?",
  subtitle: "We've Got You Covered!",
  description:
    "A thoughtfully designed layover experience — so you see the right parts of the city without rushing or second-guessing.",
  heroTagline: "Out to the city. Back on time.",

  // Section 2 (Four Bullets)
  shortLayovers: "Clear Starting Point\nNo guessing where or how to begin",
  meetup: "Realistic Timing\nPlanned with buffer, not wishful thinking",
  features: "A Curated Route, Not Just Stops\nSo you don’t miss what actually matters",
  luggage: "Simple, Human Communication\nClear guidance shared ahead of time",

  bookNow: "View Tours",

  thinking: "You're probably thinking…",

  // Sub-section 3 — Is this actually for me?
  thinkingSub3Title: "Is this actually for me?",
  thinking1Title: "“I don’t have much time, and I don’t want to figure everything out.”",
  thinking1Description:
    "This experience is designed for travelers on a layover, cruise stop, or short visit who want to enjoy Seattle without managing logistics on their own.",
  thinking2Title: "“I’d rather enjoy the city than constantly check maps and timing.”",
  thinking2Description:
    "It’s especially well-suited for first-time visitors, solo travelers, and those navigating in a non-native language.",

  // Sub-section 4 — Why not just do this myself?
  thinkingSub4Title: "Why not just do this myself?",
  thinking3Title: "“I can go to Pike Place myself — what’s the difference?”",
  thinking3Description:
    "Seattle’s highlights are busy and spread out. This experience follows a hand-picked route with selected stops, so you see what truly matters instead of wandering or backtracking.",
  thinking4Title: "“I don’t want to finish the day wondering what I missed.”",
  thinking4Description:
    "Same city. Same landmarks.\nA very different experience — one designed to reduce guesswork and regret.",

  // New Section: Why This Actually Works
  worksTitle: "Why This Actually Works",
  works1Title: "Real-world timing",
  works1Description:
    "Designed for real-world timing, not ideal scenarios\nThis experience is built around how cities actually move — not best-case assumptions.",
  works2Title: "Built-in buffer",
  works2Description:
    "Planned conservatively, with buffer built in\nSo your day feels unhurried, even when the city is busy or unpredictable.",
  works3Title: "Sequence matters",
  works3Description:
    "The sequence of stops is intentional\nWhere you begin, when you move, and how long you stay are all chosen to reduce friction, fatigue, and last-minute stress.",
  works4Title: "Outcome focus",
  works4Description:
    "The goal isn’t to fit everything in\nIt’s to make the time work — knowing you’ll return comfortably, without second-guessing the day.",

  // New Section: This Experience Is For You If…
  forYouTitle: "This Experience Is For You If…",
  forYou1Title: "Decision fatigue",
  forYou1Description:
    "You don’t want to spend a short visit figuring things out as you go\nYou’d rather arrive knowing the day already makes sense.",
  forYou2Title: "Presence over logistics",
  forYou2Description:
    "You want to enjoy the city, not constantly check time and directions\nBeing present matters more than managing details.",
  forYou3Title: "Quality over quantity",
  forYou3Description:
    "You care more about seeing the right things than seeing everything\nA few meaningful moments matter more than a long checklist.",

  forYou4Title: "Meaning over itineraries",
  forYou4Description : "Not every traveler needs a full tour.\nSome people book guided experiences. Some prefer DIY.\nOthers simply want one meaningful local moment to add to their trip — a calm, human-scale experience that fits naturally into what they’ve already planned, and often becomes the part they remember most.",
  
  forYou5Title: "Final identity confirmation",
  forYou5Description:
    "You value calm pacing and thoughtful planning\nIf that sounds like you, this journey was designed exactly for that mindset.",


  // Tour section labels (unchanged)
  journeyTitle: "Your Seattle Six-Hour Journey",
  journeySubtitle: "Choose your perfect Seattle layover experience",
  preview: "Preview Selected Tour",
  hidePreview: "Hide Preview",

  // Contact
  contact: "Contact",
  email: "Email",
  emailAddress: "booking@sixhourlayover.com",
  phone: "Phone",
  phoneNumber: "(206) 928-1277",
  whatsapp: "WhatsApp",
  whatsappNumber: "(206) 928-1277",

  // Final CTA
  ctaTitle:
    "A calm, well-timed way to experience Seattle — even on a short stop.\n\nThis isn’t about seeing everything.\nIt’s about knowing the time you have is used well —\nwith a plan that respects both your interests and your return flight.",
  ctaSubtitle:
    "Also a thoughtful option for short-term city stays, major events, or first-time visits with limited time."
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
  giftTote: "🎁 A Small Seattle Treat",
  giftToteDescription: "Take a piece of Seattle home with you.",
  giftToteBundle: "Bundle any 3 for just",
  giftTotePrice: "$110",
  addOnsTitle: "Curated Add-Ons — Extend Your Seattle Experience",
  addOnsSubtitle: "$120 per group (requires 9+ hour layover)",
  addOnsNote: "Add-on fee covers guide & transport. Food & drink purchased separately.",
  addOnPrice: "$120",
  perGroup: "per group",
  cancellationPolicy: "Cancellation Policy",
  cancellationPolicyDescription: "<strong>Free cancellation up to 24 hours before your tour.</strong> No hidden fees.<br/><br/><strong>Cancellations within 24 hours of tour start time are non‑refundable.</strong><br/><br/>To cancel, please email <strong>booking@sixhourlayover.com</strong>. Our team will process your request accordingly.",
  cancellationPolicyDescription_new: "<strong>Free cancellation up to 24 hours before your tour</strong> — no hidden fees.<br/><br/><strong>For last-minute changes, refer to the cancellation terms displayed during checkout.</strong><br/><br/>To cancel, please email <strong>booking@sixhourlayover.com</strong>. Our team will process your request accordingly.",
  contact: "Contact Us",
  ctaTitle: "Ready to Book Your Seattle Adventure?",
  // ctaSubtitle: "Join thousands of travelers who've made their layover unforgettable",
  ctaSubtitle: "Ready to make your Seattle layover memorable?",
};

export const PrivacyPageText = {
  title: "Privacy Policy",
  effectiveDate: "Effective Date: September 2025",
  description: "This Privacy Policy explains how SixHourLayover (\"Company,\" \"we,\" \"our,\" or \"us\") collects, uses, and protects your personal information.",

  informationWeCollect: "1. Information We Collect",
  personalInfo: "Personal Information: Name, email, phone number, payment details (processed securely by Stripe, not stored by us).",
  bookingDetails: "Booking Details: Tour date, time, number of travelers.",
  automaticData: "Automatically Collected Data: IP address, device type, browser, site activity (via cookies, analytics tools).",

  howWeUse: "2. How We Use Your Information",
  use1: "To process and confirm bookings.",
  use2: "To communicate regarding your reservation, cancellations, or updates.",
  use3: "To improve services, website experience, and customer support.",
  use4: "To comply with legal obligations.",

  sharingInfo: "3. Sharing of Information",
  sharingDescription: "We do not sell or rent your data. We may share information only with:",
  sharing1: "Payment Processors (Stripe) for secure transactions.",
  sharing2: "Service Providers (IT, hosting, analytics) under confidentiality agreements.",
  sharing3: "Legal Authorities if required by law or to protect rights and safety.",

  cookiesTracking: "4. Cookies & Tracking",
  cookiesDescription: "We use cookies and analytics tools (e.g., Google Analytics) to enhance user experience and analyze site usage. You may disable cookies in your browser, but some features may not work.",

  dataRetention: "5. Data Retention",
  retentionDescription: "We retain personal data only as long as necessary for booking fulfillment, legal compliance, and legitimate business needs.",

  dataSecurity: "6. Data Security",
  securityDescription: "We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no online system is 100% secure.",

  childrenPrivacy: "7. Children's Privacy",
  childrenDescription: "Our services are not directed to children under 13. We do not knowingly collect data from minors.",

  yourRights: "8. Your Rights",
  rightsDescription: "Depending on your location, you may have rights to:",
  rights1: "Access, correct, or delete your data.",
  rights2: "Opt out of marketing communications.",
  rights3: "Request portability of your data.",
  rightsContact: "Contact us at booking@sixhourlayover.com for requests.",

  internationalUsers: "9. International Users",
  internationalDescription: "Our services are based in the U.S. If you access from outside, your data will be transferred to and processed in the U.S., subject to U.S. laws.",

  gdprAddendum: "10. GDPR Addendum (European Union Users)",
  gdprDescription: "If you are located in the European Economic Area (EEA), you have the following rights under the GDPR:",
  gdprRights: [
    "Right to Access: Request a copy of your personal data.",
    "Right to Rectification: Correct inaccurate or incomplete information.",
    "Right to Erasure: Request deletion of your data under certain conditions.",
    "Right to Restrict Processing: Limit how we use your data.",
    "Right to Data Portability: Receive your data in a structured, machine-readable format.",
    "Right to Object: Object to certain data uses (e.g., marketing)."
  ],
  gdprLegalBasis: "Legal Basis: We process personal data based on your consent, contractual necessity, or legitimate interests.",
  gdprTransfers: "Data Transfers: Your data may be transferred outside the EEA to the U.S., safeguarded by contractual clauses.",

  ccpaAddendum: "11. CCPA/CPRA Addendum (California Residents)",
  ccpaDescription: "If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):",
  ccpaRights: [
    "Right to Know: Request details on categories of data collected, purposes, and third parties shared with.",
    "Right to Delete: Request deletion of personal data, subject to exceptions.",
    "Right to Opt-Out: Opt out of the sale or sharing of personal information (Note: We do not sell your personal information).",
    "Right to Non-Discrimination: We will not discriminate against you for exercising your privacy rights."
  ],
  ccpaContact: "To exercise these rights, contact us at booking@sixhourlayover.com. Verification of identity may be required.",

  updatesPolicy: "12. Updates to Privacy Policy",
  updatesDescription: "We may update this Policy from time to time. Updates will be posted on our website with a revised effective date.",

  contactUs: "13. Contact Us",
  contactDescription: "For questions about this Privacy Policy, contact:",
  contactEmail: "Email: booking@sixhourlayover.com",
  contactAddress: "Address: Seattle, Washington, USA",
};

export const TermsPageText = {
  title: "Terms of Service",
  effectiveDate: "Effective Date: September 2025",
  description: "Welcome to SixHourLayover (\"Company,\" \"we,\" \"our,\" or \"us\"). By accessing or booking through www.sixhourlayover.com (\"Site\"), you (\"Customer,\" \"you,\" or \"your\") agree to these Terms of Service (\"Terms\").",

  servicesProvided: "1. Services Provided",
  servicesDescription: "SixHourLayover provides curated sightseeing tours in Seattle, Washington. Services are subject to availability and may be modified, rescheduled, or canceled at our discretion.",

  eligibility: "2. Eligibility",
  eligibility1: "You must be at least 18 years old to book.",
  eligibility2: "By booking, you confirm that all information provided is accurate and complete.",

  bookingPayments: "3. Booking & Payments",
  booking1: "All bookings must be paid in full at the time of reservation via our authorized payment processor (Stripe).",
  booking2: "Pricing is listed in U.S. dollars and may change without notice until confirmed at checkout.",
  booking3: "SixHourLayover reserves the right to cancel or decline any booking.",

  cancellationsRefunds: "4. Cancellations & Refunds",
  cancellation1: "Cancellations made 7+ days before the scheduled tour: Full refund.",
  cancellation2: "Cancellations made 3–6 days before: 50% refund.",
  cancellation3: "Cancellations made within 48 hours of the scheduled tour or no-shows: Non-refundable.",
  cancellation4: "If SixHourLayover cancels due to unforeseen circumstances (e.g., severe weather, transportation issues, guide illness), you may receive a full refund or reschedule.",
  cancellation5: "Flight Delays & Layover Feasibility:<br>If significant flight delays, missed connections, or airport processing issues affect the feasibility or safety of the layover tour, SixHourLayover reserves the sole discretion to cancel, shorten, or modify the tour in real time. In such cases, a full or partial refund may be provided at SixHourLayover’s discretion. This determination does not constitute an obligation and is made based on operational safety and timing considerations.",

 travelerResponsibilities: "5. Traveler Responsibilities",
traveler1: "Travelers are responsible for arriving at the designated meeting point on time. Delays caused by flights, customs processing, baggage, or traffic do not entitle travelers to extensions or extra time. Any refunds, if applicable, will be assessed on a case-by-case basis at SixHourLayover’s sole discretion.",
traveler2: "Travelers must follow all safety instructions from their guide. Failure to comply may result in early termination of the tour without refund.",
traveler3: "The tour involves walking and using public transportation. Travelers should ensure they are physically able to participate.",
traveler4: "Alcohol, illegal drugs, and disruptive behavior are prohibited.",
traveler5: "Travelers are strongly encouraged to purchase travel insurance that covers flight delays, missed connections, or trip interruptions.",


assumptionRisk: "6. On-Time Return, Assumption of Risk & Liability Disclaimer",
risk1: "All itineraries include a built-in buffer to support an on-time return to the airport. However, unexpected events—including accidents, road closures, airport security delays, severe weather, or other circumstances beyond our control—may affect travel time. SixHourLayover does not guarantee flight boarding and is not responsible for missed flights or missed connections.",
risk1a: "While on-time return is a core planning priority, all itineraries are subject to real-time conditions beyond SixHourLayover’s control, including but not limited to airline operations, airport security procedures, traffic conditions, and public transportation delays.",
risk2: "Participation in tours involves walking, transportation, and exposure to public environments. By booking, travelers acknowledge and accept these risks.",
risk3: "SixHourLayover is not liable for personal injury, illness (including COVID-19), theft, property loss, delays, or missed connections.",
risk4: "To the fullest extent permitted by law, our liability is limited to the amount paid for the booking.",


  intellectualProperty: "7. Intellectual Property",
  ipDescription: "All site content, branding, images, and materials are owned by SixHourLayover and may not be used without written permission.",

  thirdPartyServices: "8. Third-Party Services",
  thirdPartyDescription: "We use third-party providers (e.g., Stripe for payments, Google Maps for navigation). Your use of these services is subject to their terms and policies.",

  governingLaw: "9. Governing Law & Dispute Resolution",
  law1: "These Terms are governed by the laws of the State of Washington, U.S.A.",
  law2: "Any disputes shall be resolved exclusively in the state or federal courts located in King County, Washington.",

  changesTerms: "10. Changes to Terms",
  changesDescription: "We may update these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms.",
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
  // agreeToTerms: "I agree to the <a href=\"/terms\" class=\"text-purple-600 hover:underline\" target=\"_blank\">Terms of Service</a> and <a href=\"/privacy\" class=\"text-purple-600 hover:underline\" target=\"_blank\">Privacy Policy</a>. I understand that this tour includes a guaranteed 2-hour buffer before my departure flight, and that cancellations are free up to 24 hours before the tour.",
  agreeToTerms: "I agree to the <a href=\"/terms\" class=\"text-purple-600 hover:underline\" target=\"_blank\">Terms of Service</a> and <a href=\"/privacy\" class=\"text-purple-600 hover:underline\" target=\"_blank\">Privacy Policy</a>. I understand that the tour is planned around my departure flight with an appropriate airport return buffer, and that cancellations are free up to 24 hours before the tour.",

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
  cta: "Meet Guai Guai, our company mascot — you’ll see him on our website, posts, and souvenirs.",
  bookNow: "Book Your Seattle Tour",
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


export const SLTourText = {
  title: "Seattle Layover Tour (6–8 Hours)",
  subtitle: "Everything you need to know about your Seattle layover adventure",
  ctaTitle: "Still have questions?",
  ctaSubtitle: "Contact us directly — we'll make sure your layover is stress-free from start to finish.",
};

export const chineselangText = {
  bookNow: "预订您的西雅图之旅",
  quickBook: "⚡Quick Book（起价 250 美元）",
  bookTour: "预订之旅",
  pricingTitle: "定价",
  pricingSubtitle: "4岁及以上儿童计入旅客人数。0-3岁儿童免费参加。",
  homeLink: "主页",
  howItWorksLink: "运作方式",
  pricingLink: "旅游及定价",
  faqLink: "常见问题解答",
  aboutLink: "关于我们",
  contactLink: "联系方式",
  legal: "合法合规",
  termsLink: "服务条款",
  privacyLink: "隐私政策",
  copyright: "© 2025 西雅图六小时中途停留",
  footerSlogan: "让转机之旅充满难忘回忆，一次一个城市。",
  quickLinks: "快速链接"

}

export const japaneselangText = {
  h1: "シアトル乗り継ぎツアー（6～8時間） ",
  subtitle: "乗り継ぎ時間をミニアドベンチャーに変えて、安全に街を見て、時間に余裕を持って戻りましょう。",
  bookNow: "ツアーを予約する",
  bookYourSeattleTour: "📋 シアトル ツアーを予約する",
  quickBook: "⚡ クイックブック（250ドルから）",
  bookTour: "预订之旅",
  pricingTitle: "価格設定",
  pricingSubtitle: "4歳以上の方は旅行者としてカウントされます。0～3歳のお子様は無料でご参加いただけます。",
  homeLink: "ホームリンク",
  howItWorksLink: "仕組み",
  pricingLink: "ツアーと料金",
  faqLink: "よくある質問",
  aboutLink: "について",
  contactLink: "接触",
  quickLinks: "クイックリンク",
  legal: "法律上の",
  termsLink: "利用規約",
  privacyLink: "プライバシーポリシー",
  copyright: "© 2025 シアトルの6時間乗り継ぎ",
  copyrightSubtext: "6 時間乗り継ぎツアーは、パイク プレイス マーケット保存開発局 (PDA) により許可および認可を受けており、パイク プレイス マーケット歴史地区でツアーを運営しています。",
  footerSlogan: "ひとつの都市ごとに、乗り継ぎを思い出深いものにします。",
  bookYourSeattleTourtxt: "シアトル ツアーを予約する"

}

export const chineseSTRIPE_TOUR_PRODUCTS = [
  // 6-Hour Seattle Essentials
  {
    id: 'per-person-6hour',
    name: '六 小时西雅图必游景点',
    price: 299.00,
    description: '只需六小时，即可探索西雅图的心脏地带。探索派克市场，观看著名的抛鱼表演，漫步海滨——所有这一切都与热情友好的当地导游一起进行。',
    //paymentLink: 'https://buy.stripe.com/7sY9AV78D0Mv5ZY1bD38401',
    paymentLink: 'https://buy.stripe.com/aFadRb1Oj1Qzbkif2t3840r',
    groupSize: 'per-person',
    priceDescription: '每人'
  },
  {
    id: 'solo-traveler-6hour',
    name: '六小时西雅图精华游（单人）',
    price: 500.00,
    //paymentLink: 'https://buy.stripe.com/8x2bJ3gJdeDl9cabQh38400',
    paymentLink: 'https://buy.stripe.com/5kQ00l1OjeDl4VUbQh3840x',
    groupSize: '1',
    priceDescription: '独自旅行者'
  },
  {
    id: 'family-pack-6hour',
    name: '西雅图六小时必备旅行套装（家庭装）',
    price: 600.00,
    //paymentLink: 'https://buy.stripe.com/3cIfZj0Kf9j18868E538402',
    paymentLink: 'https://buy.stripe.com/5kQeVfgJdbr90FEcUl3840s',
    groupSize: 'family',
    priceDescription: '2名成人 + 最多3名12岁以下儿童'
  },
  // 7-Hour Seattle Highlights
  {
    id: 'per-person-7hour',
    name: '西雅图七小时精彩集锦',
    price: 350.00,
   // paymentLink: 'https://buy.stripe.com/new-7hour-per-person',
    paymentLink: 'https://buy.stripe.com/7sY7sNgJd8eXdsqdYp3840t',
    groupSize: 'per-person',
    priceDescription: '每人（包含 Kerry Park）'
  },
  {
    id: 'solo-traveler-7hour',
    name: '西雅图七小时精彩集锦（单人）',
    price: 600.00,
   // paymentLink: 'https://buy.stripe.com/new-7hour-solo',
   paymentLink: 'https://buy.stripe.com/bJefZjfF97aT7424nP3840f',
    groupSize: '1',
    priceDescription: '每人（包含 Kerry Park'
  },
  {
    id: 'family-pack-7hour',
    name: '西雅图七小时精彩集锦（家庭套餐）',
    price: 750.00,
   // paymentLink: 'https://buy.stripe.com/new-7hour-family',
    paymentLink: 'https://buy.stripe.com/3cIbJ38cHgLtgEC4nP3840u',
    groupSize: 'family',
    priceDescription: "2 位成人 + 最多 3 位 12 岁以下儿童（含嘉里公园）"
  },
  // 8-Hour Seattle Complete
  {
    id: 'per-person-8hour',
    name: '8 小时西雅图之旅',
    price: 499.00,
   // paymentLink: 'https://buy.stripe.com/new-8hour-per-person',
    paymentLink: 'https://buy.stripe.com/14A8wReB50Mv2NM5rT3840j',
    groupSize: 'per-person',
    priceDescription: '每人（含太空针塔门票）'
  },
  {
    id: 'solo-traveler-8hour',
    name: '8 小时西雅图全程（单人）',
    price: 800.00,
    //paymentLink: 'https://buy.stripe.com/bJe5kFeB5dzh2NMg6x38403',
    paymentLink: 'https://buy.stripe.com/cNi3cxcsXbr9bki6vX3840v',
    groupSize: '1',
    priceDescription: '单人旅行者（包含太空针塔门票）'
  },
  {
    id: 'family-traveler-8hour',
    name: '8 小时西雅图全程（单人）',
    price: 999.00,
    // paymentLink: 'https://buy.stripe.com/bJe5kFeB5dzh2NMg6x38403',
   paymentLink: 'https://buy.stripe.com/00w6oJ78D7aTbkicUl3840w',
    groupSize: 'family',
    priceDescription: '单人旅行者（包含太空针塔门票）'
  }
];




export const japaneseSTRIPE_TOUR_PRODUCTS = [
  // 6-Hour Seattle Essentials
  {
    id: 'per-person-6hour',
    name: 'シアトルの必需品6時間',
    price: 250.00,
    paymentLink: 'https://buy.stripe.com/7sY9AV78D0Mv5ZY1bD38401',
    groupSize: 'per-person',
    priceDescription: '1人あたり'
  },
  {
    id: 'solo-traveler-6hour',
    name: '6時間シアトルの必需品（ソロ）',
    price: 399.00,
    paymentLink: 'https://buy.stripe.com/8x2bJ3gJdeDl9cabQh38400',
    groupSize: '1',
    priceDescription: '一人旅'
  },
  {
    id: 'family-pack-6hour',
    name: '6時間シアトルエッセンシャルズ（ファミリーパック）',
    price: 750.00,
    paymentLink: 'https://buy.stripe.com/3cIfZj0Kf9j18868E538402',
    groupSize: 'family',
    priceDescription: '大人2名＋12歳未満の子供3名まで'
  },
  // 7-Hour Seattle Highlights
  {
    id: 'per-person-7hour',
    name: 'シアトルの7時間ハイライト',
    price: 300.00,

    paymentLink: 'https://buy.stripe.com/new-7hour-per-person',
    groupSize: 'per-person',
    priceDescription: '1人あたり（ケリーパークを含む））'
  },
  {
    id: 'solo-traveler-7hour',
    name: '7時間シアトルハイライト（ソロ）',
    price: 450.00,
    paymentLink: 'https://buy.stripe.com/new-7hour-solo',
    groupSize: '1',
    priceDescription: '一人旅（ケリーパークを含む）'
  },
  {
    id: 'family-pack-7hour',
    name: '7時間シアトルのハイライト（ファミリーパック）',
    price: 900.00,

    paymentLink: 'https://buy.stripe.com/new-7hour-family',
    groupSize: 'family',
    priceDescription: '大人2名と12歳未満の子供3名まで（ケリーパークを含む）'
  },
  // 8-Hour Seattle Complete
  {
    id: 'per-person-8hour',
    name: '8時間シアトル完走',
    price: 350.00,
    paymentLink: 'https://buy.stripe.com/new-8hour-per-person',
    groupSize: 'per-person',
    priceDescription: '1人あたり（スペースニードル入場料を含む）'
  },
  {
    id: 'solo-traveler-8hour',
    name: '8時間シアトル完走（ソロ）',
    price: 499.00,
    paymentLink: 'https://buy.stripe.com/bJe5kFeB5dzh2NMg6x38403',
    groupSize: '1',
    priceDescription: '一人旅（スペースニードル入場料を含む）'
  }
];


export const NAVIGATION_japanese_LINKS = [
  { name: "家", href: "/" },
  { name: "仕組み", href: "/how-it-works" },
  { name: "ツアーと料金", href: "/pricing" },
  { name: "よくある質問", href: "/faq" },
  { name: "について", href: "/about" },
  { name: "接触", href: "/contact" }
];

export const NAVIGATION_mandarin_LINKS = [
  { name: "家", href: "/" },
  { name: "它是如何运作的", href: "/how-it-works" },
  { name: "旅游及定价", href: "/pricing" },
  { name: "常见问题解答", href: "/faq" },
  { name: "关于", href: "/about" },
  { name: "接触", href: "/contact" }
];
