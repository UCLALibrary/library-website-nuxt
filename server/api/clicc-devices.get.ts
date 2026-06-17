// for LOCAL DEV only: fetch realtime data from the CLICC devices API
// on netlify, the CLICC devices API uses edge functions to fetch realtime data
export default cachedEventHandler(async () => {
  let cliccDevicesData = await useStorage().getItem('cliccData:devices')
  if (!cliccDevicesData) {
    cliccDevicesData = await $fetch('https://clicc-devices.library.ucla.edu/devices/')
    await useStorage().setItem('cliccData:devices', cliccDevicesData)
  }
  return cliccDevicesData
})
