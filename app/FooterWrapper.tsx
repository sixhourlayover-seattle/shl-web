"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/Dfooter";

export default function FooterWrapper() {
  const pathname = usePathname();

  const noFooterRoutes = ["/book","/cn", "/seattle-layover-tour","/6-hour-layover-seattle","/7-hour-layover-seattle","/8-hour-layover-seattle"];

  if (noFooterRoutes.includes(pathname)) return null;

  return <Footer />;
}
