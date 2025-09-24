"use client";
import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { TermsPageText, GlobalText } from "@/lib/text";
import Image from "next/image";

export default function TermsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 animated-gradient opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />
      
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}} />
      
      <div className="relative z-10">
        <Navigation />

        <section className="py-12 sm:py-20">
          <div className="container">
            <div className="text-center mb-12" style={{animation: 'slide-in 0.6s ease-out'}}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">{TermsPageText.title}</span>
              </h1>
              <p className="text-slate-600 text-lg mb-4">{TermsPageText.effectiveDate}</p>
              <p className="text-slate-700 text-xl max-w-4xl mx-auto leading-relaxed">
                {TermsPageText.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Services Provided */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.servicesProvided}</h2>
                <p className="text-slate-700 leading-relaxed">{TermsPageText.servicesDescription}</p>
              </div>

              {/* Eligibility */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.eligibility}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.eligibility1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.eligibility2}</li>
                </ul>
              </div>

              {/* Booking & Payments */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.bookingPayments}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.booking1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.booking2}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.booking3}</li>
                </ul>
              </div>

              {/* Cancellations & Refunds */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.cancellationsRefunds}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.cancellation1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.cancellation2}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.cancellation3}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.cancellation4}</li>
                </ul>
              </div>

              {/* Traveler Responsibilities */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.travelerResponsibilities}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.traveler1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.traveler2}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.traveler3}</li>
                </ul>
              </div>

              {/* Assumption of Risk & Liability Disclaimer */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.assumptionRisk}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.risk1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.risk2}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.risk3}</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.intellectualProperty}</h2>
                <p className="text-slate-700 leading-relaxed">{TermsPageText.ipDescription}</p>
              </div>

              {/* Third-Party Services */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.thirdPartyServices}</h2>
                <p className="text-slate-700 leading-relaxed">{TermsPageText.thirdPartyDescription}</p>
              </div>

              {/* Governing Law & Dispute Resolution */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.governingLaw}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.law1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.law2}</li>
                </ul>
              </div>

              {/* Changes to Terms */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{TermsPageText.changesTerms}</h2>
                <p className="text-slate-700 leading-relaxed">{TermsPageText.changesDescription}</p>
              </div>
            </div>
          </div>
        </section>

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