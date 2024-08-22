const MenuItem = `
            id
            name: title
            to: url
            classes
            target: newWindow  
    `
const footerSockQuery = `
    query FooterSockItems {
        nodes(navHandle: "footerSockLinks") {
            ${MenuItem}
        }
      }
    `

export default cachedEventHandler(async () => {
  const endpoint = useRuntimeConfig().public.craftGraphqlURL
  let footerSockData = await useStorage().getItem('craftData:footerSock')
  // console.log('Server api Craft Footer sock Data object:' + JSON.stringify(footerSockData))
  if (!footerSockData) {
    const { data } = await $fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: footerSockQuery })
    })
    await useStorage().setItem('craftData:footerSock', data)
    footerSockData = data
    // console.log('Server api Craft Footer sock Data object first set and then get:' + JSON.stringify(footerSockData))
  }
  return footerSockData
})
