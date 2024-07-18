/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#60c4b9",
          secondary: "#9fdbd3b4",
          neutral: "#48555f",
          "base-100": "#ffffff",
          accent: "#768498",
        },
      },
      "light",
      "emerald",
    ],
  },
};
