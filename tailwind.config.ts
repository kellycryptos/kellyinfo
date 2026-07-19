import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        foreground: "#f3f4f6",
        cyber: {
          bg: "#08090d",
          surface: "#0d0f17",
          card: "#121624",
          border: "#1e2638",
          cyan: "#00f0ff",
          blue: "#38bdf8",
          deepBlue: "#0284c7",
          sky: "#7dd3fc",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 3s infinite ease-in-out",
        "float": "float 4s infinite ease-in-out",
        "grid-scan": "gridScan 10s linear infinite",
        "border-beam": "borderBeam 6s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        gridScan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100px" },
        },
        borderBeam: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
