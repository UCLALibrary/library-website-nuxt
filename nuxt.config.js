/* eslint-env node */
export default {
    server: {
        port: 3000,
        host: "0.0.0.0",
    },
    target: "static",
    components: true,
    privateRuntimeConfig: {
        esWriteKey: process.env.ES_WRITE_KEY
    },
    publicRuntimeConfig: {
        s3Bucket: process.env.S3_BUCKET,
        esReadKey: process.env.ES_READ_KEY || "",
        esIndex: process.env.ES_INDEX || "",
        esIndexPrefix: process.env.ES_INDEX_PREFIX || "",
        esTempIndex: "",
        esURL:process.env.ES_URL || "",
        libcalProxy: process.env.LIBCAL_ENDPOINT|| "https://proxy.calendar.library.ucla.edu/"
    },
    /*
     ** Required charset and viewport meta tags
     */
    head: {
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0, minimum-scale=1.0",
            },
        ],
    },
    /*
     ** Global CSS
     */
    css: [
        "ucla-library-design-tokens/scss/fonts.scss",
        "ucla-library-design-tokens/scss/app-global.scss",
        "~/assets/styles/global.scss",
    ],

    /*
     ** Load SCSS into each component
     */
    styleResources: {
        scss: ["ucla-library-design-tokens/scss/app.scss"],
    },

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "~/plugins/add-library-website-vue-components.js",
        "~/plugins/preview.client.js",
        "~/plugins/browser-events.client.js",
        "~/plugins/craft.js",
        "~/plugins/data-api.js",
        "~/plugins/elasticsearchplugin.js",
        '~/plugins/scrape-formid.client.js',
        "~/plugins/add-skip-to.js",
    ],

    /*
     * Axios. Used for Libcal query.
     */
    axios: {
        baseURL:
            process.env.LIBCAL_ENDPOINT ||
            "https://proxy.calendar.library.ucla.edu/",
    },

    /*
     * GraphQL Request. Used for querying from Craft
     */
    graphql: {
        clients: {
            default: {
                endpoint: process.env.CRAFT_ENDPOINT,
                options: {},
            },
        },
    },

    /*
     ** Nuxt generate configuration. Used when generating a static site.
     */
    generate: {
        // exclude:[/^\/help/,/^\/visit/,/^\/collections/,/^\/give/,/^\/impact/],
        fallback: '404.html',
        interval: 500,
        concurrency: 10,
    },

    /*
     ** Page transition
     */
    pageTransition: {
        name: "fade",
        mode: "out-in",
    },

    /*
     ** Customize the progress-bar color
     ** See: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
     */
    loading: {
        color: "#ffe800",
        height: "3px",
    },

    /*
     ** Nuxt router configuration. Used to define settingg for the router.
     */
    // TODO find out later why this causing the live preview to not work
    /*router: {
        trailingSlash: false,
    },*/
    router: {
        base: process.env.ROUTER_BASE || '/',
        scrollBehavior: async function(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = async (hash, x = 0) => {
                return (
                    document.querySelector(hash) ||
            new Promise(resolve => {
                if (x > 50) {
                    return resolve(document.querySelector("#app"))
                }
                setTimeout(() => {
                    resolve(findEl(hash, ++x || 1))
                }, 100)
            })
                )
            }

            if (to.hash) {
                let el = await findEl(to.hash)
                if ("scrollBehavior" in document.documentElement.style) {
                    return window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return { x: 0, y: 0 }
        }
    },

    /*
   * Nuxt modules
   */
    modules: ["~/modules/populate", '@nuxtjs/axios', '@nuxtjs/gtm',"@nuxtjs/sitemap",], // This needs to be last always,

    gtm: {
        id: "GTM-T2SXV2",
    },

    sitemap: {
        hostname:
            process.env.SITEMAP_HOST || "https://uclalibrary.library.ucla.edu",
        routes: [],
    },

    /*
     * Nuxt build modules
     */
    buildModules: [
        "@nuxtjs/router-extras",
        "@nuxtjs/style-resources",
        "nuxt-graphql-request",
        "@/modules/sitemapRouteGenerator",
        "@/modules/indexAliasGenerator",
        "@/modules/swapAliasIndexGenerator",
    ],

    /*
     ** Nuxt webpack build configuration
     */
    build: {
        // eslint-disable-next-line no-unused-vars
        extend(config, ctx) {
            // Remove SVG from default Nuxt webpack rules, add back in rule without SVGs
            const svgRule = config.module.rules.find((rule) =>
                rule.test.test(".svg")
            )
            svgRule.test = /\.(png|jpe?g|gif|webp)$/i

            // Add custom loading of SVGs as Vue components
            config.resolve.extensions.push(".svg")
            config.module.rules.push({
                test: /\.svg$/,
                oneOf: [
                    {
                        // ?raw on import will give raw SVG with no optimizations.
                        // Good if you need unaltered SVGs for animations.
                        resourceQuery: /raw/,
                        use: [
                            "babel-loader",
                            {
                                loader: "vue-svg-loader",
                                options: {
                                    svgo: false,
                                },
                            },
                        ],
                    },
                    {
                        // ?url on import will give base64 encoded SVG.
                        // Good for use in CSS.
                        resourceQuery: /url/,
                        use: ["url-loader"],
                    },
                    {
                        // Default SVG loader, custom SVGO options
                        loader: "vue-svg-loader",
                        options: {
                            svgo: {
                                plugins: [{ removeViewBox: false }],
                            },
                        },
                    },
                ],
            })
        },
    },
}
