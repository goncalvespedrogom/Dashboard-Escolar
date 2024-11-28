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
      colors:{
        darkBlue: "#075e83",
        lightBlue: "#b7dcfa",
        lightYellow: "#fff0ab",
        darkYellow: "#ffee05",
        lightGreen: "#99ffdd",
        darkGreen: "#008a55",
      }
    },
  },
  plugins: [],
};
export default config;
