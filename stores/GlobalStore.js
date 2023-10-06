// GQL
import GLOBALS from '../gql/queries/Globals.gql'
import HEADER_MAIN_MENU_ITEMS from '../gql/queries/HeaderMainMenuItems.gql'
import FOOTER_PRIMARY_ITEMS from "../gql/queries/FooterPrimaryItems.gql"
import FOOTER_SOCK_ITEMS from "../gql/queries/FooterSockItems.gql"

export const useGlobalStore = defineStore('GlobalStore', { // eslint-disable-line no-undef
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


    async fetchGlobals() {
      try {
        const { data } = await useAsyncQuery(GLOBALS) // eslint-disable-line no-undef

        const globalData = removeEmpties(data._value.globalSets || []) // eslint-disable-line no-undef

        // Shape data from Craft
        const craftData = Object.fromEntries(
          globalData.map(item => [item.handle, item])
        )
        this.globals = craftData
      } catch (e) {
        throw new Error("Craft API error, trying to set globals. " + e)
      }

    },
    async fetchHeader() {
      try {
        const { data } = await useAsyncQuery(HEADER_MAIN_MENU_ITEMS) // eslint-disable-line no-undef

        this.header = data._value
      } catch (e) {
        throw new Error("Craft API error, trying to set globals Header. " + e)
      }
    },
    async fetchFooterPrimary() {
      try {
        const { data } = await useAsyncQuery(FOOTER_PRIMARY_ITEMS) // eslint-disable-line no-undef

        this.footerPrimary = data._value
      } catch (e) {
        throw new Error("Craft API error, trying to set globals FooterPrimary. " + e)
      }
    },
    async fetchFooterSock() {
      try {
        const { data } = await useAsyncQuery(FOOTER_SOCK_ITEMS) // eslint-disable-line no-undef
        this.footerSock = data._value
      } catch (e) {
        throw new Error("Craft API error, trying to set globals FooterSockData. " + e)
      }
    }

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
