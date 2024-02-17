export default cachedEventHandler(async () => {
  return await useStorage().getItem('craftData:footerSock')
})
