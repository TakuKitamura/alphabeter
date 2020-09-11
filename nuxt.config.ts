import pkg from './package.json';
import fs from 'fs';

const environment = process.env.NODE_ENV;

let serverSet = {};
if (environment === 'dev') {
  serverSet = {
    port: 3000,
    host: '0.0.0.0'
  };
} else if (environment === 'prod') {
  serverSet = {
    port: 443,
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync(
        './cert_key/key.pem'
      ),
      cert: fs.readFileSync('./cert_key/cert.pem')
    }
  };
} else {
  console.log('enviroment is undefined.');
}

export default {
  mode: 'universal',
  server: serverSet,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Headers of the page
   */
  head: {
    title: 'IBM',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '16x16',
        href: '/favicon_16.ico'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: '/favicon_32.ico'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '48x48',
        href: '/favicon_48.ico'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '64x64',
        href: '/favicon_64.ico'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '128x128',
        href: '/favicon_128.ico'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '256x256',
        href: '/favicon_256.ico'
      }
    ]
  },

  sitemap: {
    // path: '/sitemap.xml',
    // hostname: 'https://takukitamura.com'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  // serverMiddleware: ['redirect-ssl'],

  /*
   ** Global CSS
   */
  // css: ['@/static/bootstrap.min.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa'
    // [
    //   '@nuxtjs/google-analytics',
    //   {
    //     id: 'UA-140815177-1'
    //   }
    // ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    cache: true,
    /*
     ** You can extend webpack config here
     */
    extend(config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
