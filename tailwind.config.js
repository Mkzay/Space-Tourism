/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow Condensed", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
      colors: {
        color1: "#0B0D17",
        color2: "D0D6F9",
        color3: "#FFFFFF",
        color4: "#FFF",
      },
    },
  },
  plugins: [],
};
