/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["'Inter', sans-serif"]
      }
      ,
      colors: {
        lightPrimary: "#176F6B",
        lightSecondary: "#FFC000",
        lightAcent: "#FFC000",
        lightInfo: "#98A8DD",
        lightSuccess: "#1BBB70",
        lightWarning: "#DF7E07",
        lightError: "#FA5C5C",
        neutral: "#F3F4F6",
        darkPrimary: "#D9F99D",
        darkSecondary: "#FDE68A",
        darkAcent: "#4B5563",
        darkInfo: "#98A8DD",
        darkSuccess: "#1BBB70",
        darkWarning: "#F59E0B",
        darkError: "#FB7185",
      }
    },
  },
  plugins: [],
}
