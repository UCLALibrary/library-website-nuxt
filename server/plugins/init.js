export default defineNitroPlugin(async (nitroApp) => {
  /* const storage = useStorage('craftData')

  const endpoint = useRuntimeConfig().public.craftGraphqlURL
  const MenuItem = `
            id
            name: title
            to: url
            classes
            target: newWindow
    `
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
  const headerQuery = `
        query HeaderMainMenuItems {
            secondary: nodes(navHandle: "secondaryMenu", level: 1) {
                ${MenuItem}
            }
            primary: nodes(navHandle: "primaryMenu", level: 1) {
                ${MenuItem}
                children {
                    ${MenuItem}
                }
            }
        }
    `
  const footerPrimaryQuery = `
        query FooterPrimaryItems {
            nodes(navHandle: "footerPrimary", level: 1) {
                ${MenuItem}
                children {
                    ${MenuItem}
                }
            }
        }
    `

  const footerSockQuery = `
    query FooterSockItems {
        nodes(navHandle: "footerSockLinks") {
            ${MenuItem}
        }
      }
    `

  try {
    await fetchCraftData()
  }
  catch (e) {
    consola.error('Error fetching global craft data...')
    // Error handling here
    throw new Error(`Error fetching global craft data: ${e}`)
  }

  async function fetchCraftData() {
    try {
      consola.start('Fetching global craft data...')
      await fetchGlobals()
      await fetchHeader()
      await fetchFooterPrimary()
      await fetchFooterSock()

      consola.success('Craft data fetched succesfully!')
    }
    catch (e) {
      consola.error('Error fetching global craft data...')
      throw new Error(`Error fetching global craft data: ${e}`)
    }
  }
  async function fetchGlobals() {
    try {
      const response = await $fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: globalsQuery }),
      })
      console.log('Nitro Global Data object:' + JSON.stringify(response))
      const data = response
      const setglobaldatainstorage = await storage.setItem('globals', data)
      console.log('Nitro server plugin Global Data object:' + JSON.stringify(setglobaldatainstorage))
      console.log('Nitro storage keys:' + JSON.stringify(await storage.getKeys()))
      const globalGetData = await storage.getItem('globals')
      console.log('Nitro storage Global Data object:' + JSON.stringify(globalGetData))
    }
    catch (e) {
      throw new Error(`Craft API error, trying to set globals. ${e}`)
    }
  }
  async function fetchHeader() {
    try {
      const response = await $fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: headerQuery }),
      })
      // consola.log("Nitro Header Data object:" + JSON.stringify(response))
      const data = response
      await storage.setItem('header', data)
    }
    catch (e) {
      throw new Error(`Craft API error, trying to set globals Header. ${e}`)
    }
  }
  async function fetchFooterPrimary() {
    try {
      const response = await $fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: footerPrimaryQuery }),
      })
      // consola.log("Nitro Footer Primary Data object:" + JSON.stringify(response))
      const data = response
      await storage.setItem('footerPrimary', data)
    }
    catch (e) {
      throw new Error(`Craft API error, trying to set globals FooterPrimary. ${e}`)
    }
  }
  async function fetchFooterSock() {
    try {
      const response = await $fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: footerSockQuery }),
      })
      // consola.log("Nitro Footer Sock Data object:" + JSON.stringify(response))
      const data = response
      await storage.setItem('footerSock', data)
    }
    catch (e) {
      throw new Error(`Craft API error, trying to set globals FooterSockData. ${e}`)
    }
  } */
})
