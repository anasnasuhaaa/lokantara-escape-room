import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        safe: "max(1rem, env(safe-area-inset-bottom))",
      },
      keyframes: {
        glitch: {
          "0%, 100%": {
            textShadow: "-2px -2px 0 #ff1744, 2px 2px 0 #00ff00",
          },
          "25%": {
            textShadow: "2px -2px 0 #ff1744, -2px 2px 0 #00ff00",
          },
          "50%": {
            textShadow: "-2px 2px 0 #ff1744, 2px -2px 0 #00ff00",
          },
          "75%": {
            textShadow: "2px 2px 0 #ff1744, -2px -2px 0 #00ff00",
          },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "25%": { opacity: "0.85" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0.9" },
        },
        "pulse-red": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(255, 23, 68, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(255, 23, 68, 0.6)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        glitch: "glitch 0.3s infinite",
        flicker: "flicker 4s infinite",
        "pulse-red": "pulse-red 2s infinite",
        "fade-in": "fade-in 0.5s ease-in",
      },
    },
  },
  plugins: [],
};

export default config;
