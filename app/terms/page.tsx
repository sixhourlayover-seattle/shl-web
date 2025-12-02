import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { TermsPageText, GlobalText } from "@/lib/text";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service - Seattle Layover Tours | Six Hour Layover",
  description: "Terms of service for Six Hour Layover Seattle tours. Booking conditions, cancellation policy, and tour guidelines for SEA airport layover tours.",
  keywords: ["Seattle layover tour terms", "tour booking conditions", "layover tour cancellation policy", "tour service terms"],
  openGraph: {
    title: "Terms of Service - Seattle Layover Tours | Six Hour Layover",
    description: "Terms of service for Six Hour Layover Seattle tours. Booking conditions, cancellation policy, and tour guidelines.",
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Seattle Layover Tours | Six Hour Layover",
    description: "Terms of service for Six Hour Layover Seattle tours. Booking conditions, cancellation policy, and tour guidelines.",
  },
  alternates: {
    canonical: "/terms"
  },
  robots: {
    index: false,
    follow: true
  }
};

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
                <span>{TermsPageText.title}</span>
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
                <h2 className="text-2xl font-bold mb-6 headings_color">{TermsPageText.servicesProvided}</h2>
                <p className="text-slate-700 leading-relaxed">{TermsPageText.servicesDescription}</p>
              </div>

              {/* Eligibility */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold mb-6">{TermsPageText.eligibility}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.eligibility1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.eligibility2}</li>
                </ul>
              </div>

              {/* Booking & Payments */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold mb-6">{TermsPageText.bookingPayments}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.booking1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.booking2}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.booking3}</li>
                </ul>
              </div>

              {/* Cancellations & Refunds */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold  mb-6">{TermsPageText.cancellationsRefunds}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.cancellation1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.cancellation2}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.cancellation3}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.cancellation4}</li>
                </ul>
              </div>

              {/* Traveler Responsibilities */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold mb-6">{TermsPageText.travelerResponsibilities}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.traveler1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.traveler2}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.traveler3}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.traveler4}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.traveler5}</li>
                </ul>
              </div>

              {/* Assumption of Risk & Liability Disclaimer */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold mb-6">{TermsPageText.assumptionRisk}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.risk1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.risk2}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.risk3}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.risk4}</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold mb-6">{TermsPageText.intellectualProperty}</h2>
                <p className="text-slate-700 leading-relaxed">{TermsPageText.ipDescription}</p>
              </div>

              {/* Third-Party Services */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold mb-6">{TermsPageText.thirdPartyServices}</h2>
                <p className="text-slate-700 leading-relaxed">{TermsPageText.thirdPartyDescription}</p>
              </div>

              {/* Governing Law & Dispute Resolution */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold mb-6">{TermsPageText.governingLaw}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.law1}</li>
                  <li className="text-slate-700 leading-relaxed">• {TermsPageText.law2}</li>
                </ul>
              </div>

              {/* Changes to Terms */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold  mb-6">{TermsPageText.changesTerms}</h2>
                <p className="text-slate-700 leading-relaxed">{TermsPageText.changesDescription}</p>
              </div>
            </div>
          </div>
        </section>       

        <MobileNav />
      </div>
    </div>
  );
}