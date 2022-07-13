/* eslint-env node */
export default {
    server: {
        port: 3000,
        host: "0.0.0.0"
    },
    target: "static",
    components: true,

    privateRuntimeConfig: {
        libcalClientSecret: process.env.LIBCAL_CLIENT_SECRET,
        libcalClientId: process.env.LIBCAL_CLIENT_ID,
    },
    publicRuntimeConfig: {
        libcalAppointment: process.env.LIBCAL_APPOINTMENTS,
        libcalClientSecret:
            process.env.LIVE_PREVIEW === "dev"
                ? process.env.LIBCAL_CLIENT_SECRET
                : "test",
        libcalClientId:
            process.env.LIVE_PREVIEW === "dev"
                ? process.env.LIBCAL_CLIENT_ID
                : "test", 
        s3Bucket: process.env.S3_BUCKET,
    },
    /*
     ** Required charset and viewport meta tags
     */
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
        ]
    },
    /*
     ** Global CSS
     */
    css: [
        "~/assets/styles/variables-css.scss",
        "~/assets/styles/global.scss",
        "~/assets/styles/fonts.css",
    ],

    /*
     ** Load SCSS into each component
     */
    styleResources: {
        scss: ["~/assets/styles/variables-scss.scss"],
    },

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "~/plugins/preview.client.js",
        "~/plugins/web-font-loader.client.js",
        "~/plugins/browser-events.client.js",
        "~/plugins/craft.js",
    ],

    /*
     * Axios. Used for Libcal query.
     */
    axios: {
        baseURL:
            process.env.LIBCAL_ENDPOINT ||
            "https://calendar.library.ucla.edu/1.1",
    },

    /*
     * GraphQL Request. Used for querying from Craft
     */
    graphql: {
        clients: {
            default: {
                endpoint: process.env.CRAFT_TEST_ENDPOINT,
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
     ** Storybook
     ** SEE https://storybook.nuxtjs.org/options
     */
    storybook: {
        stories: ["~/stories/**/*.stories.js"],
        parameters: {
            layout: "fullscreen",
            viewport: { 
                viewports:{
                    extraLarge: {
                        name: 'Extra Large',
                        styles:{ width: '1920px', height: '1080px', },
                    },
                    Large: {
                        name: 'Large',
                        styles:{ width: '1440px', height: '1024px', },
                    },
                    Medium: {
                        name: 'Medium',
                        styles:{ width: '768px', height: '1024px', },
                    },
                    Small: {
                        name: 'Small',
                        styles:{ width: '375px', height: '812px', },
                    },
                },
            },
            backgrounds: {
                default: "default",
                values: [
                    {
                        name: "White",
                        value: "#ffffff",
                    },
                    {
                        name: "Grey",
                        value: "#F2F2F2",
                    },
                    {
                        name: "Dark blue",
                        value: "#032D5B",
                    },
                    {
                        name: "Blue",
                        value: "#0B6AB7",
                    },
                    {
                        name: "Light blue",
                        value: "#EAF2FB",
                    },
                ],
            },
        },
        // eslint-disable-next-line no-unused-vars
        webpackFinal(config, { configDir }) {
            // Allow webpack to auto-load .gql and .svg files
            config.resolve.extensions.push(".svg", ".gql")

            return config
        },
    },

    /*
     * Nuxt modules
     */
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/gtm",
    ],

    gtm: {
        id: 'GTM-T2SXV2'
    },

    /*
     * Nuxt build modules
     */
    buildModules: ["@nuxtjs/style-resources", "nuxt-graphql-request"],

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