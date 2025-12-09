import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import MascotSection from "@/components/MascotSection";
import { AboutPageText, TEAM_VALUES, STORY_POINTS, STATS, GlobalText } from "@/lib/text";
import Image from "next/image";

export const metadata = {
  title: "About Our Seattle Layover Tours | Six Hour Layover",
  description: "Learn about our Seattle layover tour service. Local guides offering Pike Place Market, Space Needle, and waterfront tours with SEA airport pickup for travelers with 6-8 hour layovers.",
  keywords: ["Seattle layover tours", "SEA airport tours", "Pike Place Market layover", "Seattle tour guides", "airport pickup tours", "layover activities Seattle"],
  openGraph: {
    title: "About Our Seattle Layover Tours | Six Hour Layover",
    description: "Learn about our Seattle layover tour service. Local guides offering Pike Place Market, Space Needle, and waterfront tours with SEA airport pickup.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Seattle Layover Tours | Six Hour Layover",
    description: "Learn about our Seattle layover tour service. Local guides offering Pike Place Market, Space Needle, and waterfront tours with SEA airport pickup.",
  },
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
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

        <section className="py-12 sm:py-20">
          <div className="container">
            <div className="text-center mb-12" style={{animation: 'slide-in 0.6s ease-out'}}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r headings_color bg-clip-text text-transparent">{AboutPageText.title}</span>
              </h1>
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                {AboutPageText.subtitle}
              </h2>
              <p className="text-slate-700 text-xl max-w-4xl mx-auto leading-relaxed">
                {AboutPageText.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br ">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{AboutPageText.multilingualTitle}</h2>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🌍</span>
                    <h3 className="text-xl font-bold text-slate-800">{AboutPageText.alwaysAvailable}</h3>
                  </div>
                  <p className="text-slate-700">
                    {AboutPageText.englishTours}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🗣️</span>
                    <h3 className="text-xl font-bold text-slate-800">{AboutPageText.uponRequest}</h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    {AboutPageText.additionalLanguages}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {AboutPageText.languages.map((lang) => (
                      <span key={lang} className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium">
                      {AboutPageText.moreComingSoon}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r highlight_bg border border-primary-300">
                <p className="headings_color text-center">
                  {AboutPageText.confirmLanguage}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{AboutPageText.ourStoryTitle}</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {AboutPageText.ourStorySubtitle}
              </p>
            </div>

            <div className="space-y-12">
              {STORY_POINTS.map((point, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{animation: `slide-in 0.${index + 7}s ease-out`}}
                >
                  <h3 className="text-2xl font-bold headings_color mb-4">{point.title}</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">{point.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MascotSection 
          title="Meet Our Mascot: Guai Guai"
          name="Guai Guai"
          role="Beloved Mascot (Retired from Adventures)"
          description={`Guai Guai (his name means "Good Boy" in Chinese) is our beloved mascot. Though retired from adventures, he embodies the Six-Hour Layover spirit — warm, curious, joyful.`}
          imageSrc="/dog-mascot.jpg"
          imageAlt="Six-Hour Layover Seattle mascot dog Guai Guai wearing bow tie — friendly welcome for travelers"
        />

        <section className="py-16 bg-gradient-to-br ">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{AboutPageText.byTheNumbers}</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              {STATS.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift"
                  style={{animation: `slide-in 0.${index + 10}s ease-out`}}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r headings_color bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{AboutPageText.whatDrivesUs}</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {AboutPageText.whatDrivesUsSubtitle}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {TEAM_VALUES.map((value, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{animation: `slide-in 0.${index + 14}s ease-out`}}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-800">{value.title}</h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br primary-background">
          <div className="container text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8">{AboutPageText.ourMissionTitle}</h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                {AboutPageText.ourMissionDescription}
              </p>
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/20 backdrop-blur border border-white/30">
                <span className="text-2xl">❤️</span>
                <span className="text-white font-semibold">{AboutPageText.missionSlogan}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-slate-700 text-lg leading-relaxed">
                {AboutPageText.trainedGuideTeam}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br sub-primary-background">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{AboutPageText.readyToExperience}</h2>
            <p className="text-slate-700  text-lg mb-8 max-w-2xl mx-auto">
              {AboutPageText.readyToExperienceSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📝</span>
                {GlobalText.bookYourAdventureToday}
              </a>
              <a 
                href="/how-it-works"
                className="inline-flex items-center gap-3 px-8 py-4 btn-primary font-semibold rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">⚙️</span>
                {GlobalText.learnHowItWorks}
              </a>
            </div>
          </div>
        </section>

       

        <section className="py-12 bg-gradient-to-br ">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-slate-700 text-lg leading-relaxed">
                Our cultural education work is supported by SereneRoot Foundation, a 501(c)(3) nonprofit organization focused on storytelling, cultural access, and community engagement.
              </p>
            </div>
          </div>
        </section>

        

        <MobileNav />
      </div>
    </div>
  );
}