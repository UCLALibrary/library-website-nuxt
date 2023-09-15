export default defineNuxtPlugin(async (nuxtApp) => {
    console.log(
        "this is called only once during build time and should not run on every page load"
    )
    const craftGlobals = useGlobals(nuxtApp.$pinia)
    await craftGlobals.fetchGlobals()
})
