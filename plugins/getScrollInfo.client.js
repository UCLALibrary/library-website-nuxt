// GQL
import Globals from '../gql/queries/Globals.gql'

export default defineNuxtPlugin((nuxtApp) => { //
  const globalStore = useGlobalStore()
  // console.log('Nuxt plugin client side called from Default layout')
  const hasScrolled = () => {
    // console.log('Nuxt plugin ready to call graphQL API in Default layout')

    return globalStore.sTop !== 0
  }
  const hasScrolledPastHeader = () => {
    // console.log('Nuxt plugin ready to call graphQL API in Default layout')

    return globalStore.sTop >= 150
  }
  return {
    provide: {
      hasScrolled,
      hasScrolledPastHeader,
    },
  }
})
