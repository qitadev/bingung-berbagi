export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/bingung-berbagi/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bingung Berbagi - Kita Bingung Kita Berbagi',
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '#KitaBingung KitaBerbagi merupakan gerakan sosial sekaligus wadah donasi untuk memberi serta berbagi kepada kaum duafa khususnya orang jalanan. Dana yang terkumpul berasal dari orang-orang baik yang secara sukarela membantu tim #KitaBingung KitaBerbagi untuk mewujudkan tujuan mulianya.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/bingung-berbagi/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/bingung-berbagi/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/bingung-berbagi/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/bingung-berbagi/favicon-16x16.png' },
      { rel: 'manifest', href: '/bingung-berbagi/site.webmanifest' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/google-sheets-mutator' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/moment',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
