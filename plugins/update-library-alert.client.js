export default defineNuxtPlugin((nuxtApp) => { //
  const globalStore = useGlobalStore()
  // console.log('Nuxt plugin client side called from Default layout')
  const alerts = async () => {
    try {
      // console.log('Nuxt plugin ready to call graphQL API in Default layout')
      const response = await $fetch('https://libguides-proxy.library.ucla.edu/api/libguides/global/proxy')

      if (response) {
        globalStore.globals.libraryAlert = response.libraryAlert
      }
    } catch (error) {
      console.error('Error fetching alerts:', error)
    }
  }
  return {
    provide: {
      alerts,
    },
  }
})
