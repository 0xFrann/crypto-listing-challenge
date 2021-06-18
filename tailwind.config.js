module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        px: "1px",
      },
    },
  },
  variants: {
    extend: {
      padding: ["first", "last"],
    },
  },
  plugins: [],
};
