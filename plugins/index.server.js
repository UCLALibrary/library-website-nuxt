export default defineNuxtPlugin((nuxtApp) => {
  // console.log("elastic search plugin index  :")
  const esIndex = useRuntimeConfig().public.esTempIndex
  const esURL = useRuntimeConfig().public.esURL
  const esReadKey = useRuntimeConfig().public.esReadKey
  const esWriteKey = useRuntimeConfig().esWriteKey
  async function index(data, slug) {
    // console.log("elastic search plugin index function :" , esIndex)

    try {
      if (process.env.NODE_ENV !== 'development' && data && slug && esIndex) {
        /* console.log(
                "this is the elasticsearch plugin: " + JSON.stringify(data)
            ) */
        // console.log(`Requesting URL: ${esURL}/${esIndex}/_doc/${slug}`)
        const docExists = await fetch(
                `${esURL}/${esIndex}/_doc/${slug}`,
                {
                  headers: {
                    Authorization: `ApiKey ${esReadKey}`,
                  },
                }
        )

        const body = await docExists.text()
        const docExistsResponseValue = JSON.parse(body)

        // console.log("responseValue",docExistsResponseValue)

        if (docExistsResponseValue && docExistsResponseValue._source) {
          console.log('GET-RESPONSE: ' + slug)

          const postBody = {
            doc: data
          }
          const updateResponse = await fetch(
                    `${esURL}/${esIndex}/_update/${slug}`,
                    {
                      headers: {
                        Authorization: `ApiKey ${esWriteKey}`,
                        'Content-Type': 'application/json',
                      },
                      method: 'POST',
                      body: JSON.stringify(postBody),
                    }
          )
          // console.log("updateResponse",updateResponse)
          const updateJson = await updateResponse.text()
        } else {
          const response = await fetch(
                    `${esURL}/${esIndex}/_doc/${slug}`,
                    {
                      headers: {
                        Authorization: `ApiKey ${esWriteKey}`,
                        'Content-Type': 'application/json',
                      },
                      method: 'POST',
                      body: JSON.stringify(data),
                    }
          )

          console.log('Response from ES:', await response.text())
        }
      } else {
        console.warn('not indexing anything')
      }
    } catch (e) {
      console.error('skip indexing if connection times out  during builds in the mean time: ' + e.message)
      console.warn('skip indexing if connection times out  during builds in the mean time: ' + e.message)
      throw new Error('Elastic Search Indexing failed ' + e) // TODO uncomment when cause is clear
    }
  }

  return {
    provide: {
      elasticsearchplugin: {
        index
        // Make plugin available to all components
      }
    }
  }
})
