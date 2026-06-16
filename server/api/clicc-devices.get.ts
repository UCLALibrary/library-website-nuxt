export default defineEventHandler(async () => {
  return await $fetch('https://clicc-devices.library.ucla.edu/devices/')
})
