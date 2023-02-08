import fetch from "node-fetch"

export default function () {
    this.nuxt.hook("generate:done", async() => {
        console.warn("In generate done hook swap alias")
        console.warn(this.nuxt.options.publicRuntimeConfig.esTempIndex)
        console.warn(this.nuxt.options.publicRuntimeConfig.esIndex)
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
                            "indices": [this.nuxt.options.publicRuntimeConfig.esTempIndex,this.nuxt.options.publicRuntimeConfig.libguidesEsIndex],
                            "alias": this.nuxt.options.publicRuntimeConfig.esIndex
                        }
                    }
                ]
            }),
        })
        const body = await response.text()
        try {
            let testJson = JSON.parse(body)

            console.warn("Alias updated :"+JSON.stringify(testJson))
        } catch (err) {
            console.error("Error:", err)
            console.error("Response body:", body)
            throw err
        }
    })
}
