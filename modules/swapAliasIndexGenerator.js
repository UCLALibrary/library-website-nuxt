import fetch from "node-fetch"

export default function () {
    this.nuxt.hook("generate:done", async() => {
        console.log("In generate done hook swap alias")
        console.log(this.nuxt.options.publicRuntimeConfig.esTempIndex)
        console.log(this.nuxt.options.publicRuntimeConfig.esIndex)
        const response = await fetch(`${this.nuxt.options.publicRuntimeConfig.esURL}/_aliases`, {
            headers: {
                'Authorization': `ApiKey ${this.nuxt.options.privateRuntimeConfig.esWriteKey}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "actions": [
                    {
                        "add": {
                            "index": this.nuxt.options.publicRuntimeConfig.esTempIndex,
                            "alias": this.nuxt.options.publicRuntimeConfig.esIndex
                        }
                    }
                ]
            }),
        })
        const data = await response.json()
        console.log("Alias swaped:"+JSON.stringify(data))
    })
   
}
