import { defineNuxtModule, addTemplate } from 'nuxt/kit'
import fetch from 'node-fetch'
export default defineNuxtModule({

  async setup(options, nuxt) {
    console.log('Nuxt module start ')
    console.log('process.env.NODE_ENV:' + process.env.NODE_ENV)
    if (!nuxt.options._prepare && process.env.NODE_ENV !== 'development') {
      console.log('Ready to create library temp index...')
      const timeElapsed = Date.now()
      const now = new Date(timeElapsed)

      const esLibraryIndexTemp = `${nuxt.options.runtimeConfig.public.esIndexPrefix}-${now.toISOString().toLowerCase().replaceAll(':', '-')}`
      console.log('Index named:' + esLibraryIndexTemp)
      try {
        const response = await fetch(`${nuxt.options.runtimeConfig.public.esURL}/${esLibraryIndexTemp}`, {
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
        const body = await response.text()
        const testJson = JSON.parse(body)

        nuxt.options.tempIndex = esLibraryIndexTemp
        nuxt.options.runtimeConfig.public.esTempIndex = esLibraryIndexTemp

        console.log('Index created:' + JSON.stringify(testJson))
        console.log('Elastic Search index created succesfully!')
      } catch (err) {
        console.error('Error:', err)
        console.error('Response body:', body)
        throw err
      }
    }
    console.log('Nuxt module end ')
  }
})
