const globalsQuery = `
        query Globals {
            globalSets {
                dataId: id
                handle

                ... on askALibrarian_GlobalSet {
                    askALibrarianTitle: titleGeneral
                    askALibrarianText: summary
                    buttonUrl {
                        buttonText
                        buttonUrl
                    }
                }

                ... on libraryAlert_GlobalSet {
                    title: entryTitle
                    text: richTextAlertBox
                }
            }
        }
    `
export default cachedEventHandler(async (event) => {
  const endpoint = useRuntimeConfig().public.craftGraphqlURL

  // const keys = await useStorage().getKeys()
  // console.log('Server api storage keys:' + JSON.stringify(keys))
  let globalData = await useStorage().getItem('craftData:globals')
  // console.log('Server api Global Data object:' + JSON.stringify(globalData))
  if (!globalData) {
    const { data } = await $fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: globalsQuery })
    })
    await useStorage().setItem('craftData:globals', data)
    globalData = data
    // console.log('Server api Global Data object first set and then get:' + JSON.stringify(globalData))
  }
  return globalData
})
