"use client";

import { motion } from "framer-motion";
import {
  Users, Crown, Rocket, Compass, Sparkles,
  Zap, Shield, Eye, Code, TrendingUp,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const items = [
  {
    role: "Co-Founder",
    entity: "Based TG",
    tag: "PRIVATE CABAL",
    desc: "Co-founded a high-conviction Telegram cabal connecting top-tier traders, builders, and alpha researchers across crypto.",
    icon: Users,
    accent: "text-cyan-400",
    ring: "hover:border-cyan-500/30",
  },
  {
    role: "Founder",
    entity: "Winners DAO",
    tag: "DAO",
    desc: "Founded Winners DAO to drive community-led Web3 initiatives, proposal execution, and collective treasury growth.",
    icon: Crown,
    accent: "text-blue-400",
    ring: "hover:border-blue-500/30",
  },
  {
    role: "Co-Founder",
    entity: "Based Marketing Agency",
    tag: "WEB3 GROWTH",
    desc: "Co-founded a specialized Web3 growth agency executing viral launch campaigns, tokenomics marketing, and community scale.",
    icon: Rocket,
    accent: "text-sky-400",
    ring: "hover:border-sky-500/30",
  },
  {
    role: "Builder & Architect",
    entity: "Arc Ecosystem",
    tag: "SOVEREIGN INFRA",
    desc: "Architecting gasless dapps, governance platforms, and sovereign smart contract infrastructure on Arc.",
    icon: Compass,
    accent: "text-cyan-400",
    ring: "hover:border-cyan-500/30",
  },
  {
    role: "Ecosystem Creator",
    entity: "Jupiter Creators",
    tag: "SOLANA DEFI",
    desc: "Recognized creator building on Jupiter DEX primitives, swap routes, and Solana DeFi tooling.",
    icon: Sparkles,
    accent: "text-blue-300",
    ring: "hover:border-blue-400/30",
  },
  {
    role: "Core Member",
    entity: "Jito Cabal",
    tag: "SOLANA MEV",
    desc: "Member focusing on MEV capture, block building efficiency, and liquid staking dynamics on Solana.",
    icon: Zap,
    accent: "text-sky-300",
    ring: "hover:border-sky-400/30",
  },
  {
    role: "Ecosystem Ambassador",
    entity: "Plume Network",
    tag: "RWA CHAIN",
    desc: "Official ambassador advocating RWA tokenization and modular L2 infrastructure.",
    icon: Shield,
    accent: "text-blue-400",
    ring: "hover:border-blue-500/30",
  },
  {
    role: "Full Access Builder",
    entity: "Monad",
    tag: "HIGH PERF EVM",
    desc: "Granted early full builder access to construct parallelized EVM dapps and high-throughput tools.",
    icon: Eye,
    accent: "text-cyan-300",
    ring: "hover:border-cyan-400/30",
  },
  {
    role: "Core Contributor",
    entity: "OG Lab & Arcium",
    tag: "CONFIDENTIAL COMPUTE",
    desc: "Contributing code, feedback, and architecture to confidential computing and AI infrastructure protocols.",
    icon: Code,
    accent: "text-blue-400",
    ring: "hover:border-blue-500/30",
  },
  {
    role: "Fund Manager & Advisor",
    entity: "Active Capital",
    tag: "ADVISORY",
    desc: "Active trader, liquidity provider, fund manager, and hands-on mentor for early-stage Web3 founders.",
    icon: TrendingUp,
    accent: "text-cyan-400",
    ring: "hover:border-cyan-500/30",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 section-divider relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-12 max-w-xl">
          <span className="badge mb-4">Roles & Ecosystem Footprint</span>
          <h2 className="font-mono font-black text-4xl sm:text-5xl text-white leading-tight mb-3">
            Ecosystem &amp; <span className="gradient-text">Roles</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            High-signal leadership, cabal co-founding, protocol building, and advisory presence across Web3.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.entity}
              {...fadeUp(i * 0.04)}
              whileHover={{ y: -4 }}
              className={`glass glass-hover border border-white/6 ${item.ring} rounded-2xl p-5 flex flex-col gap-3 group`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg bg-white/5 border border-white/8 ${item.accent} group-hover:scale-105 transition-transform`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="tag">{item.tag}</span>
              </div>

              <div>
                <p className={`text-[10px] font-mono font-semibold ${item.accent} uppercase tracking-wider mb-0.5`}>
                  {item.role}
                </p>
                <h3 className="font-mono font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {item.entity}
                </h3>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>

              <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 pulse-dot" />
                Active Contribution
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
