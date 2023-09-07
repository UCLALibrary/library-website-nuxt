

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
                const getBody = {
                    query: {
                      query_string: {
                        query: slug,
                          default_field : "slug",
                      }
                    }
                }
                const getResponse = await fetch(
                    `${$config.esURL}/${esIndex}/_search`,
                    {
                        headers: {
                            Authorization: `ApiKey ${$config.esReadKey}`,
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify(getBody),
                    }
                )
                console.log("Stringified getResponse: " + JSON.stringify(getResponse))
                if (getResponse && getResponse["_source"]) {
                    console.log("GET-RESPONSE: " + slug)

                    const postBody = {
                        doc: data
                    }
                    const response = await fetch(
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
