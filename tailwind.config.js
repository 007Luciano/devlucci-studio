/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A5F", // deep navy
        secondary: "#06B6D4", // aqua-teal
        accent: "#FBBF24", // warm gold
      },
      boxShadow: {
        glow: "0 0 25px rgba(6,182,212,0.35)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseSlow: "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
