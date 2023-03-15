/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        Inter: ["'Inter', sans-serif"]
      },
      colors: {
        "primary": "#176F6B",
        "secondary": "#FFC000",
        "accent": "#FFC000",
        "neutral": "#F3F4F6",
        "base-100": "#",
        "info": "#98A8DD",
        "success": "#1BBB70",
        "warning": "#DF7E07",
        "error": "#FA5C5C",
        "gray": "#4F4F4F",
      }
    },
  },
  plugins: [],
}
