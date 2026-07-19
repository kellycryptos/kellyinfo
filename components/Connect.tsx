"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Twitter, Github, Copy, Check, ExternalLink, Sparkles, MessageSquare, ShieldCheck, X } from "lucide-react";
import confetti from "canvas-confetti";

export default function Connect() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);
  const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectScope: "",
  });

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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#00f0ff", "#a855f7", "#00ff9d"],
    });
    setTimeout(() => {
      setMsgSent(false);
      setIsMsgModalOpen(false);
      setFormData({ name: "", contact: "", projectScope: "" });
    }, 2500);
  };

  const contactOptions = [
    {
      name: "Telegram",
      value: "@kellycryptos",
      href: "https://t.me/kellycryptos",
      icon: Send,
      action: copyTelegram,
      copied: copiedTelegram,
      color: "text-cyan-400",
    },
    {
      name: "Email",
      value: "sundersltd1@gmail.com",
      href: "mailto:sundersltd1@gmail.com",
      icon: Mail,
      action: copyEmail,
      copied: copiedEmail,
      color: "text-purple-400",
    },
    {
      name: "X / Twitter",
      value: "@kellycryptos",
      href: "https://x.com/kellycryptos",
      icon: Twitter,
      color: "text-sky-400",
    },
    {
      name: "GitHub",
      value: "kellycryptos",
      href: "https://github.com/kellycryptos",
      icon: Github,
      color: "text-gray-100",
    },
  ];

  return (
    <section id="connect" className="py-24 relative z-10 border-t border-white/5 bg-cyber-bg/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S BUILD ONCHAIN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
            Connect & <span className="gradient-text-cyan">Collaborate</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Direct channels to reach Kelly for Web3 development, consulting, co-founding, or hackathons.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactOptions.map((item) => (
            <div
              key={item.name}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  {item.action && (
                    <button
                      onClick={item.action}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                      title={`Copy ${item.name}`}
                    >
                      {item.copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                <div className="text-xs font-mono text-gray-400 pt-2">{item.name}</div>
                <div className="text-base font-bold font-mono text-white truncate">{item.value}</div>
              </div>

              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-xs font-mono text-gray-300 hover:text-cyan-300 transition-all font-semibold"
              >
                <span>Open {item.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Quick Message Drawer Trigger */}
        <div className="text-center">
          <button
            onClick={() => setIsMsgModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono font-bold text-sm transition-all hover:border-cyan-500/40"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Send Direct Onchain Message</span>
          </button>
        </div>
      </div>

      {/* Message Modal */}
      <AnimatePresence>
        {isMsgModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative w-full max-w-lg glass-panel bg-cyber-dark/95 border border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setIsMsgModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-xl bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              {!msgSent ? (
                <>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                      <Send className="w-5 h-5 text-cyan-400" />
                      Dispatch Direct Message
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">
                      Reaches Kelly directly via encrypted notification signal.
                    </p>
                  </div>

                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">
                        Your Name / Handle
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="@satoshi"
                        className="w-full px-4 py-3 rounded-xl bg-cyber-bg border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">
                        Contact Info (Telegram or Email)
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="telegram / email"
                        className="w-full px-4 py-3 rounded-xl bg-cyber-bg border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">
                        Project Scope / Message
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.projectScope}
                        onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                        placeholder="Let's build an AI agentic prediction dapp..."
                        className="w-full px-4 py-3 rounded-xl bg-cyber-bg border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-mono font-bold text-xs shadow-lg hover:opacity-95 transition-opacity"
                    >
                      Dispatch Signal →
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-mono text-white">Signal Dispatched!</h4>
                  <p className="text-xs text-gray-300 font-mono">
                    Kelly will respond to your message shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
