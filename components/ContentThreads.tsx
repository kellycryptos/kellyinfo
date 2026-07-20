"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, ExternalLink, Calendar, Eye, Sparkles } from "lucide-react";

interface ContentCardProps {
  title: string;
  subtitle?: string;
  link: string;
  metric: string; // date or view count
  metricType: "date" | "views";
  badge?: string;
}

const articles: ContentCardProps[] = [
  {
    title: "Understanding SynArc: Agentic Governance & Treasury Infrastructure on Arc",
    subtitle: "SynArc deep dive thread breaking down proposal voting, multi-sig vaults, & AI agents.",
    link: "https://x.com/Kellycryptos/status/2059509139886215264",
    metric: "May 26, 2026",
    metricType: "date",
    badge: "SynArc Deep Dive",
  },
  {
    title: "The End of the Financial Black Box: Why Pyth Terminal Changes Everything",
    subtitle: "Pyth Terminal article exploring institutional zero-cost market data streams.",
    link: "https://x.com/Kellycryptos/status/2058880909944742040",
    metric: "May 25, 2026",
    metricType: "date",
    badge: "Pyth Terminal",
  },
  {
    title: "0-1-EXCHANGE: Bloomberg Terminal for On-Chain Trading",
    subtitle: "High-frequency AI-powered trading terminal on Solana & Base.",
    link: "https://x.com/Kellycryptos/status/2036708368811688027",
    metric: "Mar 25, 2026",
    metricType: "date",
    badge: "DeFi Terminal",
  },
  {
    title: "The Great Game: Why Chaos is Your Only Leverage",
    subtitle: "Nihilism, Machiavelli, and existential strategy in modern tech & crypto.",
    link: "https://x.com/Kellycryptos/status/2012528840338235481",
    metric: "Jan 17, 2026",
    metricType: "date",
    badge: "Philosophy",
  },
  {
    title: "How to Make $1M Before 2026 Ends: 4-Phase Systems Roadmap",
    subtitle: "High-leverage streams, execution systems, network power, and mental clarity.",
    link: "https://x.com/Kellycryptos/status/2008890901230158307",
    metric: "Jan 7, 2026",
    metricType: "date",
    badge: "Growth Guide",
  },
];

const popularThreads: ContentCardProps[] = [
  {
    title: "Rialo L1: Connecting Real-World Assets & Off-Chain Data",
    subtitle: "Layer 1 blockchain by Subzero Labs bridging RWAs directly onchain.",
    link: "https://x.com/kellycryptos/status/1968217331999576314",
    metric: "10.3K+ Views",
    metricType: "views",
    badge: "RWA & L1",
  },
  {
    title: "RedStone Protocol: Revolutionizing Modular Blockchain Oracles",
    subtitle: "RedStone thread breaking down modular, efficient, & tamper-proof data feeds.",
    link: "https://x.com/kellycryptos/status/1892212591025332522",
    metric: "RedStone Thread",
    metricType: "views",
    badge: "Oracles",
  },
  {
    title: "The Power of Ultra V3: Ending Toxic MEV on Solana",
    subtitle: "Jupiter Exchange's landmark Ultra V3 upgrade and MEV protection.",
    link: "https://x.com/kellycryptos/status/1980894939014918519",
    metric: "Solana Alpha",
    metricType: "views",
    badge: "Solana DeFi",
  },
  {
    title: "What is Ethereum OS? Operating System for L2 Scaling",
    subtitle: "Detailed breakdown of Ethereum OS and modular execution layers.",
    link: "https://x.com/kellycryptos/status/1950489296508424303",
    metric: "450+ Views",
    metricType: "views",
    badge: "Ethereum OS",
  },
  {
    title: "What is Term Finance? On-Chain Fixed-Rate Auctions",
    subtitle: "Fixed-rate liquidity and collateralized lending protocols.",
    link: "https://x.com/kellycryptos/status/1892921679598281138",
    metric: "433+ Views",
    metricType: "views",
    badge: "Term Finance",
  },
  {
    title: "Hinkal Protocol: Invisible On-Chain Privacy Solution",
    subtitle: "Shielded transactions and zero-knowledge privacy for DeFi users.",
    link: "https://x.com/kellycryptos/status/1951387719319560486",
    metric: "267+ Views",
    metricType: "views",
    badge: "ZK Privacy",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function ContentThreads() {
  const [activeTab, setActiveTab] = useState<"both" | "articles" | "threads">("both");

  return (
    <section id="content" className="py-20 section-divider relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div {...fadeUp(0)} className="max-w-xl">
            <span className="badge mb-4 hover:border-cyan-400/50 hover:bg-cyan-500/12 transition-all duration-300">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Research & Publications
            </span>
            <h2 className="font-mono font-black text-4xl sm:text-5xl text-white leading-tight mb-3">
              Content & <span className="gradient-text">Threads</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Deep dives, technical breakdowns, market data articles, and viral Web3 threads.
            </p>
          </motion.div>

          {/* View Filter Tabs */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-1.5 glass p-1.5 rounded-xl border border-white/8 self-start md:self-end shadow-lg">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 active:scale-95 ${
                activeTab === "both"
                  ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/35 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              All Columns
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
                activeTab === "articles"
                  ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/35 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Articles ({articles.length})
            </button>
            <button
              onClick={() => setActiveTab("threads")}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
                activeTab === "threads"
                  ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/35 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Popular Threads ({popularThreads.length})
            </button>
          </motion.div>
        </div>

        {/* Content Layout Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "both"
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1 max-w-3xl mx-auto"
          }`}
        >
          {/* Column 1: Articles (by date) */}
          {(activeTab === "both" || activeTab === "articles") && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono font-bold text-lg text-white">Articles</h3>
                </div>
                <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-500/8 px-2.5 py-0.5 rounded border border-cyan-500/20">
                  By Date
                </span>
              </div>

              <div className="space-y-3">
                {articles.map((item, i) => (
                  <motion.div
                    key={item.link}
                    {...fadeUp(i * 0.05)}
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="glass glass-hover p-4 sm:p-5 rounded-xl border border-white/6 flex flex-col justify-between gap-3 group hover:border-cyan-500/40 hover:shadow-[0_0_24px_-6px_rgba(0,229,255,0.18)] transition-all duration-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/8 group-hover:border-cyan-500/25 transition-colors">
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-mono text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gray-500" />
                          {item.metric}
                        </span>
                      </div>
                      <h4 className="font-mono font-bold text-sm text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-2">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-400 hover:text-cyan-200 border border-cyan-500/25 hover:border-cyan-400/50 text-xs font-mono font-bold transition-all duration-200 active:scale-95 shadow-[0_0_12px_rgba(0,229,255,0.08)] hover:shadow-[0_0_18px_rgba(0,229,255,0.2)] w-full sm:w-auto self-start"
                    >
                      Read Thread <ExternalLink className="w-3 h-3" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Popular Threads (by views) */}
          {(activeTab === "both" || activeTab === "threads") && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono font-bold text-lg text-white">Popular Threads</h3>
                </div>
                <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-500/8 px-2.5 py-0.5 rounded border border-cyan-500/20">
                  By Views
                </span>
              </div>

              <div className="space-y-3">
                {popularThreads.map((item, i) => (
                  <motion.div
                    key={item.link}
                    {...fadeUp(i * 0.05)}
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="glass glass-hover p-4 sm:p-5 rounded-xl border border-white/6 flex flex-col justify-between gap-3 group hover:border-cyan-500/40 hover:shadow-[0_0_24px_-6px_rgba(0,229,255,0.18)] transition-all duration-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/8 group-hover:border-cyan-500/25 transition-colors">
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1 font-semibold">
                          <Eye className="w-3 h-3 text-cyan-400" />
                          {item.metric}
                        </span>
                      </div>
                      <h4 className="font-mono font-bold text-sm text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-2">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-400 hover:text-cyan-200 border border-cyan-500/25 hover:border-cyan-400/50 text-xs font-mono font-bold transition-all duration-200 active:scale-95 shadow-[0_0_12px_rgba(0,229,255,0.08)] hover:shadow-[0_0_18px_rgba(0,229,255,0.2)] w-full sm:w-auto self-start"
                    >
                      Read Thread <ExternalLink className="w-3 h-3" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
