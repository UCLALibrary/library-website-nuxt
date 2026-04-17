// composables/useDataApi.js
// Converted from your Nuxt plugin to a composable (Nuxt 3, JavaScript)

export default function useDataAPI() {
  const config = useRuntimeConfig()

  function hasEsConfig() {
    return Boolean(config.public.esReadKey && config.public.esURL && config.public.esAlias)
  }

  async function getMapping() {
    if (!hasEsConfig()) return

    const response = await fetch(
      `${config.public.esURL}/${config.public.esAlias}/_mapping`,
      {
        headers: {
          Authorization: `ApiKey ${config.public.esReadKey}`,
        },
      }
    )

    return await response.json()
  }

  function parseSort(sortField, orderBy = 'asc') {
    if (!sortField || sortField === '') return {}
    return {
      sort: [
        {
          [sortField]: { order: orderBy },
        },
      ],
    }
  }

  function parseSectionHandle(sectionHandle) {
    // Your original logic: if empty string, return []
    if (sectionHandle && sectionHandle === '') return []
    if (!sectionHandle) return []

    return [
      {
        query_string: {
          query: sectionHandle,
        },
      },
    ]
  }

  function parseFilterQuery(filters) {
    // Your original function expects an object, but checks length.
    // This keeps behavior: return [] if no filters or empty.
    if (!filters || Object.keys(filters).length === 0) return []

    const boolQuery = []

    for (const key in filters) {
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

    return boolQuery
  }

  function parseFieldNames(fields) {
    const aggsFields = {}

    for (const element of fields || []) {
      aggsFields[element.label] = {
        terms: {
          field: element.esFieldName,
          size: 25,
        },
      }
    }

    return aggsFields
  }

  async function getAggregations(fields, sectionHandle) {
    if (!hasEsConfig()) return
    if (!fields || fields.length === 0) return

    const response = await fetch(
      `${config.public.esURL}/${config.public.esAlias}/_search`,
      {
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
              default_field: 'sectionHandle',
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
    searchFields = [],
    sectionHandle,
    filters = {},
    sort,
    orderBy,
    source = ['*'],
    aggFields = [],
    extraFilters = []
  ) {
    if (!hasEsConfig()) return

    const queryBody = {
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
            ...(extraFilters || []),
          ],
        },
      },
      ...parseSort(sort, orderBy),
      aggs: {
        ...parseFieldNames(aggFields),
      },
    }

    const response = await fetch(
      `${config.public.esURL}/${config.public.esAlias}/_search`,
      {
        headers: {
          Authorization: `ApiKey ${config.public.esReadKey}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(queryBody),
      }
    )

    return await response.json()
  }

  return {
    getMapping,
    keywordSearchWithFilters,
    getAggregations,
  }
}
