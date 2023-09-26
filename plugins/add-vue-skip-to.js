import VueSkipTo from '@vue-a11y/skip-to'
import '@vue-a11y/skip-to/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => { // eslint-disable-line no-undef
  // Doing something with nuxtApp
  // console.log("print external component: " + VueSkipTo)
  nuxtApp.vueApp.use(VueSkipTo)
  // console.log("print vue skip to component: "+VueSkipTo)
})
