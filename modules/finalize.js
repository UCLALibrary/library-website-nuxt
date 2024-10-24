import { defineNuxtModule, useLogger } from 'nuxt/kit'
import fetch from 'node-fetch'

export default defineNuxtModule({
  setup(options, nuxt) {
    const logger = useLogger('finalize-module')

    async function createTempLibGuideIndex(now) {
      const tempLibGuideIndex = `${nuxt.options.runtimeConfig.public.esTempIndexPrefixLibguides}-${now.toISOString().toLowerCase().replaceAll(':', '-')}`
      logger.warn('Libguides Temp Index named: ' + tempLibGuideIndex)

      const response = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/${tempLibGuideIndex}`, {
        headers: {
          Authorization: `ApiKey ${nuxt.options.runtimeConfig.esWriteKey}`,
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
          settings: {
            analysis: {
              analyzer: {
                default: {
                  type: 'custom',
                  tokenizer: 'standard',
                  filter: ['stemmer', 'lowercase', 'stop', 'asciifolding'],
                },
                default_search: {
                  type: 'custom',
                  tokenizer: 'standard',
                  filter: ['stemmer', 'lowercase', 'stop', 'asciifolding'],
                },
              },
            },
          },
        }),
      })

      const body = await response.text()
      try {
        const jsonData = JSON.parse(body)
        logger.warn('Temp libguides index created: ' + JSON.stringify(jsonData))
        return tempLibGuideIndex
      } catch (err) {
        logger.error('Temp libguides index Error:', err)
        logger.error('Temp libguides index Response body:', body)
        throw err
      }
    }

    async function reindexContent(tempLibGuideIndex) {
      const response = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/_reindex`, {
        headers: {
          Authorization: `ApiKey ${nuxt.options.runtimeConfig.esWriteKey}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          source: {
            index: nuxt.options.runtimeConfig.public.libguidesEsIndex,
          },
          dest: {
            index: tempLibGuideIndex,
          },
        }),
      })

      const body = await response.text()
      try {
        const jsonData = JSON.parse(body)
        logger.warn('Reindex done: ' + JSON.stringify(jsonData))
        nuxt.options.runtimeConfig.public.esTempIndexLibguides = tempLibGuideIndex
      } catch (err) {
        logger.error('Reindex Error:', err)
        logger.error('Reindex Response body:', body)
        throw err
      }
    }

    async function fetchAliasIndices(alias) {
      try {
        const aliasResponse = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/_alias/${alias}`, {
          headers: {
            Authorization: `ApiKey ${nuxt.options.runtimeConfig.esWriteKey}`,
            'Content-Type': 'application/json',
          },
          method: 'GET',
        })
        const aliasData = await aliasResponse.json()
        return Object.keys(aliasData) // Return array of indices associated with the alias
      } catch (err) {
        logger.error('Error fetching alias indices:', err)
        throw err
      }
    }

    async function updateAliasWithNewIndices(alias, tempLibGuideIndex) {
      try {
        const response = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/_aliases`, {
          headers: {
            Authorization: `ApiKey ${nuxt.options.runtimeConfig.esWriteKey}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            actions: [
              { remove: { index: '*', alias } },
              { add: { indices: [nuxt.options.runtimeConfig.public.esTempIndex, tempLibGuideIndex], alias } },
            ],
          }),
        })
        const body = await response.text()
        const jsonData = JSON.parse(body)
        logger.warn('Alias updated:', JSON.stringify(jsonData), alias)
      } catch (err) {
        logger.error('Error updating alias:', err)
        throw err
      }
    }

    async function deleteOldIndices(indicesToDelete, tempLibGuideIndex) {
      try {
        for (const index of indicesToDelete) {
          if (index === tempLibGuideIndex || index === nuxt.options.runtimeConfig.public.esTempIndex) {
            continue // Skip the new indices
          }

          logger.warn(`Deleting index: ${index}`)
          const deleteResponse = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/${index}`, {
            headers: {
              Authorization: `ApiKey ${nuxt.options.runtimeConfig.esWriteKey}`,
              'Content-Type': 'application/json',
            },
            method: 'DELETE',
          })

          const deleteBody = await deleteResponse.text()
          logger.warn(`Deleted index ${index}: ${deleteBody}`)
        }
      } catch (err) {
        logger.error('Error deleting old indices:', err)
        throw err
      }
    }

    // Refactored alias update and cleanup function
    async function updateAliasesAndCleanup(tempLibGuideIndex) {
      try {
        const alias = nuxt.options.runtimeConfig.public.esAlias

        // Step 1: Fetch current indices associated with the alias
        const indicesToDelete = await fetchAliasIndices(alias)
        logger.warn('Indices associated with alias:', indicesToDelete)

        // Step 2: Update alias with new indices
        await updateAliasWithNewIndices(alias, tempLibGuideIndex)

        // Step 3: Clean up old indices
        await deleteOldIndices(indicesToDelete, tempLibGuideIndex)
      } catch (err) {
        logger.error('Error during alias update and cleanup:', err)
      }
    }

    nuxt.hooks.hook('nitro:build:public-assets', async () => {
      logger.warn('Ready for generating alias...')
      const timeElapsed = Date.now()
      const now = new Date(timeElapsed)

      try {
        const tempLibGuideIndex = await createTempLibGuideIndex(now)
        await reindexContent(tempLibGuideIndex)
        await updateAliasesAndCleanup(tempLibGuideIndex)
      } catch (err) {
        logger.error('An error occurred:', err)
      }
    })
  },
})
