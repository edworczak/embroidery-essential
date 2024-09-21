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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ocean: {
          DEFAULT: "#006989",
          100: "#0C7489",
          200: "#119DA4",
        },
        sea: "#007090",
        cloudy: '#EAEBED',
        mist: '#A3BAC3',
      },
      borderRadius: {
        DEFAULT: '50vh',
      },
    },
  },
  plugins: [],
};
export default config;
