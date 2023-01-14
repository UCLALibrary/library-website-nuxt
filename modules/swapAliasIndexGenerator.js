export default function () {
    this.nuxt.hook("generate:done", async({ $config , store }) => {
        console.log("In generate done hook swap alias")
        const response = await fetch(`${$config.esURL}/_aliases`, {
            headers: {
                'Authorization': `ApiKey ${$config.esWriteKey}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "actions": [
                    {
                        "add": {
                            "index": store.state.esIndex,
                            "alias": $config.esIndex
                        }
                    }
                ]
            }),
        })
        console.log("Alias swaped:"+response)
    })
   
}
