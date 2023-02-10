/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D3895",
        secondary: "#FF6991",
        thertiary: "#6CC471",
        textcolor: "#666666",
        orange: "#F06B38",
        pink: "#ED497E",
        skyblue: "#46ACC8",
        red: "#F14D50",
        dimWhite: "#ADB5BD",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
