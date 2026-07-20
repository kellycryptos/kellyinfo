"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Send, Twitter, Github,
  Copy, Check, ExternalLink, MessageSquare,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Connect() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sundersltd1@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyTelegram = () => {
    navigator.clipboard.writeText("@kellycryptos");
    setCopiedTelegram(true);
    setTimeout(() => setCopiedTelegram(false), 2000);
  };

  const contacts = [
    {
      name: "Telegram",
      value: "@kellycryptos",
      href: "https://t.me/kellycryptos",
      icon: Send,
      color: "text-cyan-400",
      borderActive: true,
      onCopy: copyTelegram,
      copied: copiedTelegram,
    },
    {
      name: "Email",
      value: "sundersltd1@gmail.com",
      href: "mailto:sundersltd1@gmail.com",
      icon: Mail,
      color: "text-blue-400",
      borderActive: false,
      onCopy: copyEmail,
      copied: copiedEmail,
    },
    {
      name: "X / Twitter",
      value: "@kellycryptos",
      href: "https://x.com/kellycryptos",
      icon: Twitter,
      color: "text-sky-400",
      borderActive: false,
    },
    {
      name: "GitHub",
      value: "kellycryptos",
      href: "https://github.com/kellycryptos",
      icon: Github,
      color: "text-gray-300",
      borderActive: false,
    },
  ];

  return (
    <section id="connect" className="py-20 section-divider relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-12 max-w-xl">
          <span className="badge mb-4 hover:border-cyan-400/50 hover:bg-cyan-500/12 transition-all duration-300">Let&apos;s Build Onchain</span>
          <h2 className="font-mono font-black text-4xl sm:text-5xl text-white leading-tight mb-3">
            Connect &amp; <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Direct channels to reach Kelly for Web3 development, consulting, co-founding, or advisory.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {contacts.map((c, i) => (
            <motion.div
              key={c.name}
              {...fadeUp(i * 0.06)}
              whileHover={{ y: -3, scale: 1.015 }}
              transition={{ duration: 0.25 }}
              className={`glass glass-hover rounded-2xl p-5 border flex flex-col gap-4 group transition-all duration-300 ${
                c.borderActive
                  ? "border-cyan-500/30 shadow-[0_0_24px_-6px_rgba(0,229,255,0.2)] hover:border-cyan-400/50"
                  : "border-white/6 hover:border-cyan-500/30 hover:shadow-[0_0_20px_-6px_rgba(0,229,255,0.15)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/8 ${c.color} group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300`}>
                  <c.icon className="w-4 h-4" />
                </div>
                {c.onCopy && (
                  <button
                    onClick={c.onCopy}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/12 text-gray-500 hover:text-white transition-all duration-200 active:scale-90"
                    title={`Copy ${c.name}`}
                  >
                    {c.copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>

              <div>
                <p className="text-[10px] font-mono text-gray-500 mb-0.5 flex items-center gap-1.5">
                  {c.name}
                  {c.borderActive && (
                    <span className="px-1.5 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-[9px] font-bold shadow-[0_0_8px_rgba(0,229,255,0.3)]">
                      PRIMARY
                    </span>
                  )}
                </p>
                <p className="text-sm font-mono font-bold text-white group-hover:text-cyan-300 transition-colors break-all">{c.value}</p>
              </div>

              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 active:scale-95 ${
                  c.borderActive
                    ? "bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-500/35 text-cyan-300 shadow-[0_0_12px_rgba(0,229,255,0.15)]"
                    : "bg-white/4 hover:bg-cyan-500/10 border border-white/8 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-300"
                }`}
              >
                Open {c.name}
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Message CTA */}
        <motion.div {...fadeUp(0.28)} className="flex justify-center">
          <a
            href="mailto:sundersltd1@gmail.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass border border-white/10 hover:border-cyan-500/40 text-white font-mono font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(0,229,255,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            Send a Direct Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
