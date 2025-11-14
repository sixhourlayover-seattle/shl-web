import type { Metadata } from "next";
import "./globals.css";
import './theme_kiyomizu.css';
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";


import FooterWrapper from "./FooterWrapper";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = "The Six-Hour Layover | Seattle Layover Tours with Airport Pickup";
const description =
  "Just 6 Hours in Seattle? We've Got You! No stress. No guesswork. Just food, views, and a timed-to-perfection plan that gets you back for boarding.";

export const viewport = {
  themeColor: "#001628",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s"
  },
  description,
  applicationName: "Six Hour Layover: Seattle",
  keywords: [
    "Seattle layover tours", "SEA airport layover", "6 hour layover Seattle", "8 hour layover Seattle",
    "Pike Place Market layover tour", "Space Needle layover visit", "Seattle airport pickup tours",
    "SEA airport tour guide", "Seattle layover activities", "layover tours Seattle WA",
    "Seattle tourist attractions layover", "short layover Seattle tours", "Seattle sightseeing layover",
    "airport meetup Seattle tours", "Seattle waterfront layover", "Kerry Park Seattle layover",
    "Seattle fish market layover", "Emerald City layover tours", "Seattle tour from airport"
  ],
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
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Six Hour Layover",
    "url": "https://sixhourlayover.com",
    "logo": "https://sixhourlayover.com/logo_from_url.jpg",
    "sameAs": [
      "https://www.instagram.com/sixhourlayover",
      "https://www.facebook.com/sixhourlayover",
      "https://www.tiktok.com/@sixhourlayover"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-206-928-1277",
      "contactType": "customer service",
      "availableLanguage": ["English", "Mandarin", "Japanese"]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sixhourlayover.com/#localbusiness",
    "name": "The Six Hour Layover – Seattle",
    "description": "Private and small-group layover tours of Seattle, starting and ending at SEA Airport. Explore the best of Seattle in six hours or less.",
    "image": "https://sixhourlayover.com/hero.jpg",
    "url": "https://sixhourlayover.com",
    "telephone": "+1-206-XXX-XXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Seattle–Tacoma International Airport",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98158",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.4502,
      "longitude": -122.3088
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Seattle"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tour Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Small Group Tour",
          "price": "250-350",
          "priceCurrency": "USD",
          "description": "Six-hour guided layover tour for small groups (2–6 people)."
        },
        {
          "@type": "Offer",
          "name": "Solo Tour",
          "price": "499",
          "priceCurrency": "USD",
          "description": "Private solo six-hour layover tour of Seattle."
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/sixhourlayover",
      "https://sixhourlayover.com"
    ]
  }

  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD: Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* ✅ JSON-LD: LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <StructuredData />

        <FooterWrapper />
      </body>
    </html>
  );
}
