
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = "Six Hour Layover: Seattle";
const description =
  "Make the most of your Seattle layover. Curated 3–8 hour itineraries from SEA with realistic transit & buffers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Six Hour Layover: Seattle"
  },
  description,
  applicationName: "Six Hour Layover: Seattle",
  keywords: ["Seattle layover", "SEA layover", "Pike Place", "Space Needle", "Chihuly Garden", "light rail"],
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
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
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
