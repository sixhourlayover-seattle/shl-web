
"use client";
import { useState } from "react";
import Image from "next/image";
import { PlaneIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import { Card, CardHeader, CardContent } from "@/components/Card";
import Button from "@/components/Button";
import MobileNav from "@/components/MobileNav";

const SEATTLE = {
  name: "Seattle",
  code: "SEA",
  highlights: [
    "Pike Place Market quick tour",
    "Space Needle express visit",
    "Chihuly Glass Garden stroll",
    "Grab local seafood downtown"
  ]
};

const TRANSPORT_OPTIONS = [
  { name: "Stay airside", desc: "Lounges, nap pods, showers" },
  { name: "Light rail hop", desc: "Airport to downtown in ~30 minutes" },
  { name: "Private ride", desc: "Flexible stops, fast return" }
];

function Itinerary({ hours, city }: { hours: number; city: typeof SEATTLE }) {
  const slots = ["09:30", "11:00", "13:00", "14:30"];
  const emojis = ["🦐", "🎡", "🌈", "🍣"];
  return (
    <div className="mt-6 rounded-3xl bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 p-6 shadow-2xl hover-lift">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500">
          <MapPinIcon className="h-5 w-5 text-white" />
        </div>
        <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          {city.name} • {hours}-hour express adventure
        </h4>
      </div>
      <ol className="relative border-s-2 border-gradient-to-b from-purple-300 to-indigo-300 ml-3">
        {city.highlights.map((p, i) => (
          <li key={i} className="ms-6 py-4 group" style={{animation: `slide-in 0.${i+3}s ease-out`}}>
            <span className="absolute -start-3 mt-1 h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
              {i+1}
            </span>
            <div className="ml-4 p-4 rounded-2xl bg-white/80 backdrop-blur border border-white/50 group-hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 text-sm text-indigo-600 font-semibold mb-2">
                <ClockIcon className="h-4 w-4" />
                <span>{slots[i]}</span>
                <span className="text-lg ml-auto">{emojis[i]}</span>
              </div>
              <p className="text-slate-800 font-medium">{p}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          📱 Download Plan
        </button>
        <button className="px-6 py-3 bg-white/80 backdrop-blur text-slate-800 font-semibold rounded-xl border border-slate-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          🗺️ Save to Maps
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const [hours, setHours] = useState(6);
  const [transport, setTransport] = useState("Light rail hop");
  const [showPlan, setShowPlan] = useState(false);

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
      {/* Top Nav with glassmorphism */}
      <header className="sticky top-0 z-30 glass border-b border-white/20">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-neon">
                <PlaneIcon className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Six Hour Layover: Seattle</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 sm:py-20">
        <div className="container grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6" style={{animation: 'slide-in 0.6s ease-out'}}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">Make the most</span>
              <br />
              <span className="text-slate-900">of your Seattle layover</span>
            </h1>
            <p className="text-slate-700 text-lg max-w-2xl leading-relaxed">
              Curated 3–8 hour plans from SEA with realistic buffers. See Pike Place, ride the light rail, enjoy local seafood, and catch your next flight stress‑free.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                ✈️ See Pricing & Book
              </a>
              <button 
                onClick={() => document.getElementById('plan')?.scrollIntoView({behavior:'smooth'})}
                className="px-8 py-4 bg-white/80 backdrop-blur text-slate-800 font-semibold rounded-2xl border border-slate-200 hover:bg-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                View planner →
              </button>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 border-2 border-white" />
                ))}
              </div>
              <p className="text-sm text-slate-600">Join 10,000+ travelers</p>
            </div>
          </div>
          <div className="relative" style={{animation: 'slide-in 0.8s ease-out'}}>
            <div 
              className="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden relative hover-lift"
              style={{
                backgroundImage: 'url("/seattle-skyline.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
              
              {/* Stats bar */}
              <div className="absolute inset-x-6 top-6 h-12 rounded-2xl glass-dark flex items-center justify-center gap-2 text-sm text-white shadow-lg z-10">
                <PlaneIcon className="h-5 w-5 text-yellow-300" />
                <span className="font-semibold">Light rail: 30min • Buffer: 90min</span>
              </div>
              
              {/* Feature cards */}
              <div className="absolute left-6 right-6 bottom-6 grid grid-cols-3 gap-3 z-10">
                {[
                  { name: "Eat", icon: "🍱", color: "from-orange-400 to-red-400" },
                  { name: "See", icon: "🎡", color: "from-blue-400 to-cyan-400" },
                  { name: "Relax", icon: "☕", color: "from-green-400 to-emerald-400" }
                ].map((k, i) => (
                  <div key={i} className="group rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 p-4 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
                    <div className="text-2xl mb-2">{k.icon}</div>
                    <div className={`text-lg font-bold bg-gradient-to-r ${k.color} bg-clip-text text-transparent`}>{k.name}</div>
                    <p className="mt-1 text-xs text-slate-600">Curated spots</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planner */}
      <section id="plan" className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">✨ Create Your Perfect Layover</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Customize your Seattle adventure with our smart planner</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 overflow-hidden hover-lift">
              <div className="p-8 bg-gradient-to-r from-purple-600 to-indigo-600">
                <h3 className="text-2xl font-bold text-white">🇺🇸 Build Your Express Itinerary</h3>
                <p className="mt-2 text-white/90">We&apos;ll tailor a realistic plan that fits immigration, transit, and buffer times.</p>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Hours */}
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-3 block">⏰ Hours available</label>
                    <div className="flex flex-wrap gap-2">
                      {[3,4,5,6,8].map(h => (
                        <button 
                          key={h} 
                          onClick={() => setHours(h)} 
                          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                            hours===h 
                              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105' 
                              : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-purple-400 hover:shadow-md'
                          }`}
                        >
                          {h}h
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Transport */}
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-3 block">🚊 Transport style</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { ...TRANSPORT_OPTIONS[0], emoji: "✈️" },
                        { ...TRANSPORT_OPTIONS[1], emoji: "🚆" },
                        { ...TRANSPORT_OPTIONS[2], emoji: "🚗" }
                      ].map((t, i) => (
                        <button 
                          key={t.name} 
                          onClick={() => setTransport(t.name)} 
                          className={`rounded-2xl p-4 text-left transition-all duration-300 ${
                            transport===t.name 
                              ? 'bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-purple-400 shadow-lg scale-105' 
                              : 'bg-white border-2 border-slate-200 hover:border-purple-300 hover:shadow-md'
                          }`}
                        >
                          <div className="text-2xl mb-2">{t.emoji}</div>
                          <div className="font-bold text-sm">{t.name}</div>
                          <div className="text-slate-500 text-xs mt-1">{t.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2 pt-6">
                    <a 
                      href="/pricing"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300 text-lg w-full sm:w-auto"
                    >
                      ⚡ View Pricing & Book Tour
                    </a>
                    <p className="mt-3 text-sm text-slate-500">🚀 Instant generation • ⏱️ Realistic buffers included</p>
                  </div>
                </div>

                {showPlan && <Itinerary hours={hours} city={SEATTLE} />}
              </div>
            </div>
          </div>

          {/* Tips / Trust */}
          <div>
            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-1 shadow-2xl hover-lift">
              <div className="rounded-3xl bg-white/95 backdrop-blur p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">🌆 SEA Quick Facts</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: "🛬", label: "Immigration time", value: "20–45m typical" },
                    { icon: "🚆", label: "Light rail to downtown", value: "~30m" },
                    { icon: "🏞️", label: "Luggage storage", value: "Available landside" },
                    { icon: "⏰", label: "Return buffer", value: "90m before boarding" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <span className="font-bold text-slate-800">{item.label}:</span>
                        <span className="ml-2 text-slate-600">{item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💡</span>
                    <span className="font-bold text-slate-800">Pro Tip</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Screenshot QR tickets and download offline maps before leaving Wi-Fi.
                  </p>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">4.8★</div>
                    <div className="text-xs text-slate-600 mt-1">Avg Rating</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">10k+</div>
                    <div className="text-xs text-slate-600 mt-1">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Footer + Mobile Nav */}
      <footer className="relative mt-20 border-t border-purple-200 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg">
                  <PlaneIcon className="h-5 w-5" />
                </div>
                <span className="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Six Hour Layover
                </span>
              </div>
              <p className="text-sm text-slate-600">Making layovers memorable, one city at a time.</p>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-800 mb-3">Quick Links</h5>
              <div className="space-y-2 text-sm">
                <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="#plan">✈️ Plan Your Trip</a>
                <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/pricing">💰 Pricing</a>
                <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/faq">❓ FAQ</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-800 mb-3">Connect</h5>
              <div className="flex gap-3">
                {["🐦", "📸", "📱"].map((icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                    <span className="text-lg">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} Six Hour Layover: Seattle. Made with 💜 in SEA
            </div>
            <div className="text-sm text-slate-600">
              <a className="hover:text-purple-600 transition-colors" href="/privacy">Privacy</a>
              <span className="mx-2">•</span>
              <a className="hover:text-purple-600 transition-colors" href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <MobileNav />
      </div>
    </div>
  );
}
