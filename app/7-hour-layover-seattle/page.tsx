import type { Metadata } from "next";
import _7HLSContent from "@/components/7hourLayoverSeattleContent";

// Dynamic metadata for this page
export const metadata: Metadata = {
  title: "7-Hour Layover in Seattle – Pike Place, Waterfront & Kerry Park SkylineView",
  description: "Short layover? See Pike Place and the skyline with a time-safe route. Airport meet, luggage help, guaranteed return.",
  openGraph: {
    title: "7-Hour Layover in Seattle – Pike Place, Waterfront & Kerry Park SkylineView",
    description: "Short layover? See Pike Place and the skyline with a time-safe route. Airport meet, luggage help, guaranteed return.",
    url: "https://www.sixhourlayover.com/6-hour-layover-seattle",
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
