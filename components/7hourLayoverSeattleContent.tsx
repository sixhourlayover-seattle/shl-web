"use client";

import { useState } from "react";
import { ClockIcon, MapPinIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import { HomePageText, PricingPageText, GlobalText } from "@/lib/text";

import Image from "next/image";


const TOUR_OPTIONS = [
  {
    title: "Solo Traveler",
    subtitle: "total",
    pricing: 450,
  },
  {
    title: "Two to Three Travelers",
    subtitle: "per person",
    pricing: 300,
  },
  {
    title: "Family Pack",
    subtitle: "total (2 adults + up to 3 kids)",
    pricing: 900,
  }
];
const WHATS_INCLUDED = [
  "Airport meet & greet",
  "Light Rail from airport and Uber within the city",
  "On-time return guarantee",
  "Souvenir tote bag"
];



const Why_choose_this_tour = [
  "Balanced pace: market, waterfront & skyline",
  "Perfect for couples, friends, or photo lovers",
  "Multilingual support (English / Mandarin / Japanese)"
];


export default function SLTourContent() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (sectionIndex: number, faqIndex: number) => {
    const key = `${sectionIndex}-${faqIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const [selectedTour, setSelectedTour] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 animated-gradient opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-20">
          <div className="container text-center mb-12" style={{ animation: 'slide-in 0.6s ease-out' }}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">7-Hour — Pike Place Market, Waterfront & Kerry Park</span>
            </h1>
            <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">Pike Place Market + Seattle Waterfront + Kerry Park skyline view</p>

            <a href="/book" className=" mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >Book Tour   </a>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6" style={{ animation: 'slide-in 0.6s ease-out' }}>
              <div className="grid gap-4 text-left max-w-2xl">
                <div className="flex items-center gap-3">
                  <p className="text-slate-700 text-lg max-w-2xl leading-relaxed mb-6">Seven hours is the sweet spot to enjoy Seattle’s signature mix of markets, waterfront charm, and skyline views — all neatly timed within your layover.</p>
                </div>
              </div>


            </div>
            <div className="relative" style={{ animation: 'slide-in 0.8s ease-out' }}>
              <div
                className="aspect-[4/2] rounded-3xl shadow-2xl overflow-hidden relative hover-lift"
                style={{
                  backgroundImage: 'url("/space-needle-skyline.jpg")',
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

        {/* Itinerary Highlights */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Itinerary Highlights</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg"></div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">Pike Place Market</h4>
                      <p className="text-purple-600 font-semibold mb-2"></p>
                      <p className="text-slate-600 text-sm leading-relaxed">Watch the fish fly, try local bites, and shop handmade goods.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg"></div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">Seattle Waterfront</h4>
                      <p className="text-purple-600 font-semibold mb-2"></p>
                      <p className="text-slate-600 text-sm leading-relaxed">Relax by Elliott Bay, enjoy street performers, or grab a snack with a view.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg"></div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">Kerry Park</h4>
                      <p className="text-purple-600 font-semibold mb-2"></p>
                      <p className="text-slate-600 text-sm leading-relaxed">End with Seattle’s most famous skyline view — the Space Needle framed by
                        Mount Rainier.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 ">
          <div className="container text-center">

            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
              <h2 className="text-4xl font-bold  text-slate-800 mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Timing &amp; Guarantee</h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                We monitor your flight in real time and include a full 2-hour buffer for return. You’ll arrive back at SEA at least two hours before your scheduled flight time — guaranteed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/book"
                  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  📋 {HomePageText.bookNow}
                </a>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
                >
                  ⚡ Quick Book (From $250)
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Meeting Point */}
        {/* <section className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Meeting Point</span>
              </h2>

              <div className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed ">
                Your Layover Concierge will meet guests at their arrival gate, or as close as possible, inside SEA-Tac Airport. You’ll receive WhatsApp coordination before landing.
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift aspect-[4/3] relative">
                <Image
                  src="/airport-six.jpeg"
                  alt="Pike Place Market - Seattle's famous public market and iconic layover destination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift aspect-[4/3] relative">
                <Image
                  src="/Sea-tac airport gates.webp"
                  alt="Seattle Waterfront - scenic views and attractions during layover tours"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>              
            </div>

          </div>
        </section> */}


        {/* Pricing Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pricing &amp; Inclusions</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {PricingPageText.pricingSubtitle}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {TOUR_OPTIONS.map((tour, index) => (
                <div key={index} className="rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer hover-lift border-slate-200 bg-white/80 backdrop-blur hover:border-purple-300t" style={{ animation: `slide-in 0.${index + 7}s ease-out` }}>

                  <div className="text-center">
                    <h3 className="font-bold text-lg text-slate-800 mb-2">{tour.title}</h3>
                    <div className="mb-3">
                      <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        ${tour.pricing}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{tour.subtitle}</p>
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
            {/* What's Included */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Inclusions </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
              {WHATS_INCLUDED.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift"
                  style={{ animation: `slide-in 0.${index + 12}s ease-out` }}
                >
                  {/* <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div> */}
                  <span className="text-green-600">✔</span>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </section>



        {/* Why Choose This Tour */}
        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Why Choose This Tour:</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4  max-w-6xl mx-auto">


              {Why_choose_this_tour.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift"
                  style={{ animation: `slide-in 0.${index + 12}s ease-out` }}
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
            <h2 className="text-4xl font-bold text-white mb-6">Make your 7-hour stop in Seattle a story worth telling.</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Experience Seattle’s skyline before your next flight — Book now at sixhourlayover.com.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                Book Now
              </a>


              <a href="https://wa.me/12069281277" target="_blank" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                <WhatsAppIcon className="w-6 h-6 text-white-600" /> &nbsp; Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Footer + Mobile Nav */}
        <footer className="relative mt-20 border-t border-purple-200 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
          <div className="container py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/logo_from_url.jpg" alt="Logo" width={40} height={40} className="rounded-2xl" />
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

        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
      </div>
    </div>
  );
}
