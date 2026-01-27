import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ZB Rental – Premium Fahrzeugvermietung in NRW",
  description: "Sportwagen & Camper mieten in NRW – Premium Fahrzeuge, schnelle Anfrage, exklusive Erlebnisse.",
  keywords: "Fahrzeugvermietung, Sportwagen mieten, Camper mieten, NRW, Düsseldorf, Köln",
  authors: [{ name: "CarWorlds GmbH" }],
  openGraph: {
    title: "ZB Rental – Premium Fahrzeugvermietung in NRW",
    description: "Sportwagen & Camper mieten in NRW – Premium Fahrzeuge, schnelle Anfrage.",
    url: "https://zb-rental.de",
    siteName: "ZB Rental",
    images: [
      {
        url: "https://zb-rental.de/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZB Rental",
    description: "Premium Fahrzeugvermietung in NRW",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07070a" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { height: 100%; background: #07070a; color: rgba(255, 255, 255, 0.92); font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
          body { margin: 0; overflow-x: hidden; }
          a { color: inherit; text-decoration: none; }
          img { max-width: 100%; display: block; }
          html { scroll-behavior: smooth; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
