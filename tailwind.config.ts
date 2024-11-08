module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
        pulse: "pulse 1.5s infinite",
        textGradient: "textGradient 5s infinite", // Add the infinite color change animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        pulse: {
          "0%, 100%": { opacity: 0.7 },
          "50%": { opacity: 1 },
        },
        textGradient: {
          "0%": { color: "#FF5733" },
          "50%": { color: "#FFC300" },
          "100%": { color: "#DAF7A6" },
        },
      },
    },
  },
  plugins: [],
};