import { Terminal, Github, Twitter, Send, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-cyber-bg relative z-10 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                KELLY
              </div>
              <div className="text-gray-400 text-[11px]">
                Independent Web3 Builder
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-gray-400">
            <a
              href="https://t.me/kellycryptos"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 hover:text-cyan-400 transition-colors"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/kellycryptos"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 hover:text-cyan-400 transition-colors"
              title="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/kellycryptos"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 hover:text-cyan-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:sundersltd1@gmail.com"
              className="p-2 rounded-lg hover:bg-white/5 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Kelly. Built with Next.js 15, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All Systems Operational • Vercel Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
