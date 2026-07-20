"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Send, Compass } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
              {/* Outer glow ring */}
              <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-transparent opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500" />

              {/* Card */}
              <div className="relative glass rounded-3xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-500 shadow-[0_0_40px_rgba(0,229,255,0.08)] group-hover:shadow-[0_0_60px_rgba(0,229,255,0.15)]">
                
                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                  <div className="scan-line opacity-40" />
                </div>

                {/* Image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/avatar.webp"
                    alt="Kelly — Web3 Builder"
                    fill
                    priority
                    decoding="async"
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-card/80 via-transparent to-transparent" />
                </div>

                {/* Identity bar */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-dot flex-shrink-0" />
                    <span className="font-mono font-bold text-sm text-white tracking-widest">KELLY</span>
                  </div>
                  <span className="tag">Verified Builder</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text ── */}
          <div className="order-2 lg:order-2 space-y-6">

            {/* Status pill */}
            <motion.div {...fadeUp(0)}>
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 pulse-dot" />
                Available · Advisory · Co-founding · Investment
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.08)} className="space-y-2">
              <h1 className="font-mono font-black text-[64px] sm:text-[80px] lg:text-[96px] leading-[0.9] tracking-tight text-white">
                KELLY
              </h1>
              <p className="font-mono text-sm sm:text-base text-cyan-400/90 tracking-[0.2em] uppercase font-medium">
                Co-Founder · Builder · Trader · Advisor
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p {...fadeUp(0.16)} className="text-gray-400 text-base leading-relaxed max-w-lg font-light">
              Crypto architect turning vision into onchain reality across cabals, DAOs,
              agency marketing, and high-performance protocols. Building at the edge
              of DeFi, AI agents &amp; confidential compute.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#built"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-semibold text-sm hover:opacity-90 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
              >
                <Compass className="w-4 h-4" />
                View My Work
              </a>
              <a
                href="#connect"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-cyan-500/30 text-gray-200 hover:text-cyan-300 font-mono font-semibold text-sm transition-all"
              >
                <Send className="w-4 h-4" />
                Get in Touch
              </a>
            </motion.div>
          </div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-[10px] font-mono text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase group"
          >
            <span>Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-cyan-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
