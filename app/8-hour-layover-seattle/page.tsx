import type { Metadata } from "next";
import _7HLSContent from "@/components/8hourLayoverSeattleContent";

// Dynamic metadata for this page
export const metadata: Metadata = {
  title: "8-Hour Layover in Seattle – Pike Place + Space Needle + Skyline",
  description: "Turn 8 hours into the highlight of your trip. Curated icons, multilingual guides, zero stress, back to SEA on time.",
  openGraph: {
    title: "8-Hour Layover in Seattle – Pike Place + Space Needle + Skyline",
    description: "Turn 8 hours into the highlight of your trip. Curated icons, multilingual guides, zero stress, back to SEA on time.",
    url: "https://www.sixhourlayover.com/8-hour-layover-seattle",
    images: [{ url: "/og-seattle-layover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Layover Tour | Six Hour Layover",
    description: "Guided tours for short Seattle layovers with airport pickup.",
    images: ["/og-seattle-layover.png"],
  },
  alternates: {
    canonical: "/6-hour-layover-seattle",
  },
};



export default function SLTourPage() {
  return <_7HLSContent />;
}
