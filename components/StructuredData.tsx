"use client";

export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sixhourlayover.com";

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "TourOperator",
    "name": "Six Hour Layover Seattle",
    "alternateName": "The Six-Hour Layover",
    "description": "Seattle layover tours with airport pickup. Pike Place Market, Space Needle, and waterfront tours for travelers with 6-8 hour layovers at SEA airport.",
    "url": siteUrl,
    "logo": `${siteUrl}/logo_from_url.jpg`,
    "image": `${siteUrl}/og.png`,
    "telephone": "+1-206-928-1277",
    "email": "hello@sixhourlayover.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6062,
      "longitude": -122.3321
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-206-928-1277",
      "contactType": "customer service",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61580441967255",
      "https://www.instagram.com/sixhourlayoverseattle/",
      "https://www.tiktok.com/@sixhourlayover_sea"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "6-Hour Pike Place Market & Waterfront Tour",
        "description": "Explore Pike Place Market and waterfront with airport pickup",
        "priceRange": "$250-$399",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "7-Hour Tour with Kerry Park Views",
        "description": "Pike Place Market, waterfront, and iconic Seattle skyline views at Kerry Park",
        "priceRange": "$300-$450",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "8-Hour Tour with Space Needle Admission",
        "description": "Full Seattle experience with Space Needle observation deck access",
        "priceRange": "$350-$500",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Seattle Layover Tours",
    "description": "Professional Seattle layover tour service with SEA airport pickup for travelers with 6-8 hour layovers",
    "provider": {
      "@type": "TourOperator",
      "name": "Six Hour Layover Seattle"
    },
    "areaServed": {
      "@type": "City",
      "name": "Seattle",
      "state": "Washington"
    },
    "serviceType": "Layover Tours",
    "audience": {
      "@type": "Audience",
      "name": "Air travelers with layovers"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "How It Works",
        "item": `${siteUrl}/how-it-works`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pricing",
        "item": `${siteUrl}/pricing`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Book Now",
        "item": `${siteUrl}/book`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
    </>
  );
}