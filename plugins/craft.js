import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core"

export default defineNuxtPlugin((nuxtApp) => {
    const route = useRoute()

    const config = useRuntimeConfig()

    // wordpress backend graphql link
    const httpLink = new HttpLink({
        uri: config.public.craftGraphqlURL,
        headers: {
            "X-Craft-Token": route.query.token,
        },
    })
    // Cache implementation
    const cache = new InMemoryCache()

    // Create the apollo client
    const apolloClient = new ApolloClient({
        link: httpLink,
        cache,
    })
    nuxtApp._apolloClients.default = apolloClient
})
