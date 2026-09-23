import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FAFAF8",
        line: "#E5E3DE",
        muted: "#6B6862",
        accent: "#C4501E",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: { site: "1440px" },
    },
  },
  plugins: [],
};
export default config;
