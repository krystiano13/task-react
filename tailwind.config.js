/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#60c4b9",
          secondary: "#eef9f8",
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
