"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPinIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import { HomePageText, GlobalText } from "@/lib/text";



const TESTIMONIALS = [
  "It's like having a local friend in the city — guiding you every step.",
  "Perfect for our 6-hour layover. We saw so much!",
  "Stress-free and unforgettable. Highly recommend!"
];

const TOUR_OPTIONS = [
  {
    name: "6-Hour — Pike Place Market & Waterfront",
    subtitle: "Pike Place Market + Waterfront",
    description: "Discover Seattle's heartbeat in just six hours. Explore Pike Place Market, watch the famous fish toss, snap photos at the Gum Wall, browse artisan shops, and stroll the waterfront — all with a friendly local guide.",
    features: ["Airport meet & greet", "Light Rail transfers", "Seattle chocolate-covered Rainier cherry souvenir tote bag"]
  },
  {
    name: "7-Hour — Pike Place Market & Waterfront + iconic Seattle skyline view — Kerry Park",
    subtitle: "Pike Place Market & Waterfront + iconic Seattle skyline view — Kerry Park",
    description: "Visit Pike Place Market & Waterfront plus iconic Seattle skyline view — Kerry Park",
    features: ["Pike Place Market & Waterfront", "iconic Seattle skyline view — Kerry Park"]
  },
  {
    name: "8-Hour — Pike Place Market + Space Needle Admission",
    subtitle: "Experience the best of Seattle in one layover.",
    description: "Explore Pike Place Market, then head to the Space Needle for sweeping skyline views from the observation deck — admission ticket included.",
    features: ["Pike Place Market", "Space Needle admission (go inside, observation deck visit included)", "Maximum Seattle experience"]
  }
];

function TourPreview({ selectedTour }: { selectedTour: number }) {
  const tour = TOUR_OPTIONS[selectedTour];
  return (
    <div className="mt-6 rounded-3xl bg-gradient-to-br section-highlight p-6 shadow-2xl hover-lift">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-full primary-background">
          <MapPinIcon className="h-5 w-5 text-white" />
        </div>
        <h4 className="text-xl font-bold bg-gradient-to-r bg-clip-text text-color-heading">
          {tour.name}
        </h4>
      </div>
      <p className="text-slate-700 mb-4">{tour.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tour.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-primary-300">
            <span className="text-green-600">✓</span>
            <span className="text-sm font-medium text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a 
          href="/pricing"
          className="px-6 py-3 bg-gradient-to-r btn-primary text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
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
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-20">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6" style={{animation: 'slide-in 0.6s ease-out'}}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-slate-900">{HomePageText.title}</span>
                <br />
                <span className="headings_color">{HomePageText.subtitle}</span>
              </h1>
              <p className="text-slate-700 text-lg max-w-2xl leading-relaxed mb-6">
                {HomePageText.description}
              </p>
              <div className="section-highlight rounded-2xl p-6 mb-6">
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
                  className="inline-flex items-center px-8 py-4 btn-primary text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  {HomePageText.bookNow}
                </a>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center px-8 py-4 btn-primary text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  ⚡ Quick Book (From $250)
                </button>
              </div>
            </div>
            <div className="relative" style={{animation: 'slide-in 0.8s ease-out'}}>
              <div 
                className="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden relative "
                style={{
                  backgroundImage: 'url("/seattle-skyline-sunset-mt-rainier.webp")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
              </div>
            </div>
          </div>
        </section>

        {/* You're probably thinking section */}
        <section className="py-16 sm:py-24">
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
                  <h3 className="text-2xl font-bold  mb-4">
                    {HomePageText.thinking1Title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    <span dangerouslySetInnerHTML={{ __html: HomePageText.thinking1Description }} />
                  </p>
                </div>
                
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                  <h3 className="text-2xl font-bold mb-4">
                    {HomePageText.thinking2Title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {HomePageText.thinking2Description}
                  </p>
                </div>
                
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                  <h3 className="text-2xl font-bold  mb-4">
                    {HomePageText.thinking3Title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {HomePageText.thinking3Description}
                  </p>
                </div>
                
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                  <h3 className="text-2xl font-bold  mb-4">
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
                      backgroundImage: 'url("/seattle-airport-waiting-layover.webp")',
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
                    <div 
                      className="aspect-square bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("/pike-place-market.jpg")',
                      }}
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
                    <div 
                      className="aspect-square bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("/seattle-waterfront.jpg")',
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
              <h3 className="text-2xl font-bold headings_color mb-4">
                {HomePageText.whyItWorksSubtitle}
              </h3>
              <div className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed text-left">
                {HomePageText.whyItWorksDescription}
              </div>
            </div>
            
            {/* Tour Options */}
            <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
              <div className="lg:col-span-2">
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 overflow-hidden hover-lift">
                  <div className="p-8 primary-background">
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
                              ? 'border-primary-500 shadow-lg'
                              : 'border-slate-200 hover:border-primary-300 hover:shadow-md'
                          }`}
                          onClick={() => setSelectedTour(index)}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br primary-background flex items-center justify-center text-white font-bold text-lg">
                              {index + 6}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-slate-800 mb-1">{tour.name}</h4>
                              <p className="text-color-heading font-semibold mb-2">{tour.subtitle}</p>
                              <p className="text-slate-600 text-sm leading-relaxed">{tour.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <button 
                        onClick={() => setShowPreview(!showPreview)}
                        className="inline-flex items-center justify-center px-8 py-4 btn-primary text-white font-bold rounded-2xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300 text-lg w-full sm:w-auto"
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
                <div className="rounded-3xl bg-gradient-to-br from-primary-600 to-purple-600 p-1 shadow-2xl ">
                  <div className="rounded-3xl bg-white/95 backdrop-blur p-6">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-color-heading bg-clip-text text-transparent">{HomePageText.contact}</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-2xl ">
                        <span className="text-2xl">📧</span>
                        <div>
                          <div className="font-semibold text-slate-800">{HomePageText.email}</div>
                          <a href={`mailto:${HomePageText.emailAddress}`} className="text-color-heading transition-colors text-sm font-bold">
                            {HomePageText.emailAddress}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-2xl">
                        <span className="text-2xl">📞</span>
                        <div>
                          <div className="font-semibold text-slate-800">{HomePageText.phone}</div>
                          <a href={`tel:${HomePageText.phoneNumber}`} className="text-color-heading transition-colors text-sm font-bold">
                            {HomePageText.phoneNumber}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-2xl ">
                        <WhatsAppIcon className="w-6 h-6 text-green-600" />
                        <div>
                          <div className="font-semibold text-slate-800">{HomePageText.whatsapp}</div>
                          <a href={`https://wa.me/12069281277`} className="text-color-heading transition-colors text-sm font-bold" target="_blank" rel="noopener noreferrer">
                            {HomePageText.whatsappNumber}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
                        <div className="text-2xl font-bold bg-gradient-to-r text-color-heading">{HomePageText.countries}</div>
                        <div className="text-xs text-slate-600 mt-1">{HomePageText.countriesLabel}</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
                        <div className="text-2xl font-bold bg-gradient-to-r text-color-heading">{HomePageText.perfectTime}</div>
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
        <section className="py-16 section-highlight">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-black mb-6">{HomePageText.ctaTitle}</h2>
            <p className="text-black/90 text-lg mb-8 max-w-2xl mx-auto">
              {HomePageText.ctaSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="inline-flex items-center px-8 py-3 bg-white text-color-heading font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                📋 {HomePageText.bookNow}
              </a>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center px-8 py-3 btn-primary font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                ⚡ Quick Book (From $250)
              </button>
            </div>
          </div>
        </section>

        

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
