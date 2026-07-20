"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Sparkles, Users, ArrowUpRight, Flame } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      title: "OKX AI Genesis Hackathon",
      sub: "GovCoPilot AI Governance Assistant",
      desc: "Built an autonomous AI agent for DAO proposal analysis, delegate voting alignment calculation, and payload execution in under 48 hours.",
      badge: "AI & DAOs",
      icon: Trophy,
      color: "text-cyan-400",
    },
    {
      title: "Lepton Web3 Hackathon",
      sub: "SynArc DAO Treasury Platform",
      desc: "Architected a gasless multi-chain governance platform supporting automated AI agent proposals and treasury vaults.",
      badge: "DEFI & GOVERNANCE",
      icon: Flame,
      color: "text-blue-400",
    },
    {
      title: "Uniswap v4 Hook Challenge",
      sub: "GoalHook FC Dynamic Fees",
      desc: "Designed dynamic fee Uniswap v4 hooks on X Layer adjusting swap fees dynamically based on real-time World Cup match scores.",
      badge: "UNISWAP V4 HOOKS",
      icon: Zap,
      color: "text-sky-400",
    },
  ];

  return (
    <section id="highlights" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>TRACK RECORD & VELOCITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
            Hackathons & <span className="gradient-text-cyan">Highlights</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Active hackathon competitor, rapid prototype builder, and open-source contributor.
          </p>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass glass-hover p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between hover:border-cyan-500/35 hover:shadow-[0_0_24px_-6px_rgba(0,229,255,0.18)] transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-mono text-white">{item.title}</h3>
                <div className="text-xs font-mono text-cyan-300 font-semibold">{item.sub}</div>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 p-8 md:p-12 text-center space-y-6"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>OPEN FOR OPPORTUNITIES</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold font-mono text-white">
              Ready to build something <span className="gradient-text-blue">extraordinary onchain?</span>
            </h3>

            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Whether you need full-stack dApp development, autonomous AI agent architecture, or gasless UX integration, let's connect.
            </p>

            <div className="pt-2">
              <a
                href="#connect"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-sm shadow-xl shadow-cyan-500/20 hover:opacity-95 transition-opacity"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
