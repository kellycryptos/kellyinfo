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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kelly.build"),
  title: "Kelly — Web3 Builder & Architect",
  description:
    "Kelly is an independent Web3 builder, co-founder, trader and advisor operating at the intersection of DeFi, AI agents, and high-signal communities.",
  keywords: ["Kelly", "Web3", "DeFi", "Blockchain", "Crypto", "Builder", "Architect", "DAO"],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kelly — Web3 Builder & Architect",
    description:
      "Kelly is an independent Web3 builder, co-founder, trader and advisor operating at the intersection of DeFi, AI agents, and high-signal communities.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Kelly Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelly — Web3 Builder & Architect",
    description:
      "Kelly is an independent Web3 builder, co-founder, trader and advisor operating at the intersection of DeFi, AI agents, and high-signal communities.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
