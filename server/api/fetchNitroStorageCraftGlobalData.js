export default cachedEventHandler(async () => {
  //const keys = await useStorage().getKeys()
  //console.log("Server api storage keys:" + JSON.stringify(keys))
  const globalData = await useStorage().getItem('craftData:globals')
  //console.log("Server api Global Data object:" + JSON.stringify(globalData))
  return globalData
})
