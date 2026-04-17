// Address type issue of unknown with $graphql in Nuxt context

import type { GraphQLClient } from 'graphql-request'

declare module '#app' {
  interface NuxtApp {
    $graphql: {
      default: GraphQLClient
    }
  }
}

export { }
