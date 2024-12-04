/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        goldenyellow:"rgb(205,133,0)"
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        move: "move 20s linear infinite",
      },
    },
  },
  plugins: [],
};
