"use client";
import { useState } from "react";
import { PlaneIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";

const FAQ_SECTIONS = [
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
        answer: "Tours are priced simply:\n- Solo Traveler — $389\n- 2–3 Travelers — $250 pp\n- 4–5 Travelers — $220 pp\n- Family Pack — $750 flat (2 adults + up to 3 kids under 12)\n- Extra kids (under 12) — $199 each\n\nSee our Tours & Pricing page for details."
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

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur shadow-lg border border-white/50 overflow-hidden hover-lift">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-300"
      >
        <h3 className="font-semibold text-slate-800 pr-4">{faq.question}</h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="pt-2 border-t border-purple-100">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (sectionIndex: number, faqIndex: number) => {
    const key = `${sectionIndex}-${faqIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 animated-gradient opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />
      
      {/* Floating orbs for visual interest */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}} />
      
      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-20">
          <div className="container">
            <div className="text-center mb-12" style={{animation: 'slide-in 0.6s ease-out'}}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">Frequently Asked Questions</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about your Seattle layover adventure
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-12">
              {FAQ_SECTIONS.map((section, sectionIndex) => (
                <div key={sectionIndex} style={{animation: `slide-in 0.${sectionIndex + 6}s ease-out`}}>
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-xl">{section.icon}</span>
                    </div>
                    <h2 className={`text-2xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                      {section.title}
                    </h2>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-4">
                    {section.faqs.map((faq, faqIndex) => (
                      <FAQItem
                        key={faqIndex}
                        faq={faq}
                        isOpen={openItems[`${sectionIndex}-${faqIndex}`] || false}
                        onToggle={() => toggleItem(sectionIndex, faqIndex)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Still have questions?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us directly — we'll make sure your layover is stress-free from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📝</span>
                Book Your Tour Now
              </a>
              <a 
                href="mailto:booking@sixhourlayover.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📧</span>
                Email Questions
              </a>
              <a 
                href="tel:+12064866398"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📞</span>
                (206) 486-6398
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative mt-20 border-t border-purple-200 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
          <div className="container py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg">
                    <PlaneIcon className="h-5 w-5" />
                  </div>
                  <span className="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    The Six-Hour Layover
                  </span>
                </div>
                <p className="text-sm text-slate-600">Making layovers memorable, one city at a time.</p>
              </div>
              
              <div>
                <h5 className="font-bold text-slate-800 mb-3">Quick Links</h5>
                <div className="space-y-2 text-sm">
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/">🏠 Home</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/how-it-works">⚙️ How It Works</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/pricing">💰 Tours & Pricing</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/faq">❓ FAQs</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/about">👥 About</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/contact">📞 Contact</a>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold text-slate-800 mb-3">Legal</h5>
                <div className="space-y-2 text-sm">
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/terms">📄 Terms of Service</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/privacy">🔒 Privacy Policy</a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                © {new Date().getFullYear()} The Six-Hour Layover, Seattle
              </div>
            </div>
          </div>
        </footer>

        <MobileNav />
      </div>
    </div>
  );
}
