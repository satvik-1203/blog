module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        body: "5rem auto",
      },
      boxShadow: {
        sideBarOption: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        lightWhite: "#F0F0F0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
