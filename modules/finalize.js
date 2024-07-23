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

    async function updateAliases(tempLibGuideIndex) {
      const response = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/_aliases`, {
        headers: {
          Authorization: `ApiKey ${nuxt.options.runtimeConfig.esWriteKey}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          actions: [
            {
              remove: {
                index: '*',
                alias: nuxt.options.runtimeConfig.public.esAlias,
              },
            },
            {
              add: {
                indices: [nuxt.options.runtimeConfig.public.esTempIndex, tempLibGuideIndex],
                alias: nuxt.options.runtimeConfig.public.esAlias,
              },
            },
          ],
        }),
      })

      const body = await response.text()
      try {
        const jsonData = JSON.parse(body)
        logger.warn('Alias updated: ', JSON.stringify(jsonData), nuxt.options.runtimeConfig.public.esAlias)
      } catch (err) {
        logger.error('Error:', err)
        logger.error('Response body:', body)
        throw err
      }
    }

    nuxt.hooks.hook('nitro:build:public-assets', async () => {
      logger.warn('Ready for generating alias...')
      const timeElapsed = Date.now()
      const now = new Date(timeElapsed)

      try {
        const tempLibGuideIndex = await createTempLibGuideIndex(now)
        await reindexContent(tempLibGuideIndex)
        await updateAliases(tempLibGuideIndex)
      } catch (err) {
        logger.error('An error occurred:', err)
      }
    })
  },
})
