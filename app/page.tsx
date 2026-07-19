"use client";

import { useState } from "react";
import CyberGridBackground from "@/components/CyberGridBackground";
import Navbar from "@/components/Navbar";
import CurrentlyShippingBadge from "@/components/CurrentlyShippingBadge";
import PrivyWalletModal from "@/components/PrivyWalletModal";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Highlights from "@/components/Highlights";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="relative min-h-screen bg-cyber-bg text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden">
      {/* Canvas Grid Background */}
      <CyberGridBackground />

      {/* Header */}
      <Navbar
        onOpenWallet={() => setIsWalletOpen(true)}
        isConnected={isConnected}
      />

      {/* Floating Shipping Badge */}
      <CurrentlyShippingBadge />

      {/* Privy Wallet Modal */}
      <PrivyWalletModal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero onOpenWallet={() => setIsWalletOpen(true)} />
        <About />
        <Ecosystem />
        <Projects />
        <TechStack />
        <Highlights />
        <Connect />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
