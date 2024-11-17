import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oktee: {
          dark: "#121F2C",
          darker: "#121F2D",
          darkest: "#0A121B",
          card: "#1A2B3B",
          primary: "#4D63FF",
          text: {
            DEFAULT: "#F8FAFC",
            muted: "#94A3B8",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
