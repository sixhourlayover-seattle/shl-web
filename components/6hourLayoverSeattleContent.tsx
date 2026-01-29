"use client";

import { useState } from "react";
import { ClockIcon, MapPinIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import { HomePageText, PricingPageText, GlobalText } from "@/lib/text";
import MascotSectionProduct from "@/components/MascotSectionContent";
import Image from "next/image";
import Link from "next/link";

const TOUR_OPTIONS = [
  {
    title: "Solo Traveler",
    subtitle: "total",
    pricing: 399,
    id:'solo-traveler-6hour'
  },
  {
    title: "Two to Three Travelers",
    subtitle: "per person",
    pricing: 250,
    id:'per-person-6hour'
  },
  {
    title: "Family Pack",
    subtitle: "total (2 adults + up to 3 kids)",
    pricing: 750,
    id:'family-pack-6hour'
  }
];

const TOUR_OPTIONS2 = [
  {
    title: "SPike Place Market",
    subtitle: "fish toss, local bites, artisan stalls, original Starbucks.",
    image: '/pike-place-fish-toss-seattle.webp'
  },
  {
    title: "Seattle Waterfront",
    subtitle: "Elliott Bay walk, ferries, skyline and mountain views.",
    image: '/pike-place-fish-toss-seattle.webp'
  },
  {
    title: "Flexible pacing",
    subtitle: "photo stops and quick snacks as time allows.",
    image: '/pike-place-fish-toss-seattle.webp'
  }
];
const WHATS_INCLUDED = [
  "Airport meet & greet",
  "Link light rail from airport + Uber within the city",
  "Planned with buffer time for a timely airport return.",
  "A small, locally inspired Seattle souvenir",
  "Friendly local guide."
];

const Why_travellers_love_it = [
  "Best for short layovers",
  "Zero stress — airport pickup & return",
  "Authentic local food + postcard views",
  "Multilingual guides: English, Mandarin, Japanese"
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
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
              <span className="">6-Hour Layover in Seattle – Pike Place & Waterfront Highlights.</span>
            </h1>
            <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">Turn your layover into a mini adventure — out to the city, back on time.</p>

            <a href="/book" className=" mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r btn-primary text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >Book Tour   </a>

            <nav aria-label="Breadcrumb" className="mt-4 text-blue-600">
              <Link href="/" className="underline">Home</Link> ›{" "}
              <Link href="/seattle-layover-tour" className="underline">
                Seattle Layover Tour
              </Link>{" "}
              › <span className="text-slate-700 ">6 Hour Layover</span>
            </nav>

          </div>

        </section>

        <section className="py-12 sm:py-20">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6" style={{ animation: 'slide-in 0.6s ease-out' }}>
              <div className="grid gap-4 text-left max-w-2xl">
                <div className="flex items-center gap-3">
                  <p className="text-slate-700 text-lg max-w-2xl leading-relaxed mb-6">
                    Have six hours between flights at SEA? Swap terminal waiting for a relaxing mini-adventure. Our 6-Hour Layover Tour is timed for Seattle’s most famous sights, planned with built-in buffer time and real-time flight monitoring to support a timely return to the airport.
                    <br /><br />
                    Looking for something longer? Check out our{' '}
                    <a href="/7-hour-layover-seattle" className="text-blue-600 hover:underline">
                      7-Hour Seattle Layover Tour
                    </a>{' '}
                    or{' '}
                    <a href="/8-hour-layover-seattle" className="text-blue-600 hover:underline">
                      8-Hour Seattle Layover Tour
                    </a>{' '}
                    for extended sightseeing adventures.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative" style={{ animation: 'slide-in 0.8s ease-out' }}>
              <div
                className="aspect-[4/2] rounded-3xl shadow-2xl overflow-hidden relative hover-lift"
                style={{
                  backgroundImage: 'url("/seattle-airport-waiting-layover.webp")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'no-repeat'
                }}
                role="img"
                aria-label="Seattle skyline featuring the Space Needle at sunset"
              >
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="">
                 Itinerary Overview
                </span>
              </h2>
              {/* <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {PricingPageText.pricingSubtitle}
              </p> */}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {TOUR_OPTIONS2.map((tour, index) => (
                <div
                  key={index}
                  className="rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer hover-lift border-slate-200 bg-white/80 backdrop-blur hover:border-purple-300"
                  style={{ animation: `slide-in 0.${index + 7}s ease-out` }}
                >
                  <div className="text-center space-y-4">
                    {/* 🖼️ Image above title */}
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={tour.image} // <-- Make sure each tour in TOUR_OPTIONS has an image property
                        alt={`${tour.title} - Seattle layover tour`}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg mb-2 headings_color " >{tour.title}</h3>


                    {/* Subtitle */}
                    <p className="text-sm text-slate-600 mb-4">{tour.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 ">
          <div className="container text-center">

            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
              <h2 className="text-4xl font-bold ">Timing &amp; Return Planning</h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
               All itineraries are carefully planned with built-in buffer time and live flight monitoring to support a smooth and timely return to the airport.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/book"
                  className="inline-flex items-center px-6 py-2 btn-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  📋 {HomePageText.bookNow}
                </a>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
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
                <span className="">Meeting Point</span>
              </h2>

              <div className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed ">
                Your Layover Concierge will meet you at, or as close as possible to, your arrival gate inside SEA-Tac Airport. <br /> After you land, you’ll receive a WhatsApp message with your guide’s name and photo for easy recognition. If needed, your guide will wait in the public arrival area holding a “Six-Hour Layover” sign.
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
        </section>


        {/* Pricing Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="headings_color">Pricing &amp; Inclusions</span>
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
                      className="w-full px-4 py-2 bg-gradient-to-r btn-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    > Book Now </button>

                    

                  </div>

                </div>
              ))}

            </div>


            {/* What's Included */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className=""> Inclusions </span>
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

        {/* Why Travelers Love It */}
        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r bg-clip-text ">
                  Why Travelers Love It:
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left side: Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/traveler-overlooking-seattle-skyline.webp"
                  alt="Happy travelers exploring Seattle on a layover tour"
                  className="object-cover w-full h-[400px] md:h-[500px]"
                />
                {/* Optional gradient overlay for style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Right side: Points */}
              <div className="space-y-6">
                {Why_travellers_love_it.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl bg-white/80 backdrop-blur shadow-md p-4 hover-lift"
                    style={{ animation: `slide-in 0.${index + 12}s ease-out` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">✓</span>
                    </div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br sub-primary-background">
          <div className="container grid md:grid-cols-2 items-center gap-12">

            {/* Left Side: Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/seattle-skyline-sunset-mt-rainier.webp"
                alt="Traveler enjoying a view of Seattle during a layover tour"
                className="object-cover w-full h-[400px] md:h-[500px]"
              />
              {/* Optional subtle overlay for mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Right Side: Text & Buttons */}
            <div className="text-center md:text-left text-white space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Ready to make your 6-hour stop in Seattle a story worth telling?
              </h2>

              <p className="text-slate-700  text-lg mb-8 max-w-2xl mx-auto">
                I will give detailed instructions on photos in a separate email.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="/book"
                  className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
                >
                  Book Now
                </a>

                <a
                  href="https://wa.me/12069281277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
                >
                  <WhatsAppIcon className="w-6 h-6 text-white" /> &nbsp; Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sixhourlayover.com",
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Seattle Layover Tour",
                  "item": "https://sixhourlayover.com/seattle-layover-tour",
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "6 Hour Seattle Layover Tour",
                  "item": "https://sixhourlayover.com/6-hour-layover-seattle",
                },
              ],
            }),
          }}
        />

        
        <MascotSectionProduct 
          title="Who We Are"
          name="Out to the city. Back on time. Your layover, reimagined into an unforgettable highlight."
          role="Beloved Mascot (Retired from Adventures)"
          description={`The Six-Hour Layover was created for travelers who want more than airport lounges. In just a few hours, we’ll take you from SEA Airport into Seattle’s highlights — Pike Place Market, the Waterfront, and iconic city views — with itineraries carefully planned using built-in buffer time and live flight monitoring to support a smooth and timely return to the airport. Our tours are private, stress-free, and led by guides who treat you like family and friends, sharing Seattle as if you were their own local guest.`}
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
