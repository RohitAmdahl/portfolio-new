import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#413C3C",
        secondary: "#2E2A2A",
        textColor: "#CFCFCF",
      },
      image: {
        banner: "url('/app/images/bg_0.png')",
      },
    },
  },
  plugins: [],
};
export default config;
