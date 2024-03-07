import { defineNuxtModule, useLogger } from 'nuxt/kit'
import fetch from 'node-fetch'

export default defineNuxtModule({
  setup(options, nuxt) {
    console.log('Nuxt module finalize start ')
    const logger = useLogger('finalize-module')
    nuxt.hooks.hook('build:done', async (nitro) => {
      console.log('Ready for generaing alias...')

      logger.warn(nuxt.options.runtimeConfig.public.esTempIndex)
      logger.warn(nuxt.options.runtimeConfig.public.esIndex)
      const timeElapsed = Date.now()
      const now = new Date(timeElapsed)

      const tempLibGuideIndex = `${nuxt.options.runtimeConfig.public.esTempIndexPrefixLibguides}-${now.toISOString().toLowerCase().replaceAll(':', '-')}`
      logger.warn('Libguides Temp Index named:' + tempLibGuideIndex)
      const tempLibGuideIndexresponse = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/${tempLibGuideIndex}`, {
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
                }
              },
            }
          }
        }),
      })
      const tempBody = await tempLibGuideIndexresponse.text()
      try {
        const testJsonTemp = JSON.parse(tempBody)

        logger.warn('Temp libguides index created :' + JSON.stringify(testJsonTemp))
      } catch (err) {
        logger.error('Temp libguides index Error:', err)
        logger.error('Temp libguides index Response body:', tempBody)
        throw err
      }

      const reindexResponse = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/_reindex`, {
        headers: {
          Authorization: `ApiKey ${nuxt.options.runtimeConfig.esWriteKey}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          source: {
            index: nuxt.options.runtimeConfig.public.libguidesEsIndex
          },
          dest: {
            index: tempLibGuideIndex
          }
        })
      })
      const reindexBody = await reindexResponse.text()
      try {
        const testJsonReindex = JSON.parse(reindexBody)

        logger.debug('Reindex done :' + JSON.stringify(testJsonReindex))
        nuxt.options.runtimeConfig.public.esTempIndexLibguides = tempLibGuideIndex
      } catch (err) {
        logger.error('Reindex Error:', err)
        logger.error('Reindex Response body:', reindexBody)
        throw err
      }
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
                alias: nuxt.options.runtimeConfig.public.esIndex
              }
            },
            {
              add: {
                indices: [nuxt.options.runtimeConfig.public.esTempIndex, tempLibGuideIndex],
                alias: nuxt.options.runtimeConfig.public.esIndex
              }
            }
          ]
        }),
      })
      const body = await response.text()
      try {
        const testJson = JSON.parse(body)

        logger.debug('Alias updated :' + JSON.stringify(testJson))
      } catch (err) {
        logger.error('Error:', err)
        logger.error('Response body:', body)
        throw err
      }
    })
    console.log('Nuxt module finalize end')
  }
})
