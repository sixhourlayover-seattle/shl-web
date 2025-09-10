"use client";
import { PlaneIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";

const CONTACT_METHODS = [
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

const BOOKING_INFO = [
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
    title: "What We&apos;ll Send",
    items: [
      "Booking confirmation with all details",
      "Your guide&apos;s contact information",
      "Detailed meeting instructions",
      "Flight tracking confirmation"
    ]
  }
];

const FAQ_QUICK = [
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

export default function ContactPage() {
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
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">Contact Us</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to book your Seattle layover adventure? We&apos;re here to help make it happen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {CONTACT_METHODS.map((method, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift text-center"
                  style={{animation: `slide-in 0.${index + 7}s ease-out`}}
                >
                  <div className="text-6xl mb-6">{method.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{method.title}</h3>
                  <p className="text-purple-600 font-medium mb-4">{method.subtitle}</p>
                    {method.contact.includes('@') ? (
                      <a 
                        href={method.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 text-lg"
                      >
                        {method.contact}
                      </a>
                    ) : (
                      <a 
                        href={method.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 text-lg"
                      >
                        {method.contact}
                      </a>
                    )}
                  <p className="text-slate-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Information */}
        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Booking Information</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Here&apos;s what to expect when you contact us
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {BOOKING_INFO.map((info, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{animation: `slide-in 0.${index + 9}s ease-out`}}
                >
                  <h3 className="text-2xl font-bold text-purple-700 mb-6">{info.title}</h3>
                  <ul className="space-y-4">
                    {info.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-green-600 text-lg">•</span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick FAQ */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Quick Questions</h2>
              <p className="text-lg text-slate-600">
                Common questions we get from travelers
              </p>
            </div>

            <div className="space-y-6">
              {FAQ_QUICK.map((faq, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{animation: `slide-in 0.${index + 11}s ease-out`}}
                >
                  <h3 className="text-xl font-bold text-purple-700 mb-4">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/faq"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">❓</span>
                View All FAQs
              </a>
            </div>
          </div>
        </section>

        {/* Business Hours & Location Info */}
        <section className="py-16 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 p-8 hover-lift">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Service Information</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="text-center">
                  <div className="text-4xl mb-4">🕐</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><strong>Phone Support:</strong></p>
                    <p>7 days a week</p>
                    <p>8:00 AM - 8:00 PM PST</p>
                    <p className="mt-4"><strong>Email Response:</strong></p>
                    <p>2-4 hours during business hours</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Service Area</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><strong>Airport:</strong></p>
                    <p>Seattle-Tacoma International (SEA)</p>
                    <p><strong>Tour Areas:</strong></p>
                    <p>Downtown Seattle</p>
                    <p>Pike Place Market</p>
                    <p>Waterfront & Space Needle</p>
                    <p>Kerry Park (Premium tours)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300 p-8 shadow-2xl hover-lift">
              <div className="text-center">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Day-of-Tour Emergency</h3>
                <p className="text-slate-700 text-lg mb-6">
                  If you need to reach us on the day of your tour (flight changes, delays, etc.), call us immediately:
                </p>
                <a 
                  href="tel:+12064866398"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl">📞</span>
                  (206) 486-6398
                </a>
                <p className="text-slate-600 text-sm mt-4">
                  We monitor this line closely on tour days to handle any last-minute changes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Seattle Adventure?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today and we&apos;ll take care of all the details for your perfect layover experience
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
                Call Us Now
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
