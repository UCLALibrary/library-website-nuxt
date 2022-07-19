import Vue from 'vue'

import UCLALibraryWebsiteComponents from "ucla-library-website-components"

console.log("print external component: "+UCLALibraryWebsiteComponents)
Vue.use(UCLALibraryWebsiteComponents)

console.log('plugin UCLALibraryWebsiteComponents is locked and loaded')
