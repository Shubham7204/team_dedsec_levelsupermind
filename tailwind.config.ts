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
        brand: { main: "#3D6BF5", secondary: "#F5C73D" },
        white: {
          main: "#FFFFFF",
          secondary: "#FBF8F8",
        },
        black: { main: "#000", secondary: "#1A0F0E", tertary: "#170F49" },
        gray: {
          main: "#545454",
          secondary: "#6F6C90",
          tertary: "#787878",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
