import fetch from "node-fetch"
const consola = require('consola')
consola.level = 5

export default function () {
    this.nuxt.hook("generate:done", async() => {
        consola.debug("In generate done hook swap alias")
        consola.debug(this.nuxt.options.publicRuntimeConfig.esTempIndex)
        consola.debug(this.nuxt.options.publicRuntimeConfig.esIndex)
        const timeElapsed = Date.now()
        const now = new Date(timeElapsed)

        let esIndex = `${this.nuxt.options.publicRuntimeConfig.esTempIndexPrefixLibguides}-${now.toISOString().toLowerCase().replaceAll(":", "-")}`
        consola.debug("Libguides Temp Index named:" + esIndex)
        const tempLibGuideIndexresponse = await fetch(`${this.nuxt.options.publicRuntimeConfig.esURL}/${esIndex}`, {
            headers: {
                'Authorization': `ApiKey ${this.nuxt.options.privateRuntimeConfig.esWriteKey}`,
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify({
                settings: {
                    analysis: {
                        analyzer: {
                            default: {
                                type: "custom",
                                tokenizer: "standard",
                                filter: ["stemmer", "lowercase", "stop", "asciifolding"],
                            },
                            default_search: {
                                type: "custom",
                                tokenizer: "standard",
                                filter: ["stemmer", "lowercase", "stop", "asciifolding"],
                            }
                        },
                    }
                }
            }),
        })
        const tempBody = await tempLibGuideIndexresponse.text()
        try {
            let testJsonTemp = JSON.parse(tempBody)

            consola.debug("Temp libguides index created :"+JSON.stringify(testJsonTemp))
        } catch (err) {
            consola.error("Temp libguides index Error:", err)
            consola.error("Temp libguides index Response body:", tempBody)
            throw err
        }
        
        const reindexResponse = await fetch(`${this.nuxt.options.publicRuntimeConfig.esURL}/_reindex`, {
            headers: {
                'Authorization': `ApiKey ${this.nuxt.options.privateRuntimeConfig.esWriteKey}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                "source": {
                    "index": this.nuxt.options.publicRuntimeConfig.libguidesEsIndex
                },
                "dest": {
                    "index": esIndex
                }
            })
        })
        const reindexBody = await reindexResponse.text()
        try {
            let testJsonReindex = JSON.parse(reindexBody)

            consola.debug("Reindex done :"+JSON.stringify(testJsonReindex))
        } catch (err) {
            consola.error("Reindex Error:", err)
            consola.error("Reindex Response body:", reindexBody)
            throw err
        }
        const response = await fetch(`${this.nuxt.options.publicRuntimeConfig.esURL}/_aliases`, {
            headers: {
                'Authorization': `ApiKey ${this.nuxt.options.privateRuntimeConfig.esWriteKey}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "actions": [
                    {
                        "remove": {
                            "index": "*",
                            "alias": this.nuxt.options.publicRuntimeConfig.esIndex
                        }
                    },
                    {
                        "add": {
                            "indices": [this.nuxt.options.publicRuntimeConfig.esTempIndex,esIndex],
                            "alias": this.nuxt.options.publicRuntimeConfig.esIndex
                        }
                    }
                ]
            }),
        })
        const body = await response.text()
        try {
            let testJson = JSON.parse(body)

            consola.debug("Alias updated :"+JSON.stringify(testJson))
        } catch (err) {
            consola.error("Error:", err)
            consola.error("Response body:", body)
            throw err
        }
    })
}
