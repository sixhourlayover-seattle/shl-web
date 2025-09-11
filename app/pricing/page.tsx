"use client";
import { useState } from "react";
import Image from "next/image";
import { PlaneIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import { Card, CardHeader, CardContent } from "@/components/Card";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";

const TOUR_OPTIONS = [
  {
    title: "6-Hour Classic Tour",
    subtitle: "Pike Place & Waterfront",
    description: "Discover Seattle's heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, snap photos at the Gum Wall, browse artisan shops, and stroll the waterfront — all with a friendly local guide.",
    duration: "Includes airport meet-up, round-trip city transfers, and a Seattle chocolate cherry gift bag.",
    features: [
      "Pike Place Market tour",
      "Famous fish toss viewing",
      "Waterfront exploration",
      "Local guide expertise"
    ]
  },
  {
    title: "7-Hour Extended Tour",
    subtitle: "Classic + Space Needle",
    description: "Everything in the Classic Tour plus a quick Space Needle photo stop. Perfect for travelers who want both insider gems and Seattle's most iconic landmark.",
    duration: "All Classic features plus Space Needle visit",
    features: [
      "All Classic Tour features",
      "Space Needle photo stop",
      "Extended exploration time",
      "Seattle's iconic landmark"
    ]
  },
  {
    title: "8-Hour Premium Tour",
    subtitle: "Extended + Kerry Park",
    description: "The ultimate layover adventure. Includes everything in the Extended Tour, plus a stop at Kerry Park for Seattle's postcard skyline view.",
    duration: "Maximum Seattle experience with skyline views",
    features: [
      "All Extended Tour features",
      "Kerry Park skyline views",
      "Postcard-perfect photos",
      "Ultimate Seattle experience"
    ]
  }
];

const PRICING_TIERS = [
  {
    name: "Solo Traveler",
    price: 389,
    description: "1 guest",
    groupSize: "1"
  },
  {
    name: "2–3 Travelers",
    price: 250,
    description: "per person",
    groupSize: "2-3"
  },
  {
    name: "4–5 Travelers", 
    price: 220,
    description: "per person",
    groupSize: "4-5"
  },
  {
    name: "Family Pack",
    price: 750,
    description: "2 adults + up to 3 kids under 12",
    groupSize: "2+3"
  }
];

const WHATS_INCLUDED = [
  "Airport meet & greet",
  "Uber coordination",
  "On-time return guarantee (2-hour buffer)",
  "Local souvenir tote bag",
  "Free cancellation up to 24 hours before your tour"
];

const GIFT_TOTE_ITEMS = [
  "Pike Place chowder mix",
  "Beecher's handmade cheese", 
  "Starbucks Reserve beans",
  "Seattle chocolate or Rainier cherries"
];

const ADD_ONS = [
  {
    name: "Dick's Burger Combo",
    emoji: "🍔"
  },
  {
    name: "Top Pot Coffee & Doughnut",
    emoji: "☕"
  },
  {
    name: "Molly Moon's Ice Cream",
    emoji: "🍦"
  },
  {
    name: "Starbucks Reserve Roastery Visit Coffee & Pastry",
    emoji: "☕"
  }
];

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState("2–3 Travelers");

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
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-20">
          <div className="container">
            <div className="text-center mb-12" style={{animation: 'slide-in 0.6s ease-out'}}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">Tours & Pricing</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                Choose your perfect Seattle layover adventure
              </p>
            </div>
          </div>
        </section>

        {/* Tour Options */}
        <section className="py-8">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              {TOUR_OPTIONS.map((tour, index) => (
                <div key={index} className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 overflow-hidden hover-lift" style={{animation: `slide-in 0.${index + 7}s ease-out`}}>
                  <div className="p-8 bg-gradient-to-r from-purple-600 to-indigo-600">
                    <h3 className="text-2xl font-bold text-white mb-2">{tour.title}</h3>
                    {tour.subtitle && <p className="text-white/90 text-sm mb-2">{tour.subtitle}</p>}
                    <p className="text-white/90 text-sm">{tour.duration}</p>
                  </div>
                  <div className="p-8">
                    <p className="text-slate-700 mb-6 leading-relaxed">{tour.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {tour.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200">
                          <span className="text-green-600">✔</span>
                          <span className="text-sm font-medium text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ages 4+ count as travelers. Children 0–3 join free.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {PRICING_TIERS.map((tier, index) => (
                <div 
                  key={tier.name} 
                  className={`rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer hover-lift ${
                    selectedTier === tier.name 
                      ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg scale-105' 
                      : 'border-slate-200 bg-white/80 backdrop-blur hover:border-purple-300'
                  }`}
                  onClick={() => setSelectedTier(tier.name)}
                  style={{animation: `slide-in 0.${index + 8}s ease-out`}}
                >
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-slate-800 mb-2">{tier.name}</h3>
                    <div className="mb-3">
                      <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        ${tier.price}
                      </span>
                      {tier.name !== "Family Pack" && <span className="text-slate-600 text-sm ml-1">pp</span>}
                    </div>
                    <p className="text-sm text-slate-600">{tier.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Pricing Notes */}
            <div className="rounded-3xl bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300 p-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl">💰</span>
                  <span className="font-bold text-slate-800 text-lg">Special Offers</span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-2xl bg-white/80 backdrop-blur">
                    <h4 className="font-bold text-purple-700 mb-2">Family Bundle</h4>
                    <p className="text-sm text-slate-700">
                      <strong>2 adults + 2 children (ages 4–11) = $799 total</strong>
                    </p>
                  </div>
                    <div className="p-4 rounded-2xl bg-white/80 backdrop-blur">
                      <h4 className="font-bold text-purple-700 mb-2">Extra Kids</h4>
                      <p className="text-sm text-slate-700">
                        <strong>Extra Kids (under 12): $199 each</strong><br />
                        Add to Family Pack
                      </p>
                    </div>
                </div>
                <p className="text-xs text-slate-600 mt-4">
                  Children 0–3 join free. Children 4+ are priced as adults unless included in a Family Bundle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">What's Always Included</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
              {WHATS_INCLUDED.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift"
                  style={{animation: `slide-in 0.${index + 12}s ease-out`}}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seattle Gift Tote */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-yellow-100 p-8 shadow-2xl hover-lift">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                    🎁 Seattle Gift Tote
                  </h2>
                  <p className="text-slate-700 text-lg">Take a piece of Seattle home with you.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                  {GIFT_TOTE_ITEMS.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                        <span className="text-white text-sm">•</span>
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold text-lg shadow-lg">
                    <span>Bundle any 3 for just</span>
                    <span className="text-2xl">$110</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="py-16 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Optional Add-Ons</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Quick bites & coffee upgrades during your layover (for longer layovers or upgrades)
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift">
                  <div className="text-2xl font-bold text-purple-600 mb-2">1 Add-On</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">$40</div>
                  <div className="text-sm text-slate-600">per person</div>
                </div>
                <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-purple-300 shadow-lg hover-lift transform scale-105">
                  <div className="text-2xl font-bold text-purple-600 mb-2">2 Add-Ons</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">$75</div>
                  <div className="text-sm text-slate-600">per person</div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">Popular</div>
                </div>
                <div className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift">
                  <div className="text-2xl font-bold text-purple-600 mb-2">3 Add-Ons</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">$110</div>
                  <div className="text-sm text-slate-600">per person</div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {ADD_ONS.map((addon, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur shadow-md hover-lift">
                    <div className="text-3xl">{addon.emoji}</div>
                    <span className="font-medium text-slate-700">{addon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Policy & Contact */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Cancellation Policy */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Cancellation Policy
                  </h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-4">
                  Free cancellation up to 24 hours before your tour. No hidden fees.
                </p>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200">
                  <p className="text-sm text-slate-700">
                    <strong>Note:</strong> Each tour is a <strong>6-hour total experience</strong>, including airport pickup, 
                    guided sightseeing, and a guaranteed on-time return with a 2-hour flight buffer.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-1 shadow-2xl hover-lift">
                <div className="rounded-3xl bg-white/95 backdrop-blur p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Contact Us
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50">
                      <span className="text-2xl">📧</span>
                      <div>
                        <div className="font-semibold text-slate-800">Email</div>
                        <a href="mailto:booking@sixhourlayover.com" className="text-purple-600 hover:text-purple-700 transition-colors text-sm">
                          booking@sixhourlayover.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50">
                      <span className="text-2xl">📞</span>
                      <div>
                        <div className="font-semibold text-slate-800">Phone</div>
                        <a href="tel:+12064866398" className="text-purple-600 hover:text-purple-700 transition-colors text-sm">
                          (206) 486-6398
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Seattle Adventure?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who've made their layover unforgettable
            </p>
            <a 
              href="/book"
              className="inline-flex items-center px-12 py-4 bg-white text-purple-600 font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3d transform hover:-translate-y-2 transition-all duration-300"
            >
              ✈️ Book Your Tour Now
            </a>
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
