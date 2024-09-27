export const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    globals: {},
    header: {},
    footerPrimary: {},
    footerSock: {}
  }),

  actions: {
    async fetchGlobals() {
      try {
        const data = await $fetch('/api/fetchNitroStorageCraftGlobalData')
        // console.log('Pinia store Global Data object:' + JSON.stringify(data.value))
        if (data) {
          const globalData = removeEmpties(data?.globalSets || [])
          // console.log("remove empties: " + JSON.stringify(globalData))
          // Shape data from Craft
          const craftData = Object.fromEntries(
            globalData?.map(item => [item.handle, item])
          )
          this.globals = craftData
        }
        // console.log("Pinia store fetchGlobals end:" + JSON.stringify(this.globals))
      }
      catch (e) {
        throw new Error(`Craft API error, trying to set globals. ${e}`)
      }
    },
    async fetchHeader() {
      try {
        const data = await $fetch('/api/fetchNitroStorageCraftHeaderData')
        // console.log('Pinia store Header Data object:' + JSON.stringify(data.value))
        this.header = data
      }
      catch (e) {
        throw new Error(`Craft API error, trying to set globals Header. ${e}`)
      }
    },
    async fetchFooterPrimary() {
      try {
        const data = await $fetch('/api/fetchNitroStorageCraftFooterPrimaryData')
        // console.log('Pinia store FooterPrimary Data object:' + JSON.stringify(data.value))
        this.footerPrimary = data
      }
      catch (e) {
        throw new Error(`Craft API error, trying to set globals FooterPrimary. ${e}`)
      }
    },
    async fetchFooterSock() {
      try {
        const data = await $fetch('/api/fetchNitroStorageCraftFooterSockData')
        // console.log('Pinia store Footer Sock Data object:' + JSON.stringify(data.value))
        this.footerSock = data
      }
      catch (e) {
        throw new Error(`Craft API error, trying to set globals FooterSockData. ${e}`)
      }
    }

  }
})
