// app/seattle-layover-tour/page.tsx
import type { Metadata } from "next";
import SLTourContent from "@/components/SLTourContent";

// Dynamic metadata for this page
export const metadata: Metadata = {
  title: "Seattle Layover Tour (6–8 Hours) – Out to the City, Back on Time",
  description: "Make the most of your 6–8 hour layover at SEA. Pike Place, skyline views, Uber coordination, and an on-time return guarantee.",
  openGraph: {
    title: "Seattle Layover Tour | Six Hour Layover",
    description: "Explore Seattle efficiently on your short layover with airport pickup and guided tours.",
    url: "https://www.sixhourlayover.com/seattle-layover-tour",
    images: [{ url: "/og-seattle-layover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Layover Tour | Six Hour Layover",
    description: "Guided tours for short Seattle layovers with airport pickup.",
    images: ["/og-seattle-layover.png"],
  },
  alternates: {
    canonical: "/seattle-layover-tour",
  },
};



export default function SLTourPage() {
  return <SLTourContent />;
}
