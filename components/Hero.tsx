"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Zap, Sparkles, Copy, Check, Compass, ShieldCheck, Terminal, MapPin } from "lucide-react";

interface HeroProps {
  onOpenWallet: () => void;
}

export default function Hero({ onOpenWallet }: HeroProps) {
  const [copiedHandle, setCopiedHandle] = useState(false);

  const copyHandle = () => {
    navigator.clipboard.writeText("@kellycryptos");
    setCopiedHandle(true);
    setTimeout(() => setCopiedHandle(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Avatar Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer Neon Glow Beam Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 blur-lg transition duration-500 animate-pulse-glow"></div>

              {/* Glass Frame Card */}
              <div className="relative glass-panel bg-cyber-card/95 border border-cyan-500/40 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4">
                
                {/* Image Container with Neon Border */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-cyan-400/30 group-hover:border-cyan-400/80 transition-colors shadow-inner">
                  <Image
                    src="/images/avatar.png"
                    alt="Kelly (@kellycryptos) Cyberpunk Avatar"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlay tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent opacity-60"></div>

                  {/* Floating Identity Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-cyber-dark/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-white font-bold">@kellycryptos</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Quick Info Terminal Bar */}
                <div className="p-3 rounded-xl bg-cyber-bg border border-white/10 text-xs font-mono space-y-1.5">
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <MapPin className="w-3.5 h-3.5" /> Zürich, Switzerland
                    </span>
                    <span className="text-purple-400 font-semibold">Web3 Architect</span>
                  </div>
                  <div className="text-[11px] text-gray-400 flex items-center justify-between pt-1 border-t border-white/5">
                    <span>Base • Solana • Arc • Monad</span>
                    <span className="text-emerald-400 font-bold">Cabal Leader</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Available for Strategic Advisory, Investments & Co-Founding</span>
            </motion.div>

            {/* Main Name & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-mono">
                KELLY <br className="hidden sm:inline" />
                <span className="gradient-text-purple">@kellycryptos</span>
              </h1>

              <p className="text-lg sm:text-2xl text-cyan-300 font-mono font-bold tracking-wide">
                Co-Founder • Builder • Trader • Advisor
              </p>
            </motion.div>

            {/* One-Liner */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-gray-200 max-w-2xl leading-relaxed font-sans font-normal"
            >
              Zürich-based crypto architect turning vision into onchain reality across cabals, DAOs, agency marketing, and high-performance protocols.
            </motion.p>

            {/* Key Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                "🔥 Co-Founder Based TG",
                "👑 Founder Winners DAO",
                "⚡ Arc Architect",
                "💜 Jito Cabal",
                "🟣 Monad Full Access",
                "🕊️ Plume Ambassador",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all cursor-default"
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
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#ecosystem"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-mono font-bold text-sm hover:opacity-95 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center gap-2 group"
              >
                <span>Explore Ecosystem & Roles</span>
                <Compass className="w-4 h-4 text-cyan-200 group-hover:rotate-45 transition-transform" />
              </a>

              <button
                onClick={onOpenWallet}
                className="px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 border border-cyan-500/40 text-cyan-300 font-mono font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Demo Privy Session</span>
              </button>

              <button
                onClick={copyHandle}
                className="p-3.5 rounded-xl glass-panel hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
                title="Copy handle @kellycryptos"
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
          className="mt-16 flex flex-col items-center justify-center text-center"
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
