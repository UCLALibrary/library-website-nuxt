export default defineNuxtRouteMiddleware((to) => {
  const filters = to.query.filters

  // Check if the filters parameter matches the condition
  if (filters && filters === '{"subjectLibrarian.keyword":"yes"}') {
    // Modify the query parameter
    const newFilters = 'subjectLibrarian.keyword:(yes)'

    // Construct the new query object
    const newQuery = { ...to.query, filters: newFilters }

    // Redirect to the new URL with updated query parameters
    return navigateTo({ path: to.path, query: newQuery })
  }
})
