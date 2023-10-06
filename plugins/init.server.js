export default defineNuxtPlugin(async (nuxtApp) => { // eslint-disable-line no-undef
  /* console.log(
    'this is called only once during build time and should not run on every page load',
  ) */
  const craftGlobals = useGlobals(nuxtApp.$pinia) // eslint-disable-line no-undef
  await craftGlobals.fetchGlobals()
  await craftGlobals.fetchHeader()
  await craftGlobals.fetchFooterPrimary()
  await craftGlobals.fetchFooterSock()
  await craftGlobals.fetchFooterSponsor()
})
