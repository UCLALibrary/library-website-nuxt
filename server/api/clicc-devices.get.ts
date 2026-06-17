// fetch realtime data from the CLICC devices API and avoid CORS errors
export default defineEventHandler(async (event) => {
  setHeader(event, 'cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')

  return await $fetch('https://clicc-devices.library.ucla.edu/devices/')
})
