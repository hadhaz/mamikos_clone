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
        grayDark: "#484848",
        'gray-1': "#949494",
        grayoverlay: "rgba(0, 0, 0, .5)",
        primary: "#1baa56",
        secondary: "#80cfa0"
      },
      fontFamily: {
        Lato: "lato",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 300ms forwards",
        slideOut: "slideOut 300ms forwards",
      },
      screens: {
        sm: "640px",
        md: "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        heroTop: "url('/bg_hero.png')"
      },
    },
  },
  plugins: [],
};
