"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Github, ExternalLink, RefreshCw, Star, GitBranch, Terminal, ShieldCheck, User } from "lucide-react";

interface RepoReadme {
  id: string;
  name: string;
  repoUrl: string;
  branch: string;
  stars: number;
  tagline: string;
  isMainInfo?: boolean;
  content: string;
}

const KellyInfoContent = `# ⚡ KELLY (\`kellyinfo\`)

**Co-Founder · Builder · Trader · Advisor**

> Crypto architect turning vision into onchain reality across DAOs, cabals, agency marketing, and high-performance protocols. Building at the edge of DeFi, AI agents & confidential compute.

---

## 🚀 Overview & Identity

- **Developer Identity**: Kelly ([@kellycryptos](https://github.com/kellycryptos))
- **Core Domain**: Web3 Protocol Architecture, AI Autonomous Agents, DAO Governance, Confidential Compute.
- **Cabals & Community Roles**:
  - 🏆 Co-Founder of **Based TG** (Private Telegram Cabal)
  - 👑 Founder of **Winners DAO**
  - 📈 Co-Founder of **Based Marketing Agency**
  - ⚡ Monad Full-Access Builder
  - 🌊 Plume Network Ambassador
  - 🛡️ Jito Cabal Member
  - 🪐 Jupiter Creator
  - 🔬 Active Contributor to **OG Lab** & **Arcium**

---

## 🛠️ Key Shipped Protocols

### 1. [SynArc DAO](https://github.com/kellycryptos/synarc-dao)
Governance and treasury infrastructure for DAOs, creators, and AI agents on Arc Testnet powered by \`@synarc/agent-sdk\` and Circle CCTP.

### 2. [GovCoPilot](https://github.com/kellycryptos/govcopilot)
AI-powered DAO Governance Co-Pilot for proposal analysis, voting strategy, and autonomous multi-chain execution.

### 3. [NFTHashFlash](https://github.com/kellycryptos/nft-hash-flash)
High-speed multi-chain NFT minting Telegram bot built with Node.js, ethers.js, and Pinata IPFS.

### 4. [Gov-Encrypt](https://github.com/kellycryptos/gov-encrypt)
Confidential governance protocol on Solana using Arcium MXE for private voting and encrypted delegation.

---

## ⚙️ Tech Stack & Production Arsenal

- **Languages**: TypeScript, Solidity, Rust, Python, JavaScript
- **Frontend & UI**: Next.js 15, React 19, Tailwind CSS, Framer Motion
- **Web3 Engine**: Viem, Ethers.js, Wagmi, Privy Auth, Circle CCTP, ERC-4337, Solana Web3.js, Anchor Rust
- **AI & Autonomous Agents**: Groq Llama-3, \`@synarc/agent-sdk\`, x402 Nanopayments
- **Infrastructure**: Node.js, Vercel, Pinata IPFS, Base, Solana, Arc Ecosystem, Monad, OKX X Layer

---

## 📬 Connect & Reach Out

- **GitHub**: [github.com/kellycryptos](https://github.com/kellycryptos)
- **X / Twitter**: [x.com/kellycryptos](https://x.com/kellycryptos)
- **Telegram**: [t.me/kellycryptos](https://t.me/kellycryptos)`;

const repos: RepoReadme[] = [
  {
    id: "kellyinfo",
    name: "kellycryptos/kellyinfo",
    repoUrl: "https://github.com/kellycryptos/kellyinfo",
    branch: "main",
    stars: 12,
    tagline: "Official Developer Profile & Portfolio README",
    isMainInfo: true,
    content: KellyInfoContent,
  },
  {
    id: "synarc",
    name: "kellycryptos/SynArc",
    repoUrl: "https://github.com/kellycryptos/SynArc",
    branch: "main",
    stars: 48,
    tagline: "Funding & Treasury Infrastructure for DAOs & AI Agents",
    content: `# SynArc

**SynArc is secure funding and coordination infrastructure for creators, independent teams, and digital organizations.**

- **Milestone Escrows**: Capital released progressively upon community vote approval.
- **USDC Nanopayments**: Direct micro-tipping enabled by Arc's low-fee transactions.
- **Autonomous Treasury Agent**: Automated rebalancing and risk monitoring via AI agents.
- **Developer SDK**: Easily integrated via \`@synarc/agent-sdk\`.`,
  },
  {
    id: "synarc-agent-sdk",
    name: "kellycryptos/synarc-agent-sdk",
    repoUrl: "https://github.com/kellycryptos/synarc-agent-sdk",
    branch: "main",
    stars: 24,
    tagline: "TypeScript SDK for Autonomous AI Agents on Arc",
    content: `# SynArc Agent SDK (\`@synarc/agent-sdk\`)

**Official client library for integrating autonomous agents into SynArc governance and treasury workflows.**

\`\`\`bash
npm install @synarc/agent-sdk
\`\`\`

- ERC-8004 Identity Registration
- On-chain proposal voting
- Cross-chain CCTP rebalancing execution`,
  },
  {
    id: "govcopilot",
    name: "kellycryptos/govcopilot",
    repoUrl: "https://github.com/kellycryptos/govcopilot",
    branch: "main",
    stars: 19,
    tagline: "AI Co-Pilot for DAO Proposal Analysis & Voting",
    content: `# GovCoPilot

**AI-powered DAO Governance Co-Pilot for proposal analysis, voting strategy, and autonomous execution.**

- Semantic search and proposal breakdown using Groq LLM
- Real-time voting strategy alignment vectors
- Multi-chain execution pipeline`,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function GithubReadme() {
  const [activeRepo, setActiveRepo] = useState<RepoReadme>(repos[0]);
  const [liveContent, setLiveContent] = useState<string>(repos[0].content);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    if (activeRepo.id === "kellyinfo") {
      setLiveContent(KellyInfoContent);
      setLoading(false);
      return;
    }

    const rawUrl = `https://raw.githubusercontent.com/kellycryptos/${activeRepo.id === "synarc" ? "SynArc" : activeRepo.id}/main/README.md`;

    fetch(rawUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch raw README");
        return res.text();
      })
      .then((text) => {
        if (isMounted && text) {
          setLiveContent(text);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLiveContent(activeRepo.content);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeRepo]);

  // Simple, clean Markdown renderer helper
  const renderMarkdown = (md: string) => {
    const lines = md.split("\n");
    let inCodeBlock = false;
    let codeContent: string[] = [];

    const elements: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={`code-${index}`}
              className="my-3 p-4 rounded-xl bg-[#030712] border border-cyan-500/20 text-cyan-300 font-mono text-xs overflow-x-auto shadow-inner"
            >
              <code>{codeContent.join("\n")}</code>
            </pre>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      const trimmed = line.trim();
      if (!trimmed) {
        elements.push(<div key={`space-${index}`} className="h-2" />);
        return;
      }

      if (trimmed === "---") {
        elements.push(
          <hr key={`hr-${index}`} className="my-4 border-t border-white/10" />
        );
        return;
      }

      if (trimmed.startsWith("# ")) {
        elements.push(
          <h1
            key={`h1-${index}`}
            className="font-mono font-black text-2xl sm:text-3xl text-white mt-4 mb-2 tracking-tight flex items-center gap-2"
          >
            {trimmed.replace("# ", "")}
          </h1>
        );
        return;
      }

      if (trimmed.startsWith("## ")) {
        elements.push(
          <h2
            key={`h2-${index}`}
            className="font-mono font-bold text-lg sm:text-xl text-cyan-300 mt-5 mb-2.5 border-b border-white/10 pb-1.5 flex items-center gap-2"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
        return;
      }

      if (trimmed.startsWith("### ")) {
        elements.push(
          <h3
            key={`h3-${index}`}
            className="font-mono font-semibold text-base text-white mt-4 mb-2"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
        return;
      }

      if (trimmed.startsWith("> ")) {
        elements.push(
          <blockquote
            key={`quote-${index}`}
            className="my-3 p-3.5 rounded-xl bg-cyan-500/8 border-l-4 border-cyan-400 text-gray-200 text-xs sm:text-sm font-sans italic leading-relaxed"
          >
            {trimmed.replace("> ", "")}
          </blockquote>
        );
        return;
      }

      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const itemText = trimmed.replace(/^[-*]\s+/, "");
        elements.push(
          <li
            key={`li-${index}`}
            className="ml-4 text-xs sm:text-sm text-gray-300 list-disc my-1 leading-relaxed"
          >
            {formatInlineMarkdown(itemText)}
          </li>
        );
        return;
      }

      elements.push(
        <p key={`p-${index}`} className="text-xs sm:text-sm text-gray-300 leading-relaxed my-1.5">
          {formatInlineMarkdown(trimmed)}
        </p>
      );
    });

    return elements;
  };

  // Helper to format inline bold, links, and code
  const formatInlineMarkdown = (text: string) => {
    // Simple inline parser for **bold**, [link](url), and `code`
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    while (remaining.length > 0) {
      // Bold check **text**
      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
      // Link check [text](url)
      const linkMatch = remaining.match(/\[(.*?)\]\((.*?)\)/);
      // Inline code check `code`
      const codeMatch = remaining.match(/`(.*?)`/);

      const matches = [
        boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
        linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
        codeMatch ? { type: "code", index: codeMatch.index!, match: codeMatch } : null,
      ].filter(Boolean).sort((a, b) => a!.index - b!.index);

      if (matches.length === 0) {
        parts.push(remaining);
        break;
      }

      const first = matches[0]!;

      if (first.index > 0) {
        parts.push(remaining.substring(0, first.index));
      }

      if (first.type === "bold") {
        parts.push(
          <strong key={`b-${keyIdx++}`} className="font-semibold text-white">
            {first.match[1]}
          </strong>
        );
        remaining = remaining.substring(first.index + first.match[0].length);
      } else if (first.type === "link") {
        parts.push(
          <a
            key={`a-${keyIdx++}`}
            href={first.match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
          >
            {first.match[1]}
            <ExternalLink className="w-3 h-3 inline opacity-70" />
          </a>
        );
        remaining = remaining.substring(first.index + first.match[0].length);
      } else if (first.type === "code") {
        parts.push(
          <code
            key={`c-${keyIdx++}`}
            className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-mono text-[11px]"
          >
            {first.match[1]}
          </code>
        );
        remaining = remaining.substring(first.index + first.match[0].length);
      }
    }

    return parts;
  };

  return (
    <section id="github-readme" className="py-20 section-divider relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="mb-10 max-w-xl">
          <span className="badge mb-4 hover:border-cyan-400/50 hover:bg-cyan-500/12 transition-all duration-300 flex items-center gap-1.5 w-fit">
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            GitHub README
          </span>
          <h2 className="font-mono font-black text-4xl sm:text-5xl text-white leading-tight mb-3">
            Latest from <span className="gradient-text">GitHub</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
            Live documentation and overview straight from my repository README.
          </p>
        </motion.div>

        {/* Repo Switcher Tabs */}
        <motion.div {...fadeUp(0.08)} className="flex flex-wrap gap-2.5 mb-6">
          {repos.map((repo) => {
            const isActive = activeRepo.id === repo.id;
            return (
              <button
                key={repo.id}
                onClick={() => setActiveRepo(repo)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 active:scale-95 ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,229,255,0.18)]"
                    : "glass border border-white/8 text-gray-400 hover:text-gray-200 hover:border-white/20"
                }`}
              >
                {repo.isMainInfo ? (
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                )}
                <span>{repo.name}</span>
                {repo.isMainInfo && (
                  <span className="px-1.5 py-0.5 text-[9px] rounded bg-cyan-400/20 text-cyan-300 font-mono font-semibold">
                    MAIN INFO
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* README Display Card */}
        <motion.div
          {...fadeUp(0.16)}
          className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative"
        >
          {/* Top Window Bar */}
          <div className="bg-[#080d1a]/90 border-b border-white/8 px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs font-bold text-gray-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                {activeRepo.name} / README.md
              </span>
            </div>

            {/* Badges & Actions */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/8">
                <GitBranch className="w-3 h-3 text-cyan-400" />
                {activeRepo.branch}
              </span>
              <a
                href={activeRepo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs transition-all active:scale-95"
              >
                <Github className="w-3.5 h-3.5" />
                View on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Subheader info strip */}
          <div className="bg-white/[0.02] border-b border-white/5 px-6 py-2.5 flex items-center justify-between text-xs font-mono text-gray-400">
            <span className="truncate">{activeRepo.tagline}</span>
            <span className="flex items-center gap-1.5 text-cyan-400/90 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Repo
            </span>
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-8 max-h-[600px] overflow-y-auto custom-scrollbar bg-[#060a12]/60">
            {loading ? (
              <div className="py-16 flex flex-col items-center justify-center gap-3 text-gray-400">
                <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin" />
                <span className="font-mono text-xs">Fetching README from GitHub...</span>
              </div>
            ) : (
              <div className="markdown-body space-y-2">
                {renderMarkdown(liveContent)}
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
