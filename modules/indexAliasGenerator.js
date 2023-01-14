export default function () {
    this.nuxt.hook("generate:before", async({ $config, store }) => {
        console.log("In generate before hook for generating a new ES index")
        let now = new Date()
        let esIndex = `${now.getMonth}-${now.getDate}-${now.getFullYear}t${now.getHours}-${now.getMinutes}-${now.getSeconds}`
        const response = await fetch(`${$config.esURL}/${$config.esIndexPrefix}${esIndex}`, {
            headers: {
                'Authorization': `ApiKey ${$config.esWriteKey}`,
                'Content-Type': 'application/json',
            },
            method: 'PUT'
        })
        console.log("Index created:"+response)
        store.commit(
            "SET_ES_INDEX",
            esIndex
        )

    })
}
