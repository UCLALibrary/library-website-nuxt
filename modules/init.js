import { defineNuxtModule } from 'nuxt/kit'
import fetch from 'node-fetch'
export default defineNuxtModule({

  setup(options, nuxt) {
    console.log('Nuxt module start ')
    console.log('process.env.NODE_ENV:' + process.env.NODE_ENV)
    if (!nuxt.options._prepare && process.env.NODE_ENV !== 'development') {
      nuxt.hooks.hook('nitro:init', async (nitro) => {
        console.log('Ready to create library temp index...')
        const timeElapsed = Date.now()
        const now = new Date(timeElapsed)

        const esLibraryIndexTemp = nuxt.options.runtimeConfig.public.esTempIndex
        console.log('Index named:' + esLibraryIndexTemp)
        // https://www.elastic.co/guide/en/elasticsearch/reference/current/flattened.html
        try {
          const response = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/${esLibraryIndexTemp}`, {
            headers: {
              Authorization: `ApiKey ${nuxt.options.runtimeConfig.esWriteKey}`,
              'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify({
              mappings: {
                properties: {
                  blocks: { // TODO Making all flexible blocks flattened in ES to avoid any performnce issues further
                    type: 'flattened'
                  }
                }
              },
              settings: {
                'index.mapping.total_fields.limit': 1500, // Or a suitable limit
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
          const body = await response.text()
          const testJson = JSON.parse(body)
          console.log('Index created:' + JSON.stringify(testJson))
          console.log('Elastic Search index created succesfully!')
        } catch (err) {
          console.error('Error:', err)
          console.error('Response body:', body)
          throw err
        }
      })
    }
    console.log('Nuxt module end ')
  }
})
