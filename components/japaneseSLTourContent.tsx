"use client";

import { useState } from "react";
import {  InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/NavigationJapanese";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import Link from "next/link";
import { GlobalText,japaneselangText,japaneseSTRIPE_TOUR_PRODUCTS } from "@/lib/text";

import Image from "next/image";


const TOUR_OPTIONS = [
  {
    title: "Solo Traveler",
    subtitle: "total",    
    pricing: 399,
  },
   {
    title: "Two to Three Travelers",
    subtitle: "per person",    
    pricing: 250,
  },
   {
    title: "Family Pack",
    subtitle: "total (2 adults + up to 3 kids)",    
    pricing: 750,
  }
];
const WHATS_INCLUDED = [
  "空港出迎え",
  "空港からはライトレール、市内からはUberが利用可能",
  "時間通りの返品保証",
  "お土産トートバッグ",
  "フレンドリーな地元ガイド"
];

const TOUR_OPTIONS_opiton = [
  {
    name: "6時間 — パイクプレイスマーケットとウォーターフロント",
    subtitle: "パイクプレイスマーケット + ウォーターフロント",
    description: "わずか6時間でシアトルの鼓動を体感しましょう。パイク・プレイス・マーケットを散策し、有名な魚投げを見学し、ガム・ウォールで写真を撮り、職人の店を覗き、ウォーターフロントを散策。すべてフレンドリーな地元ガイドが同行します。",
    
  },
  {
    name: "7時間 — パイクプレイスマーケットとウォーターフロント + シアトルの象徴的なスカイラインの眺め — ケリーパーク",
    subtitle: "パイクプレイスマーケットとウォーターフロント、そしてシアトルの象徴的なスカイラインの眺め — ケリーパーク",
    description: "パイク プレイス マーケットとウォーターフロントを訪れ、シアトルの象徴的なスカイラインを眺めましょう — ケリー パーク",   
  },
  {
    name: "8時間 — パイクプレイスマーケット + スペースニードル入場",
    subtitle: "1 回の乗り継ぎでシアトルの最高の魅力を満喫してください。",
    description: "パイク プレイス マーケットを散策した後は、スペース ニードルに向かい、展望台からスカイラインの素晴らしい景色を眺めましょう。入場券も含まれています。",
  }
];

const PRICING_TIERS = japaneseSTRIPE_TOUR_PRODUCTS;


const Why_travellers_love_it = [
  "乗り継ぎ旅行者向けに設計",
  "空港から都市までのシームレスな物流",
  "多言語オプション",
  "ファミリー＆シニア向け",
  "ちょっとした写真撮影や地元の食べ物に最適です。",
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
              シアトル乗り継ぎツアー（6～8時間）<br />街を散策して、時間通りに戻って
            </h1>
            <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">{japaneselangText.subtitle}</p>

            <a href="/book" className=" mt-8 inline-flex items-center px-8 py-4 btn-primary font-semibold rounded-2xl shadow-neon hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300" >{japaneselangText.bookNow}   </a>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6" style={{animation: 'slide-in 0.6s ease-out'}}>   
              <div className="grid gap-4 text-left max-w-2xl">
                <div className="flex items-center gap-3">                      
                  <p className="text-slate-700 text-lg max-w-2xl leading-relaxed mb-6">シアトルでの乗り継ぎ時間を、旅のハイライトにしませんか？フライトの間隔が6時間、7時間、あるいは8時間でも、当社の厳選ツアーは、安全、効率的、そしてストレスフリーでシアトルの魅力を満喫できるよう設計されています。しかも、空港への定刻到着保証付きです。</p>
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
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">旅程の概要</h2>   
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">3つのルートから選択</p>         
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
            <h2 className="text-4xl font-bold ">タイミングと保証</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">すべての旅程には、2 時間の帰路バッファー、リアルタイムのフライト監視、および空港への定刻帰路保証が組み込まれています。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="inline-flex items-center px-6 py-2 btn-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {japaneselangText.bookYourSeattleTour}
              </a>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-white/20 backdrop-blur headings_color border border-primary-500 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"> {japaneselangText.quickBook}                
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
                ミーティングポイント
              </h2>
            
              <div className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed ">
                ガイドはシアトル・タコマ国際空港内の到着ゲート、または可能な限り近くでお客様をお迎えします。ガイドの情報と現在地を記載したWhatsAppメッセージを事前にお送りします。
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
                {japaneselangText.pricingTitle}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {japaneselangText.pricingSubtitle}
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
                      <span className="text-3xl font-bold headings_color bg-clip-text ">
                        ${tier.price}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{tier.priceDescription}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsBookingModalOpen(true);
                      }}
                      className="w-full px-4 py-2 btn-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      {japaneselangText.bookNow}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                内包物
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
              <h2 className="text-4xl font-bold mb-4">旅行者に愛される理由</h2>
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
        <section className="py-16 bg-gradient-to-br sub-primary-background">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">乗り継ぎ時間を忘れられないものにする準備はできていますか?</h2>
            <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              sixhourlayover.comで今すぐ予約するか、WhatsAppでメッセージを送信してください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                {japaneselangText.bookNow}
              </a>

             
              <a href="https://wa.me/12069281277" target="_blank" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                <WhatsAppIcon className="w-6 h-6 text-white-600" /> &nbsp; WhatsApp でチャットする
              </a>
            </div>
          </div>
        </section>
        
        {/* Footer + Mobile Nav */}
        <footer className="relative mt-20 border-t border-purple-200 bg-gradient-to-br footer-bg to-white">
          <div className="container py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/logo_from_url.jpg" alt="Logo" width={40} height={40} className="rounded-2xl" />
                  <span className="font-bold text-white bg-clip-text text-transparent">
                    {GlobalText.appName}
                  </span>
                </div>
                <p className="text-white">{japaneselangText.footerSlogan}</p>

                {/* Language Switcher */}
                <div className="flex items-center gap-4 text-sm pt-4">
                  <Link href="/seattle-layover-tour" className="text-white hover:text-white transition-colors">
                  English
                  </Link>
                  <Link href="/mandarin-seattle-layover" className="text-white hover:text-white transition-colors">
                    中文
                  </Link>
                  <Link href="/japanese-seattle-layover" className="text-white hover:text-white transition-colors">
                  <span className="text-white/80">✔</span> 日本語
                  </Link>
                </div>

              </div>
              
              <div>
                <h5 className="font-bold text-white mb-3">{japaneselangText.quickLinks}</h5>
                <div className="space-y-2 text-sm">
                  <a className="block text-white hover:text-white transition-colorss" href="/">{japaneselangText.homeLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/how-it-works">{japaneselangText.howItWorksLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/pricing">{japaneselangText.pricingLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/faq">{japaneselangText.faqLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/about">{japaneselangText.aboutLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/contact">{japaneselangText.contactLink}</a>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold text-white mb-3">{japaneselangText.legal}</h5>
                <div className="space-y-2 text-sm">
                  <a className="block text-white hover:text-white transition-colors" href="/terms">{japaneselangText.termsLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/privacy">{japaneselangText.privacyLink}</a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-white">
                {japaneselangText.copyright}
                <p className="text-xs text-white-500">{japaneselangText.copyrightSubtext}</p>
                
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61580441967255" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br bg-light headings_color rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/sixhourlayoverseattle/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br bg-light headings_color rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@sixhourlayover_sea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br bg-light headings_color rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
