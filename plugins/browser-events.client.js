function onResize(store, event = {}) {
  const dimensions = {
    height: window.innerHeight,
    width: window.innerWidth
  }
  store.setWindowDimension(dimensions.width, dimensions.height)
}

function onScroll(store, event = {}) {
  store.setSTop(
    window.pageYOffset || window.scrollY || document.body.scrollTop
  )
}

export default defineNuxtPlugin((nuxtApp) => { // eslint-disable-line no-undef
  const windowSizeGlobals = useGlobals(nuxtApp.$pinia) // eslint-disable-line no-undef
  window.addEventListener('resize', (event) => {
    onResize(windowSizeGlobals, event)
  })
  window.addEventListener('scroll', (event) => {
    onScroll(windowSizeGlobals, event)
  })

  // Kick off events to populate store with intial values
  onResize(windowSizeGlobals)
  onScroll(windowSizeGlobals)
})
