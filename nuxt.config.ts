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
    /*
     ** Global CSS
     */
    css: [
        "ucla-library-design-tokens/scss/fonts.scss",
        "ucla-library-design-tokens/scss/app-global.scss",
        "~/assets/styles/global.scss",
        // once we have npm package for vite vue3 component library use
        // "ucla-library-website-components-vue3.x/style.css"
        // use the following line when using pnpm link --global ucla-library-website-components-vue3.x
        "ucla-library-website-components-vue3.x/dist/style.css",
    ],
})
