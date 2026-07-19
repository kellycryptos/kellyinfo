"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Shield, Zap, Globe, Server, Layers } from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Web3 & Smart Accounts", "AI & Autonomous Agents", "Infra & Chains"];

  const stackItems = [
    // Frontend
    { name: "Next.js 15", category: "Frontend", level: "Expert", desc: "App Router, SSR, Turbopack, Server Actions", color: "text-white" },
    { name: "TypeScript", category: "Frontend", level: "Expert", desc: "Strict typing, generics, robust APIs", color: "text-blue-400" },
    { name: "Tailwind CSS", category: "Frontend", level: "Expert", desc: "Custom themes, cyber tokens, dark mode", color: "text-cyan-400" },
    { name: "Framer Motion", category: "Frontend", level: "Advanced", desc: "Parallax, 3D tilts, micro-animations", color: "text-pink-400" },

    // Web3
    { name: "Privy UX", category: "Web3 & Smart Accounts", level: "Expert", desc: "Embedded wallets, passkey gasless auth", color: "text-purple-400" },
    { name: "viem / ethers.js", category: "Web3 & Smart Accounts", level: "Expert", desc: "Contract interactions, ABI encoding, RPCs", color: "text-amber-400" },
    { name: "Circle Primitives & CCTP", category: "Web3 & Smart Accounts", level: "Advanced", desc: "Cross-chain USDC transfers & settlement", color: "text-blue-300" },
    { name: "ERC-4337 Smart Accounts", category: "Web3 & Smart Accounts", level: "Advanced", desc: "Account abstraction, paymasters, session keys", color: "text-emerald-400" },

    // AI & Agents
    { name: "Groq Llama-3", category: "AI & Autonomous Agents", level: "Expert", desc: "Ultra-fast inference for real-time agent responses", color: "text-orange-400" },
    { name: "Custom Agent SDKs", category: "AI & Autonomous Agents", level: "Advanced", desc: "Tool calling, memory state, web scraping", color: "text-purple-300" },
    { name: "x402 Nanopayments", category: "AI & Autonomous Agents", level: "Pioneer", desc: "Agent-to-agent HTTP 402 micro-transactions", color: "text-yellow-400" },

    // Infra & Chains
    { name: "Node.js & Express", category: "Infra & Chains", level: "Expert", desc: "Backend Telegram bots & microservices", color: "text-emerald-400" },
    { name: "Vercel & Render", category: "Infra & Chains", level: "Expert", desc: "Edge deployments & continuous integration", color: "text-white" },
    { name: "Pinata / IPFS", category: "Infra & Chains", level: "Advanced", desc: "Decentralized metadata storage & gateways", color: "text-cyan-300" },

    // Ecosystems
    { name: "Arc Ecosystem", category: "Infra & Chains", level: "Native", desc: "Scalable sovereign chain infrastructure", color: "text-cyan-400" },
    { name: "Base Mainnet", category: "Infra & Chains", level: "Native", desc: "Low-cost EVM L2 dapps & social apps", color: "text-blue-500" },
    { name: "Solana Web3", category: "Infra & Chains", level: "Native", desc: "Anchor, SPL tokens, fast transaction bots", color: "text-purple-400" },
    { name: "OKX X Layer", category: "Infra & Chains", level: "Native", desc: "Uniswap v4 dynamic hooks & liquidity", color: "text-emerald-300" },
  ];

  const filteredItems =
    activeCategory === "All"
      ? stackItems
      : stackItems.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 relative z-10 border-t border-white/5 bg-cyber-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>PRODUCTION ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
            Tech <span className="gradient-text-cyan">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Modern full-stack Web3 & AI tooling optimized for speed, security, and gasless UX.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/20"
                  : "glass-panel hover:bg-white/5 text-gray-400 hover:text-gray-200 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stack Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 space-y-2 relative group"
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm font-bold font-mono ${item.color}`}>
                  {item.name}
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-400">
                  {item.level}
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
