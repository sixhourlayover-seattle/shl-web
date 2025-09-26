import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { PrivacyPageText, GlobalText } from "@/lib/text";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy - Seattle Layover Tours | Six Hour Layover",
  description: "Privacy policy for Six Hour Layover Seattle tours. Learn how we protect your personal information, booking data, and contact details for SEA airport layover tours.",
  keywords: ["Seattle layover tour privacy", "tour booking privacy policy", "personal data protection", "layover tour privacy"],
  openGraph: {
    title: "Privacy Policy - Seattle Layover Tours | Six Hour Layover",
    description: "Privacy policy for Six Hour Layover Seattle tours. Learn how we protect your personal information and booking data.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Seattle Layover Tours | Six Hour Layover",
    description: "Privacy policy for Six Hour Layover Seattle tours. Learn how we protect your personal information and booking data.",
  },
  alternates: {
    canonical: "/privacy"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function PrivacyPage() {
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
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">{PrivacyPageText.title}</span>
              </h1>
              <p className="text-slate-600 text-lg mb-4">{PrivacyPageText.effectiveDate}</p>
              <p className="text-slate-700 text-xl max-w-4xl mx-auto leading-relaxed">
                {PrivacyPageText.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Information We Collect */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.informationWeCollect}</h2>
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">{PrivacyPageText.personalInfo}</p>
                  <p className="text-slate-700 leading-relaxed">{PrivacyPageText.bookingDetails}</p>
                  <p className="text-slate-700 leading-relaxed">{PrivacyPageText.automaticData}</p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.howWeUse}</h2>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.use1}</li>
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.use2}</li>
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.use3}</li>
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.use4}</li>
                </ul>
              </div>

              {/* Sharing of Information */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.sharingInfo}</h2>
                <p className="text-slate-700 leading-relaxed mb-4">{PrivacyPageText.sharingDescription}</p>
                <ul className="space-y-3">
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.sharing1}</li>
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.sharing2}</li>
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.sharing3}</li>
                </ul>
              </div>

              {/* Cookies & Tracking */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.cookiesTracking}</h2>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.cookiesDescription}</p>
              </div>

              {/* Data Retention */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.dataRetention}</h2>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.retentionDescription}</p>
              </div>

              {/* Data Security */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.dataSecurity}</h2>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.securityDescription}</p>
              </div>

              {/* Children's Privacy */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.childrenPrivacy}</h2>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.childrenDescription}</p>
              </div>

              {/* Your Rights */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.yourRights}</h2>
                <p className="text-slate-700 leading-relaxed mb-4">{PrivacyPageText.rightsDescription}</p>
                <ul className="space-y-3 mb-4">
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.rights1}</li>
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.rights2}</li>
                  <li className="text-slate-700 leading-relaxed">• {PrivacyPageText.rights3}</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.rightsContact}</p>
              </div>

              {/* International Users */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.internationalUsers}</h2>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.internationalDescription}</p>
              </div>

              {/* GDPR Addendum */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.gdprAddendum}</h2>
                <p className="text-slate-700 leading-relaxed mb-4">{PrivacyPageText.gdprDescription}</p>
                <ul className="space-y-3 mb-4">
                  {PrivacyPageText.gdprRights.map((right, index) => (
                    <li key={index} className="text-slate-700 leading-relaxed">• {right}</li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed mb-2">{PrivacyPageText.gdprLegalBasis}</p>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.gdprTransfers}</p>
              </div>

              {/* CCPA Addendum */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.ccpaAddendum}</h2>
                <p className="text-slate-700 leading-relaxed mb-4">{PrivacyPageText.ccpaDescription}</p>
                <ul className="space-y-3 mb-4">
                  {PrivacyPageText.ccpaRights.map((right, index) => (
                    <li key={index} className="text-slate-700 leading-relaxed">• {right}</li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.ccpaContact}</p>
              </div>

              {/* Updates to Privacy Policy */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.updatesPolicy}</h2>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.updatesDescription}</p>
              </div>

              {/* Contact Us */}
              <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{PrivacyPageText.contactUs}</h2>
                <p className="text-slate-700 leading-relaxed mb-2">{PrivacyPageText.contactDescription}</p>
                <p className="text-slate-700 leading-relaxed mb-2">{PrivacyPageText.contactEmail}</p>
                <p className="text-slate-700 leading-relaxed">{PrivacyPageText.contactAddress}</p>
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
