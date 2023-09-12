

export default function ({ $config }, inject) {
    const esIndex = $config.esTempIndex
    async function index(data, slug) {
        console.log("elastic search plugin index function :" + esIndex)
        try {
            // eslint-disable-next-line no-undef
            if (process.server && process.env.NODE_ENV !== "development" && data && slug && esIndex) {
                console.log(
                    "this is the elasticsearch plugin: " + JSON.stringify(data)
                )
                console.warn(
                    "this is the elasticsearch plugin: " + slug
                )
                // GET Response
                const getResponse = await fetch(
                    `${$config.esURL}/${esIndex}/_doc/${slug}`,
                    {
                        headers: {
                            Authorization: `ApiKey ${$config.esReadKey}`,
                        },
                    }
                )
                const getJson = await getResponse.json()
                
                console.log("Stringified getResponse: " + JSON.stringify(getJson))
                if (getJson && getJson["_source"]) {
                    console.log("GET-RESPONSE: " + slug)

                    const postBody = {
                        doc: data
                    }
                    const updateResponse = await fetch(
                        `${$config.esURL}/${esIndex}/_update/${slug}`,
                        {
                            headers: {
                                Authorization: `ApiKey ${$config.esWriteKey}`,
                                "Content-Type": "application/json",
                            },
                            method: "POST",
                            body: JSON.stringify(postBody),
                        }
                    )
                    const updateJson = await updateResponse.json()
                
                    console.log("Stringified updateResponse: " + JSON.stringify(updateJson))
                } else {
                    const response = await fetch(
                        `${$config.esURL}/${esIndex}/_doc/${slug}`,
                        {
                            headers: {
                                Authorization: `ApiKey ${$config.esWriteKey}`,
                                "Content-Type": "application/json",
                            },
                            method: "POST",
                            body: JSON.stringify(data),
                        }
                    )
                    const json = await response.json()
                    console.warn("Response from ES: " + JSON.stringify(json))
                }
            } else {
                console.warn("not indexing anything")
            }
        } catch (e) {
            console.error("skip indexing if connection times out  during builds in the mean time: " + e.message)
            console.warn("skip indexing if connection times out  during builds in the mean time: " + e.message)
            throw new Error("Elastic Search Indexing failed " + e) // TODO uncomment when cause is clear
        }
    }
    inject("elasticsearchplugin", {
        index,
    })
}
