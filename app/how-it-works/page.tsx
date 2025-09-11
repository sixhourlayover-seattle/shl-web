"use client";
import { PlaneIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";

const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Book Your Tour",
    description: "Contact us via email or phone to secure your spot. We'll send confirmation details and track your flight.",
    icon: "📧",
    details: [
      "Email booking@sixhourlayover.com or call (206) 486-6398",
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

const WHAT_MAKES_US_DIFFERENT = [
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

export default function HowItWorksPage() {
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
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">How It Works</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                From airport pickup to guaranteed on-time return — here's how we make your Seattle layover unforgettable
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-12">
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <div 
                  key={step.step} 
                  className="relative"
                  style={{animation: `slide-in 0.${index + 6}s ease-out`}}
                >
                  {/* Connector line */}
                  {index < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="absolute left-6 top-24 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-indigo-300" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                        <p className="text-slate-700 text-lg leading-relaxed mb-6">{step.description}</p>
                        
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-green-600 text-lg">•</span>
                              <span className="text-slate-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-slate-900">What Makes Us Different</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We're not just a tour company — we're layover specialists who understand the unique challenges of short airport connections
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {WHAT_MAKES_US_DIFFERENT.map((feature, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift text-center"
                  style={{animation: `slide-in 0.${index + 12}s ease-out`}}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation Info */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 p-8 shadow-2xl hover-lift">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Transportation Details</h2>
                <p className="text-slate-700 text-lg">Here's what you need to know about getting around</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🚗</span>
                    <h3 className="text-xl font-bold text-slate-800">Ride Service</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Transportation is arranged through Uber/Lyft ride-share services with $1 million liability coverage per ride.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• We handle all coordination and logistics</li>
                    <li>• Professional drivers with full insurance</li>
                    <li>• Direct airport-to-downtown service</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🧳</span>
                    <h3 className="text-xl font-bold text-slate-800">Luggage Storage</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    SEA Airport offers secure Smarte Carte storage for $10-15 per bag (paid directly to storage provider).
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• We guide you through the storage process</li>
                    <li>• Secure, monitored storage facility</li>
                    <li>• Easy retrieval upon return</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Seattle?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Book your layover tour today and transform your airport downtime into an unforgettable Seattle adventure
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
