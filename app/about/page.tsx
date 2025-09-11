"use client";
import { PlaneIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import MascotSection from "@/components/MascotSection";

const TEAM_VALUES = [
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

const STORY_POINTS = [
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

const STATS = [
  { number: "20+", label: "Countries Served" },
  { number: "100%", label: "On-Time Return Rate" }, 
  { number: "6", label: "Perfect Hours" },
  { number: "1000+", label: "Happy Travelers" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 animated-gradient opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />
      
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}} />
      
      <div className="relative z-10">
        <Navigation />

        <section className="py-12 sm:py-20">
          <div className="container">
            <div className="text-center mb-12" style={{animation: 'slide-in 0.6s ease-out'}}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">About Us</span>
              </h1>
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                Out to the city. Back on time. Turn your layover into the highlight of your trip.
              </h2>
              <p className="text-slate-700 text-xl max-w-4xl mx-auto leading-relaxed">
                The Six-Hour Layover was created for travelers who want more than airport lounges. In just a few hours, we'll take you from <strong>SEA Airport into Seattle's highlights</strong> &mdash; Pike Place Market, waterfront views, and local stories &mdash; and get you back with a guaranteed <strong>2-hour buffer</strong> before boarding.
              </p>
              <p className="text-slate-700 text-lg max-w-4xl mx-auto leading-relaxed mt-4">
                Our tours are <strong>private and stress-free</strong>, with <strong>multilingual options</strong> available.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Multilingual Tours Available</h2>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🌍</span>
                    <h3 className="text-xl font-bold text-slate-800">Always Available</h3>
                  </div>
                  <p className="text-slate-700">
                    <strong>English</strong> - All tours are conducted in English by default
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🗣️</span>
                    <h3 className="text-xl font-bold text-slate-800">Upon Request</h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Additional languages available subject to guide availability:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Mandarin', 'Japanese', 'Spanish', 'French', 'Turkish'].map((lang) => (
                      <span key={lang} className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium">
                      More coming soon
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200">
                <p className="text-blue-800 text-center">
                  <strong>Please confirm your preferred language when booking.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Born from the simple idea that layovers shouldn't be wasted time
              </p>
            </div>

            <div className="space-y-12">
              {STORY_POINTS.map((point, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{animation: `slide-in 0.${index + 7}s ease-out`}}
                >
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">{point.title}</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">{point.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MascotSection 
          title="Meet Our Mascot: Guai Guai"
          name="Guai Guai"
          role="Beloved Mascot (Retired from Adventures)"
          description={`Guai Guai (his name means "Good Boy" in Chinese) is the beloved mascot of The Six-Hour Layover. Though he's happily retired from adventures, he embodies the spirit of what travel should be — warm, curious, and full of joy. With his loyal heart and playful charm, Guai Guai reminds us to welcome every traveler like a friend.`}
          imageSrc="/dog-mascot.jpg"
          imageAlt="Six-Hour Layover Seattle mascot dog Guai Guai wearing bow tie — friendly welcome for travelers"
        />

        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">By the Numbers</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              {STATS.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift"
                  style={{animation: `slide-in 0.${index + 10}s ease-out`}}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">What Drives Us</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our core values shape every tour we create and every experience we deliver
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {TEAM_VALUES.map((value, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{animation: `slide-in 0.${index + 14}s ease-out`}}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-800">{value.title}</h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
          <div className="container text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                To transform every layover into a highlight of your journey. We believe that even a few hours in a new city can create lasting memories, and we're here to make that happen — stress-free, perfectly timed, and unforgettable.
              </p>
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/20 backdrop-blur border border-white/30">
                <span className="text-2xl">💜</span>
                <span className="text-white font-semibold">Making layovers memorable, one city at a time</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Seattle?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join the thousands of travelers who've discovered that layovers can be the best part of their journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📝</span>
                Book Your Adventure Today
              </a>
              <a 
                href="/how-it-works"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">⚙️</span>
                Learn How It Works
              </a>
            </div>
          </div>
        </section>

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