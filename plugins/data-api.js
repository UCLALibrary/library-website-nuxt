/*
    {"id":"j6tUj4IBzYVXfPB9-JvU","name":"dev-es-key","api_key":"N_f0_5WSSae3QOvm4hlq0g","encoded":"ajZ0VWo0SUJ6WVZYZlBCOS1KdlU6Tl9mMF81V1NTYWUzUU92bTRobHEwZw=="}
    */

// TODO still need to convert this function
// async function siteSearch(
//     keyword = "*",
//     from = 0,
//     queryFilters,
//     configMapping
// ) {
//     //var data_url = new URL(`${ES_URL}/apps-dev-library-website/_search`)
//     if (
//         $config.esReadKey === "" ||
//         $config.esURL === "" ||
//         $config.esIndex === ""
//     )
//         return
//     console.log("keyword:" + keyword)
//     /*if(keyword && keyword !== "*:*") {
//         keyword = keyword.replace(/([\!\*\+\&\|\(\)\[\]\{\}\^\~\?\:\"])/g, "\\$1")
//     }*/
//     console.log("Hello from dataapi",
//         JSON.stringify({
//             from: from,
//             indices_boost: [
//                 { "`${$config.esTempIndex}`": 1.4 },
//                 { "`${$config.libguidesEsIndex}`": 1.3 }
//             ],
//             query: {
//                 bool: {
//                     must: [
//                         {
//                             query_string: {
//                                 query:
//                                     "(" +
//                                     keyword +
//                                     " AND NOT(sectionHandle:event)) OR (" +
//                                     keyword +
//                                     " AND startDateWithTime:[now TO *] AND sectionHandle:event)",
//                                 fields: [
//                                     "title^4",
//                                     "summary^3",
//                                     "text^3",
//                                     "richText^2",
//                                 ],
//                                 fuzziness: "auto",
//                             },
//                         },
//                     ],
//                     filter: [...parseFilterQuerySiteSearch(queryFilters, configMapping)],
//                 },
//             },
//         })
//     )

//     // dataAlias returns:
//     // {
//     //     "apps-dev-parinita-local-2023-09-12t19-40-30.171z" : {
//     //       "aliases" : {
//     //         "apps-dev-current-library-website" : { }
//     //       }
//     //     },
//     //     "apps-dev-libguides" : {
//     //       "aliases" : {
//     //         "apps-dev-current-library-website" : { }
//     //       }
//     //     }
//     //   }

//     const responseAlias = await fetch(
//         `${$config.esURL}/_alias/${$config.esIndex}`,
//         {
//             headers: {
//                 Authorization: `ApiKey ${$config.esReadKey}`,
//                 "Content-Type": "application/json",
//             },
//         }
//     )
//     const dataAlias = await responseAlias.json()

//     // use omputed values for object keys: indices_boost: [ { [libraryIndex]: 3.0 },{ [libguideIndex]: 1.3 }],
//     const libraryIndex = !Object.keys(dataAlias)[0].includes('libguides') ? Object.keys(dataAlias)[0] : Object.keys(dataAlias)[1]
//     const libguideIndex = Object.keys(dataAlias)[1].includes('libguides') ? Object.keys(dataAlias)[1] : Object.keys(dataAlias)[0]

//     const response = await fetch(
//         `${$config.esURL}/${$config.esIndex}/_search`,
//         {
//             headers: {
//                 Authorization: `ApiKey ${$config.esReadKey}`,
//                 "Content-Type": "application/json",
//             },
//             method: "POST",
//             body: JSON.stringify({
//                 from: from,
//                 indices_boost: [
//                     { [libraryIndex]: 3.0 },
//                     { [libguideIndex]: 1.3 }
//                 ],
//                 query: {
//                     bool: {
//                         must: [
//                             {
//                                 query_string: {
//                                     query:
//                                         "(" +
//                                         keyword +
//                                         " AND NOT(sectionHandle:event)) OR (" +
//                                         keyword +
//                                         " AND startDateWithTime:[now TO *] AND sectionHandle:event)",
//                                     fields: [
//                                         "title^4",
//                                         "summary^3",
//                                         "text^3",
//                                         "fullText^2",
//                                         "richText^2",
//                                         "sectionHandle",
//                                         "sectionHandleDisplayName"
//                                     ],
//                                     fuzziness: "auto",
//                                 },
//                             },
//                         ],
//                         filter: [...parseFilterQuerySiteSearch(queryFilters, configMapping)],
//                     },
//                 },
//             }),
//         }
//     )
//     const data = await response.json()
//     return data
// }

// TODO still need to convert this function
// function parseFilterQuerySiteSearch(queryFilters, configMapping) {
//     console.log("In parseFilterQuerySiteSearch")
//     if (!queryFilters || queryFilters.length == 0) return []
//     let boolQuery = []
//     /*
// [
//         {
//             "term": {
//                 "sectionHandle.keyword":"Powell"
//             }
//         }
//     ]

// */
//     for (const key in queryFilters) {
//         // console.log(key)

//         if (Array.isArray(queryFilters[key]) && queryFilters[key].length > 0) {
//             let filterObj = { terms: {} }
//             let values = []
//             for (let value of queryFilters[key]) {
//                 const element = configMapping.find(element => element.key === value)
//                 values.push(element && element.terms)
//             }
//             // console.log("final values",values)
//             filterObj.terms[key] = values.flat()
//             boolQuery.push(filterObj)
//         }
//     }
//     // console.log("bool query:"+JSON.stringify(boolQuery))
//     return boolQuery
// }

// TODO
// async function getMapping() {
// if (
//   $config.esReadKey === '' ||
//             $config.esURL === '' ||
//             $config.esIndex === ''
// )
//   return
// const response = await fetch(
//             `${$config.esURL}/${$config.esIndex}/_mapping`,
//             {
//               headers: {
//                 Authorization: `ApiKey ${$config.esReadKey}`,
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//               },
//             }
// )
// const data = await response.json()
// return data
// }
// // TODO
// async function getAggregationsForSiteSearch(fields) {
//     // console.log("search text: "+fields)
//     if (!fields || fields.length == 0) return
//     const response = await fetch(
//         `${$config.esURL}/${$config.esIndex}/_search`,
//         {
//             headers: {
//                 Authorization: `ApiKey ${$config.esReadKey}`,
//                 "Content-Type": "application/json",
//             },
//             method: "POST",
//             body: JSON.stringify({
//                 size: 0,
//                 query: {
//                     match_all: {},
//                 },
//                 aggs: {
//                     ...parseFieldNames(fields),
//                 },
//             }),
//         }
//     )
//     const data = await response.json()
//     return data.aggregations
// }

// // TODO
// async function getAggregations(fields, sectionHandle) {
//     // console.log("search text: "+fields)
//     if (!fields || fields.length == 0) return
//     const response = await fetch(
//         `${$config.esURL}/${$config.esIndex}/_search`,
//         {
//             headers: {
//                 Authorization: `ApiKey ${$config.esReadKey}`,
//                 "Content-Type": "application/json",
//             },
//             method: "POST",
//             body: JSON.stringify({
//                 size: 0,
//                 query: {
//                     query_string: {
//                         query: sectionHandle,
//                         default_field: "sectionHandle"
//                     },
//                 },
//                 aggs: {
//                     ...parseFieldNames(fields),
//                 },
//             }),
//         }
//     )
//     const data = await response.json()
//     return data.aggregations
// }
const config = useRuntimeConfig()

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
  console.log('In data api keywordsearchwithfilters')
  // console.log($config.esReadKey)
  // console.log($config.esURL)
  if (
    config.esReadKey === '' ||
            config.esURL === '' ||
            config.esIndex === ''
  )
    return
  console.log('keyword:' + keyword)
  console.log('filters:' + filters)
  console.log('sort:' + sort)

  const testquery = JSON.stringify({
    _source: [...source],
    query: {
      bool: {
        must: [
          {
            query_string: {
              query: keyword,
              fields: [...searchFields],
              fuzziness: 'auto',
            },
          },
          ...parseSectionHandle(sectionHandle),
          ...parseFilterQuery(filters),
        ],
      },
    },
    ...parseSort(sort),
  })
  console.log('this is the query: ' + testquery)

  // need to know fields to boost on for listing pages when searching like title etc

  const responseAlias = await fetch(
            `${config.esURL}/_alias/${config.esIndex}`,
            {
              headers: {
                Authorization: `ApiKey ${config.esReadKey}`,
                'Content-Type': 'application/json',
              },
            }
  )
  const dataAlias = await responseAlias.json()

  // use omputed values for object keys: indices_boost: [ { [libraryIndex]: 3.0 },{ [libguideIndex]: 1.3 }],
  const libraryIndex = !Object.keys(dataAlias)[0].includes('libguides') ? Object.keys(dataAlias)[0] : Object.keys(dataAlias)[1]

  const response = await fetch(
            `${config.esURL}/${libraryIndex}/_search`, // replace alias with indexname
            {
              headers: {
                Authorization: `ApiKey ${config.esReadKey}`,
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
                        query_string: {
                          query: keyword,
                          fields: [...searchFields],
                          fuzziness: 'auto',
                        },
                      },
                      ...parseSectionHandle(sectionHandle),
                      ...parseFilterQuery(filters),
                      ...extraFilters,
                    ],
                  },
                },
                ...parseSort(sort, orderBy),
                aggs: {
                  ...parseFieldNames(aggFields),
                },
              }),
            }
  )
  const data = await response.json()
  return data
}

function parseSort(sortField, orderBy = 'asc') {
  if (!sortField || sortField === '') return {}
  const parseQuery = {}
  parseQuery.sort = []
  parseQuery.sort[0] = {}
  parseQuery.sort[0][sortField] = { order: orderBy }

  return parseQuery
}

function parseSectionHandle(sectionHandle) {
  // console.log(sectionHandle)
  if (sectionHandle && sectionHandle === '') return []
  // console.log("where is the execution")
  const boolQuery = []
  const sectionHandleTermQueryObj = {}
  sectionHandleTermQueryObj.query_string = {}
  sectionHandleTermQueryObj.query_string.query = sectionHandle
  boolQuery.push(sectionHandleTermQueryObj)
  // console.log("query:" + boolQuery)
  return boolQuery
}

function parseFilterQuery(filters) {
  if (!filters || filters.length === 0) return []
  const boolQuery = []
  /*
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
      const filterObj = { terms: {} }
      filterObj.terms[key] = filters[key]
      boolQuery.push(filterObj)
    } else if (!Array.isArray(filters[key]) && filters[key] !== '') {
      const filterObj = { term: {} }
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

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      dataApi: {
        // getMapping,
        // siteSearch,
        keywordSearchWithFilters,
        // getAggregations,
        // getAggregationsForSiteSearch
      }
    }
  }
})
