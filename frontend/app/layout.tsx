import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Relmn — The On-Chain Knowledge Network",
  description:
    "A decentralized, real-time knowledge ecosystem where experts publish insights on-chain. Built on Sonic blockchain with Fee Monetization to reward creators.",
  keywords: "blockchain, knowledge network, decentralized, on-chain, Sonic, Web3, experts, insights, DeFi, DAO",
  generator: "tomeku.com",
  metadataBase: new URL("https://relmn.com"),

  // Open Graph tags for Facebook, Discord, Telegram
  openGraph: {
    title: "Relmn — The On-Chain Knowledge Network",
    description:
      "Join the decentralized knowledge revolution. Publish insights, earn rewards, and connect with experts on Sonic blockchain.",
    url: "https://relmn.com",
    siteName: "Relmn",
    images: [
      {
        url: "/relmn-social-card.png",
        width: 1200,
        height: 630,
        alt: "Relmn - Powered by Sonic blockchain",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "Relmn — The On-Chain Knowledge Network",
    description:
      "Join the decentralized knowledge revolution. Publish insights, earn rewards, and connect with experts on Sonic blockchain.",
    images: ["/relmn-social-card.png"],
    creator: "@relmn",
    site: "@relmn",
  },

  // Additional meta tags for better SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification tags (add actual verification codes when available)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="dark">{children}</body>
    </html>
  )
}
