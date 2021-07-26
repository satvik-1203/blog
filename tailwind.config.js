const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Lobster Two'", ...defaultTheme.fontFamily.serif],
        sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
      },
      gridTemplateColumns: {
        body: "5rem 95vw",
        cards: "270px 270px",
        cardCol: "repeat(auto-fill,minmax(19rem, 1fr))",
        smCardCol: "repeat(auto-fill,minmax(18rem, 1fr))",
      },
      gridAutoColumns: {},
      gridAutoRows: {
        cardRow: "150px",
      },
      boxShadow: {
        sideBarOption: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        lightWhite: "#E1E1E1",
        card: "#C4C4C4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
