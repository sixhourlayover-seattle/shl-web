// app/seattle-layover-tour/page.tsx
import type { Metadata } from "next";
import SLTourContent from "@/components/japaneseSLTourContent";

// Dynamic metadata for this page
export const metadata: Metadata = {
  title: "シアトル乗り継ぎ観光 6–8時間｜日本語ガイド｜時間厳守で空港へ",
  description: "乗り継ぎの空き時間で市内観光。 日本語対応・荷物サポート・時間厳守で安心。",
  openGraph: {
    title: "シアトル乗り継ぎ観光 6–8時間｜日本語ガイド｜時間厳守で空港へ",
    description: "乗り継ぎの空き時間で市内観光。 日本語対応・荷物サポート・時間厳守で安心。",
    url: "https://www.sixhourlayover.com/seattle-layover-tour",
    images: [{ url: "/og-seattle-layover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "シアトル乗り継ぎ観光 6–8時間｜日本語ガイド｜時間厳守で空港へ",
    description: "乗り継ぎの空き時間で市内観光。 日本語対応・荷物サポート・時間厳守で安心",
    images: ["/og-seattle-layover.png"],
  },
  alternates: {
    canonical: "/seattle-layover-tour",
  },
};



export default function SLTourPage() {
  return <SLTourContent />;
}                  
