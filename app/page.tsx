
"use client";
import { useState } from "react";
import Image from "next/image";
import { PlaneIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import { Card, CardHeader, CardContent } from "@/components/Card";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { HomePageText, GlobalText } from "@/lib/text";

const SEATTLE_HIGHLIGHTS = [
  "Pike Place Market & famous fish toss",
  "Waterfront stroll with views", 
  "Space Needle photo stop",
  "Kerry Park skyline view",
  "Local food tastings"
];

const TESTIMONIALS = [
  "It's like having a local friend in the city — guiding you every step.",
  "Perfect for our 6-hour layover. We saw so much!",
  "Stress-free and unforgettable. Highly recommend!"
];

const TOUR_OPTIONS = [
  {
    name: "6-Hour Classic Tour",
    subtitle: "Pike Place & Waterfront",
    description: "Discover Seattle's heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, snap photos at the Gum Wall, browse artisan shops, and stroll the waterfront — all with a friendly local guide.",
    features: ["Airport meet-up", "Round-trip transfers", "Seattle chocolate cherry gift bag"]
  },
  {
    name: "7-Hour Extended Tour", 
    subtitle: "Classic + Space Needle",
    description: "Everything in the Classic Tour plus a quick Space Needle photo stop. Perfect for travelers who want both insider gems and Seattle's most iconic landmark.",
    features: ["All Classic features", "Space Needle visit", "Extended exploration time"]
  },
  {
    name: "8-Hour Premium Tour",
    subtitle: "Extended + Kerry Park", 
    description: "The ultimate layover adventure. Includes everything in the Extended Tour, plus a stop at Kerry Park for Seattle's postcard skyline view.",
    features: ["All Extended features", "Kerry Park skyline", "Maximum Seattle experience"]
  }
];

function TourPreview({ selectedTour }: { selectedTour: number }) {
  const tour = TOUR_OPTIONS[selectedTour];
  return (
    <div className="mt-6 rounded-3xl bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 p-6 shadow-2xl hover-lift">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500">
          <MapPinIcon className="h-5 w-5 text-white" />
        </div>
        <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          {tour.name}
        </h4>
      </div>
      <p className="text-slate-700 mb-4">{tour.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tour.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-purple-200">
            <span className="text-green-600">✓</span>
            <span className="text-sm font-medium text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a 
          href="/pricing"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          📅 View Pricing & Book
        </a>
        <a 
          href="/how-it-works"
          className="px-6 py-3 bg-white/80 backdrop-blur text-slate-800 font-semibold rounded-xl border border-slate-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          🔍 How It Works
        </a>
      </div>
    </div>
  );
}

export default function Page() {
  const [selectedTour, setSelectedTour] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

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
        <div className="container grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6" style={{animation: 'slide-in 0.6s ease-out'}}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-slate-900">{HomePageText.title}</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">&mdash;{HomePageText.subtitle}</span>
            </h1>
            <p className="text-slate-700 text-lg max-w-2xl leading-relaxed mb-6">
              {HomePageText.description}
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 mb-6">
              <p className="text-lg italic text-slate-700 text-center">
                &ldquo;{TESTIMONIALS[0]}&rdquo;
              </p>
            </div>
            <div className="grid gap-4 text-left max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-slate-700">{HomePageText.shortLayovers}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">📍</span>
                <span className="text-slate-700">{HomePageText.meetup}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">🍜</span>
                <span className="text-slate-700">{HomePageText.features}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">💼</span>
                <span className="text-slate-700">{HomePageText.luggage}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="/book"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {HomePageText.bookNow}
              </a>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 border-2 border-white" />
                ))}
              </div>
              <p className="text-sm text-slate-600">{HomePageText.lovedBy}</p>
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

      {/* You're probably thinking section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-slate-900">{HomePageText.thinking}</span>
            </h2>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Left side - Questions and Answers */}
            <div className="space-y-8">
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  {HomePageText.thinking1Title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: HomePageText.thinking1Description }} />
                </p>
              </div>
              
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  {HomePageText.thinking2Title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {HomePageText.thinking2Description}
                </p>
              </div>
              
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  {HomePageText.thinking3Title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {HomePageText.thinking3Description}
                </p>
              </div>
              
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  {HomePageText.thinking4Title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {HomePageText.thinking4Description}
                </p>
              </div>
            </div>
            
            {/* Right side - Images */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <div 
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/seattle-skyline.jpg")',
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
                  <div 
                    className="aspect-square bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("/seattle.jpg")',
                    }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
                  <div 
                    className="aspect-square bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("/seattle-skyline.jpg")',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why It Works */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-slate-900">{HomePageText.whyItWorksTitle}</span>
            </h2>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              {HomePageText.whyItWorksSubtitle}
            </h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {HomePageText.whyItWorksDescription}
            </p>
          </div>
          
          {/* Tour Options */}
          <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 overflow-hidden hover-lift">
                <div className="p-8 bg-gradient-to-r from-purple-600 to-indigo-600">
                  <h3 className="text-2xl font-bold text-white">{HomePageText.journeyTitle}</h3>
                  <p className="mt-2 text-white/90">{HomePageText.journeySubtitle}</p>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    {TOUR_OPTIONS.map((tour, index) => (
                      <div 
                        key={index}
                        className={`rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                          selectedTour === index
                            ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg'
                            : 'border-slate-200 bg-white hover:border-purple-300 hover:shadow-md'
                        }`}
                        onClick={() => setSelectedTour(index)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                            {index + 6}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-slate-800 mb-1">{tour.name}</h4>
                            <p className="text-purple-600 font-semibold mb-2">{tour.subtitle}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">{tour.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <button 
                      onClick={() => setShowPreview(!showPreview)}
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300 text-lg w-full sm:w-auto"
                    >
                      {showPreview ? HomePageText.hidePreview : HomePageText.preview}
                    </button>
                  </div>

                  {showPreview && <TourPreview selectedTour={selectedTour} />}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-1 shadow-2xl hover-lift">
                <div className="rounded-3xl bg-white/95 backdrop-blur p-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{HomePageText.contact}</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50">
                      <span className="text-2xl">📧</span>
                      <div>
                        <div className="font-semibold text-slate-800">{HomePageText.email}</div>
                        <a href={`mailto:${HomePageText.emailAddress}`} className="text-purple-600 hover:text-purple-700 transition-colors text-sm">
                          {HomePageText.emailAddress}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50">
                      <span className="text-2xl">📞</span>
                      <div>
                        <div className="font-semibold text-slate-800">{HomePageText.phone}</div>
                        <a href={`tel:${HomePageText.phoneNumber}`} className="text-purple-600 hover:text-purple-700 transition-colors text-sm">
                          {HomePageText.phoneNumber}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{HomePageText.countries}</div>
                      <div className="text-xs text-slate-600 mt-1">{HomePageText.countriesLabel}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{HomePageText.perfectTime}</div>
                      <div className="text-xs text-slate-600 mt-1">{HomePageText.perfectTimeLabel}</div>
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
          <h2 className="text-4xl font-bold text-white mb-6">{HomePageText.ctaTitle}</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {HomePageText.ctaSubtitle}
          </p>
          <a 
            href="/book"
            className="inline-flex items-center px-12 py-4 bg-white text-purple-600 font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3d transform hover:-translate-y-2 transition-all duration-300"
          >
            {HomePageText.bookNow}
          </a>
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
          </div>
        </div>
      </footer>

      <MobileNav />
      </div>
    </div>
  );
}
