export const useLayoutState = () => {
  const footerPrimary = useState('footerPrimary', () => {})
  const footerSock = useState('footerSock', () => {})
  const header = useState('header', () => {})
  const globals = useState('globals', () => {})
  const setLayoutData = (store) => {
    // console.log('set footer', import.meta.server)
    // console.log('setFooter', store, footerPrimary.value || 'None!')
    if (!footerPrimary.value) {
      footerPrimary.value = store.footerPrimary
    }
    if (!footerSock.value) {
      footerSock.value = store.footerSock
    }
    if (!header.value) {
      header.value = store.header
    }
    if (!globals.value) {
      globals.value = store.globals
    }
  }
  return {
    footerPrimary,
    header,
    footerSock,
    globals,
    setLayoutData
  }
}
