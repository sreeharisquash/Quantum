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
        customParaColor: "#474D66",
        subTXTColor: "#85878D",
        customBlueColor: "#30047C",
        customLightGray: "#F8F8F8",
        inputBackground: "#F8F8F8",
        activeTabColor: "#FFDAB9",
        activeTabFontColor: "#FF7A00",
        customLightBlue: "#45A8A3",
        customYellow: "#F6BE0F",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
