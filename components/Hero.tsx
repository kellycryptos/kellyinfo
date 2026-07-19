"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Zap, Sparkles, Copy, Check, Compass, ShieldCheck, Terminal, Send } from "lucide-react";

export default function Hero() {
  const [copiedHandle, setCopiedHandle] = useState(false);

  const copyHandle = () => {
    navigator.clipboard.writeText("Kelly");
    setCopiedHandle(true);
    setTimeout(() => setCopiedHandle(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Background radial gradient glow (Cyan/Blue only) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Cyberpunk Avatar Showcase (Primary on mobile & desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-1"
          >
            <div className="relative group w-full max-w-[290px] xs:max-w-xs sm:max-w-md">
              {/* Subtle Neon Cyan Glow Ring */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-60 group-hover:opacity-90 blur-xl transition duration-500 animate-pulse-glow"></div>

              {/* Glass Frame Card */}
              <div className="relative glass-panel bg-cyber-card/95 border-2 border-cyan-500/40 group-hover:border-cyan-400 rounded-3xl p-3.5 sm:p-5 shadow-[0_0_30px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.35)] transition-all space-y-3.5 sm:space-y-4">
                
                {/* Image Container with Crisp Neon Cyan Border & Glow */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:border-cyan-300 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all">
                  <Image
                    src="/images/avatar.png"
                    alt="Kelly Cyberpunk Avatar"
                    fill
                    priority
                    sizes="(max-width: 640px) 290px, (max-width: 1024px) 440px, 480px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle Gradient overlay tint at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-card/90 via-transparent to-transparent opacity-70"></div>

                  {/* Floating Identity Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-cyber-dark/90 backdrop-blur-md border border-cyan-500/30 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                      <span className="text-white font-extrabold text-xs sm:text-sm tracking-wide">KELLY</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold uppercase tracking-wider">
                      VERIFIED BUILDER
                    </span>
                  </div>
                </div>

                {/* Quick Info Terminal Bar */}
                <div className="p-3 rounded-xl bg-cyber-bg border border-white/10 text-xs font-mono space-y-1.5">
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 shrink-0" /> Web3 Architect
                    </span>
                    <span className="text-blue-400 font-semibold text-[11px] sm:text-xs">Base • Solana • Monad</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 flex items-center justify-between pt-1 border-t border-white/5">
                    <span>Arc • Plume • Jito</span>
                    <span className="text-cyan-400 font-bold">Cabal Leader</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left order-2 lg:order-2">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-[11px] sm:text-xs font-mono text-cyan-300"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0"></span>
              <span className="truncate">Available for Strategic Advisory, Investments & Co-Founding</span>
            </motion.div>

            {/* Main Name & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-mono flex items-center gap-3">
                <span>KELLY</span>
              </h1>

              <p className="text-base sm:text-2xl text-cyan-300 font-mono font-bold tracking-wide">
                Co-Founder • Builder • Trader • Advisor
              </p>
            </motion.div>

            {/* One-Liner */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-xl text-gray-200 max-w-2xl leading-relaxed font-sans font-normal"
            >
              Crypto architect turning vision into onchain reality across cabals, DAOs, agency marketing, and high-performance protocols.
            </motion.p>

            {/* Key Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                "⚡ Co-Founder Based TG Cabal",
                "👑 Founder Winners DAO",
                "⚡ Arc Architect",
                "🔹 Jito Cabal",
                "🔹 Monad Full Access",
                "🕊️ Plume Ambassador",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-gray-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all cursor-default"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4"
            >
              <a
                href="#ecosystem"
                className="flex-1 sm:flex-initial px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-xs sm:text-sm hover:opacity-95 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 group text-center"
              >
                <span>Explore Ecosystem & Roles</span>
                <Compass className="w-4 h-4 text-cyan-200 group-hover:rotate-45 transition-transform shrink-0" />
              </a>

              <a
                href="#connect"
                className="flex-1 sm:flex-initial px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass-panel hover:bg-white/10 border border-cyan-500/40 text-cyan-300 font-mono font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 text-center"
              >
                <Send className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={copyHandle}
                className="p-3 sm:p-3.5 rounded-xl glass-panel hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
                title="Copy name Kelly"
              >
                {copiedHandle ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>
          </div>

        </div>

        {/* Scroll prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce group-hover:scale-125 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
