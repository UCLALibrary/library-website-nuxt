export const useLayoutState = () => {
  const footerPrimary = useState('footerPrimary', () => {})
  const footerSock = useState('footerSock', () => {})
  const header = useState('header', () => {})
  const setLayoutData = (store) => {
    console.log('set footer', import.meta.server)
    console.log('setFooter', store, footerPrimary.value || 'None!')
    if (!footerPrimary.value) {
      footerPrimary.value = store.footerPrimary
    }
    if (!footerSock.value) {
      footerSock.value = store.footerSock
    }
    if (!header.value) {
      header.value = store.header
    }
  }
  return {
    footerPrimary,
    header,
    footerSock,
    setLayoutData
  }
}
