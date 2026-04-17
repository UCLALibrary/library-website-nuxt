export const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    winHeight: 0,
    winWidth: 0,
    sTop: 0,
    globals: {},
    header: {},
    footerPrimary: {},
    footerSock: {},
    footerSponsor: {}
    /* _token: "",
        _user: {}, */
  }),
  getters: {

    /*
      Examples of getter methods:
    user() {
            return this._user
        },
        isAuthed() {
            return Object.keys(this._user).length > 0
        }, */
  },
  actions: {
    setWindowDimension(width, height) {
      this.winHeight = height
      this.winWidth = width
    },
    setSTop(data) {
      this.sTop = data
    },

    /* async fetchGlobals() {
      try {
        const { data } = await useFetch('/api/fetchNitroStorageCraftGlobalData')
        // console.log('Pinia store Global Data object:' + JSON.stringify(data.value))
        if (data.value) {
          const globalData = removeEmpties(data.value?.globalSets || [])
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
    }, */
  }
})
