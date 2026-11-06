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
        paleBlue: {
          50: "#f4f9fc",
          100: "#e6f2f9",
          200: "#cde5f3",
          300: "#a4d1eb",
          400: "#6eb6df",
          500: "#479ad1",
          600: "#317db5",
          700: "#286593",
          800: "#25557a",
          900: "#224865",
        },
        paleYellow: {
          50: "#fefdf4",
          100: "#fdfae1",
          200: "#fbf3bd",
          300: "#f7e78b",
          400: "#f1d657",
          500: "#e7c132",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          "Meiryo",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
