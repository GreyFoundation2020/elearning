/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },

    extend: {
      colors: {
        blue: "#666CA3",
        "blue-dark": "#13183F",
        "gray-dark": "#83869A",
        "gray-light": "#FFA7C3",
        pink: "#F74780",
        "pink-light": "#FFA7C3",
      },
      screens: {
        tablet: "768px",
        desktop: "1440px",
      },

      boxShadow: {
        default: "0 25px 50px rgba(6, 22, 141, .05)",
      },
    },
  },
  plugins: [],
};
