/* eslint-disable no-undef */
import fetch from "node-fetch"
const consola = require("consola")
consola.level = 5

export default function () {
    this.nuxt.hook("generate:done", async () => {
        consola.debug("In generate done hook swap alias")
        consola.debug(this.nuxt.options.publicRuntimeConfig.esTempIndex)
        consola.debug(this.nuxt.options.publicRuntimeConfig.esIndex)
        const response = await fetch(
            `${this.nuxt.options.publicRuntimeConfig.esURL}/_aliases`,
            {
                headers: {
                    Authorization: `ApiKey ${this.nuxt.options.privateRuntimeConfig.esWriteKey}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    actions: [
                        {
                            remove: {
                                index: "*",
                                alias: this.nuxt.options.publicRuntimeConfig
                                    .esIndex,
                            },
                        },
                        {
                            add: {
                                indices: [
                                    this.nuxt.options.publicRuntimeConfig
                                        .esTempIndex,
                                ],
                                alias: this.nuxt.options.publicRuntimeConfig
                                    .esIndex,
                            },
                        },
                    ],
                }),
            }
        )
        const body = await response.text()
        try {
            let testJson = JSON.parse(body)

            consola.debug("Alias updated :" + JSON.stringify(testJson))
        } catch (err) {
            consola.error("Error:", err)
            consola.error("Response body:", body)
            throw err
        }
    })
}
