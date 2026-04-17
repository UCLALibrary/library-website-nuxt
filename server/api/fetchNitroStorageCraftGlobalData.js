const globalsQuery = `
        query Globals {
            globalSets {
              ... on askALibrarian_GlobalSet {
                id
                askALibrarianTitle: titleGeneral
                askALibrarianText: summary
                buttonUrl {
                    buttonText
                    buttonUrl
                }
              }
              ... on meapCallToAction_GlobalSet {
                  id
                  name
                  titleGeneral
                  summary
                  button: buttonUrl {
                      buttonText
                      buttonUrl
                  }
              }
            }
        }
    `
export default cachedEventHandler(async (event) => {
  const endpoint = useRuntimeConfig().public.craftGraphqlURL

  // const keys = await useStorage().getKeys()
  // console.log('Server api storage keys:' + JSON.stringify(keys))
  let globalData = await useStorage().getItem('meapCraftData:globals')
  // console.log('Server api Global Data object:' + JSON.stringify(globalData))
  if (!globalData) {
    const { data } = await $fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: globalsQuery })
    })
    await useStorage().setItem('meapCraftData:globals', data)
    globalData = data
    // console.log('Server api Global Data object first set and then get:' + JSON.stringify(globalData))
  }
  return globalData
})
