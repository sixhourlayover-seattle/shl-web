"use client";

import { useState } from "react";
import { ClockIcon, MapPinIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
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
    pricing: 499,
    id:'solo-traveler-8hour'
  },
  {
    title: "Two to Three Travelers",
    subtitle: "per person",
    pricing: 350,
    id:'per-person-8hour'
  }
];
const WHATS_INCLUDED = [
  "Airport meet & greet",
  "Light Rail from airport and Uber within the city",
  "On-time return guarantee",
  "Souvenir tote bag",
  "Friendly local guide"
];

const Why_choose_this_tour = [
  "Covers Seattle’s top attractions including Space Needle",
  "Ideal for travelers with a bit more time",
  "Multilingual guides (English / Mandarin / Japanese)",
  "Family-friendly and photo-ready routes"
];

const ADD_ONS = [
  {
    name: "Fremont Troll + Dick's Burgers",
    subtitle:"After your skyline photo moment at <strong>Kerry Park</strong>, stroll through the charming streets of Queen Anne to <strong>Café Hagen</strong> — a locally loved coffee and pastry shop with European flair and skyline views.",
    price: 120,
    emoji: "🍔",
    requirement: "Requires 9+ hour layover"
  },
  {
    name: "Amazon Spheres + Top Pot Donuts",
    subtitle:"Explore the futuristic <strong>Amazon Spheres</strong>, then unwind at <strong>Top Pot Donuts</strong> for coffee and Seattle’s most famous handcrafted doughnuts.",
    price: 120,
    emoji: "🏢",
    requirement: "Requires 9+ hour layover"
  },
  {
    name: "Filson & REI Shopping Stop",
    subtitle:"Browse two Seattle icons — <strong>Filson’s heritage gear</strong> and <strong>REI’s flagship store</strong>, featuring an indoor climbing wall and outdoor-lover’s vibe.",
    price: 120,
    emoji: "🛍️",
    requirement: "Requires 9+ hour layover"
  },
  {
    name: "Queen Anne View & Coffee Stop",
    subtitle:"After your <strong>skyline moment at Kerry Park</strong>, stroll through the charming <strong>Queen Anne neighborhood</strong> to <strong>Café Hagen</strong>, a <strong>Scandinavian-style café</strong> known for <strong>specialty coffee</strong>, <strong>pastries</strong>, and <strong>calm local vibes</strong>. No Uber needed — a perfect <strong>scenic & relaxing add-on</strong> within <strong>walking distance</strong>.",
    price: 120,
    emoji: "☕",
    requirement: "Requires 9+ hour layover"
  }
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
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">8-Hour Layover in Seattle — Pike Place Market &amp; Space Needle Experience</span>
            </h1>
            <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">Turn your layover into a mini adventure — out to the city, back on time.</p>

            <a href="/book" className=" mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >Book Tour   </a>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6" style={{ animation: 'slide-in 0.6s ease-out' }}>
              <div className="grid gap-4 text-left max-w-2xl">
                <div className="flex items-center gap-3">
                  <p className="text-slate-700 text-lg max-w-2xl leading-relaxed mb-6">With eight hours to spare, see Seattle from street level to skyline. This extended tour adds the Space Needle — the city’s most iconic landmark — to your layover adventure.</p>
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
                      <p className="text-slate-600 text-sm leading-relaxed">Discover local flavors, coffee culture, and lively market scenes.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg"></div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">Space Needle</h4>
                      <p className="text-purple-600 font-semibold mb-2"></p>
                      <p className="text-slate-600 text-sm leading-relaxed">Ride to the top for a 360° view of Seattle, Puget Sound, and Mt. Rainier.</p>
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
                Planned for travelers with 8–12-hour layovers. Includes full 2-hour buffer before your scheduled flight time and live flight monitoring for guaranteed safe return to SEA.


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
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Meeting Point</span>
              </h2>

              <div className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed ">
                Your Layover Concierge will meet you at, or as close as possible to, your arrival gate inside SEA-Tac Airport. <br />After you land, you’ll receive a WhatsApp message with your guide’s name and photo for easy recognition. If needed, your guide will wait in the public arrival area holding a “Six-Hour Layover” sign.
              </div>
            </div>
           

          </div>
        </section>


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
                        setSelectedTier(tour.id); // 👈 Set the tour/tier name
                        setIsBookingModalOpen(true);
                      }}
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    > Book Now </button>

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

        
        {/* Add-Ons */}
        <section className="py-16 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{PricingPageText.addOnsTitle}</span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">

              {/* Add-Ons List */}
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                {ADD_ONS.map((addon, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur shadow-md hover-lift">
                    <div className="text-3xl flex-shrink-0">{addon.emoji}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800 mb-1">{addon.name}</div>
                      <div className="text-sm text-purple-600 font-medium">${addon.price} per group</div>
                      <div
                          className="text-sm text-slate-600 mb-4 mt-1"
                          dangerouslySetInnerHTML={{ __html: addon.subtitle }}
                        />
                      
                      <div className="text-xs text-slate-500 mt-1">{addon.requirement}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Note */}
              <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-200">
                <p className="text-sm text-blue-700 font-medium">
                  Includes: airport meet &amp; greet | light rail from airport and Uber within the city | souvenir tote bag | on-time return guarantee | friendly local guide.
                </p>
              </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">See Seattle’s skyline from above before your next flight.</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Reserve your 8-hour layover adventure at sixhourlayover.com.
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
          description={`The Six-Hour Layover was created for travelers who want more than airport lounges. In just a few hours, we'll take you from SEA Airport into Seattle's highlights — Pike Place Market, the Waterfront, and iconic city views — and return you with a guaranteed 2-hour buffer. Our tours are private, stress-free, and led by guides who treat you like family and friends, sharing Seattle as if you were their own local guest.`}
          imageSrc="/dog-mascot.jpg"
          imageAlt="Six-Hour Layover Seattle mascot dog Guai Guai wearing bow tie — friendly welcome for travelers"
        />

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
