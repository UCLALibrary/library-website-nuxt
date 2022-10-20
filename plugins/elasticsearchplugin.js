export default function ({ $config, route }, inject) {
    async function getData(data, slug) {
        if (process.server && process.env.NODE_ENV != "development") {
            console.log(
                "this is the elasticsearch plugin" + JSON.stringify(data)
            )
            const response = await fetch(
                `${$config.esURL}/apps-ashton-test-craft/_doc/${slug}`,
                {
                    headers: {
                        Authorization: `ApiKey ${$config.esApiKey}`,
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            )
            console.log(response)
        } else {
            console.log("not indexing anything")
        }
    }
    inject("elasticsearchplugin", {
        getData,
    })
}
