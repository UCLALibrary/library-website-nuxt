export function useAlerts() {
  const store = useGlobalStore()
  async function refresh() {
    try {
      console.log('Nuxt plugin ready to call graphQL API in Default layout')
      const response = await $fetch('https://libguides-proxy.library.ucla.edu/api/libguides/global/proxy')

      if (response) {
        store.globals.dismissibleAlert = removeObjectsWithEmptyValues([response.libraryAlert]).length > 0 ? removeObjectsWithEmptyValues([response.infoAlert])[0] : null
        store.globals.bannerAlert = removeObjectsWithEmptyValues([response.fullBannerAlert]).length > 0 ? removeObjectsWithEmptyValues([response.fullBannerAlert])[0] : null
      }
    } catch (error) {
      console.error('Error fetching alerts:', error)
    }
  }

  return { refresh }
}
