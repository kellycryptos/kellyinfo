"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#built" },
    { name: "GitHub README", href: "#github-readme" },
    { name: "Content", href: "#content" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b12]/85 backdrop-blur-xl border-b border-white/8 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="font-mono font-black text-lg tracking-wider text-white hover:text-cyan-400 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-0.5 group"
        >
          KELLY<span className="text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass px-4 py-1.5 rounded-full border border-white/8 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs font-mono text-gray-400 hover:text-cyan-300 transition-all duration-200 rounded-full hover:bg-cyan-500/10 hover:shadow-[0_0_12px_rgba(0,229,255,0.15)] active:scale-95"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/8 text-gray-300 hover:text-white hover:border-cyan-500/30 transition-all duration-200 active:scale-95"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden glass border-b border-white/10 backdrop-blur-xl px-5 py-4 space-y-2 mt-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-sm font-mono text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-150 active:scale-98"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
