
"use client";
import React from "react";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 md:hidden">
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 shadow-lg">
        <a href="#plan" className="text-sm px-3 py-1 rounded-xl hover:bg-slate-50">Plan</a>
        <a href="/privacy" className="text-sm px-3 py-1 rounded-xl hover:bg-slate-50">Privacy</a>
        <a href="/terms" className="text-sm px-3 py-1 rounded-xl hover:bg-slate-50">Terms</a>
      </div>
    </nav>
  );
}
