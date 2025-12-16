import { defineNuxtModule } from 'nuxt/kit'
import fetch from 'node-fetch'
export default defineNuxtModule({

  setup(options, nuxt) {
    // console.log('Nuxt module start ')
    // console.log('process.env.NODE_ENV:' + process.env.NODE_ENV)
    if (!nuxt.options._prepare && process.env.NODE_ENV !== 'development') {
      nuxt.hooks.hook('nitro:init', async (nitro) => {
        // console.log('Ready to create library temp index...')
        const timeElapsed = Date.now()
        const now = new Date(timeElapsed)

        const esLibraryIndexTemp = nuxt.options.runtimeConfig.public.esTempIndex
        console.log('Index named:' + esLibraryIndexTemp)
        if (!nuxt.options.runtimeConfig.public.esURL || !esLibraryIndexTemp) {
          throw new Error('Invalid configuration: esURL or esLibraryIndexTemp is missing.' + nuxt.options.runtimeConfig.public.esURL + ' ' + esLibraryIndexTemp)
        }
        const url = `${nuxt.options.runtimeConfig.public.esURL}/${esLibraryIndexTemp}`
        console.log('Constructed URL:', url)

        // https://www.elastic.co/guide/en/elasticsearch/reference/current/flattened.html
        try {
          const response = await fetch(url, {
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
                  },
                  nameFirst: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                        ignore_above: 256
                      },
                      autocomplete: {
                        type: 'text',
                        analyzer: 'name_autocomplete',
                        search_analyzer: 'name_search'
                      }
                    }
                  },
                  nameLast: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                        ignore_above: 256
                      },
                      autocomplete: {
                        type: 'text',
                        analyzer: 'name_autocomplete',
                        search_analyzer: 'name_search'
                      }
                    }
                  },
                  academicDepartments: {
                    properties: {
                      id: {
                        type: 'text',
                        fields: {
                          keyword: {
                            type: 'keyword',
                            ignore_above: 256
                          },
                        },
                        analyzer: 'default'
                      },
                      title: {
                        type: 'text',
                        fields: {
                          keyword: {
                            type: 'keyword',
                            ignore_above: 256
                          },
                          autocomplete: {
                            type: 'text',
                            analyzer: 'name_autocomplete',
                            search_analyzer: 'name_search'
                          }
                        },
                      }
                    }
                  },
                },
              },
              settings: {
                index: {
                  // 🔹 Keep shard usage low for temp index
                  number_of_shards: 1,
                  number_of_replicas: 0,
                  mapping: {
                    total_fields: {
                      limit: 1500
                    }
                  }
                },
                analysis: {
                  char_filter: {
                    remove_hyphen: {
                      type: 'pattern_replace',
                      pattern: '-',
                      replacement: ''
                    }
                  },
                  tokenizer: {
                    edge_ngram_tokenizer: {
                      type: 'edge_ngram',
                      min_gram: 2,
                      max_gram: 20,
                      token_chars: ['letter', 'digit']
                    }
                  },
                  analyzer: {
                    name_autocomplete: {
                      tokenizer: 'edge_ngram_tokenizer',
                      filter: ['lowercase']
                    },
                    name_search: {
                      tokenizer: 'standard',
                      filter: ['lowercase']
                    },
                    default: {
                      type: 'custom',
                      tokenizer: 'standard',
                      char_filter: ['remove_hyphen'],
                      filter: ['lowercase', 'stop', 'asciifolding', 'stemmer'],
                    },
                    default_search: {
                      type: 'custom',
                      tokenizer: 'standard',
                      char_filter: ['remove_hyphen'],
                      filter: ['lowercase', 'stop', 'asciifolding', 'stemmer'],
                    }
                  },
                }
              }
            }),
          })
          const body = await response.text()
          if (body) {
            const testJson = JSON.parse(body)
            console.log('Index created:' + JSON.stringify(testJson))
            console.log('Elastic Search index created succesfully!')
          }
        } catch (err) {
          console.error('Error:', err)
          if (typeof body !== 'undefined') {
            console.error('Response body:', body)
          } else {
            console.error('Response body is undefined')
          }
          throw err
        }
      })
    }
    // console.log('Nuxt module end ')
  }
})
