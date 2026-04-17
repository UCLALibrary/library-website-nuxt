// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  // when using local pnpm link with component library uncomment this line
  vite: {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
    },
    plugins: [svgLoader()],
    // ADDED FOLLOWING LINE TO RESOLVE CROSS-FETCH ERROR
    // Uncaught SyntaxError: The requested module '/_nuxt/node_modules/.pnpm/cross-fetch@3.1.8/node_modules/cross-fetch/dist/browser-ponyfill.js?v=4dc3293b'
    // does not provide an export named 'default' (at index.js?v=4dc3293b:6:8)
    // localhost/: 1
    resolve: {
      alias: {
        'cross-fetch': 'cross-fetch/dist/browser-ponyfill.js',
        '~ucla-library-design-tokens': 'ucla-library-design-tokens',
      },
    },
    ssr: {
      noExternal: ['vuetify'], // Include Vuetify in the server-side bundle
    },
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                        @import "ucla-library-design-tokens/scss/fonts.scss";
                        @import "ucla-library-design-tokens/scss/_tokens-ftva";
                        @import "ucla-library-design-tokens/scss/app.scss";
                    `,
        },
      },
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      concurrency: 250,
      interval: 100,
      routes: ['/', '/about/news/', '/applicants/', '/applicants/resources/', '/projects/'],
    },
    hooks: {
      'prerender:generate'(route) {
        // TODO: fix issue with recursive fetches with query string, e.g.
        // `/enterprise/agencies?region=europe&amp;amp;amp;service=ecommerce&amp;amp;service=ecommerce&amp;service=content-marketing`
        /* if (route.route?.includes('&amp;')) {
          route.skip = true
        } */
        console.log('prerender:generate', route)
      },
      async 'prerender:routes'(routes) {
        const allRoutes = []

        const response = await fetch(import.meta.env.CRAFT_ENDPOINT, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ query: 'query AllPages { entries { uri, sectionHandle } }' })
        })

        const postPages = await response.json()
        // console.log('All pages', JSON.stringify(postPages.data.entries))
        if (postPages && postPages.data && postPages.data.entries) {
          const postWithoutPayloadRoutes = postPages.data.entries.filter(item => item.sectionHandle.includes('meap') && item.uri !== 'meap').map(entry => '/' + entry.uri.replace(/^meap\//, ''))
          allRoutes.push(...postWithoutPayloadRoutes)
        }

        if (allRoutes.length) {
          for (const route of allRoutes) {
            routes.add(route)
          }
        }
        console.log('prerender:routes ctx.routes', routes)
      }
    },

  },

  runtimeConfig: {
    // Private keys are only available on the server
    esWriteKey: import.meta.env.ES_WRITE_KEY,

    // Public keys that are exposed to the client
    public: {
      craftGraphqlURL: import.meta.env.CRAFT_ENDPOINT || '',
      esReadKey: import.meta.env.ES_READ_KEY || '',
      esAlias: import.meta.env.ES_ALIAS || '',
      esIndexPrefix: import.meta.env.ES_INDEX_PREFIX || '',
      esTempIndex: import.meta.env.ES_INDEX_PREFIX + '-' + new Date().toISOString().toLowerCase().replaceAll(':', '-'),
      esURL: import.meta.env.ES_URL || '',
    },
  },

  scripts: {
    registry: {
      googleTagManager: {
        id: 'GTM-T2SXV2'
      }
    }
  },

  /*
     ** Required charset and viewport meta tags
     */
  app: {
    /*
    ** Page transition
    */
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
    head: {
      titleTemplate: (titleChunk: string) => {
        // If undefined or blank then we don't need the pipe and space
        return titleChunk
          ? `${titleChunk} | Modern Endangered Archives Program`
          : 'Modern Endangered Archives Program'
      },
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
      link: [{ rel: 'icon', type: 'image/svg', href: '/icon-ucla-favicon.svg' }],
    },
  },

  /*
     ** Global CSS
     */
  css: [

    'ucla-library-design-tokens/scss/app-global.scss',
    '~/assets/styles/global.scss',
  ],

  features: {
    inlineStyles: false
  },

  typescript: {
    strict: false
  },

  modules: [
    '@nuxt/eslint',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@nuxtjs/sitemap',
    '@ucla-library/component-library-nuxt-module',
    '@nuxt/scripts',
    'nuxt-graphql-request'
  ],
  graphql: {
    clients: {
      default: { endpoint: import.meta.env.CRAFT_ENDPOINT || '' }
    }
  },

  build: {
    transpile: ['nuxt-graphql-request', 'vuetify'],
  },

  eslint: {
    // options here
  },

  site: {
    url: import.meta.env.SITEMAP_HOST || 'https://meap.library.ucla.edu',
  },

  imports: {
    dirs: ['stores'],
    transform: {
      // you could also add the path of your built library to prevent this happening
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/\bsfui\b/]
    }
  },


  experimental: {
    sharedPrerenderData: true, // Improves nuxt build performance
    buildCache: true, // Improves nuxt build performance
  },
  compatibilityDate: '2026-02-12'

})
