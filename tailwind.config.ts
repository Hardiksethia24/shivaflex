import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#084091", secondary: "#5681C4", ink: "#17212B", mist: "#F5F7F9", accent: "#E01519" },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: { card: "0 14px 34px rgba(18, 47, 75, .09)" },
    },
  },
  plugins: [],
};

export default config;

