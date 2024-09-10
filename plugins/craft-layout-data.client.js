// GQL
import Layout from '../gql/queries/Layout.gql'

export default defineNuxtPlugin((nuxtApp) => { //
  const { $graphql } = useNuxtApp()
  const globalStore = useGlobalStore()
  // console.log('Nuxt plugin client side called from Default layout')
  const layoutData = async () => {
    // console.log('Nuxt plugin ready to call graphQL API in Default layout')

    const data = await $graphql.default.request(Layout)

    // console.log('Pinia store Global Data object:' + JSON.stringify(data))
    if (data) {
      globalStore.header.primary = data?.primary
      globalStore.header.secondary = data?.secondary
      globalStore.footerSock.nodes = data?.footerSock
      globalStore.footerPrimary = {
        nodes: [
          {
            ...data?.footerPrimary[0]
          },
          {
            ...data?.footerPrimary[1]
          }
        ]
      }

      console.log('globalStore.footerPrimary', JSON.stringify(globalStore.footerPrimary))
    }
  }
  return {
    provide: {
      layoutData,
    },
  }
})
