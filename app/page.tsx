"use client";

import CyberGridBackground from "@/components/CyberGridBackground";
import Navbar from "@/components/Navbar";
import CurrentlyShippingBadge from "@/components/CurrentlyShippingBadge";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContentCreated from "@/components/ContentCreated";
import Ecosystem from "@/components/Ecosystem";
import TechStack from "@/components/TechStack";
import Highlights from "@/components/Highlights";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-bg text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden">
      {/* Canvas Grid Background */}
      <CyberGridBackground />

      {/* Header */}
      <Navbar />

      {/* Floating Shipping Badge */}
      <CurrentlyShippingBadge />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <ContentCreated />
        <Ecosystem />
        <TechStack />
        <Highlights />
        <Connect />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
