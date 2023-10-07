// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // when using local pnpm link with component library uncomment this line
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
                        @import "ucla-library-design-tokens/scss/app.scss";
                    `,
        },
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      ignore: ['/components'],
    },
  },

  runtimeConfig: {
    // Private keys are only available on the server
    esWriteKey: process.env.ES_WRITE_KEY,

    // Public keys that are exposed to the client
    public: {
      craftGraphqlURL: process.env.CRAFT_ENDPOINT || '',
      s3Bucket: process.env.S3_BUCKET,
      esReadKey: process.env.ES_READ_KEY || '',
      esIndex: process.env.ES_INDEX || '',
      libguidesEsIndex: process.env.LIBGUIDES_ES_INDEX || '',
      esIndexPrefix: process.env.ES_INDEX_PREFIX || '',
      esTempIndex: '',
      esURL: process.env.ES_URL || '',
      libcalProxy:
        process.env.LIBCAL_ENDPOINT
        || 'https://proxy.calendar.library.ucla.edu/',
    },
  },
  /*
     ** Required charset and viewport meta tags
     */
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, minimum-scale=1.0',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  /*
     ** Global CSS
     */
  css: [
    'ucla-library-design-tokens/scss/fonts.scss',
    'ucla-library-design-tokens/scss/app-global.scss',
    '~/assets/styles/global.scss',

    // use the following line when using pnpm link --global ucla-library-website-components-vue
    'ucla-library-website-components/dist/style.css',
  ],

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@nuxtjs/apollo',
  ],

  imports: {
    dirs: ['stores', 'gql'],
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.CRAFT_ENDPOINT || '',
      },
    },
  },
})
