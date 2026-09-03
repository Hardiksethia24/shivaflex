import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#0B5FA5", ink: "#17212B", mist: "#F5F7F9", accent: "#E56A2E" },
      fontFamily: { sans: ["Inter", "Arial", "sans-serif"], display: ["Arial Narrow", "Arial", "sans-serif"] },
      boxShadow: { card: "0 14px 34px rgba(18, 47, 75, .09)" },
    },
  },
  plugins: [],
};

export default config;
