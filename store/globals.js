// GQL
import GLOBALS from "~/gql/queries/Globals"
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"
import FOOTER_PRIMARY_ITEMS from "~/gql/queries/FooterPrimaryItems"
import FOOTER_SOCK_ITEMS from "~/gql/queries/FooterSockItems"

export const useGlobals = defineStore("globals", {
    state: () => ({
        winHeight: 0,
        winWidth: 0,
        sTop: 0,
        globals: {},
        header: {},
        footerPrimary: {},
        footerSock: {},
        /* _token: "",
        _user: {},*/
    }),
    getters: {
        globals() {
            return this.globals
        },
        /* user() {
            return this._user
        },
        isAuthed() {
            return Object.keys(this._user).length > 0
        },*/
    },
    actions: {
        setWindowDimension(width, height) {
            this.winHeight = height
            this.winWidth = width
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

        async fetchGlobal() {},
        async fetchHeader() {},
        async fetchFooterPrimary() {},
        async fetchFooterSock() {},
        /*setToken(token) {
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
        },*/
    },
})
