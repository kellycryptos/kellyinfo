import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KELLY — Co-Founder, Builder, Trader & Advisor",
  description: "Web3 architect, trader, fund manager, and co-founder across Based TG, Winners DAO, Based Marketing, Arc, Jupiter, Jito, Plume, Monad & Arcium.",
  keywords: [
    "Kelly",
    "Co-Founder",
    "Crypto Trader",
    "Based TG",
    "Winners DAO",
    "Arc Architect",
    "Jito Cabal",
    "Plume Ambassador",
    "Monad Full Access",
    "Jupiter Creators",
    "Arcium",
  ],
  authors: [{ name: "Kelly" }],
  creator: "Kelly",
  openGraph: {
    title: "KELLY — Co-Founder • Builder • Trader • Advisor",
    description: "Crypto architect turning vision into onchain reality across Solana, Base, Arc, Monad & Ethereum.",
    url: "https://kellyinfo.vercel.app",
    siteName: "Kelly Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KELLY — Co-Founder • Builder • Trader • Advisor",
    description: "Web3 architect, trader, fund manager & founder. Active across Based TG, Winners DAO, Jito, Monad, Arc & Plume.",
    creator: "Kelly",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-cyber-bg text-gray-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-400`}
      >
        {children}
      </body>
    </html>
  );
}
