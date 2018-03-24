const axios = require('axios');

module.exports = {
  srcDir: 'app/',
  subFolder: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Freesewing.org v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [ 
      'nuxtent',
       '@nuxtjs/vuetify'
  ],
  vuetify: {
      // Vuetify options
    theme: { 
       primary: '#663f95'
    }
  },
  generate: {
    interval: 20
  }
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
