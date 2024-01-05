/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1D232A",
          red: "#D72323",
          text: "#F5F7F8",
          black: "#000000",
        },
        light: {
          primary: "#AAD7D9",
          accent: "#FBF9F1",
          background: "#E5E1DA",
          text: "#92C7CF",
        },
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
};
