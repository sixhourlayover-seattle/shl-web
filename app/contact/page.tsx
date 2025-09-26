"use client";
import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { ContactPageText, CONTACT_METHODS, BOOKING_INFO, FAQ_QUICK, GlobalText } from "@/lib/text";

export default function ContactPage() {
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
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">{ContactPageText.title}</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                {ContactPageText.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {CONTACT_METHODS.map((method, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift text-center"
                  style={{animation: `slide-in 0.${index + 7}s ease-out`}}
                >
                  <div className="mb-6 flex justify-center">
                    {method.title === "WhatsApp Us" ? (
                      <WhatsAppIcon className="w-16 h-16 text-green-600" />
                    ) : (
                      <div className="text-6xl">{method.icon}</div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{method.title}</h3>
                  <p className="text-purple-600 font-medium mb-4">{method.subtitle}</p>
                    {method.contact.includes('@') ? (
                      <a 
                        href={method.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 text-lg"
                      >
                        {method.contact}
                      </a>
                    ) : (
                      <a 
                        href={method.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 text-lg"
                      >
                        {method.contact}
                      </a>
                    )}
                  <p className="text-slate-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Information */}
        <section className="py-16 bg-gradient-to-br from-purple-50/50 to-indigo-50/50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{ContactPageText.bookingInfoTitle}</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {ContactPageText.bookingInfoSubtitle}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {BOOKING_INFO.map((info, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{animation: `slide-in 0.${index + 9}s ease-out`}}
                >
                  <h3 className="text-2xl font-bold text-purple-700 mb-6">{info.title}</h3>
                  <ul className="space-y-4">
                    {info.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-green-600 text-lg">•</span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick FAQ */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{ContactPageText.quickQuestionsTitle}</h2>
              <p className="text-lg text-slate-600">
                {ContactPageText.quickQuestionsSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              {FAQ_QUICK.map((faq, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{animation: `slide-in 0.${index + 11}s ease-out`}}
                >
                  <h3 className="text-xl font-bold text-purple-700 mb-4">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/faq"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">❓</span>
                {GlobalText.viewAllFAQs}
              </a>
            </div>
          </div>
        </section>

        {/* Business Hours & Location Info */}
        <section className="py-16 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 p-8 hover-lift">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{ContactPageText.serviceInfoTitle}</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="text-center">
                  <div className="text-4xl mb-4">🕐</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{ContactPageText.businessHours}</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><strong>{ContactPageText.phoneSupport}</strong></p>
                    <p>{ContactPageText.phoneSupportHours.split('\n')[0]}</p>
                    <p>{ContactPageText.phoneSupportHours.split('\n')[1]}</p>
                    <p className="mt-4"><strong>{ContactPageText.emailResponse}</strong></p>
                    <p>{ContactPageText.emailResponseHours}</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{ContactPageText.serviceArea}</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><strong>{ContactPageText.airport}</strong></p>
                    <p>{ContactPageText.airportName}</p>
                    <p><strong>{ContactPageText.tourAreas}</strong></p>
                    {ContactPageText.tourAreasList.split('\n').map((area, i) => <p key={i}>{area}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300 p-8 shadow-2xl hover-lift">
              <div className="text-center">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">{ContactPageText.emergencyTitle}</h3>
                <p className="text-slate-700 text-lg mb-6">
                  {ContactPageText.emergencySubtitle}
                </p>
                <a 
                  href="tel:+12069281277"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl">📞</span>
                  {ContactPageText.emergencyHotline}
                </a>
                <p className="text-slate-600 text-sm mt-4">
                  {ContactPageText.emergencyNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-6">{ContactPageText.ctaTitle}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {ContactPageText.ctaSubtitle}
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
                href="tel:+12069281277"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📞</span>
                {GlobalText.callUsNow}
              </a>
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
