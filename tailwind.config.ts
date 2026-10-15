import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        ink: {
          950: "#05090a",
          900: "#081012",
          800: "#0d1719",
          700: "#142123",
          600: "#1c2c2f",
        },
        accent: {
          DEFAULT: "#76abae",
          light: "#a3d0d2",
          dark: "#4f8487",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "0.25", transform: "scale(0.6) rotate(45deg)" },
        },
        pop: {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.85)" },
          "60%": { opacity: "1", transform: "translateY(-2px) scale(1.04)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        "spin-slower": "spin 40s linear infinite reverse",
        twinkle: "twinkle 2.4s ease-in-out infinite",
        pop: "pop 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
