import fetch from "node-fetch"

export default function () {
    this.nuxt.hook("generate:before", async() => {
        // console.log(generator)
        // console.log(generatorOptions)
        // console.log("In generate before hook for generating a new ES index: "+ JSON.stringify(this.nuxt.options.publicRuntimeConfig))
        const timeElapsed = Date.now()
        const now = new Date(timeElapsed)
       
        let esIndex = `${this.nuxt.options.publicRuntimeConfig.esIndexPrefix}${now.toISOString().toLowerCase().replaceAll(":","-")}`
        console.warn("Index named:"+esIndex)
        //console.warn("Index path:"+`${this.nuxt.options.publicRuntimeConfig.esURL}/${esIndex}`)
        //console.warn("Index write key:"+this.nuxt.options.privateRuntimeConfig.esWriteKey)
        const response = await fetch(`${this.nuxt.options.publicRuntimeConfig.esURL}/${esIndex}`, {
            headers: {
                'Authorization': `ApiKey ${this.nuxt.options.privateRuntimeConfig.esWriteKey}`,
                'Content-Type': 'application/json',
            },
            method: 'PUT'
        })
        const body = await response.text()
        try {
            let testJson =  JSON.parse(body)
            this.options.tempIndex = esIndex
            this.nuxt.options.publicRuntimeConfig['esTempIndex'] = esIndex

            console.warn("Index created:"+JSON.stringify(testJson))
        } catch (err) {
            console.error("Error:", err)
            console.error("Response body:", body)
            throw err
        }
    })
}
