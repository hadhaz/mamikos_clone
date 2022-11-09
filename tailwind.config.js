/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitedark: "#FAFAFA",
        "whitedark-1": "#f6f6f6",
        gray: "#757575",
        grayoverlay: 'rgba(0, 0, 0, .5  )'
      },
      fontFamily: {
        Lato: "lato",
      },
    },
  },
  plugins: [],
};
