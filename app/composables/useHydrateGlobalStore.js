// composables/useHydrateGlobalStore.js
// GQL
import FooterPrimaryItems from '../../gql/queries/FooterPrimaryItems.gql'
import FooterSockItems from '../../gql/queries/FooterSockItems.gql'
import Globals from '../../gql/queries/Globals.gql'
import HeaderMainMenuItems from '../../gql/queries/HeaderMainMenuItems.gql'
export function useHydrateGlobalStore() {
  const { $graphql } = useNuxtApp()
  const store = useGlobalStore()

  // Fixed keys => Nuxt can reuse/dedupe across prerendered routes
  const globals = useAsyncData('global-globals', async () => {
    const data = await $graphql.default.request(Globals)
    // console.log('Globals GQL response:' + JSON.stringify(data))
    return data
  })

  const header = useAsyncData('global-header', async () => {
    const data = await $graphql.default.request(HeaderMainMenuItems)
    // console.log('Header GQL response:' + JSON.stringify(data))
    return data
  })

  const footerPrimary = useAsyncData('global-footer-primary', async () => {
    const data = await $graphql.default.request(FooterPrimaryItems)
    // console.log('Footer Primary GQL response:' + JSON.stringify(data))
    return data
  })

  const footerSock = useAsyncData('global-footer-sock', async() =>
  { const data = await $graphql.default.request(FooterSockItems)
    // console.log('Footer Sock GQL response:' + JSON.stringify(data))
    return data
  })

  // Hydrate Pinia once data arrives (SSR + client).
  // Only set if empty so you don't overwrite client state.
  watchEffect(() => {
    // console.log('Watching global data for hydration...')
    // console.log('Header data:' + JSON.stringify(header.data.value))
    // console.log(Object.keys(store.header || {}).length === 0 ? 'Store header is empty' : 'Store header already has data')
    if (header.data.value && Object.keys(store.header || {}).length === 0) {
      store.header = header.data.value
      // console.log('Header set in store:' + JSON.stringify(store.header))
    }

    if (globals.data.value && Object.keys(store.globals || {}).length === 0) {
      // If your API already returns the shaped object, assign directly.
      // If it returns { globalSets: [...] }, shape it here to match your components.
      const globalData = removeEmpties(globals.data.value?.globalSets || []).filter(item => item.handle !== 'libraryAlert')
      // console.log("remove empties: " + JSON.stringify(globalData))
      // Shape data from Craft
      const craftData = Object.fromEntries(
        globalData?.map(item => [item.handle, item])
      )

      store.globals = craftData
    }

    if (footerPrimary.data.value && Object.keys(store.footerPrimary || {}).length === 0) {
      store.footerPrimary = footerPrimary.data.value
    }

    if (footerSock.data.value && Object.keys(store.footerSock || {}).length === 0) {
      store.footerSock = footerSock.data.value
    }
  })

  const pending = computed(() =>
    header.pending.value ||
    globals.pending.value ||
    footerPrimary.pending.value ||
    footerSock.pending.value ||
    footerSponsor.pending.value
  )

  const error = computed(() =>
    header.error.value ||
    globals.error.value ||
    footerPrimary.error.value ||
    footerSock.error.value ||
    footerSponsor.error.value
  )

  return { pending, error }
}
