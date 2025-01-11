/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "merri": ["Source Sans 3", "serif"],
      },
      backgroundImage : {
        "aboutBanner": "url('./assets/aboutBanner.jpg')"
      },
    },
  },
  plugins: [require("daisyui")],
};
