/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scalePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        scalePulse: "scalePulse 10s infinite ease-in-out", // Create a smooth continuous scaling animation
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        brandYellow: "#FFB800",
        brandOrange: "#FF6B00",
        brandGrey: "#B3B3B3",
      },
    },
  },
  plugins: [],
};
