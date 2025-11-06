import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1f6f8b",
          dark: "#0f4c5c",
          light: "#99e2ff"
        },
        accent: {
          DEFAULT: "#ee5a5a",
          dark: "#c23c3c"
        },
        sand: "#f3ede1",
        ink: "#1c1c1c"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        "4xl": "2.75rem"
      }
    }
  },
  plugins: []
};

export default config;
