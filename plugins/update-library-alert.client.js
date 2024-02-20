// GQL
import Globals from '../gql/queries/Globals.gql'

export default defineNuxtPlugin((nuxtApp) => { //
  const { $graphql } = useNuxtApp()
  const globalStore = useGlobalStore()
  console.log('Nuxt plugin client side called from Default layout')
  const alerts = async () => {
    console.log('Nuxt plugin ready to call graphQL API in Default layout')

    const data = await $graphql.default.request(Globals)

    console.log('Pinia store Global Data object:' + JSON.stringify(data))
    if (data) {
      const globalData = removeEmpties(data.globalSets || [])
      console.log('remove empties: ' + JSON.stringify(globalData))
      // Shape data from Craft
      const craftData = Object.fromEntries(
        globalData?.map(item => [item.handle, item])
      )
      globalStore.globals = craftData
    }
  }
  return {
    provide: {
      alerts,
    },
  }
})
