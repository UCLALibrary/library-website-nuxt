export const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    winHeight: 0,
    winWidth: 0,
    sTop: 0,
    globals: {},
    header: {},
    footerPrimary: {},
    footerSock: {}
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

    async fetchGlobals() {
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
    },
    async fetchHeader() {
      try {
        const { data } = await useFetch('/api/fetchNitroStorageCraftHeaderData')
        // console.log('Pinia store Header Data object:' + JSON.stringify(data.value))
        this.header = data.value
      }
      catch (e) {
        throw new Error(`Craft API error, trying to set globals Header. ${e}`)
      }
    },
    async fetchFooterPrimary() {
      try {
        const { data } = await useFetch('/api/fetchNitroStorageCraftFooterPrimaryData')
        // console.log('Pinia store FooterPrimary Data object:' + JSON.stringify(data.value))
        this.footerPrimary = data
      }
      catch (e) {
        throw new Error(`Craft API error, trying to set globals FooterPrimary. ${e}`)
      }
    },
    async fetchFooterSock() {
      try {
        const { data } = await useFetch('/api/fetchNitroStorageCraftFooterSockData')
        // console.log('Pinia store Footer Sock Data object:' + JSON.stringify(data.value))
        this.footerSock = data.value
      }
      catch (e) {
        throw new Error(`Craft API error, trying to set globals FooterSockData. ${e}`)
      }
    }

    /* Examples of action methods:
    setToken(token) {
            this._token = token
            cookie.set("token", token, { expires: 7 })
        },
        setUser(user) {
            this._user = user
        },
        reset() {
            this._token = ""
            this._user = {}
            cookie.remove("token")
        },
        async fetchUser() {
            const { data, error } = await useCustomFetch("/auth/user")
            if (error.value) {
                this.reset()
            } else {
                this.setUser(data.value)
            }
        },
        async logout() {
            const { error } = await useCustomFetch("/auth/token", {
                method: "DELETE",
            })
            if (!error.value) {
                this.reset()
            }
        }, */
  }
})
