"use client";

import { useState } from "react";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import { HomePageText, PricingPageText, GlobalText } from "@/lib/text";
import MascotSectionProduct from "@/components/MascotSectionContent";
import Image from "next/image";


const TOUR_OPTIONS = [
  {
    title: "Solo Traveler",
    subtitle: "total",
    pricing: 450,
    id:'solo-traveler-7hour'
  },
  {
    title: "Two to Three Travelers",
    subtitle: "per person",
    pricing: 300,
   id:'per-person-7hour'
  },
  {
    title: "Family Pack",
    subtitle: "total (2 adults + up to 3 kids)",
    pricing: 900,
    id:'family-pack-7hour'
  }
];
const WHATS_INCLUDED = [
  "Airport meet & greet",
  "Light Rail from airport and Uber within the city",
  "Planned return with built-in buffer time and flight monitoring",
  "A small, locally inspired Seattle souvenir"
];



const Why_choose_this_tour = [
  "Balanced pace: market, waterfront & skyline",
  "Perfect for couples, friends, or photo lovers",
  "Multilingual support (English / Mandarin / Japanese)"
];


export default function SLTourContent() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [selectedTier, setSelectedTier] = useState("Solo");
  

  const toggleItem = (sectionIndex: number, faqIndex: number) => {
    const key = `${sectionIndex}-${faqIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

 
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
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">7-Hour — Pike Place Market, Waterfront & Kerry Park
            </h1>
            <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">Pike Place Market + Seattle Waterfront + Kerry Park skyline view</p>

            <a href="/book" className=" mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r btn-primary text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
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
                Itinerary Highlights
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
              <h2 className="text-4xl font-bold  mb-6 bg-gradient-to-r  bg-clip-text ">Timing &amp; Return Planning</h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                All itineraries are carefully planned with built-in buffer time and live flight monitoring to support a smooth and timely return to the airport.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/book"
                  className="inline-flex items-center px-6 py-2 bg-gradient-to-r btn-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  📋 {HomePageText.bookNow}
                </a>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r bg-white headings_color font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
                >
                  ⚡ Quick Book (From $250)
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Meeting Point */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Meeting Point
              </h2>

              <div className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed ">
                Your Layover Concierge will meet you at, or as close as possible to, your arrival gate inside SEA-Tac Airport. <br /> After you land, you’ll receive a WhatsApp message with your guide’s name and photo for easy recognition. If needed, your guide will wait in the public arrival area holding a “Six-Hour Layover” sign.
              </div>
            </div>          

          </div>
        </section>


        {/* Pricing Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Pricing &amp; Inclusions
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
                      <span className="text-3xl font-bold headings_color">
                        ${tour.pricing}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{tour.subtitle}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTier(tour.id); // 👈 Set the tour/tier name
                        setIsBookingModalOpen(true);
                      }}
                      className="w-full px-4 py-2 bg-gradient-to-r btn-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    > Book Now </button>

                  </div>

                </div>
              ))}

            </div>
            {/* What's Included */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4"> Inclusions  </h2>
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
              <h2 className="text-4xl font-bold mb-4"> Why Choose This Tour: </h2>
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
        <section className="py-16 bg-gradient-to-br sub-primary-background">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Make your 7-hour stop in Seattle a story worth telling.</h2>
            <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
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

        <MascotSectionProduct 
          title="Who We Are"
          name="Out to the city. Back on time. Your layover, reimagined into an unforgettable highlight."
          role="Beloved Mascot (Retired from Adventures)"
          description={`The Six-Hour Layover was created for travelers who want more than airport lounges. In just a few hours, we'll take you from SEA Airport into Seattle's highlights — Pike Place Market, the Waterfront, and iconic city views — with itineraries carefully planned using built-in buffer time and live flight monitoring to support a smooth and timely return to the airport. Our tours are private, stress-free, and led by guides who treat you like family and friends, sharing Seattle as if you were their own local guest.`}
          imageSrc="/dog-mascot.jpg"
          imageAlt="Six-Hour Layover Seattle mascot dog Guai Guai wearing bow tie — friendly welcome for travelers"
        />

        
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
