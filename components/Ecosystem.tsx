"use client";

import { motion } from "framer-motion";
import { Users, Crown, Rocket, Compass, Sparkles, Zap, Shield, Eye, Code, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Ecosystem() {
  const ecosystemItems = [
    {
      role: "Co-Founder",
      entity: "Based TG",
      tag: "PRIVATE CABAL",
      desc: "Co-founded a high-conviction Telegram cabal connecting top-tier traders, builders, and alpha researchers across crypto.",
      icon: Users,
      color: "text-cyan-400",
      bgBorder: "border-cyan-500/30 hover:border-cyan-500/60",
    },
    {
      role: "Founder",
      entity: "Winners DAO",
      tag: "DAO FOUNDATION",
      desc: "Founded Winners DAO to drive community-led Web3 initiatives, proposal execution, and collective treasury growth.",
      icon: Crown,
      color: "text-amber-400",
      bgBorder: "border-amber-500/30 hover:border-amber-500/60",
    },
    {
      role: "Co-Founder",
      entity: "Based Marketing Agency",
      tag: "WEB3 MARKETING",
      desc: "Co-founded a specialized Web3 growth agency executing viral launch campaigns, tokenomics marketing, and community scale.",
      icon: Rocket,
      color: "text-purple-400",
      bgBorder: "border-purple-500/30 hover:border-purple-500/60",
    },
    {
      role: "Builder & Architect",
      entity: "Arc Ecosystem",
      tag: "SOVEREIGN INFRA",
      desc: "Architecting gasless dapps, governance platforms, and sovereign smart contract infrastructure on Arc.",
      icon: Compass,
      color: "text-pink-400",
      bgBorder: "border-pink-500/30 hover:border-pink-500/60",
    },
    {
      role: "Ecosystem Creator",
      entity: "Jupiter Creators",
      tag: "SOLANA DEFI",
      desc: "Recognized creator building on Jupiter DEX primitives, swap routes, and Solana DeFi tooling.",
      icon: Sparkles,
      color: "text-emerald-400",
      bgBorder: "border-emerald-500/30 hover:border-emerald-500/60",
    },
    {
      role: "Core Member",
      entity: "Jito Cabal",
      tag: "SOLANA MEV",
      desc: "Member of the Jito community focusing on MEV capture, block building efficiency, and liquid staking dynamics.",
      icon: Zap,
      color: "text-yellow-400",
      bgBorder: "border-yellow-500/30 hover:border-yellow-500/60",
    },
    {
      role: "Ecosystem Ambassador",
      entity: "Plume Network",
      tag: "RWA CHAIN",
      desc: "Official ambassador advocating RWA (Real World Asset) tokenization and modular L2 infrastructure.",
      icon: Shield,
      color: "text-blue-400",
      bgBorder: "border-blue-500/30 hover:border-blue-500/60",
    },
    {
      role: "Full Access Builder",
      entity: "Monad",
      tag: "HIGH PERF EVM",
      desc: "Granted early full builder access on Monad to construct parallelized EVM dapps and high-throughput tools.",
      icon: Eye,
      color: "text-purple-300",
      bgBorder: "border-purple-400/30 hover:border-purple-400/60",
    },
    {
      role: "Core Contributor",
      entity: "OG Lab & Arcium",
      tag: "CONFIDENTIAL COMPUTE",
      desc: "Contributing code, feedback, and architecture to confidential computing and AI infrastructure protocols.",
      icon: Code,
      color: "text-rose-400",
      bgBorder: "border-rose-500/30 hover:border-rose-500/60",
    },
    {
      role: "Fund Manager & Advisor",
      entity: "Active Capital & Mentorship",
      tag: "ADVISORY & TRADING",
      desc: "Active trader, liquidity provider, fund manager, and hands-on mentor for early-stage Web3 founders.",
      icon: TrendingUp,
      color: "text-emerald-300",
      bgBorder: "border-emerald-400/30 hover:border-emerald-400/60",
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative z-10 border-t border-white/5 bg-cyber-bg/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>ROLES & ECOSYSTEM FOOTPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
            Ecosystem & <span className="gradient-text-purple">Contributions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            High-signal leadership, cabal co-founding, protocol building, and advisory presence across Web3.
          </p>
        </div>

        {/* 10-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemItems.map((item, idx) => (
            <motion.div
              key={item.entity}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl border ${item.bgBorder} space-y-4 flex flex-col justify-between group`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-cyan-300">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <div className={`text-xs font-mono font-semibold ${item.color}`}>
                    {item.role}
                  </div>
                  <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                    {item.entity}
                  </h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Active Contribution
                </span>
                <span className="text-cyan-300 font-mono">Web3 Protocol</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
