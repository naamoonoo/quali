import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "main-background": "#F5F5F5",
      "button-focus-outline": "rgba(66, 0, 255, 1)",
      "button-background": "#232125",
      "button-shadow": "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
    },
  },
  plugins: [],
};
export default config;
