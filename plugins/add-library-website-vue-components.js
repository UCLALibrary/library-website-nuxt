import UCLALibraryWebsiteComponents from 'ucla-library-website-components'

export default defineNuxtPlugin((nuxtApp) => { /* eslint-disable-line no-undef */
  // Doing something with nuxtApp
  // console.log(`print external component: ${UCLALibraryWebsiteComponents}`)
  nuxtApp.vueApp.use(UCLALibraryWebsiteComponents)
  // console.log('plugin UCLALibraryWebsiteComponents is locked and loaded')
})
