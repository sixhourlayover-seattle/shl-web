"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GlobalText, NAVIGATION_japanese_LINKS } from "@/lib/text";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false); // ✅ FIXED — moved inside component

  return (
    <header className="sticky top-0 z-30 glass border-b border-white/20">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <Image src="/logo_from_url.jpg" alt="Logo" width={40} height={40} className="rounded-2xl" />
            <span className="text-lg font-bold headings_color  bg-clip-text">
              {GlobalText.appName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION_japanese_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-primary-600 font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/book"
              className="inline-flex items-center px-6 py-2 btn-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              シアトル ツアーを予約する
            </a>
          </nav>
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-slate-700 font-medium hover:text-primary-600 transition-colors"
            >
              言語 ▾
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/seattle-layover-tour"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setLangOpen(false)}
                >
                  English
                </Link>
                <Link
                  href="/mandarin-seattle-layover"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setLangOpen(false)}
                >
                  中文
                </Link>
                <Link
                  href="/japanese-seattle-layover"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setLangOpen(false)}
                ><span className="text-red-500">✔ </span> 日本語
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/95 backdrop-blur">
            <nav className="py-4 space-y-2">
              {NAVIGATION_japanese_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-slate-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="/book"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r btn-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  シアトル ツアーを予約する
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
