"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Send, Rocket, Bot, Layout, ExternalLink, Sparkles, Share2 } from "lucide-react";

export interface ContentItem {
  id: string;
  title: string;
  category: "X Threads & Posts" | "Telegram Cabal" | "Marketing Assets" | "AI Tools & Dev" | "Community Dashboards";
  type: string;
  desc: string;
  highlight: string;
  link: string;
  icon: any;
  accentColor: string;
  tagColor: string;
  date: string;
}

export default function ContentCreated() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "X Threads & Posts",
    "Telegram Cabal",
    "Marketing Assets",
    "AI Tools & Dev",
    "Community Dashboards",
  ];

  const contentList: ContentItem[] = [
    {
      id: "monad-thread",
      title: "Monad Parallel Execution Architecture Masterclass",
      category: "X Threads & Posts",
      type: "VIRAL THREAD",
      desc: "Comprehensive 18-part thread breaking down Monad's optimistic parallel execution engine, MonadBFT consensus, and EVM compatibility benchmarks.",
      highlight: "Monad Architecture Spec",
      link: "https://x.com/kellycryptos",
      icon: Twitter,
      accentColor: "text-sky-400",
      tagColor: "border-sky-500/30 text-sky-300 bg-sky-500/10",
      date: "2026.06",
    },
    {
      id: "based-tg-signals",
      title: "Based TG Private Cabal Weekly Signal Digest",
      category: "Telegram Cabal",
      type: "ALPHA DIGEST",
      desc: "Weekly high-signal research report for private Telegram cabal members covering high-conviction token unlocks, L2 ecosystem flows, and MEV arbitrage routes.",
      highlight: "Private Cabal Exclusive",
      link: "https://t.me/kellycryptos",
      icon: Send,
      accentColor: "text-cyan-400",
      tagColor: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10",
      date: "Weekly",
    },
    {
      id: "winners-dao-launch",
      title: "Winners DAO Global Launch & Viral Campaign",
      category: "Marketing Assets",
      type: "CAMPAIGN DECK",
      desc: "End-to-end launch collateral, tokenomics distribution graphics, and community growth funnel designed for Winners DAO mainnet opening.",
      highlight: "Community Launch Deck",
      link: "https://x.com/kellycryptos",
      icon: Rocket,
      accentColor: "text-blue-400",
      tagColor: "border-blue-500/30 text-blue-300 bg-blue-500/10",
      date: "2026.05",
    },
    {
      id: "govcopilot-demo",
      title: "GovCoPilot AI Agent Walkthrough & Open Spec",
      category: "AI Tools & Dev",
      type: "AI BENCHMARK",
      desc: "Video breakdown demonstrating how GovCoPilot parses multi-page DAO governance proposals and formulates automated voting vector recommendations.",
      highlight: "OKX Hackathon Winner Spec",
      link: "https://github.com/kellycryptos/govcopilot",
      icon: Bot,
      accentColor: "text-sky-400",
      tagColor: "border-sky-500/30 text-sky-300 bg-sky-500/10",
      date: "2026.04",
    },
    {
      id: "jito-mev-tracker",
      title: "Jito Staking & MEV Yield Analytics Dashboard",
      category: "Community Dashboards",
      type: "LIVE ANALYTICS",
      desc: "Real-time interactive dashboard visualizing Jito validator tips, liquid staking APY shifts, and Solana block space fee dynamics.",
      highlight: "Solana MEV Analytics",
      link: "https://x.com/kellycryptos",
      icon: Layout,
      accentColor: "text-cyan-400",
      tagColor: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10",
      date: "2026.03",
    },
    {
      id: "plume-rwa-guide",
      title: "Plume Network RWA Tokenization Breakdown",
      category: "X Threads & Posts",
      type: "ECOSYSTEM THREAD",
      desc: "Detailed ecosystem map showcasing real-world asset yields, institutional vaults, and compliant DeFi primitive integrations on Plume Network.",
      highlight: "Plume Ambassador Guide",
      link: "https://x.com/kellycryptos",
      icon: Twitter,
      accentColor: "text-blue-400",
      tagColor: "border-blue-500/30 text-blue-300 bg-blue-500/10",
      date: "2026.02",
    },
  ];

  const filteredContent =
    activeCategory === "All"
      ? contentList
      : contentList.filter((item) => item.category === activeCategory);

  return (
    <section id="content" className="py-24 relative z-10 border-t border-white/5 bg-cyber-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Share2 className="w-3.5 h-3.5" />
            <span>MEDIA, RESEARCH & TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
            Content I Have <span className="gradient-text-blue">Created</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            High-signal research threads, Telegram cabal digests, Web3 growth collateral, open-source AI tools, and community dashboards.
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
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20"
                  : "glass-panel hover:bg-white/5 text-gray-400 hover:text-gray-200 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -5 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.accentColor}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${item.tagColor}`}>
                    {item.type}
                  </span>
                </div>

                {/* Date + Title */}
                <div>
                  <span className="text-[10px] font-mono text-gray-500">{item.date}</span>
                  <h3 className="text-lg font-bold font-mono text-white group-hover:text-cyan-300 transition-colors leading-snug pt-0.5">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              {/* Footer / Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  {item.highlight}
                </span>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all"
                  title="View Content"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

