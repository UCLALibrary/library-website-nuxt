export default cachedEventHandler(async () => {
  // console.log("cachedEventHandler fetchTemIndexName",useStorage("esData"))
  let response = await useStorage("esData").hasItem('tempIndex')
  console.log("cachedEventHandler fetchTemIndexName hasItem result",response, await useStorage("esData").getItem('tempIndex'))
  return  await useStorage("esData").getItem('tempIndex')
})