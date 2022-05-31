import Vue from 'vue'
import TestVueComponentRollupSFC from "test-vue-component-rollup-sfc"
import UCLALibraryWebsiteComponents from "ucla-library-website-components"

console.log("print external component: "+TestVueComponentRollupSFC)
console.log("print external component: "+UCLALibraryWebsiteComponents)
Vue.use(TestVueComponentRollupSFC)
Vue.use(UCLALibraryWebsiteComponents)

console.log('plugin UCLALibraryWebsiteComponents is locked and loaded')
