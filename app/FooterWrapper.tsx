"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/Dfooter";

export default function FooterWrapper() {
  const pathname = usePathname();

  const noFooterRoutes = ["/book","/cn","/japanese-seattle-layover","/mandarin-seattle-layover"];

  if (noFooterRoutes.includes(pathname)) return null;

  return <Footer />;
}
