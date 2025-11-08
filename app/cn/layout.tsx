// app/homepagetest/layout.tsx
import './theme_kiyomizu.css'

export const metadata = {
  title: 'Homepage Test – Kiyomizu Theme',
}

export default function HomePageTestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ✅ No <html> or <body> tags here
  return <div className="kiyomizu-theme">{children}</div>
}
