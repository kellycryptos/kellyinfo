"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, X, Layers, Code } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  image: string;
  liveUrl?: string;
  githubUrl: string;
  tech: string[];
  badge: string;
  architectureDetails: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const selectedWork: Project[] = [
    {
      id: "synarc-dao",
      name: "SynArc DAO",
      tagline: "Governance + Treasury Platform for DAOs & AI Agents",
      desc: "Comprehensive multi-chain governance platform supporting automated proposal execution, autonomous AI agent voters, and treasury management. 480+ proposals processed with active treasury vaults.",
      image: "/images/synarc_dao.png",
      liveUrl: "https://synarcdao.xyz",
      githubUrl: "https://github.com/kellycryptos/synarc-dao",
      tech: ["Next.js 15", "TypeScript", "Ethers.js", "Privy", "Solidity", "Subgraphs"],
      badge: "LIVE PROTOCOL",
      architectureDetails: [
        "Gasless proposal delegation powered by Paymasters & ERC-4337 smart accounts.",
        "AI Agent voting bots integrated via Groq LLM API for automated proposal risk scoring.",
        "Multi-sig treasury vault management across Base, Arc, and Ethereum L2s.",
      ],
    },
    {
      id: "babel-markets",
      name: "Babel Markets",
      tagline: "AI Agentic Prediction Markets for Non-English Signals",
      desc: "Automated prediction market engine parsing non-English global news streams with AI agents to create, settle, and market-make news-driven prediction pools.",
      image: "/images/babel_markets.png",
      liveUrl: "https://babel-markets.vercel.app",
      githubUrl: "https://github.com/kellycryptos/babel-markets",
      tech: ["Next.js", "Groq AI", "viem", "Wagmi", "Tailwind CSS", "Polygon"],
      badge: "LIVE APP",
      architectureDetails: [
        "Autonomous AI scrapers monitor multilingual news sources (Spanish, Mandarin, Japanese, Arabic).",
        "LLM market creation engine generates binary and categorical prediction pools automatically.",
        "Gasless cross-chain settlements using Circle CCTP liquidity bridges.",
      ],
    },
    {
      id: "nft-hash-flash",
      name: "NFTHashFlash",
      tagline: "Ultra-Fast Multi-Chain NFT Telegram Bot",
      desc: "High-speed Telegram bot allowing users to generate, mint, and pin metadata for multi-chain NFTs directly through chat commands in under 3 seconds.",
      image: "/images/nfthashflash.png",
      githubUrl: "https://github.com/kellycryptos/nft-hash-flash",
      tech: ["Node.js", "Ethers.js", "Telegram Bot API", "Pinata IPFS", "Solana Web3"],
      badge: "TELEGRAM BOT",
      architectureDetails: [
        "Sub-second metadata pinning using dedicated Pinata IPFS gateways.",
        "Optimized gas estimation for priority transaction inclusions on Solana & EVM.",
        "Built-in wallet encryption with instant telegram export key commands.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Code className="w-3.5 h-3.5" />
            <span>CURATED BUILD PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
            Selected <span className="gradient-text-cyan">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Minimal, high-impact selection of flagship products engineered for scale, speed, and real traction.
          </p>
        </div>

        {/* 3 Selected Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedWork.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-cyber-card">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-cyber-bg/90 border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-300 backdrop-blur-md shadow-lg">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.name}</span>
                  </h3>
                  
                  <p className="text-xs font-mono text-purple-300 font-semibold">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group/btn"
                >
                  <span>Architecture Deep-Dive</span>
                  <Sparkles className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-panel bg-cyber-dark/95 border border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                  {selectedProject.badge}
                </div>
                <h3 className="text-2xl font-bold font-mono text-white">
                  {selectedProject.name} Architecture
                </h3>
                <p className="text-sm font-mono text-purple-300">
                  {selectedProject.tagline}
                </p>
              </div>

              <div className="relative h-56 w-full rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Technical Implementation Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architectureDetails.map((detail, i) => (
                    <li
                      key={i}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 font-mono flex items-start gap-2.5"
                    >
                      <span className="text-cyan-400 font-bold">0{i + 1}.</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-gray-400">Deployed Stack:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono font-bold text-xs hover:opacity-90 transition-opacity"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-mono font-bold text-xs transition-colors"
                >
                  <span>View GitHub Repository</span>
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
