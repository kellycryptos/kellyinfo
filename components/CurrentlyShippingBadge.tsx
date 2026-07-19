"use client";

import { useState } from "react";
import { Sparkles, Activity, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CurrentlyShippingBadge() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 hidden md:block"
      >
        <div className="relative group">
          {/* Subtle Outer Neon Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 blur-sm transition duration-300 animate-pulse"></div>

          <div className="relative glass-panel rounded-full px-4 py-2 flex items-center gap-3 border border-white/10 bg-cyber-dark/90 backdrop-blur-md text-xs font-mono text-gray-200 shadow-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>

            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>
                Shipping: <strong className="text-white font-semibold">Babel Markets & SynArc</strong>
              </span>
            </div>

            <a
              href="#projects"
              className="text-cyan-400 hover:text-cyan-300 underline font-mono flex items-center gap-1 ml-1"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              View
            </a>

            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-200 ml-1 transition-colors"
              title="Close badge"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
