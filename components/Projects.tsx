"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Terminal, Layers, Cpu } from "lucide-react";

interface Project {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  liveUrl?: string;
  githubUrl: string;
  tech: string[];
  badge: string;
  details: string[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const projects: Project[] = [
  {
    id: "synarc-dao",
    name: "SynArc DAO",
    tagline: "Governance + Treasury Infrastructure",
    desc: "Governance and treasury infrastructure for DAOs, creators, and AI agents on Arc Testnet with @synarc/agent-sdk.",
    liveUrl: "https://synarcdao.xyz",
    githubUrl: "https://github.com/kellycryptos/synarc-dao",
    tech: ["Arc Testnet", "@synarc/agent-sdk", "Next.js 15", "Solidity"],
    badge: "LIVE PROTOCOL",
    details: [
      "Autonomous proposal analysis and voting via @synarc/agent-sdk.",
      "Gasless delegation powered by Paymasters & smart accounts.",
      "Multi-sig treasury vault management for DAOs, creators, and AI agents.",
    ],
  },
  {
    id: "govcopilot",
    name: "GovCoPilot",
    tagline: "AI-Powered DAO Governance Co-Pilot",
    desc: "AI-powered DAO Governance Co-Pilot for proposal analysis, voting strategy, and autonomous execution.",
    liveUrl: "https://govcopilot.vercel.app",
    githubUrl: "https://github.com/kellycryptos/govcopilot",
    tech: ["Next.js 15", "Groq LLM", "Python", "Onchain Execution"],
    badge: "AI GOVERNANCE",
    details: [
      "Semantic search and proposal analysis for DAO governance.",
      "Real-time voting strategy and alignment vector calculation.",
      "Autonomous multi-chain voting execution.",
    ],
  },
  {
    id: "nft-hash-flash",
    name: "NFTHashFlash",
    tagline: "High-Speed Multi-Chain NFT Minting Bot",
    desc: "High-speed multi-chain NFT minting Telegram bot built with Node.js, ethers, and Pinata IPFS.",
    githubUrl: "https://github.com/kellycryptos/nft-hash-flash",
    tech: ["Node.js", "ethers.js", "Telegram Bot API", "Pinata IPFS"],
    badge: "TELEGRAM BOT",
    details: [
      "Sub-second metadata pinning using dedicated Pinata IPFS gateways.",
      "High-speed multi-chain NFT generation and minting via Telegram.",
      "Optimized transaction handling and instant key management.",
    ],
  },
  {
    id: "gov-encrypt",
    name: "Gov-Encrypt",
    tagline: "Confidential Governance on Solana",
    desc: "Confidential governance protocol on Solana using Arcium for private voting and encrypted delegation.",
    githubUrl: "https://github.com/kellycryptos/gov-encrypt",
    tech: ["Arcium MXE", "Solana Anchor", "Rust", "Confidential Compute"],
    badge: "CONFIDENTIAL DEFI",
    details: [
      "Encrypted vote payloads processed in Arcium Multi-Party Execution Environments.",
      "Private voting and encrypted delegation protocol on Solana.",
      "Anchor Rust program for zero-knowledge weight verification.",
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="built" className="py-20 section-divider relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-12 max-w-xl">
          <span className="badge mb-4">Shipped Products & Protocols</span>
          <h2 className="font-mono font-black text-4xl sm:text-5xl text-white leading-tight mb-3">
            What I Have <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Key protocols, AI agents, Telegram bots, and confidential DeFi primitives shipped across Web3.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              {...fadeUp(i * 0.05)}
              whileHover={{ y: -4 }}
              className="glass glass-hover border border-white/6 rounded-2xl p-5 flex flex-col gap-4 group cursor-pointer"
              onClick={() => setSelected(p)}
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-white/5 border border-white/8 text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="tag">{p.badge}</span>
              </div>

              {/* Name + tagline */}
              <div>
                <h3 className="font-mono font-bold text-base text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {p.name}
                </h3>
                <p className="text-[11px] font-mono text-cyan-400/80">{p.tagline}</p>
              </div>

              {/* Desc */}
              <p className="text-xs text-gray-400 leading-relaxed flex-1">{p.desc}</p>

              {/* Core highlight */}
              <div className="p-3 rounded-lg bg-black/20 border border-white/5 text-[11px] font-mono text-gray-400 line-clamp-2">
                <span className="text-cyan-500 font-bold">▸ </span>
                {p.details[0]}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/4 border border-white/8 text-[10px] font-mono text-gray-500">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <button className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  Deep Dive
                </button>
                <div className="flex items-center gap-1.5">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg bg-cyan-500/8 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 border border-white/8 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl glass border border-cyan-500/25 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[88vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className="badge mb-3">{selected.badge}</span>
                <h3 className="font-mono font-black text-2xl text-white mt-2">{selected.name}</h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">{selected.tagline}</p>
              </div>

              <div className="p-4 rounded-xl bg-black/25 border border-white/6">
                <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest mb-2">
                  <Terminal className="w-3.5 h-3.5" />
                  System Overview
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{selected.desc}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-white font-bold uppercase tracking-wider mb-3">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  Technical Highlights
                </div>
                <ul className="space-y-2">
                  {selected.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-mono p-3 rounded-lg bg-white/4 border border-white/6">
                      <span className="text-cyan-400 font-bold flex-shrink-0">0{i + 1}.</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-mono text-gray-500 mb-2">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-cyan-500/8 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 border-t border-white/6">
                {selected.liveUrl && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-xs hover:opacity-90 transition-opacity"
                  >
                    Launch App <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-mono font-bold text-xs transition-colors"
                >
                  GitHub <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
