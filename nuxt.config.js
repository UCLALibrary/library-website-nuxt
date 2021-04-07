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
            config.resolve.extensions.push(".gql", ".svg")

            return config
        },
    },
}
