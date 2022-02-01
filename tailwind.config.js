module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#119283',
        'orange-primary': '#F16500',
        'primary-bg-color': '#FFFDF5'
      },
      backgroundImage: {
        'index-countdown': "url('~/assets/images/index-page/bg-jumbotron.png')",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      screens: {
        'xs': '325px',
        '580': '580px'
      }
    },

  },
  plugins: [],
}
