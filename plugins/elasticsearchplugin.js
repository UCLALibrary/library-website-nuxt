export default function ({ $config }, inject) {
    async function index(data, slug) {
        // eslint-disable-next-line no-undef
        if (process.server && process.env.NODE_ENV !== "development" && data && slug) {
            console.log(
                "this is the elasticsearch plugin" + JSON.stringify(data)
            )
            const response = await fetch(
                `${$config.esURL}/${$config.esIndex}/_doc/${slug}`,
                {
                    headers: {
                        Authorization: `ApiKey ${$config.esWriteKey}`,
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
        index,
    })
}
