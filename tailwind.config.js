/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
  theme: {
    extend: {
      colors: {
        "p-wine": "#582630",
        "p-rosewood": "#a54657",
        "p-melon": "#e9afa3",
        "p-champagne": "#f9dec9",
        "p-olive": "#7a8450",
      },
      fontFamily: {
        travels: ['"tt-travels-next"'],
        "travels-outline": ['"tt-travels-next-outline"'],
      },
    },
  },
  plugins: [],
};
