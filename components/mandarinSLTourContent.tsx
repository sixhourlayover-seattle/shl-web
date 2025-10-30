"use client";

import { useState } from "react";
import {  ClockIcon, MapPinIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/mandarinNavigation";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import { GlobalText,chineselangText,chineseSTRIPE_TOUR_PRODUCTS } from "@/lib/text";

import Image from "next/image";



const WHATS_INCLUDED = [
  "机场迎接",
  "从机场乘坐轻轨，市内则可使用优步。",
  "准时退货保证",
  "纪念手提袋",
  "友好的当地导游"
];

const TOUR_OPTIONS_opiton = [
  {
    name: "6 小时 — 派克市场和滨水区",
    subtitle: "派克市场 + 滨水区",
    description: "只需六小时，即可探索西雅图的心脏地带。探索派克市场，观看著名的抛鱼表演，在口香糖墙拍照，逛逛手工艺品店，漫步海滨——所有这一切都与热情友好的当地导游一起进行。",
    
  },
  {
    name: "7 小时游——派克市场和海滨 + 西雅图标志性天际线景观——凯瑞公园",
    subtitle: "派克市场和海滨 + 西雅图标志性的天际线景观 — 凯瑞公园",
    description: "游览派克市场和海滨，欣赏西雅图标志性的天际线——凯瑞公园",
    
  },
  {
    name: "8 小时 — 派克市场 + 太空针塔门票",
    subtitle: "一次转机即可体验西雅图的精彩之处。",
    description: "游览派克市场，然后前往太空针塔，从观景台上欣赏壮丽的城市天际线景观——门票已包含在内。",
   
  }
];

const PRICING_TIERS = chineseSTRIPE_TOUR_PRODUCTS;


const Why_travellers_love_it = [
  "专为中转旅客设计",
  "无缝衔接的机场到市区物流",
  "多语言选项",
  "适合家庭和老年人",
  "非常适合快速拍照和品尝当地美食。",
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
      <div className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}} />
      
      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-20">
          <div className="container text-center mb-12" style={{animation: 'slide-in 0.6s ease-out'}}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">西雅图转机游览（6-8小时） <br />探索城市，准时返回</span>
            </h1>
            <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">把你的转机时间变成一次迷你冒险——去城里逛逛，准时返回。</p>

            <a href="/book" className=" mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">{chineselangText.bookTour}   </a>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6" style={{animation: 'slide-in 0.6s ease-out'}}>   
              <div className="grid gap-4 text-left max-w-2xl">
                <div className="flex items-center gap-3">                      
                  <p className="text-slate-700 text-lg max-w-2xl leading-relaxed mb-6">让您在西雅图的转机时间成为旅程中的亮点。无论您的转机时间是六小时、七小时还是八小时，我们精心策划的行程都能帮助您安全、高效、轻松地体验这座城市的精华<br />——并保证准时送您返回机场。</p>
                </div>  
              </div>
              
              
            </div>
            <div className="relative" style={{animation: 'slide-in 0.8s ease-out'}}>
              <div 
                className="aspect-[4/2] rounded-3xl shadow-2xl overflow-hidden relative hover-lift"
                style={{
                  backgroundImage: 'url("/seattle-skyline.jpg")',
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

        {/* Itinerary Overview */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">行程概览</span>
              </h2>   
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">3 条路线可供选择</p>         
            </div>

            {/* Tour Options */}
            <div className="grid gap-8 lg:grid-cols-1 max-w-7xl mx-auto">
              <div className="lg:col-span-2">
                <div className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 overflow-hidden hover-lift">
                  
                  <div className="p-8">
                    <div className="space-y-6">
                      {TOUR_OPTIONS_opiton.map((tour, index) => (
                        <div 
                          key={index}
                          className="rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 border-slate-200 bg-white hover:border-purple-300 hover:shadow-md'
                              "
                         
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
            <h2 className="text-4xl font-bold  text-slate-800 mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">时间与保证</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">每个行程都包含内置的 2 小时返回缓冲、实时航班监控和准时机场返回保证。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                📋 {chineselangText.bookNow}
              </a>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >{chineselangText.quickBook} </button>
            </div>
            </div>
            
          </div>
        </section>

        {/* Meeting Point */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">集合点</span>
              </h2>
            
              <div className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed ">
                导游会在您抵达西雅图-塔科马国际机场的登机口或尽可能靠近登机口的地方直接迎接您。您会提前收到包含导游信息和实时位置的WhatsApp消息。
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
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{chineselangText.pricingTitle}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {chineselangText.pricingSubtitle}
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
                    >  立即预订 </button>
                  </div>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> 内含物 </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
              {WHATS_INCLUDED.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift"
                  style={{animation: `slide-in 0.${index + 12}s ease-out`}}
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
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">旅行者喜爱它的原因：</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5  max-w-6xl mx-auto">
             

              {Why_travellers_love_it.map((item, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-6">准备好让您的中途停留成为一次难忘的体验了吗？</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              立即访问 sixhourlayover.com 预订，或通过 WhatsApp 联系我们。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              > 立即预订  </a>

             
              <a href="https://wa.me/12069281277" target="_blank" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                <WhatsAppIcon className="w-6 h-6 text-white-600" /> &nbsp; 在 WhatsApp 上聊天
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
                <p className="text-sm text-slate-600">{chineselangText.footerSlogan}</p>
              </div>
              
              <div>
                <h5 className="font-bold text-slate-800 mb-3">{chineselangText.quickLinks}</h5>
                <div className="space-y-2 text-sm">
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/">{chineselangText.homeLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/how-it-works">{chineselangText.howItWorksLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/pricing">{chineselangText.pricingLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/faq">{chineselangText.faqLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/about">{chineselangText.aboutLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/contact">{chineselangText.contactLink}</a>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold text-slate-800 mb-3">{chineselangText.legal}</h5>
                <div className="space-y-2 text-sm">
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/terms">{chineselangText.termsLink}</a>
                  <a className="block text-slate-600 hover:text-purple-600 transition-colors" href="/privacy">{chineselangText.privacyLink}</a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                {chineselangText.copyright}
                <p className="text-xs text-slate-500">六小时停留之旅已获得派克市场保护与发展局 (PDA) 的许可和授权，可在派克市场历史街区开展游览活动。</p>
                
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
