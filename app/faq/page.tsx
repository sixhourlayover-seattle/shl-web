"use client";
import { useState } from "react";
import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { FaqPageText, FAQ_SECTIONS, GlobalText } from "@/lib/text";
import Image from "next/image";

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}
const FAQ_SECTIONS_schema = [
  {
    question: "Is a 6-hour layover enough time to see Seattle?",
    answer: "Yes. Our curated route is designed for 6-hour windows with a guaranteed 2-hour return buffer to the airport."
  },
  {
    question: "Where do we meet at the airport?",
    answer: "Your Layover Concierge will meet you near SEA’s Baggage Claim 9. We’ll send WhatsApp and SMS instructions upon landing."
  },
  {
    question: "What if traffic is bad or it rains?",
    answer: "We have built-in buffer times and alternate indoor routes (like the Starbucks Reserve or Chihuly Garden) to keep your return on time."
  }
];



function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur shadow-lg border border-white/50 overflow-hidden hover-lift">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-300"
      >
        <h3 className="font-semibold text-slate-800 pr-4">{faq.question}</h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="pt-2 border-t border-purple-100">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (sectionIndex: number, faqIndex: number) => {
    const key = `${sectionIndex}-${faqIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
          <div className="container">
            <div className="text-center mb-12" style={{animation: 'slide-in 0.6s ease-out'}}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r headings_color bg-clip-text text-transparent">{FaqPageText.title}</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                {FaqPageText.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-12">
              {FAQ_SECTIONS.map((section, sectionIndex) => (
                <div key={sectionIndex} style={{animation: `slide-in 0.${sectionIndex + 6}s ease-out`}}>
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-xl">{section.icon}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">
                      {section.title}
                    </h2>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-4">
                    {section.faqs.map((faq, faqIndex) => (
                      <FAQItem
                        key={faqIndex}
                        faq={faq}
                        isOpen={openItems[`${sectionIndex}-${faqIndex}`] || false}
                        onToggle={() => toggleItem(sectionIndex, faqIndex)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JSON-LD inside the body */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQ_SECTIONS_schema.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br sub-primary-background">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{FaqPageText.ctaTitle}</h2>
            <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              {FaqPageText.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📝</span>
                {GlobalText.bookYourTourNow}
              </a>
              <a 
                href="mailto:booking@sixhourlayover.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur headings_color font-semibold rounded-2xl border border-primary-500 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📧</span>
                {GlobalText.emailQuestions}
              </a>
              <a
                href="tel:+12069281277"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur headings_color font-semibold rounded-2xl border border-primary-500 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📞</span>
                <span className="font-bold">(206) 928‑1277</span>
              </a>
              <a
                href="https://wa.me/12069281277"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur headings_color font-semibold rounded-2xl border border-primary-500 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span className="font-bold">WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <MobileNav />
      </div>
    </div>
  );
}
