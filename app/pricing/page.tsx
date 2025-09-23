"use client";
import { useState } from "react";
import Image from "next/image";
import { PlaneIcon, ClockIcon, MapPinIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import { Card, CardHeader, CardContent } from "@/components/Card";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import { PricingPageText, GlobalText } from "@/lib/text";
import { STRIPE_TOUR_PRODUCTS } from "@/lib/stripe-products";

const TOUR_OPTIONS = [
  {
    title: "6-Hour Seattle Essentials",
    subtitle: "Pike Place Market + Waterfront",
    description: "Discover Seattle's heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, snap photos at the Gum Wall, browse artisan shops, and stroll the waterfront — all with a friendly local guide.",
    duration: "Airport meet & greet, Light Rail transfers, Seattle chocolate-covered Rainier cherry souvenir tote bag",
    pricing: {
      perPerson: 250,
      solo: 399,
      family: 750
    },
    features: [
      "Pike Place Market tour",
      "Famous fish toss viewing", 
      "Waterfront exploration",
      "Seattle chocolate-covered Rainier cherries tote bag"
    ]
  },
  {
    title: "7-Hour Seattle Highlights",
    subtitle: "Essentials + Iconic Seattle Skyline View – Kerry Park + Molly Moon's Ice Cream",
    description: "Everything in the Essentials Tour plus Kerry Park for Seattle's iconic skyline view and a pre-ordered Molly Moon's Ice Cream pickup.",
    duration: "All Essentials features + Kerry Park + included Molly Moon's Ice Cream",
    pricing: {
      perPerson: 300,
      solo: 450,
      family: 900
    },
    features: [
      "All Essentials Tour features",
      "Kerry Park iconic skyline view",
      "Molly Moon's Ice Cream (pre-ordered pickup, included)",
      "Seattle's postcard-perfect photos"
    ]
  },
  {
    title: "8-Hour Seattle Complete",
    subtitle: "Essentials + Space Needle admission",
    description: "The ultimate layover adventure. Includes everything in the Essentials Tour, plus Space Needle admission to go inside and visit the observation deck.",
    duration: "All Essentials features + Space Needle admission (go inside, observation deck visit included)",
    pricing: {
      perPerson: 350,
      solo: 499,
      family: null // No family pack for 8-hour due to Space Needle ticket requirements
    },
    features: [
      "All Essentials Tour features",
      "Space Needle admission (go inside)",
      "Observation deck visit included",
      "Maximum Seattle experience"
    ],
    note: "No Family Pack available - each guest requires Space Needle ticket; children under 5 are free"
  }
];

const PRICING_TIERS = STRIPE_TOUR_PRODUCTS;

const WHATS_INCLUDED = [
  "Airport meet & greet",
  "Uber coordination",
  "On-time return guarantee (safe flight buffer)",
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
    name: "Fremont Troll + Dick's Burgers",
    price: 120,
    emoji: "🍔",
    requirement: "Requires 9+ hour layover"
  },
  {
    name: "Amazon Spheres + Top Pot Donuts",
    price: 120,
    emoji: "🏢",
    requirement: "Requires 9+ hour layover"
  },
  {
    name: "Filson & REI Shopping Stop",
    price: 120,
    emoji: "🛍️",
    requirement: "Requires 9+ hour layover"
  },
  {
    name: "Starbucks Reserve Roastery (Capitol Hill)",
    price: 120,
    emoji: "☕",
    requirement: "Requires 9+ hour layover"
  }
];

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState("2–3 Travelers");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">{PricingPageText.title}</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                {PricingPageText.subtitle}
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
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{PricingPageText.pricingTitle}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {PricingPageText.pricingSubtitle}
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
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{tier.priceDescription}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsBookingModalOpen(true);
                      }}
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{PricingPageText.whatsIncluded}</span>
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
                    {PricingPageText.giftTote}
                  </h2>
                  <p className="text-slate-700 text-lg">{PricingPageText.giftToteDescription}</p>
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
                    <span>{PricingPageText.giftToteBundle}</span>
                    <span className="text-2xl">{PricingPageText.giftTotePrice}</span>
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
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{PricingPageText.addOnsTitle}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {PricingPageText.addOnsSubtitle}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{PricingPageText.oneAddOn}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{PricingPageText.oneAddOnPrice}</div>
                  <div className="text-sm text-slate-600">{PricingPageText.perPerson}</div>
                </div>
                <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-purple-300 shadow-lg hover-lift transform scale-105">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{PricingPageText.twoAddOns}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{PricingPageText.twoAddOnsPrice}</div>
                  <div className="text-sm text-slate-600">{PricingPageText.perPerson}</div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">{PricingPageText.popular}</div>
                </div>
                <div className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{PricingPageText.threeAddOns}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{PricingPageText.threeAddOnsPrice}</div>
                  <div className="text-sm text-slate-600">{PricingPageText.perPerson}</div>
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
                    {PricingPageText.cancellationPolicy}
                  </h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-4">
                  {PricingPageText.cancellationPolicyDescription}
                </p>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200">
                  <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: PricingPageText.tourNote }} />
                </div>
              </div>

              {/* Contact */}
              <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-1 shadow-2xl hover-lift">
                <div className="rounded-3xl bg-white/95 backdrop-blur p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {PricingPageText.contact}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50">
                      <span className="text-2xl">📧</span>
                      <div>
                        <div className="font-semibold text-slate-800">{GlobalText.email}</div>
                        <a href={`mailto:${GlobalText.emailAddress}`} className="text-purple-600 hover:text-purple-700 transition-colors text-sm font-bold">
                          {GlobalText.emailAddress}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50">
                      <span className="text-2xl">📞</span>
                      <div>
                        <div className="font-semibold text-slate-800">{GlobalText.phone}</div>
                        <a href={`tel:${GlobalText.phoneNumber}`} className="text-purple-600 hover:text-purple-700 transition-colors text-sm font-bold">
                          {GlobalText.phoneNumber}
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
            <h2 className="text-4xl font-bold text-white mb-6">{PricingPageText.ctaTitle}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {PricingPageText.ctaSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                📋 Custom Booking Form
              </a>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                ✈️ Quick Book (2-3 Travelers)
              </button>
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
                    {GlobalText.appName}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{GlobalText.footerSlogan}</p>
              </div>
              
              <div>
                <h5 className="font-bold text-slate-800 mb-3">{GlobalText.quickLinks}</h5>
                <div className="space-y-2 text-sm">
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/">{GlobalText.homeLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/how-it-works">{GlobalText.howItWorksLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/pricing">{GlobalText.pricingLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/faq">{GlobalText.faqLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/about">{GlobalText.aboutLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/contact">{GlobalText.contactLink}</a>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold text-slate-800 mb-3">{GlobalText.legal}</h5>
                <div className="space-y-2 text-sm">
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/terms">{GlobalText.termsLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/privacy">{GlobalText.privacyLink}</a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                {GlobalText.copyright}
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61580441967255" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/sixhourlayoverseattle/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@sixhourlayover_sea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>

        <MobileNav />
        
        {/* Booking Modal */}
        <BookingModal 
          isOpen={isBookingModalOpen} 
          onClose={() => setIsBookingModalOpen(false)} 
        />
      </div>
    </div>
  );
}
