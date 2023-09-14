/* eslint-env node */

import { resolve } from "path"

export default function () {
    // This is module
    // here we are injecting custom plugin code to the build
    this.addTemplate({
        src: resolve(__dirname, "populate.server.js"),
        fileName: "populate.server.js",
    })
    /*
    *
    * This part of the code registers a hook to be executed before the Nuxt.js build process begins. 
    * When the "build:before" hook is triggered, it pushes the path to the "populate.server.js" 
    * file into the this.options.plugins array.
    */
    this.nuxt.hook("build:before", () => {
        this.options.plugins.push(`${__dirname}/populate.server.js`)
    })

    /*
    Here, a hook is registered to be executed before the Nuxt.js generation process begins. 
    When the "generate:before" hook is triggered, it sets an empty object as the payload using setPayload({}). 
    This is done just to provide a hint that the generation process is being used.
    */

    this.nuxt.hook("generate:before", ({ setPayload }) => {
        // Use an empty object as payload just so server has
        // a hint that generate is being used
        setPayload({})
    })
}
