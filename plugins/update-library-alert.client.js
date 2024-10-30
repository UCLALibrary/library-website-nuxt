
export default defineNuxtPlugin((nuxtApp) => { //
  const globalStore = useGlobalStore()
  // console.log('Nuxt plugin client side called from Default layout')
  const alerts = async () => {
    // console.log('Nuxt plugin ready to call graphQL API in Default layout')
    const response = await $fetch('https://libguides-proxy.library.ucla.edu/api/libguides/global/proxy')

    // console.log('Pinia store Global Data object:' + JSON.stringify(data))
    if (response) {
   
      globalStore.globals.libraryAlert = response.libraryAlert
    }
  }
  return {
    provide: {
      alerts,
    },
  }
})
