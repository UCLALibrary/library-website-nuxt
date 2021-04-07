export default {
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
}
