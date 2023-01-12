export default function ({ $config }, inject) {
    async function index(data, slug) {
        try{
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
        }catch (e) {
            console.error("skip indexing if connection time out issue during builds in the mean time: "+e.message)
            console.log("skip indexing if connection time out issue during builds in the mean time: "+e.message)
            // throw new Error("Elastic Search Indexing failed " + e) // TODO uncomment when cause is clear
        }
    }
    inject("elasticsearchplugin", {
        index,
    })
}
