const MenuItem = `
            id
            name: title
            to: url
            classes
            target: newWindow  
    `
const footerPrimaryQuery = `
    query FooterPrimaryItems {
        nodes(navHandle: "footerPrimary", level: 1) {
            ${MenuItem}
            children {
                ${MenuItem}
            }
        }
    }
`
export default cachedEventHandler(async () => {
  const endpoint = useRuntimeConfig().public.craftGraphqlURL
  let footerPrimaryData = await useStorage().getItem('craftData:footerPrimary')
  // console.log('Server api Craft Footer primary Data object:' + JSON.stringify(footerPrimaryData))
  if (!footerPrimaryData) {
    const { data } = await $fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: footerPrimaryQuery })
    })
    await useStorage().setItem('craftData:footerPrimary', data)
    footerPrimaryData = data

    // console.log('Server api Craft Footer primary Data object first set and then get:' + JSON.stringify(footerPrimaryData))
  }
  return footerPrimaryData
})
