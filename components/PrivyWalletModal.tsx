"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Zap, Wallet, Check, Copy, ExternalLink, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface PrivyWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
}

export default function PrivyWalletModal({
  isOpen,
  onClose,
  isConnected,
  setIsConnected,
}: PrivyWalletModalProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const mockAddress = "0x71C82A4b90129e...k3lly";

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00f0ff", "#a855f7", "#ff007a", "#00ff9d"],
    });
  };

  const handleConnect = (providerName: string) => {
    setLoadingProvider(providerName);
    setTimeout(() => {
      setLoadingProvider(null);
      setIsConnected(true);
      triggerConfetti();
    }, 900);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    onClose();
  };

  const copyAddress = () => {
    navigator.clipboard.writeText("0x71C82A4b90129e94328F6230491a0172901k3lly");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-md glass-panel bg-cyber-dark/95 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden"
        >
          {/* Top subtle glow bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isConnected ? (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                    Connect Web3 Session
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-sans">
                      Privy UX
                    </span>
                  </h3>
                  <p className="text-xs text-gray-400">
                    Gasless authentication & multi-chain identity
                  </p>
                </div>
              </div>

              {/* Providers List */}
              <div className="space-y-2.5">
                {[
                  { name: "Passkey / Biometrics", tag: "1-Click Gasless", icon: Zap, color: "text-amber-400" },
                  { name: "Farcaster Identity", tag: "Social Sign-in", icon: Sparkles, color: "text-purple-400" },
                  { name: "MetaMask / Injected", tag: "EVM Wallet", icon: Wallet, color: "text-orange-400" },
                  { name: "Coinbase Smart Account", tag: "Embedded", icon: ShieldCheck, color: "text-blue-400" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleConnect(item.name)}
                    disabled={loadingProvider !== null}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <div className="text-sm font-semibold text-gray-200 group-hover:text-cyan-300">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">{item.tag}</div>
                      </div>
                    </div>
                    {loadingProvider === item.name ? (
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                        Connect →
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Demo Notice */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-[11px] text-gray-400 font-mono">
                  ⚡ Interactive Web3 terminal demo built by @kellycryptos
                </p>
              </div>
            </>
          ) : (
            /* Connected HUD */
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    Session Active
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  Base Mainnet
                </span>
              </div>

              {/* Address card */}
              <div className="p-4 rounded-xl bg-cyber-bg border border-cyan-500/30 text-center space-y-2">
                <div className="text-xs text-gray-400 font-mono">Connected Address</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-base font-bold font-mono text-cyan-300">{mockAddress}</span>
                  <button
                    onClick={copyAddress}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-xs text-purple-400 font-mono pt-1">
                  Gasless Paymaster: <span className="text-emerald-400 font-semibold">Enabled</span>
                </div>
              </div>

              {/* Balance Grid */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[11px] text-gray-400 font-mono">Simulated ETH</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">3.42 ETH</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[11px] text-gray-400 font-mono">DAO Rep Score</div>
                  <div className="text-base font-bold text-cyan-400 font-mono mt-0.5">99.4 / 100</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://basescan.org"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 transition-colors"
                >
                  Explorer <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={handleDisconnect}
                  className="flex-1 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-mono text-rose-400 font-semibold transition-colors"
                >
                  Disconnect
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
