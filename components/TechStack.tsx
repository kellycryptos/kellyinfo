"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const stack = [
  // Frontend
  { name: "Next.js 15", cat: "Frontend", color: "text-white" },
  { name: "TypeScript", cat: "Frontend", color: "text-blue-400" },
  { name: "Tailwind CSS", cat: "Frontend", color: "text-cyan-400" },
  { name: "Framer Motion", cat: "Frontend", color: "text-sky-400" },
  // Web3
  { name: "viem / ethers.js", cat: "Web3", color: "text-cyan-300" },
  { name: "Circle CCTP", cat: "Web3", color: "text-blue-300" },
  { name: "ERC-4337", cat: "Web3", color: "text-sky-400" },
  { name: "Solana Web3.js", cat: "Web3", color: "text-green-400" },
  // AI & Agents
  { name: "Groq Llama-3", cat: "AI & Agents", color: "text-cyan-400" },
  { name: "Custom Agent SDKs", cat: "AI & Agents", color: "text-blue-300" },
  { name: "x402 Nanopayments", cat: "AI & Agents", color: "text-sky-300" },
  // Infra & Chains
  { name: "Node.js / Express", cat: "Infra", color: "text-cyan-400" },
  { name: "Vercel / Render", cat: "Infra", color: "text-white" },
  { name: "Pinata / IPFS", cat: "Infra", color: "text-cyan-300" },
  { name: "Solidity / Rust", cat: "Infra", color: "text-orange-400" },
  // Chains
  { name: "Base Mainnet", cat: "Chains", color: "text-blue-400" },
  { name: "Solana", cat: "Chains", color: "text-green-400" },
  { name: "Arc Ecosystem", cat: "Chains", color: "text-cyan-400" },
  { name: "OKX X Layer", cat: "Chains", color: "text-blue-300" },
  { name: "Monad", cat: "Chains", color: "text-purple-400" },
];

const categories = [
  { label: "Frontend", color: "text-blue-400", border: "border-blue-500/20" },
  { label: "Web3", color: "text-cyan-400", border: "border-cyan-500/20" },
  { label: "AI & Agents", color: "text-sky-400", border: "border-sky-500/20" },
  { label: "Infra", color: "text-gray-300", border: "border-white/15" },
  { label: "Chains", color: "text-purple-400", border: "border-purple-500/20" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 section-divider relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-12 max-w-xl">
          <span className="badge mb-4">Production Arsenal</span>
          <h2 className="font-mono font-black text-4xl sm:text-5xl text-white leading-tight mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Modern full-stack Web3 & AI tooling optimised for speed, security, and gasless UX.
          </p>
        </motion.div>

        {/* Category rows */}
        <div className="space-y-8">
          {categories.map((cat, ci) => {
            const items = stack.filter((s) => s.cat === cat.label);
            return (
              <motion.div key={cat.label} {...fadeUp(ci * 0.06)}>
                <div className={`flex items-center gap-2 mb-3 text-[10px] font-mono font-bold uppercase tracking-widest ${cat.color}`}>
                  <span className={`block w-4 h-px bg-current opacity-60`} />
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item.name}
                      className={`px-3 py-1.5 rounded-lg glass border ${cat.border} text-xs font-mono ${item.color} hover:scale-105 transition-transform cursor-default`}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-12 glass rounded-2xl border border-white/6 p-6 flex flex-wrap gap-6 items-center justify-between"
        >
          {[
            { label: "Chains Deployed On", value: "7+" },
            { label: "Smart Contracts Shipped", value: "15+" },
            { label: "AI Agents Built", value: "5+" },
            { label: "Selected Builds", value: "4" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="font-mono font-black text-2xl text-neon">{stat.value}</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
