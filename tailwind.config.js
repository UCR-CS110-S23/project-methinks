/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        methinks: {
          white: "#FFFFFF",
          gray: "#313840",
          lightgray: "#D0D7E1",
          lightgrayHover: "#d0d7e1d0",
          darkgray: "#77818A",
          darkgrayHover: "#77818ac9",
          green: "#C6E7EC",
          greenHover: "#c6e7ecd0",
          purple: "#BABFF6",
          darkpurple: "#868dded7",
          pink: "#F7DEED",
          lightblack: "#1C1C1C",
          black: "#000000",
          background: "#24292F",
        },
      },

      fontFamily: {
        publicSans: ["var(--font-publicSans)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },

      dropShadow: {
        // custom: "0 2px 10px rgba(255,255, 255, 0.35)",
        glow: [
          "0 0px 8px rgba(255,255, 255, 0.1)",
          "0 0px 20px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
