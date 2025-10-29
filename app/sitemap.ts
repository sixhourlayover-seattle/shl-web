
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sixhourlayover.com";
  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },

    // ✅ Added from your previous sitemap.xml route
    { url: `${siteUrl}/seattle-layover-tour`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/6-hour-layover-seattle`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/7-hour-layover-seattle`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/8-hour-layover-seattle`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    
  ];
}
