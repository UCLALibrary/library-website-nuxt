import { consola } from 'consola'

/* eslint-disable-next-line require-await */
export default defineNitroPlugin(async () => {
  const storage = useStorage('SOME_KEY')

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
  /* eslint-disable-next-line require-await */
  async function fetchCraftData() {
    try {
      consola.start('Fetching global craft data...')
      fetchGlobals()
      fetchHeader()
      fetchFooterPrimary()
      fetchFooterSock()

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
      // consola.log("Nitro Global Data object:" + JSON.stringify(response))
      const data = response
      await storage.setItem('globals', data)
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
  }
  try {
    fetchCraftData()
  }
  catch (e) {
    consola.error('Error fetching global craft data...')
    // Error handling here
    throw new Error(`Error fetching global craft data: ${e}`)
  }
})
