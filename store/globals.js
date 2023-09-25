// GQL
import GLOBALS from '../gql/queries/Globals.gql'

export const useGlobals = defineStore('globals', { // eslint-disable-line no-undef
  state: () => ({
    winHeight: 0,
    winWidth: 0,
    sTop: 0,
    _globals: {},
    header: {},
    footerPrimary: {},
    footerSock: {}
    /* _token: "",
        _user: {}, */
  }),
  getters: {
    globals() {
      return this._globals
    }
    /* user() {
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
    setGlobals(data) {
      this.globals = data
    },
    setHeader(data) {
      this.header = data
    },
    setFooterPrimary(data) {
      this.footerPrimary = data
    },
    setFooterSock(data) {
      this.footerSock = data
    },

    async fetchGlobals() {
      const { data } = await useAsyncQuery(GLOBALS) // eslint-disable-line no-undef
      // console.log(data?._value?.globalSets)
      const globalData = removeEmpties(data._value.globalSets || []) // eslint-disable-line no-undef

      // Shape data from Craft
      const craftData = Object.fromEntries(
        globalData.map(item => [item.handle, item])
      )
      this._globals = craftData
      // console.log("global store", this._globals)
    },
    async fetchHeader() { },
    async fetchFooterPrimary() { },
    async fetchFooterSock() { }
    /* setToken(token) {
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
