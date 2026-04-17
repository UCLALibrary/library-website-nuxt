// composables/useHydrateGlobalStore.js
// GQL
import FooterPrimaryItems from '../../gql/queries/FooterPrimaryItems.gql'
import FooterSockItems from '../../gql/queries/FooterSockItems.gql'
import FooterSponsorItems from '../../gql/queries/FooterSponsorItems.gql'
import Globals from '../../gql/queries/Globals.gql'
import HeaderMainMenuItems from '../../gql/queries/HeaderMainMenuItems.gql'
export function useHydrateGlobalStore() {
  const { $graphql } = useNuxtApp()
  const store = useGlobalStore()

  // Fixed keys => Nuxt can reuse/dedupe across prerendered routes
  const globals = useAsyncData('global-globals', async () => {
    const data = await $graphql.default.request(Globals)
    return data
  })

  const header = useAsyncData('global-header', async () => {
    const data = await $graphql.default.request(HeaderMainMenuItems)
    return data
  })

  const footerPrimary = useAsyncData('global-footer-primary', async () => {
    const data = await $graphql.default.request(FooterPrimaryItems)
    return data
  })

  const footerSock = useAsyncData('global-footer-sock', async() =>
  { const data = await $graphql.default.request(FooterSockItems)
    return data
  })

  const footerSponsor = useAsyncData('global-footer-sponsor', async () => {
    const data = await $graphql.default.request(FooterSponsorItems)
    return data
  })

  // Hydrate Pinia once data arrives (SSR + client).
  // Only set if empty so you don't overwrite client state.
  watchEffect(() => {
    if (header.data.value && Object.keys(store.header || {}).length === 0) {
      store.header = header.data.value
    }

    if (globals.data.value && Object.keys(store.globals || {}).length === 0) {
      // If your API already returns the shaped object, assign directly.
      // If it returns { globalSets: [...] }, shape it here to match your components.
      const globalData = removeEmpties(globals.data.value?.globalSets || [])
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

    if (footerSponsor.data.value && Object.keys(store.footerSponsor || {}).length === 0) {
      const craftData = removeEmpties(footerSponsor.data.value?.footerSponsor || [])
      console.log('meap sponsor data', craftData)
      store.footerSponsor = craftData[0]
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
