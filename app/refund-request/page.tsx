"use client";
import { useState } from "react";
import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import { PricingPageText, GlobalText } from "@/lib/text";
import { STRIPE_TOUR_PRODUCTS } from "@/lib/stripe-products";


const TOUR_OPTIONS = [
  {
    title: "6-Hour — Pike Place Market & Waterfront",
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
    title: "7-Hour — Pike Place Market & Waterfront + iconic Seattle skyline view ",
    subtitle: "Pike Place Market & Waterfront + iconic Seattle skyline view",
    description: "Visit Pike Place Market & Waterfront plus Kerry Park for Seattle's iconic skyline view",
    duration: "Pike Place Market & Waterfront + Kerry Park ",
    pricing: {
      perPerson: 300,
      solo: 450,
      family: 900
    },
    features: [
      "Pike Place Market & Waterfront",
      "Kerry Park iconic skyline view",
      // "Molly Moon's Ice Cream (pre-ordered pickup, included)",
      "Seattle's postcard-perfect photos"
    ]
  },
  {
    title: "8-Hour — Pike Place Market + Space Needle Admission",
    subtitle: "Experience the best of Seattle in one layover.",
    description: "Explore the iconic Pike Place Market, then head to the Space Needle for panoramic skyline views — admission ticket included.",
    duration: "Pike Place Market + Space Needle admission",
    pricing: {
      perPerson: 350,
      solo: 499,
      family: null // No family pack for 8-hour due to Space Needle ticket requirements
    },
    features: [
      "Pike Place Market",
      "Space Needle admission",
      "Maximum Seattle experience"
    ],
    note: "No Family Pack available - each guest requires Space Needle ticket; children under 5 are free"
  }
];

const PRICING_TIERS = STRIPE_TOUR_PRODUCTS;

const WHATS_INCLUDED = [
  "Airport meet & greet",
  "Light Rail (airport ↔ city) + Uber for short hops",
  "On-time return guarantee (safe buffer; flight monitored)",
  "Seattle chocolate-covered Rainier cherry souvenir tote bag",
  "Free cancellation (24+ hours notice)"
];




export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState("Solo");
  
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
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">Refund / Cancellation Request</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                <ul>
                    <li>
                        Cancellations made 48 hours or more before your tour are refunded minus Stripe’s 3% processing fee.
                    </li>
                    <li>Cancellations within 48 hours are non-refundable, but may be rescheduled.</li>
                    <li>Airline-caused disruptions: 50% refund or complimentary reschedule at our discretion.</li>
                    <li>Refunds return to the original payment method within 5–10 days.</li>
                </ul>
              </p>
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
                        setSelectedTier(tier.id); // 👈 Set the tour/tier name
                        setIsBookingModalOpen(true);
                      }}
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    > Book Now </button>
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
                📋 Book Your Seattle Tour
              </a>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                ✈️ Quick Book
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
                <p className="text-xs text-slate-500">The Six-Hour Layover is permitted and licensed by the Pike Place Market Preservation and Development Authority (PDA) to operate tours in the Pike Place Market Historical District.</p> 
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
          selectedTier={selectedTier} // 👈 Pass it down
        />
      </div>
    </div>
  );
}
