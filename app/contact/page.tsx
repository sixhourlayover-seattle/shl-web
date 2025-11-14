import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { ContactPageText, CONTACT_METHODS, BOOKING_INFO, FAQ_QUICK, GlobalText } from "@/lib/text";

export const metadata = {
  title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
  description: "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours. Quick response guaranteed.",
  keywords: ["Seattle layover tour contact", "SEA airport tour booking", "layover tour phone number", "Seattle tour contact", "airport pickup booking", "layover tour WhatsApp"],
  openGraph: {
    title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
    description: "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
    description: "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours.",
  },
  alternates: {
    canonical: "/contact"
  }
};

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
                <span className="bg-gradient-to-r  bg-clip-text ">{ContactPageText.title}</span>
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
                        className="inline-flex items-center justify-center px-8 py-4 btn-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 text-lg"
                      >
                        {method.contact}
                      </a>
                    ) : (
                      <a 
                        href={method.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r btn-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 text-lg"
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
        <section className="py-16 bg-gradient-to-br ">
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
                  <h3 className="text-2xl font-bold  mb-6">{info.title}</h3>
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
                  <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/faq"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r btn-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">❓</span>
                {GlobalText.viewAllFAQs}
              </a>
            </div>
          </div>
        </section>

        {/* Business Hours & Location Info */}
        <section className="py-16 bg-gradient-to-br">
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
        <section className="py-16 bg-gradient-to-br sub-primary-background">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{ContactPageText.ctaTitle}</h2>
            <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-white headings_color font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📞</span>
                {GlobalText.callUsNow}
              </a>
            </div>
          </div>
        </section>

        

        <MobileNav />
      </div>
    </div>
  );
}
