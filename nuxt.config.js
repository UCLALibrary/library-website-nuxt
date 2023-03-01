/* eslint-env node */
export default {
    server: {
        port: 3000,
        host: "0.0.0.0",
    },
    target: "static",
    components: true,
    privateRuntimeConfig: {
        esWriteKey: process.env.ES_WRITE_KEY,
    },
    publicRuntimeConfig: {
        esReadKey: process.env.ES_READ_KEY || "",
        esIndex: process.env.ES_INDEX || "",
        esIndexPrefix: process.env.ES_INDEX_PREFIX || "",
        esTempIndex: "",
        esURL: process.env.ES_URL || "",
    },

    /*
    * Extend routes
    // TO DO check why this is not working
    router: {
        extendRoutes(routes, resolve) {
            console.log("In extend routes")
            console.log("what are the routes? "+ JSON.stringify(routes))
            routes.push(
                {
                    name: 'applicants',
                    path: '/applicants+',
                    component: resolve(__dirname,'pages/applicants/resources/index.vue'),
                    chunkName : 'pages/applicants/resources/index.vue'
                }
            )
            routes = routes.map((obj)=>{
                let path = ""
                let component = ""
                let chunkname = ""
                if(obj.name == "applicants-slug") {
                    path = "/applicants/:slug+"
                    component = resolve(__dirname,'pages/applicants/_slug.vue')
                    chunkname = 'pages/applicants/_slug.vue'
                }
                return {
                    name: obj.name,
                    path: path ? path : obj.path,
                    component: component ? component : obj.component,
                    chunkName: chunkname ? chunkname : obj.chunkName
                }
            })

            console.log("Now are the routes? "+ JSON.stringify(routes))
        }
    },
    */

    /*
     ** Required charset and viewport meta tags
     */
    head: {
        titleTemplate: (titleChunk) => {
            // If undefined or blank then we don't need the pipe and space
            return titleChunk
                ? `${titleChunk} | Modern Endangered Archives Program`
                : "Modern Endangered Archives Program"
        },
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
        link: [
            { rel: "icon", type: "image/svg", href: "/icon-ucla-favicon.svg" },
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
        "~/plugins/preview.client.js",
        "~/plugins/browser-events.client.js",
        "~/plugins/craft.js",
        "~/plugins/add-library-website-vue-components.js",
        "~/plugins/add-skip-to.js",
    ],

    /*
     * Axios. Used for Libcal query.
     */
    axios: {
        baseURL:
            process.env.LIBCAL_ENDPOINT ||
            "https://test.proxy.calendar.library.ucla.edu/",
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
        fallback: "404.html",
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

    /*
     * Nuxt modules
     */
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/gtm",
        "@nuxtjs/sitemap", // This needs to be last always
    ],

    gtm: {
        id: "GTM-T2SXV2",
    },

    sitemap: {
        hostname: process.env.SITEMAP_HOST || "https://meap.library.ucla.edu",
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
