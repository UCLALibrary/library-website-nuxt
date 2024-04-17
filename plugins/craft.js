export default defineNuxtPlugin((nuxtApp) => { //
  const route = useRoute()
  const { $graphql } = useNuxtApp()
  // If `token` is set in query parameters, pass it along to Craft API endpoint
  // console.log("in craftjs plugin : token= ", route.query.token)
  // console.log("In craft.js "+ JSON.stringify(route.query))
  $graphql.default.setHeader('X-Craft-Token', route.query.token)
})
