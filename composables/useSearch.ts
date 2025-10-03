export default function useSearch() {
  return { siteSearch, getMapping, getAggregationsForSiteSearch, getAggregations, keywordSearchWithFilters }
}

/*
    {"id":"j6tUj4IBzYVXfPB9-JvU","name":"dev-es-key","api_key":"N_f0_5WSSae3QOvm4hlq0g","encoded":"ajZ0VWo0SUJ6WVZYZlBCOS1KdlU6Tl9mMF81V1NTYWUzUU92bTRobHEwZw=="}
*/

async function siteSearch(
  keyword = '*',
  from = 0,
  queryFilters,
  configMapping
) {
  const config = useRuntimeConfig()
  // var data_url = new URL(`${ES_URL}/apps-dev-library-website/_search`)
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/flattened.html
  if (
    config.public.esReadKey === '' ||
    config.public.esURL === '' ||
    config.public.esAlias === ''
  )
    return

  // dataAlias returns:
  // {
  //     "apps-dev-parinita-local-2023-09-12t19-40-30.171z" : {
  //       "aliases" : {
  //         "apps-dev-current-library-website" : { }
  //       }
  //     },
  //     "apps-dev-libguides" : {
  //       "aliases" : {
  //         "apps-dev-current-library-website" : { }
  //       }
  //     }
  //   }

  const responseAlias = await fetch(
    `${config.public.esURL}/_alias/${config.public.esAlias}`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
  }
  )
  const dataAlias = await responseAlias.json()
  const searchFields = [
    'title^6',
    'nameFirst.autocomplete^3',
    'nameLast.autocomplete^3',
    'summary^3',
    'text^3',
    'fullText^2',
    'richText^2',
    'sectionHandle',
    'sectionHandleDisplayName'
  ]
  // use computed values for object keys: indices_boost: [ { [libraryIndex]: 3.0 },{ [libguideIndex]: 1.3 }],
  const libraryIndex = !Object.keys(dataAlias)[0].includes('libguides') ? Object.keys(dataAlias)[0] : Object.keys(dataAlias)[1]
  const libguideIndex = Object.keys(dataAlias)[1].includes('libguides') ? Object.keys(dataAlias)[1] : Object.keys(dataAlias)[0]

  const response = await fetch(
    `${config.public.esURL}/${config.public.esAlias}/_search`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      from,
      indices_boost: [{
        [libraryIndex]: 3.0
      },
      {
        [libguideIndex]: 1.3
      }
      ],
      query: {
        bool: {
          must: [{
            multi_match: {
              query: keyword,
              fields: [
                'title^6',
                'nameFirst.autocomplete^3',
                'nameLast.autocomplete^3',
                'summary^3',
                'text^3',
                'fullText^2',
                'richText^2',
                'sectionHandle',
                'sectionHandleDisplayName'
              ],
              type: 'best_fields',
            },
          },],
          should: [
            ...parseShouldQuery(keyword, searchFields),
          ],
          filter: [...parseFilterQuerySiteSearch(queryFilters, configMapping)],
        },
      },
    }),
  }
  )
  let data = await response.json()
  if (data?.hits?.total.value === 0 || data?.hits?.hits.length === 0) {
    data = await performFuzzySearch(keyword, searchFields, queryFilters, configMapping)
    // console.log("Fuzzy search performed")
    // console.log("Fuzzy search performed", data)
    if (data?.hits?.total.value > 10)
      if (data && data.hits && data.hits.total) {
        data.hits.total.value = 10
      }
    data.fuzzySearchPerformed = true
  } else {
    // console.log("Fuzzy search not performed")
    data.fuzzySearchPerformed = false
  }
  return data
}

function parseFilterQuerySiteSearch(queryFilters, configMapping) {
  // console.log('In parseFilterQuerySiteSearch')
  if (!queryFilters || queryFilters.length === 0) return []
  const boolQuery = []
  /* this method will return data in this structure for ES
[
        {
            "term": {
                "sectionHandle.keyword":"Powell"
            }
        }
    ]

*/
  for (const key in queryFilters) {
    // console.log(key)

    if (Array.isArray(queryFilters[key]) && queryFilters[key].length > 0) {
      const filterObj = {
        terms: {}
      }
      const values = []
      for (const value of queryFilters[key]) {
        const element = configMapping.find(element => element.key === value)
        values.push(element && element.terms)
      }
      // console.log("final values",values)
      filterObj.terms[key] = values.flat()
      boolQuery.push(filterObj)
    }
  }
  // console.log("bool query:"+JSON.stringify(boolQuery))
  return boolQuery
}

async function getMapping() {
  const config = useRuntimeConfig()
  if (
    config.public.esReadKey === '' ||
    config.public.esURL === '' ||
    config.public.esAlias === ''
  )
    return
  const response = await fetch(
    `${config.public.esURL}/${config.public.esAlias}/_mapping`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  )
  const data = await response.json()
  return data
}

async function getAggregationsForSiteSearch(fields) {
  // console.log("search text: "+fields)
  const config = useRuntimeConfig()
  if (!fields || fields.length === 0) return
  const response = await fetch(
    `${config.public.esURL}/${config.public.esAlias}/_search`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      size: 0,
      query: {
        match_all: {},
      },
      aggs: {
        ...parseFieldNames(fields),
      },
    }),
  }
  )
  const data = await response.json()
  return data.aggregations
}

async function getAggregations(fields, sectionHandle) {
  // console.log("search text: "+fields)
  const config = useRuntimeConfig()
  if (!fields || fields.length === 0) return
  const response = await fetch(
    `${config.public.esURL}/${config.public.esAlias}/_search`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      size: 0,
      query: {
        query_string: {
          query: sectionHandle,
          default_field: 'sectionHandle'
        },
      },
      aggs: {
        ...parseFieldNames(fields),
      },
    }),
  }
  )
  const data = await response.json()
  return data.aggregations
}

async function keywordSearchWithFilters(
  keyword = '*:*',
  searchFields,
  sectionHandle,
  filters,
  sort,
  orderBy,
  source = ['*'],
  aggFields = [],
  extraFilters = [],
) {
  // var data_url = new URL(`${ES_URL}/apps-dev-library-website/_search`)
  // console.log('In data api keywordsearchwithfilters')
  const config = useRuntimeConfig()
  // console.log(config.public.esReadKey)
  // console.log(config.public.esURL)
  if (
    config.public.esReadKey === '' ||
    config.public.esURL === '' ||
    config.public.esAlias === ''
  )
    return
  // console.log('keyword:' + keyword)
  // console.log('filters:' + filters)
  // console.log('sort:' + sort)

  // need to know fields to boost on for listing pages when searching like title etc
  const responseAlias = await fetch(
    `${config.public.esURL}/_alias/${config.public.esAlias}`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
  }
  )
  const dataAlias = await responseAlias.json()

  // use computed values for object keys: indices_boost: [ { [libraryIndex]: 3.0 },{ [libguideIndex]: 1.3 }],
  const libraryIndex = !Object.keys(dataAlias)[0].includes('libguides') ? Object.keys(dataAlias)[0] : Object.keys(dataAlias)[1]
  const sectionHandleFilter = parseSectionHandle(sectionHandle)[0]
  const response = await fetch(
    `${config.public.esURL}/${libraryIndex}/_search`, // replace alias with indexname
    {
      headers: {
        Authorization: `ApiKey ${config.public.esReadKey}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        size: '1000',
        _source: [...source],
        query: {
          bool: {
            must: [
              ...parseMultiMatchQueryOrQueryString(keyword, searchFields),
              ...parseFilterQuery(filters),
              ...extraFilters,
            ],
            should: [
              ...parseShouldQuery(keyword, searchFields),
            ],
            ...(sectionHandleFilter && { filter: sectionHandleFilter }),
          },
        },
        ...parseSort(sort, orderBy),
        /* aggs: {
          ...parseFieldNames(aggFields),
        }, */
      }),
    }
  )
  let data = await response.json()
  if (data?.hits?.total.value === 0) {
    data = await performFuzzySearchForListing(keyword, source, searchFields, filters, extraFilters, sort, orderBy)
    data.fuzzySearchPerformed = true
  }
  return data
}

interface ParseQueryType {
  sort: {
    [key: string]: {
      order: string
    }
  }[]
}

function parseSort(sortField, orderBy = 'asc') {
  if (!sortField || sortField === '') return {}
  const parseQuery: ParseQueryType = { sort: [] }
  /**
     * { "_score": "desc" },
     */
  parseQuery.sort[0] = {}
  parseQuery.sort[0]._score = {
    order: 'desc'
  }
  parseQuery.sort[1] = {}
  parseQuery.sort[1][sortField] = {
    order: orderBy
  }

  return parseQuery
}

function parseSectionHandle(sectionHandleValues) {
  if (sectionHandleValues && sectionHandleValues.length === 0) return []

  if (sectionHandleValues.length === 3) {
    if (sectionHandleValues.includes('serviceOrResource') && sectionHandleValues.includes('workshopSeries') && sectionHandleValues.includes('helpTopic')) {
      return [parseExternalResourceFilterQuery(sectionHandleValues)]
    }
  }
  const boolQuery = []
  const sectionHandleTermQueryObj = {}
  if (sectionHandleValues.length === 1) sectionHandleTermQueryObj.term = { 'sectionHandle.keyword': sectionHandleValues[0] }
  else sectionHandleTermQueryObj.terms = { 'sectionHandle.keyword': sectionHandleValues }
  boolQuery.push(sectionHandleTermQueryObj)
  // console.log('query:' + JSON.stringify(boolQuery))
  return boolQuery
}

function parseExternalResourceFilterQuery(filters) {
  /**
   * "bool": {
          "should": [
            {
              "terms": {
                "sectionHandle.keyword": [
                  "serviceOrResource",
                  "workshopSeries",
                  "helpTopic"
                ]
              }
            },
            {
              "bool": {
                "must": [
                  {
                    "term": {
                      "sectionHandle.keyword": "externalResource"
                    }
                  },
                  {
                    "term": {
                      "displayEntry.keyword": "yes"
                    }
                  }
                ]
              }
            }
          ],
          "minimum_should_match": 1
        }
   */
  if (filters && filters.length === 0) return []
  const boolQuery = { bool: { should: [], minimum_should_match: 1 } }
  const shouldQuery = []
  const termsQuery = {
    terms: {
      'sectionHandle.keyword': filters,
    },
  }
  const mustQuery = {
    bool: {
      must: [
        {
          term: {
            'sectionHandle.keyword': 'externalResource'
          },
        },
        {
          term: {
            'displayEntry.keyword': 'yes'
          },
        },
      ],
    },
  }
  shouldQuery.push(termsQuery)
  shouldQuery.push(mustQuery)
  boolQuery.bool.should = shouldQuery
  // console.log("bool query:" + JSON.stringify(boolQuery))
  return boolQuery
}

function parseFilterQuery(filters) {
  if (!filters || filters.length === 0) return []
  const boolQuery = []
  /* Example structure we want this function to return for ES
      [
              {
                  "term": {
                      "locations.title.keyword":"Powell"
                  }
              }
          ]

      */
  for (const key in filters) {
    // console.log(key)
    if (Array.isArray(filters[key]) && filters[key].length > 0) {
      const filterObj = {
        terms: {}
      }
      filterObj.terms[key] = filters[key]
      boolQuery.push(filterObj)
    } else if (!Array.isArray(filters[key]) && filters[key] !== '') {
      const filterObj = {
        term: {}
      }
      filterObj.term[key] = filters[key]
      boolQuery.push(filterObj)
    }
  }
  // console.log("bool query:"+JSON.stringify(boolQuery))
  return boolQuery
}

function parseFieldNames(fields) {
  const aggsFields = {}
  for (const element of fields) {
    // console.log(element)
    aggsFields[element.label] = {
      terms: {
        field: element.esFieldName,
        size: 25,
      },
    }
  }
  // console.log("aggsFields:" + JSON.stringify(aggsFields))
  return aggsFields
}
function parseMultiMatchQueryOrQueryString(keyword: string, searchFields: any) {
  /*
  {
              multi_match: {
                query: keyword,
                fields: [...searchFields],
                type: "best_fields"
              },
            },
  */
  // console.log('In parseMultiMatchQuery')
  // console.log(keyword, searchFields)
  if (keyword.includes('searchType:accessCollection')) {
    return [{
      query_string: {
        query: keyword,
        fields: searchFields
      }
    }]
  }

  if (keyword === '*') return [{ match_all: {} }]
  else
    return [
      {
        multi_match: {
          query: keyword,
          fields: [...searchFields],
          type: 'best_fields',
        },
      },
    ]
}
function parseShouldQuery(keyword: string, searchFields: any) {
  /*
  {
                multi_match: {
                  query: keyword,
                  fields: [...searchFields],
                  fuzziness: "AUTO"
                }
              },
              {
                match_phrase: {
                  title: {
                    query: keyword,
                    boost: 3
                  }
                }
              }
  */
  if (keyword === '*') return [{ match_all: {} }]
  else
    return [
      {
        multi_match: {
          query: keyword,
          fields: [...searchFields],
          fuzziness: 'AUTO'
        }
      },
      {
        match_phrase: {
          title: {
            query: keyword,
            boost: 3
          }
        }
      },
    ]
}
async function performFuzzySearch(keyword: string, searchFields: string[], queryFilters: any, configMapping: any): Promise<any> {
  const config = useRuntimeConfig()

  if (
    config.public.esReadKey === '' ||
    config.public.esURL === '' ||
    config.public.esAlias === ''
  ) {
    return
  }

  const responseAlias = await fetch(
    `${config.public.esURL}/_alias/${config.public.esAlias}`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
  })

  const dataAlias = await responseAlias.json()
  const libraryIndex = !Object.keys(dataAlias)[0].includes('libguides') ? Object.keys(dataAlias)[0] : Object.keys(dataAlias)[1]
  const libguideIndex = Object.keys(dataAlias)[1].includes('libguides') ? Object.keys(dataAlias)[1] : Object.keys(dataAlias)[0]

  const response = await fetch(
    `${config.public.esURL}/${config.public.esAlias}/_search`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      from: 0,
      size: '10',
      indices_boost: [
        { [libraryIndex]: 3.0 },
        { [libguideIndex]: 1.3 }
      ],
      query: {
        bool: {
          must: [
            {
              multi_match: {
                query: keyword,
                fields: searchFields,
                fuzziness: 'AUTO',
              },
            },
          ],
          filter: [...parseFilterQuerySiteSearch(queryFilters, configMapping)],
        },
      },
    }),
  })

  const data = await response.json()
  return data
}
async function performFuzzySearchForListing(
  keyword: string,
  source: string[],
  searchFields: any,
  filters: any,
  extraFilters: any[],
  sort: any,
  orderBy: any
): Promise<any> {
  const config = useRuntimeConfig()

  if (
    config.public.esReadKey === '' ||
    config.public.esURL === '' ||
    config.public.esAlias === ''
  ) {
    return
  }

  const responseAlias = await fetch(
    `${config.public.esURL}/_alias/${config.public.esAlias}`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
  })

  const dataAlias = await responseAlias.json()
  const libraryIndex = !Object.keys(dataAlias)[0].includes('libguides') ? Object.keys(dataAlias)[0] : Object.keys(dataAlias)[1]

  const response = await fetch(
    `${config.public.esURL}/${libraryIndex}/_search`, {
    headers: {
      Authorization: `ApiKey ${config.public.esReadKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      size: '1000',
      _source: [...source],
      query: {
        bool: {
          must: [
            {
              multi_match: {
                query: keyword,
                fields: searchFields,
                fuzziness: 'AUTO',
              },
            },
            ...parseFilterQuery(filters),
            ...extraFilters,
          ],
        },
      },
      ...parseSort(sort, orderBy),
    }),
  })

  const data = await response.json()
  return data
}
