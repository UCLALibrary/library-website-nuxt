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

    // ----- ORPHAN CLEANUP (indices with no alias) --------------------------

    async function findOrphanIndices() {
      const esURL = nuxt.options.runtimeConfig.public.esURL
      const esWriteKey = nuxt.options.runtimeConfig.esWriteKey
      // 1) all aliases
      const aliasesRes = await fetch(`${esURL}/_cat/aliases?format=json`, {
        headers: {
          Authorization: `ApiKey ${esWriteKey}`
        }
      })
      const aliasesText = await aliasesRes.text()
      let aliasesJson = []

      try {
        aliasesJson = aliasesText ? JSON.parse(aliasesText) : []
      } catch (err) {
        logger.error('[finalize-module] Error parsing aliases JSON', err)
        throw err
      }

      const indicesWithAliases = new Set()
      aliasesJson.forEach(function (row) {
        if (row && row.index) {
          indicesWithAliases.add(row.index)
        }
      })

      // 2) all indices
      const indicesRes = await fetch(`${esURL}/_cat/indices?format=json`, {
        headers: {
          Authorization: `ApiKey ${esWriteKey}`
        }
      })
      const indicesText = await indicesRes.text()
      let indicesJson = []

      try {
        indicesJson = indicesText ? JSON.parse(indicesText) : []
      } catch (err) {
        logger.error('[finalize-module] Error parsing indices JSON', err)
        throw err
      }

      // 3) orphans = no alias, not system, match our temp prefix
      const orphanIndices = indicesJson
        .map(function (row) {
          return row.index
        })
        .filter(function (indexName) {
          if (!indexName) return false

          // skip system indices
          if (indexName.startsWith('.')) return false

          // skip indices already in any alias
          if (indicesWithAliases.has(indexName)) return false

          return true
        })

      logger.warn(
        '[finalize-module] Orphan Libguides indices detected:',
        orphanIndices
      )

      return orphanIndices
    }
    // ----- GENERIC DELETE HELPER -------------------------------------------

    async function deleteIndices(indices, label) {
      const esURL = nuxt.options.runtimeConfig.public.esURL
      const esWriteKey = nuxt.options.runtimeConfig.esWriteKey
      for (const index of indices) {
        logger.warn(`[finalize-module] [${label}] Deleting index: ${index}`)

        const deleteResponse = await fetch(`${esURL}/${index}`, {
          headers: {
            Authorization: `ApiKey ${esWriteKey}`,
            'Content-Type': 'application/json'
          },
          method: 'DELETE'
        })

        const deleteBody = await deleteResponse.text()
        let deleteJson = null
        try {
          deleteJson = deleteBody ? JSON.parse(deleteBody) : null
        } catch (err) {
          // ignore non-JSON body
        }

        if (!deleteResponse.ok) {
          logger.error(
            `[finalize-module] [${label}] Failed to delete index`,
            {
              index,
              status: deleteResponse.status,
              body: deleteJson || deleteBody
            }
          )
        } else {
          logger.warn(
            `[finalize-module] [${label}] Deleted index successfully`,
            {
              index,
              body: deleteJson || deleteBody
            }
          )
        }
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

        // Step 4: extra cleanup — remove orphan indices
        const orphanIndices = await findOrphanIndices()
        if (orphanIndices && orphanIndices.length) {
          await deleteIndices(orphanIndices, 'orphan-indices-cleanup')
        } else {
          logger.warn(
            '[finalize-module] No orphan indices to delete'
          )
        }
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
