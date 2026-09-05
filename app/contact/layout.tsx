// app/contact/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
  description:
    "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours. We aim to respond promptly during business hours.",
  keywords: [
    "Seattle layover tour contact",
    "SEA airport tour booking",
    "layover tour phone number",
    "Seattle tour contact",
    "airport pickup booking",
    "layover tour WhatsApp",
  ],
  openGraph: {
    title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
    description:
      "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
    description:
      "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
