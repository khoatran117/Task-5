import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mint: {
          300: "#ABFFC3",
          900: "#40A05B",
        },
        greyscale: {
          white: "#FFFFFF",
          grey: {
            text: {
              95: "#F2F2F2",
            },
            dark: {
              10: "#141414",
              15: "#262626",
              20: "#363636",
              30: "#575757",
            },
            medium: {
              50: "#808080",
            },
            placeholder: {
              70: "#B3B3B3",
            },
            border: {
              90: "#E5E5E5",
            },
          },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
