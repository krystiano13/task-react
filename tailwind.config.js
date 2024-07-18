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
          "primary": "#5bc2b7",
          "secondary": "#eef9f8",
          "neutral": "#48555f",
          "base-100": "#ffffff",
          "accent": "#768498"
        }
      },
      "light",
      "emerald"
    ]
  }
};
