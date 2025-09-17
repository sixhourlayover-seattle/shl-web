
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = "The Six-Hour Layover | Seattle Layover Tours with Airport Pickup";
const description =
  "Just 6 Hours in Seattle? We've Got You! No stress. No guesswork. Just food, views, and a timed-to-perfection plan that gets you back for boarding.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Six Hour Layover: Seattle"
  },
  description,
  applicationName: "Six Hour Layover: Seattle",
  keywords: ["Seattle layover", "SEA layover", "Pike Place Market", "Space Needle", "layover tours", "airport pickup"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Six Hour Layover: Seattle",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"]
  },
  icons: {
    icon: [
      { url: "/logo_from_url.jpg" },
      { url: "/logo_from_url.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/logo_from_url.jpg", sizes: "512x512", type: "image/jpeg" }
    ],
    apple: [{ url: "/logo_from_url.jpg", sizes: "180x180", type: "image/jpeg" }]
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#001628",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
