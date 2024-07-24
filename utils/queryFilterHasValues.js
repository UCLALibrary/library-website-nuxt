function queryFilterHasValues(filters, configFilters) {
  if (!filters) return false
  const routeQueryFilters = (typeof filters === 'string' || filters instanceof String)
    ? JSON.parse(filters)
    : filters
  /* console.log(
              "is route query exixts:" + JSON.stringify(routeQueryFilters)
          ) */

  for (const filter of configFilters) {
    if (
      Array.isArray(routeQueryFilters[filter.esFieldName]) &&
      routeQueryFilters[filter.esFieldName].length > 0
    ) {
      /* console.log(
                      "why is this true is Array: " +
                          routeQueryFilters[filter.esFieldName]
                  ) */
      return true
    } else if (
      routeQueryFilters[filter.esFieldName] &&
      !Array.isArray(routeQueryFilters[filter.esFieldName]) &&
      routeQueryFilters[filter.esFieldName] !== ''
    ) {
      /* console.log(
                      "why is this truenot Array: " +
                          routeQueryFilters[filter.esFieldName] +
                          "config filter name is " +
                          filter.esFieldName
                  ) */
      return true
    }
  }
  return false
}
export default queryFilterHasValues
