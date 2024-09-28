/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        brandYellow: "#FFB800",
        brandOrange: "#FF6B00",
      },
    },
  },
  plugins: [],
};
