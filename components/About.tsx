"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Cpu, Shield } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const strengths = [
  {
    icon: Users,
    title: "Co-Founder & Cabal Leadership",
    desc: "Co-founded Based TG (private Telegram cabal), Founded Winners DAO, and co-founded Based Marketing Agency to drive high-signal growth and community power.",
    accent: "text-cyan-400",
    border: "hover:border-cyan-500/40 hover:shadow-[0_0_24px_-4px_rgba(0,229,255,0.18)]",
  },
  {
    icon: TrendingUp,
    title: "Active Trader & Fund Manager",
    desc: "Managing capital, executing high-conviction trades, and advising emerging protocols on tokenomics, liquidity strategies, and ecosystem alignment.",
    accent: "text-blue-400",
    border: "hover:border-blue-500/40 hover:shadow-[0_0_24px_-4px_rgba(37,99,235,0.18)]",
  },
  {
    icon: Cpu,
    title: "Protocol Architect & Builder",
    desc: "Full-stack developer building gasless UX, autonomous AI agents, prediction markets, and custom smart contract infrastructure across EVM & Solana.",
    accent: "text-sky-400",
    border: "hover:border-sky-500/40 hover:shadow-[0_0_24px_-4px_rgba(56,189,248,0.18)]",
  },
  {
    icon: Shield,
    title: "Ecosystem Ambassador & Contributor",
    desc: "Full access builder on Monad, Plume Network Ambassador, Jito Cabal member, Jupiter Creator, and active contributor to OG Lab & Arcium.",
    accent: "text-cyan-300",
    border: "hover:border-cyan-400/40 hover:shadow-[0_0_24px_-4px_rgba(0,229,255,0.18)]",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 section-divider relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14 max-w-xl">
          <span className="badge mb-4 hover:border-cyan-400/50 hover:bg-cyan-500/12 transition-all duration-300">Full-Stack Web3 Architect</span>
          <h2 className="font-mono font-black text-4xl sm:text-5xl text-white leading-tight mb-3">
            About <span className="gradient-text">Kelly</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
            Co-Founder, Builder, Trader, and Advisor operating at the intersection of capital,
            architecture, and high-signal community hubs.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          {...fadeUp(0.08)}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
          className="glass glass-hover rounded-2xl p-7 sm:p-9 mb-10 relative overflow-hidden group border border-white/6 hover:border-cyan-500/30"
        >
          <span className="absolute top-5 right-7 font-mono font-black text-7xl text-white/[0.04] group-hover:text-cyan-400/[0.08] transition-colors duration-500 select-none leading-none">
            01
          </span>
          <div className="relative z-10 space-y-3.5 max-w-3xl">
            <h3 className="font-mono font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300">
              Building, Trading & Advisory at Scale
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-sans">
              Kelly is an independent Web3 builder and strategist. Having co-founded private Telegram
              cabals (<strong className="text-white font-semibold">Based TG</strong>), founded decentralized
              communities (<strong className="text-white font-semibold">Winners DAO</strong>), and launched
              marketing engines (<strong className="text-white font-semibold">Based Marketing Agency</strong>),
              Kelly bridges technical engineering with high-impact Web3 growth.
            </p>
            <p className="text-gray-500 text-xs font-mono leading-relaxed pt-1">
              Holding full builder access on <span className="text-cyan-400 hover:underline cursor-default">Monad</span>, active membership in the{" "}
              <span className="text-blue-300 hover:underline cursor-default">Jito Cabal</span>, ambassador status at{" "}
              <span className="text-sky-300 hover:underline cursor-default">Plume Network</span>, and contributions to{" "}
              <span className="text-cyan-400 hover:underline cursor-default">OG Lab</span>,{" "}
              <span className="text-blue-300 hover:underline cursor-default">Jupiter</span>, and{" "}
              <span className="text-sky-300 hover:underline cursor-default">Arcium</span>.
            </p>
          </div>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(0.08 + i * 0.06)}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className={`glass glass-hover rounded-2xl p-6 border border-white/6 ${s.border} flex gap-4 transition-all duration-300 group`}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-xl bg-white/5 border border-white/8 ${s.accent} group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform duration-300 h-fit`}>
                <s.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono font-bold text-sm text-white group-hover:text-cyan-300 transition-colors mb-1.5">{s.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
