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
        color2: "#D0D6F9",
        color3: "#FFFFFF",
        color4: "#FFF",
      },
      keyframes: {
        spinning: {
          "0%": { transform: "rotate(0deg) rotateZ(0deg)" },
          "100%": { transform: "rotate(360deg) rotateZ(360deg)" },
        },
      },
      animation: {
        spinning: "spinning 10s linear infinite",
      },
    },
  },
  plugins: [],
};
