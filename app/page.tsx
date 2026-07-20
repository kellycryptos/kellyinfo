"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Projects = dynamic(() => import("@/components/Projects"));
const ContentThreads = dynamic(() => import("@/components/ContentThreads"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Connect = dynamic(() => import("@/components/Connect"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-bg text-gray-100 font-sans overflow-x-hidden">
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-100" />

      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-cyan-500/8 via-blue-600/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-blue-600/6 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <ContentThreads />
        <TechStack />
        <Connect />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
