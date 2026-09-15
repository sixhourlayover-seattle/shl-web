// app/seattle-layover-tour/page.tsx
import type { Metadata } from "next";
import SLTourContent from "@/components/SLTourContent";

// Dynamic metadata for this page
export const metadata: Metadata = {
  title: "Seattle Layover Tour | Private Tours from SEA Airport",

  description:
    "Make the most of your 6–8 hour layover at SEA. Pike Place, skyline views, Uber coordination, and return timing planned around your flight schedule with an appropriate airport buffer.",
  openGraph: {
    title: "Seattle Layover Tour | Private Tours from SEA Airport",
    description:
      "Explore Seattle during your layover with a private tour from SEA Airport, planned around your flight schedule and available layover window.",
    url: "https://www.sixhourlayover.com/seattle-layover-tour",
    images: [{ url: "/og-seattle-layover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Layover Tour | Private Tours from SEA Airport",
    description:
      "Private Seattle layover tours from SEA Airport, planned around your flight schedule and available layover window.",
    images: ["/og-seattle-layover.png"],
  },

  alternates: {
    canonical: "https://sixhourlayover.com/seattle-layover-tour",
    languages: {
      en: "/seattle-layover-tour",
      "zh-Hans": "/mandarin-seattle-layover",
      "ja-JP": "/japanese-seattle-layover",
    },
  },
};

export default function SLTourPage() {
  return <SLTourContent />;
}
