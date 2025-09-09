
import React from "react";

export default function Button({ children, className = "", variant = "primary", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition shadow-sm";
  const styles: Record<string, string> = {
    primary: "bg-kraken-deepSea text-kraken-white hover:bg-kraken-shadowBlue",
    ghost: "bg-white/0 text-kraken-deepSea hover:bg-kraken-iceBlue border border-kraken-shadowBlue"
  };
  return (
    <button className={`${base} ${styles[variant] || styles.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
