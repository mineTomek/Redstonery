import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#f8d7d7",
          200: "#f1b0b0",
          300: "#ea8888",
          400: "#e36161",
          500: "#dc3939",
          600: "#b02e2e",
          700: "#842222",
          800: "#581717",
          900: "#2c0b0b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
