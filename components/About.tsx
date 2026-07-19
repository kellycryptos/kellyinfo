"use client";

import { motion } from "framer-motion";
import { Shield, Users, TrendingUp, Cpu, Flame, Compass, Star, Code } from "lucide-react";

export default function About() {
  const coreStrengths = [
    {
      icon: Users,
      title: "Co-Founder & Cabal Leadership",
      desc: "Co-founded Based TG (private Telegram cabal), founded Winners DAO, and co-founded Based Marketing Agency to drive high-signal growth and community power.",
      color: "text-cyan-400",
      borderColor: "hover:border-cyan-500/50",
    },
    {
      icon: TrendingUp,
      title: "Active Trader & Fund Manager",
      desc: "Managing capital, executing high-conviction trades, and advising emerging protocols on tokenomics, liquidity strategies, and ecosystem alignment.",
      color: "text-blue-400",
      borderColor: "hover:border-blue-500/50",
    },
    {
      icon: Cpu,
      title: "Protocol Architect & Builder",
      desc: "Full-stack developer building gasless UX, autonomous AI agents, prediction markets, and custom smart contract infrastructure across EVM & Solana.",
      color: "text-sky-400",
      borderColor: "hover:border-sky-500/50",
    },
    {
      icon: Shield,
      title: "Ecosystem Ambassador & Contributor",
      desc: "Full access builder on Monad, Plume Network Ambassador, Jito Cabal member, Jupiter Creator, and active contributor to OG Lab & Arcium.",
      color: "text-cyan-300",
      borderColor: "hover:border-cyan-400/50",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-cyber-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Code className="w-3.5 h-3.5" />
            <span>FULL-STACK WEB3 ARCHITECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
            About <span className="gradient-text-cyan">Kelly</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Co-Founder, Builder, Trader, and Advisor operating at the intersection of capital, architecture, and high-signal community hubs.
          </p>
        </div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-8xl select-none font-bold">
            01
          </div>
          <div className="max-w-3xl space-y-4 relative z-10">
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white flex items-center gap-2">
              <Flame className="w-6 h-6 text-cyan-400" />
              <span>Building, Trading & Advisory at Scale</span>
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Kelly is an independent Web3 builder and strategist. Having co-founded private Telegram cabals (<strong className="text-white">Based TG</strong>), founded decentralized communities (<strong className="text-white">Winners DAO</strong>), and launched marketing engines (<strong className="text-white">Based Marketing Agency</strong>), Kelly bridges technical engineering with high-impact Web3 growth.
            </p>
            <p className="text-gray-400 text-sm font-mono pt-2">
              Holding full builder access on <span className="text-cyan-300">Monad</span>, active membership in the <span className="text-blue-300">Jito Cabal</span>, ambassador status at <span className="text-sky-300">Plume Network</span>, and contributions to <span className="text-cyan-300">OG Lab</span>, <span className="text-blue-300">Jupiter</span>, and <span className="text-sky-300">Arcium</span>.
            </p>
          </div>
        </motion.div>

        {/* Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreStrengths.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 ${item.borderColor} space-y-4`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-mono text-white">{item.title}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
