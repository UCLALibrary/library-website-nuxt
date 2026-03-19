// https://nuxt.com/docs/api/configuration/nuxt-config

const legacyPrerenderIgnores = [
  '/about/news/international-education-week-students-in-the-hearst-newsreels',
  '/about/news/l-a-labor-leaders-link-the-past-and-future-during-visit-to-ucla-campus',
  '/about/news/applications-open-for-2026-ucla-library-special-collections-research-fellowships',
  '/about/news/pbs-socal-lost-la-how-this-contraption-at-ucla-sent-the-first-dm',
  '/about/news/restoring-collective-memory-through-television-reparative-description-in-the-reflecciones-collection',
  '/about/news/ucla-library-acquires-papers-of-natural-foods-pioneer-and-educator-sandy-gooch',
  '/about/news/ucla-library-funds-34-international-cultural-preservation-projects',
  '/about/news/applications-open-for-the-2026-ucla-film-television-artist-in-residence-program',
  '/about/news/tcm-presents-60-years-of-the-ucla-film-television-archive',
  '/about/news/ucla-film-television-archive-presents-fall-2025-lineup',
  '/about/news/ucla-librarians-advance-the-teaching-research-and-patient-care-needs-of-the-ucla-health-enterprise',
  '/about/news/in-the-company-of-hollywood-and-lgbtq-trailblazer-dorothy-arzner-a-personal-encounter',
  '/about/news/paromita-biswas-named-uclas-2025-librarian-of-the-year',
  '/about/news/ucla-film-television-archive-welcomes-ariel-west-as-2025-artist-in-residence',
  '/about/news/ucla-film-television-archives-summer-screenings-celebrate-cinematic-art-and-community',
  '/about/news/world-war-ii-ends-in-europe-allied-victory-in-the-hearst-newsreels',
  '/about/news/reflecciones-chicana-o-x-views-on-1970s-television-now-online',
  '/about/news/2025-ucla-celebration-of-iranian-cinema-presents-thought-provoking-stories',
  '/about/news/ucla-film-television-archive-spring-2025-presents-vibrant-free-cinema',
  '/about/news/past-present-and-future-collide-in-ucla-labor-studies-sci-fi-class',
  '/about/news/the-past-is-present',
  '/about/news/history-in-your-hands',
  '/about/news/25-films-named-to-the-library-of-congress-national-film-registry-for-preservation',
  '/about/news/2023-2024-ucla-library-impact-report-community-of-care',
  '/about/news/ucla-film-television-archive-welcomes-2025-with-free-winter-cinema',
  '/about/news/indigenous-knowledge-histories-and-futures-are-woven-throughout-pst-art-projects-at-ucla-and-beyond',
  '/about/news/applications-open-for-2025-ucla-film-television-artist-in-residence-program',
  '/about/news/ucla-film-television-archive-presents-fall-2024-lineup-of-cinematic-and-tv-treasures',
  '/about/news/preserving-a-different-kind-of-dental-record',
  '/about/news/ucla-library-announces-winning-composition-for-resonate-2024',
  '/about/news/ucla-library-funds-26-international-cultural-preservation-projects',
  '/about/news/robert-gore-named-uclas-2024-librarian-of-the-year',
  '/about/news/bruins-going-green-library-edition',
  '/about/news/a-legacy-for-the-library',
  '/about/news/ucla-plays-a-pivotal-role-in-getty-pst-art-the-nations-largest-art-event',
  '/about/news/ucla-library-announces-new-senior-fellows-cohort',
  '/about/news/celebrating-40-years-of-empowerment-a-womens-history-month-collaboration',
  '/about/news/ucla-festival-of-preservation-celebrates-moving-image-history-on-april-5-7',
  '/about/news/free-winter-cinema-welcome-2024-with-screenings-from-ucla-film-television-archive',
  '/about/news/materials-from-legendary-hollywood-production-house-mirisch-corp-now-at-ucla-library',
  '/about/news/ucla-film-television-archive-announces-2024-artist-in-residence-program',
  '/about/news/2022-2023-library-impact-report-focus-on-preservation-conservation',
  '/about/news/ginny-steel-elected-chair-of-the-oclc-board-of-trustees',
  '/about/news/ucla-library-receives-4-2-million-political-cartoon-collection-spanning-centuries',
  '/about/news/ucla-library-funds-30-international-cultural-preservation-projects',
  '/about/news/carlo-medina-to-lead-uc-wide-southern-regional-library-facility-ucla-library-unified-access-services',
  '/about/news/job-announcement-university-librarian',
  '/about/news/ucla-library-awards-grants-to-10-school-of-music-projects',
  '/about/news/3-short-films-pull-back-the-curtain-on-ucla-film-television-archives-work',
  '/about/news/courtney-hoffner-and-sangeeta-pal-named-2023-ucla-librarians-of-the-year',
  '/about/news/ucla-library-preserves-the-legacy-of-jazz-pianist-composer-horace-tapscott',
  '/about/news/injustice-remains-48-year-old-womens-prison-documentary-shows-how-little-has-changed',
  '/about/news/five-decades-on-miki-goral-helps-keep-researchers-moving-forward',
  '/about/news/arts-library-reopens-with-a-fresh-new-look',
  '/about/news/revamped-ucla-library-website-offers-more-user-friendly-experience',
  '/about/news/histories-of-black-owned-businesses-in-los-angeles-preserved-by-ucla-library',
  '/about/news/2024-2025-ucla-library-impact-report-intersections-of-knowledge',
  '/about/news/a-los-angeles-communitys-century-of-memory-preserved',
  '/about/news/faculty-library-partnership-boosts-student-achievement',
  '/about/news/ucla-library-enriches-creative-activity-across-los-angeles-through-region-wide-getty-initiative',
  '/about/news/awards-empower-ucla-members-to-expand-universitys-global-reach',
  '/about/policies/appropriate-use-of-licensed-electronic-resources',
]

export default defineNuxtConfig({
  // debug: true,
  sourcemap: true,

  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },

  // when using local pnpm link with component library uncomment this line
  vite: {
    build: {
      minify: false
    },
    // ADDED FOLLOWING LINE TO RESOLVE CROSS-FETCH ERROR
    // Uncaught SyntaxError: The requested module '/_nuxt/node_modules/.pnpm/cross-fetch@3.1.8/node_modules/cross-fetch/dist/browser-ponyfill.js?v=4dc3293b'
    // does not provide an export named 'default' (at index.js?v=4dc3293b:6:8)
    // localhost/: 1
    resolve: {
      alias: {
        'cross-fetch': 'cross-fetch/dist/browser-ponyfill.js',
        '~ucla-library-design-tokens': 'ucla-library-design-tokens',
        // 'vue-router': 'vue-router'
      },
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
                        @import "ucla-library-design-tokens/scss/app.scss";
                    `,
          api: 'modern-compiler', // or 'modern'
        },
      },
    }
  },

  nitro: {
    minify: false,
    prerender: {
      ignore: [
        ...legacyPrerenderIgnores,
        ...legacyPrerenderIgnores.map((path) => `${path}/`),
      ],
      crawlLinks: false,
      failOnError: false,
      concurrency: 50,
      interval: 1000,
      routes: ['/', '/about/jobs/staff-academic-jobs/', '/about/news/',
        '/about/polices/', '/about/programs/',
        '/about/staff/', '/about/student-opportunities/', '/about/status-updates/',
        '/collections/', '/collections/access/', '/collections/explore/',
        '/give/endowments/', '/help/services-resources/', '/help/services-resources/ask-us/', '/help/tutorials/',
        '/impact/', '/search-site/', '/visit/events-exhibition/', '/visit/location/'
      ],
    },
    hooks: {
      'prerender:generate'(route) {
        // TODO: fix issue with recursive fetches with query string, e.g.
        // `/enterprise/agencies?region=europe&amp;amp;amp;service=ecommerce&amp;amp;service=ecommerce&amp;service=content-marketing`
        /* if (route.route?.includes('&amp;')) {
          route.skip = true
        } */
        // console.log('prerender:generate', route)
      },
      async 'prerender:routes'(routes) {
        const allRoutes = []

        const response = await fetch(process.env.CRAFT_ENDPOINT, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ query: 'query AllPages { entries { uri, sectionHandle } }' })
        })

        const postPages = await response.json()
        // console.log('All pages', JSON.stringify(postPages?.data?.entries))
        if (postPages && postPages.data && postPages.data.entries) {
          const postWithoutPayloadRoutes = postPages.data.entries.filter(item =>
            !item.sectionHandle.includes('meap') && !item.sectionHandle.includes('ftva')
            && !item.sectionHandle.includes('organization') && !item.sectionHandle.includes('/__home__')
            && !item.sectionHandle.includes('visit/spaces') && !item.sectionHandle.includes('null')
          ).map(entry => '/' + entry.uri)

          allRoutes.push(...postWithoutPayloadRoutes)
        }

        if (allRoutes.length) {
          for (const route of allRoutes) {
            routes.add(route)
          }
          routes.add('/about/reports')
          routes.add('/help')
          // routes.add('/about/status-updates')
        }
        console.log('prerender:routes ctx.routes', routes)
      }
    },

  },

  runtimeConfig: {
    // Private keys are only available on the server
    esWriteKey: process.env.ES_WRITE_KEY,

    // Public keys that are exposed to the client
    public: {
      hostName: process.env.SITEMAP_HOST,
      craftGraphqlURL: process.env.CRAFT_ENDPOINT || '',
      s3Bucket: process.env.S3_BUCKET,
      esReadKey: process.env.ES_READ_KEY || '',
      esIndex: process.env.ES_INDEX || '',
      esAlias: process.env.ES_ALIAS || '',
      libguidesEsIndex: process.env.LIBGUIDES_ES_INDEX || '',
      esIndexPrefix: process.env.ES_INDEX_PREFIX || '',
      esTempIndex: process.env.ES_INDEX_PREFIX + '-' + new Date().toISOString().toLowerCase().replaceAll(':', '-'),
      esURL: process.env.ES_URL || '',
      libcalProxy:
        process.env.LIBCAL_ENDPOINT
        || 'https://proxy.calendar.library.ucla.edu/',
      esTempIndexPrefixLibguides: process.env.ES_TEMP_INDEX_PREFIX_LIBGUIDES || '',
      esTempIndexLibguides: '',
      gtm: {
        id: 'GTM-T2SXV2'
      }
    },
  },

  routeRules: {
    '/impact/all': { redirect: '/about/reports' },
  },
  features: {
    inlineStyles: false,
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

    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },

  /*
     ** Global CSS
     */
  css: [
    // 'ucla-library-design-tokens/scss/fonts.scss',
    'ucla-library-design-tokens/scss/app-global.scss',
    '~/assets/styles/global.scss',

    // use the following line when using pnpm link --global ucla-library-website-components-vue
    '@ucla-library-monorepo/ucla-library-website-components/style.css',
  ],

  typescript: {
    strict: false
  },

  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
  ], 'nuxt-graphql-request', '@zadigetvoltaire/nuxt-gtm', '@nuxtjs/sitemap'],

  build: {
    transpile: ['nuxt-graphql-request', 'ucla-library-website-components'],
  },

  site: {
    url: process.env.SITEMAP_HOST || 'https://www.library.ucla.edu',
    trailingSlash: true,
  },

  imports: {
    dirs: ['stores'],
    transform: {
      // you could also add the path of your built library to prevent this happening
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/\bsfui\b/]
    }
  },

  graphql: {
    /**
     * An Object of your GraphQL clients
     */
    clients: {
      default: {
        /**
         * The client endpoint url
         */
        endpoint: process.env.CRAFT_ENDPOINT || '',
        /**
         * Per-client options overrides
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {},
      },

    },

    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
     */
    options: {
      method: 'get', // Default to `POST`
    },

    /**
     * Optional
     * default: false (this includes cross-fetch/polyfill before creating the graphql client)
     */
    // useFetchPolyfill: true,

    /**
     * Optional
     * default: false (this includes graphql-tag for node_modules folder)
     */
    // includeNodeModules: true,
  },

  experimental: {
    sharedPrerenderData: true,
  },

  compatibilityDate: '2025-02-21'
})
