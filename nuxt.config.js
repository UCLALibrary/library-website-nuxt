export default {
    target: "static",
    components: true,

    /*
     ** Global CSS
     */
    css: [
        "~/assets/styles/variables.scss",
        "~/assets/styles/global.scss",
        "~/assets/styles/fonts.css",
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: "~/plugins/web-font-loader.client.js", mode: "client" }],

    /*
     ** Storybook
     ** SEE https://storybook.nuxtjs.org/options
     */
    storybook: {
        stories: ["~/stories/**/*.stories.js"],
        parameters: {
            layout: "fullscreen",
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
        webpackFinal(config, { configDir }) {
            // Allow webpack to auto-load .gql and .svg files
            config.resolve.extensions.push(".svg")

            return config
        },
    },

    /*
     ** Nuxt build configuration
     */
    build: {
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
                        // Default SVG loader, custo SVGO options
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
