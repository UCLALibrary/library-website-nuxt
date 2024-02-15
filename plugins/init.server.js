export default defineNuxtPlugin(async (nuxtApp) => { //
  /* console.log(
    'this is called only once during build time and should not run on every page load',
  ) */
  const craftGlobals = useGlobalStore(nuxtApp.$pinia) //
  await craftGlobals.fetchGlobals()
  await craftGlobals.fetchHeader()
  await craftGlobals.fetchFooterPrimary()
  await craftGlobals.fetchFooterSock()
})
