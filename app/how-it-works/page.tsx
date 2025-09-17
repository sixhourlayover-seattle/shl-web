"use client";
import { PlaneIcon, ClockIcon, MapPinIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { HowItWorksPageText, HOW_IT_WORKS_STEPS, WHAT_MAKES_US_DIFFERENT, GlobalText } from "@/lib/text";

export default function HowItWorksPage() {
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
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">{HowItWorksPageText.title}</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                {HowItWorksPageText.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-slate-900">Smart. Seamless. Unforgettable.</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img src="/pike-place-market.jpg" alt="Pike Place Market" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img src="/seattle-waterfront.jpg" alt="Seattle Waterfront" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img src="/space-needle-skyline.jpg" alt="Space Needle Skyline" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-12">
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <div 
                  key={step.step} 
                  className="relative"
                  style={{animation: `slide-in 0.${index + 6}s ease-out`}}
                >
                  {/* Connector line */}
                  {index < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="absolute left-6 top-24 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-indigo-300" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                        <p className="text-slate-700 text-lg leading-relaxed mb-6">{step.description}</p>
                        
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-green-600 text-lg">•</span>
                              <span className="text-slate-600" dangerouslySetInnerHTML={{ __html: detail }}></span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-slate-900">{HowItWorksPageText.whatMakesUsDifferentTitle}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {HowItWorksPageText.whatMakesUsDifferentSubtitle}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {WHAT_MAKES_US_DIFFERENT.map((feature, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift text-center"
                  style={{animation: `slide-in 0.${index + 12}s ease-out`}}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation Info */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 p-8 shadow-2xl hover-lift">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{HowItWorksPageText.transportationTitle}</h2>
                <p className="text-slate-700 text-lg">{HowItWorksPageText.transportationSubtitle}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🚗</span>
                    <h3 className="text-xl font-bold text-slate-800">{HowItWorksPageText.rideServiceTitle}</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {HowItWorksPageText.rideServiceDescription}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>{HowItWorksPageText.rideServicePoint1}</li>
                    <li>{HowItWorksPageText.rideServicePoint2}</li>
                    <li>{HowItWorksPageText.rideServicePoint3}</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🧳</span>
                    <h3 className="text-xl font-bold text-slate-800">{HowItWorksPageText.luggageStorageTitle}</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {HowItWorksPageText.luggageStorageDescription}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>{HowItWorksPageText.luggageStoragePoint1}</li>
                    <li>{HowItWorksPageText.luggageStoragePoint2}</li>
                    <li>{HowItWorksPageText.luggageStoragePoint3}</li>
                  </ul>
                </div>
              </div>
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
      </div>
    </div>
  );
}
