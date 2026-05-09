import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        space: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        hero: [
          "80px",
          { lineHeight: "1.0", fontWeight: "700" },
        ],
        display: [
          "48px",
          { lineHeight: "1.1", fontWeight: "700" },
        ],
        heading: [
          "32px",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        subhead: [
          "24px",
          { lineHeight: "1.3", fontWeight: "500" },
        ],
        body: [
          "16px",
          { lineHeight: "1.6", fontWeight: "400" },
        ],
        label: [
          "12px",
          { lineHeight: "1.4", fontWeight: "500" },
        ],
        small: [
          "14px",
          { lineHeight: "1.5", fontWeight: "400" },
        ],
      },
      boxShadow: {
        box: "4px 4px 0px #000000",
        "box-lg": "6px 6px 0px #000000",
        "box-inv": "4px 4px 0px #FFFFFF",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
