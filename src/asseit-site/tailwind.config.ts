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
        asseitBlue: "#0284C7", // azul dos botões
        asseitYellow: "#FACC15", // amarelo suave
      },
      backgroundImage: {
        "asseit-gradient":
          "linear-gradient(to right, #06B6D4, #86EFAC, #FDE047)", // gradiente institucional
      },
    },
  },
  plugins: [],
};
export default config;
