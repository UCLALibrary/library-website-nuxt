
export default defineNuxtPlugin((nuxtApp) => { // eslint-disable-line no-undef
  const route = useRoute() // eslint-disable-line no-undef

  const config = useRuntimeConfig() // eslint-disable-line no-undef

  // craft cms graphql link
  /*const httpLink = new HttpLink({
    uri: config.public.craftGraphqlURL,
    headers: {
      'X-Craft-Token': route.query.token
    }
  })
  // Cache implementation
  const cache = new InMemoryCache()

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache
  })
  nuxtApp._apolloClients.default = apolloClient*/
})
