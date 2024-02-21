import { defineNuxtModule } from 'nuxt/kit'
/* import fetch from 'node-fetch'

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
*/
export default defineNuxtModule({

  /* async setup(options, nuxt) {
     console.log('Nuxt module start ')
      const endpoint = nuxt.options.runtimeConfig.public.craftGraphqlURL
      nuxt.hooks.hook("nitro:init", async (nitro) => {
        console.log('Fetching global craft data...')

        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: globalsQuery }),
          })

          const data = await response.json()
          console.log("Nitro Global Data object:" + JSON.stringify(data))
          const setData = await nitro.storage.setItem('craftData:globals', data)
          console.log("Nitro Global Data object:" + JSON.stringify(setData))
          console.log("Nitro storage keys:" + JSON.stringify(await nitro.storage.getKeys()))
          const globalGetData = await nitro.storage.getItem('craftData:globals')
          console.log("Nitro Global Data object:" + JSON.stringify(globalGetData))
        }
        catch (e) {
          throw new Error(`Craft API error, trying to set globals. ${e}`)
        }

        /* try {
           const response = await fetch(endpoint, {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({ query: headerQuery }),
           })

           const data = await response.json()
           console.log("Nitro Header Data object:" + JSON.stringify(data))
           await nitro.storage.setItem('craftData:header', data)
         }
         catch (e) {
           throw new Error(`Craft API error, trying to set globals Header. ${e}`)
         }

         try {
           const response = await fetch(endpoint, {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({ query: footerPrimaryQuery }),
           })

           const data = await response.json()
           console.log("Nitro Footer Primary Data object:" + JSON.stringify(data))
           await nitro.storage.setItem('craftData:footerPrimary', data)
         }
         catch (e) {
           throw new Error(`Craft API error, trying to set globals FooterPrimary. ${e}`)
         }

         try {
           const response = await fetch(endpoint, {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({ query: footerSockQuery }),
           })

           const data = await response.json()
           console.log("Nitro Footer Sock Data object:" + JSON.stringify(data))
           await nitro.storage.setItem('craftData:footerSock', data)
         }
         catch (e) {
           throw new Error(`Craft API error, trying to set globals FooterSockData. ${e}`)
         }

        console.log('Craft data fetched succesfully!')
     console.log('Nuxt module end ')
   } */
})
