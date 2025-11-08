import type { Metadata } from "next";
import _6HLSContent from "@/components/cnContent";

// Dynamic metadata for this page
export const metadata: Metadata = {
  title: "西雅图转机城市游（6–8小时）",
  description: "Make the most of a short layover. Airport-gate pickup, Pike Place Market, Seattle Waterfront, and guaranteed on-time return.",
  openGraph: {
    title: "西雅图转机城市游（6–8小时）",
    description: "西雅图转机也能轻松游城市。中文向导机场接送，轻轨+Uber，全程保障准点返航。",
    url: "https://www.sixhourlayover.com/cn",
    images: [{ url: "/space-needle-reflection-mopop.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Layover Tour | Six Hour Layover",
    description: "Guided tours for short Seattle layovers with airport pickup.",
    images: ["/space-needle-reflection-mopop.jpg"],
  },
  alternates: {
    canonical: "/6-hour-layover-seattle",
  },
};


// ✅ Page Component
export default function SLTourPage() {  

  return (
    <>   
      {/* Your actual page content */}
      <_6HLSContent />
    </>
  );
}
