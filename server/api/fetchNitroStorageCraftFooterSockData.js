export default cachedEventHandler(async () => {
  return await useStorage('SOME_KEY').getItem('footerSock')
})
