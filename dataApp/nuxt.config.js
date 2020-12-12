export default {
  ssr: false,
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Magic The Gathering by Zach',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  router: {
    base: '/n220fall2020/dataApp/dist/',
  },

  plugins: [
    {
      src: '@plugins/vue-scrollmagic.js',
      ssr: false,
    },
    {
      src: '@plugins/vue-splash.js',
      ssr: false,
    },
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend: function (config) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      }
    },
  },
}
