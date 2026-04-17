// composables/useContentIndexer.js
export function useContentIndexer() {
  const config = useRuntimeConfig()

  const esIndex = config.public.esTempIndex
  const esURL = config.public.esURL
  const esReadKey = config.public.esReadKey
  const esWriteKey = config.esWriteKey

  async function indexContent(data, slug) {
    try {
      // matches your original guard: only index when you have essentials
      if (!data || !slug || !esIndex) {
         
        console.warn('not indexing anything')
        return
      }

      // Optional: keep your original "don’t index in development" behavior
      // If you want that exact behavior, uncomment:
      // if (process.env.NODE_ENV === 'development') return

      // 1) Check if the doc exists
      const docExists = await fetch(`${esURL}/${esIndex}/_doc/${slug}`, {
        headers: {
          Authorization: `ApiKey ${esReadKey}`,
        },
      })

      const body = await docExists.text()
      const docExistsResponseValue = JSON.parse(body)

      // 2) Update if it exists, otherwise create
      if (docExistsResponseValue && docExistsResponseValue._source) {
        const postBody = { doc: data }

        await fetch(`${esURL}/${esIndex}/_update/${slug}`, {
          headers: {
            Authorization: `ApiKey ${esWriteKey}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(postBody),
        })

        return
      }
      // console.log('Indexing new document to ES:', slug, JSON.stringify(data))
      const response = await fetch(`${esURL}/${esIndex}/_doc/${slug}`, {
        headers: {
          Authorization: `ApiKey ${esWriteKey}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      })
      console.log('Create a new document in ES:', await response.text())
    } catch (e) {
       
      console.error(
        'skip indexing if connection times out during builds in the mean time: ' +
          (e && e.message ? e.message : e)
      )
       
      console.warn(
        'skip indexing if connection times out during builds in the mean time: ' +
          (e && e.message ? e.message : e)
      )
      throw new Error('Elastic Search Indexing failed ' + e)
    }
  }

  return { indexContent }
}
