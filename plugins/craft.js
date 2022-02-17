export default function ({ $graphql, query }) {
    // Create $craft and inject it into Vue components
    // Usage: `this.$craft({ query: gqlQuery, variables: { uri: `code/${this.$route.params.slug}` } })`
    
    // Create KY instance
    // const $craft = $http.create({
    //     prefixUrl: $config.craftApiUrl,
    // })
  
    // Add GraphQL authorization token for non-public schemas
    // if ($config.craftAuthToken !== '') {
    //     $craft.setToken($config.craftAuthToken, 'Bearer');
    // }
  
    // If `token` is set in query parameters, pass it along to Craft API endpoint
    // console.log("in craftjs plugin : token= ", query.token)
    $graphql.default.setHeader( 'X-Craft-Token', query.token )
    // inject('craftToken', query.token ? query.token : '')
}
