import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import MascotSection from "@/components/MascotSection";
import { AboutPageText, TEAM_VALUES, STORY_POINTS, STATS, GlobalText } from "@/lib/text";
import Image from "next/image";

export const metadata = {
  title: "Why Us | Six Hour Layover",
  description:
    "Learn why Six Hour Layover is built for travelers with limited time. Calm, well-timed Seattle layover tours with airport return buffers, real-time monitoring, and local guides.",
  keywords: [
    "Seattle layover tours",
    "SEA airport tours",
    "Pike Place Market layover",
    "Seattle tour guides",
    "airport pickup tours",
    "layover activities Seattle",
  ],
  openGraph: {
    title: "Why Us | Six Hour Layover",
    description:
      "Why Six Hour Layover: calm, well-timed Seattle layover tours with buffers and real-time monitoring for a confident return to SEA-TAC.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Us | Six Hour Layover",
    description:
      "Why Six Hour Layover: calm, well-timed Seattle layover tours with buffers and real-time monitoring for a confident return to SEA-TAC.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  // 7️⃣ Rename “What Drives Us” -> “What Travelers Value Most”
  // Replace 3 cards as instructed, keep 4th as current "community values"
  const valueCards = [
    {
      icon: "🗺️",
      title: "Local Knowledge",
      description: "Guides who understand tight schedules",
    },
    {
      icon: "🎯",
      title: "Judgment Over Volume",
      description: "Fewer stops, better choices",
    },
    {
      icon: "🤝",
      title: "Human-Centered Travel",
      description: "Calm, personal experiences",
    },
    // Keep current "community values" from TEAM_VALUES
    TEAM_VALUES.find(
      (v) => String(v.title).trim().toLowerCase() === "community values"
    ) ?? TEAM_VALUES[TEAM_VALUES.length - 1],
  ];

  // “By the Numbers” – Update text only (keep layout)
  const statsCards = [
    { number: "6 / 7 / 8 hours", label: "Options designed for real layovers" },
    { number: "2-hour buffer", label: "Built-in return margin to SEA" },
    { number: "Real-time monitoring", label: "Routes adjusted as conditions change" },
  ];

  // “Our Story” Section – Rename & Replace + Four Cards content
  const storyCards = [
    {
      title: "🕒 Time-Aware Planning",
      content: "Built around real flight schedules",
    },
    {
      title: "🧭 Guided, Not DIY",
      content: "Routes and logistics handled for you",
    },
    {
      title: "👥 Small & Flexible Groups",
      content: "Private by default, flexible when shared",
    },
    {
      title: "🌿 Comfortable Pace",
      content: "Calm experiences, not rushed itineraries",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 animated-gradient opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />

      {/* Floating orbs for visual interest */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div
        className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10">
        <Navigation />

        {/* 1️⃣ Why Us (renamed + simplified) */}
        <section className="py-12 sm:py-20">
          <div className="container">
            <div
              className="text-center mb-12"
              style={{ animation: "slide-in 0.6s ease-out" }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r headings_color bg-clip-text text-transparent">
                  {AboutPageText.title}
                </span>
              </h1>

              <p className="text-slate-700 text-xl max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
                {AboutPageText.description}
              </p>
            </div>
          </div>
        </section>

        {/* 2️⃣ How We Think About Your Layover (replaces Our Story section) */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                {AboutPageText.ourStoryTitle}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto whitespace-pre-line">
                {AboutPageText.ourStorySubtitle}
              </p>
            </div>

            <div className="space-y-8">
              {storyCards.map((point, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{ animation: `slide-in 0.${index + 7}s ease-out` }}
                >
                  <h3 className="text-2xl font-bold headings_color mb-4">
                    {point.title}
                  </h3>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {point.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3️⃣ Multi-language tools (kept) */}
        <section className="py-16 bg-gradient-to-br ">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  {AboutPageText.multilingualTitle}
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🌍</span>
                    <h3 className="text-xl font-bold text-slate-800">
                      {AboutPageText.alwaysAvailable}
                    </h3>
                  </div>
                  <p className="text-slate-700">{AboutPageText.englishTours}</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🗣️</span>
                    <h3 className="text-xl font-bold text-slate-800">
                      {AboutPageText.uponRequest}
                    </h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    {AboutPageText.additionalLanguages}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {AboutPageText.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium"
                      >
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

        {/* 4️⃣ Mascot section (kept) */}
        <MascotSection
          title="Meet Our Mascot: Guai Guai"
          name="Guai Guai"
          role="Beloved Mascot (Retired from Adventures)"
          description={`Guai Guai (his name means "Good Boy" in Chinese) is our beloved mascot. Though retired from adventures, he embodies the Six-Hour Layover spirit — warm, curious, joyful.`}
          imageSrc="/dog-mascot.jpg"
          imageAlt="Six-Hour Layover Seattle mascot dog Guai Guai wearing bow tie — friendly welcome for travelers"
        />

        {/* “By the Numbers” – text updated, layout kept */}
        <section className="py-16 bg-gradient-to-br ">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                {AboutPageText.byTheNumbers}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {statsCards.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover-lift"
                  style={{ animation: `slide-in 0.${index + 10}s ease-out` }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r headings_color bg-clip-text text-transparent mb-2 whitespace-pre-line">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7️⃣ What Travelers Value Most (renamed section + cards replaced) */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                {AboutPageText.whatDrivesUs}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {valueCards.map((value: any, index: number) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{ animation: `slide-in 0.${index + 14}s ease-out` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5️⃣ Mission section (no changes needed) */}
        <section className="py-16 bg-gradient-to-br primary-background">
          <div className="container text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8">
                {AboutPageText.ourMissionTitle}
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                {AboutPageText.ourMissionDescription}
              </p>
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/20 backdrop-blur border border-white/30">
                <span className="text-2xl">❤️</span>
                <span className="text-white font-semibold">
                  {AboutPageText.missionSlogan}
                </span>
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

        <MobileNav />
      </div>
    </div>
  );
}
