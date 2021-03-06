// gql
import GLOBALS from "~/gql/queries/Globals"
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"
import FOOTER_PRIMARY_ITEMS from "~/gql/queries/FooterPrimaryItems"
import FOOTER_SOCK_ITEMS from "~/gql/queries/FooterSockItems"

// utils
import removeEmpties from "~/utils/removeEmpties"

export const state = () => ({
    winHeight: 0,
    winWidth: 0,
    sTop: 0,
    globals: {},
    header: {},
    footerPrimary: {},
    footerSock: {},
})

export const mutations = {
    SET_WIN_DIMENSIONS(state, data) {
        state.winWidth = data.width
        state.winHeight = data.height
    },
    SET_S_TOP(state, data) {
        state.sTop = data
    },
    SET_GLOBALS(state, data) {
        state.globals = data
    },
    SET_HEADER(state, data) {
        state.header = data
    },
    SET_FOOTER_PRIMARY(state, data) {
        state.footerPrimary = data
    },
    SET_FOOTER_SOCK(state, data) {
        state.footerSock = data
    }
}

// Define actions
export const actions = {
    async nuxtServerInit({ commit }, { $config }) {
        try {
            // console.log("client side public config client id "+$config.libcalClientId)
            const libcaldata = await this.$axios.$post("/oauth/token", {
                client_id: $config.libcalClientId,
                client_secret: $config.libcalClientSecret,
                grant_type: "client_credentials",
            })

            if (libcaldata.access_token) {
                this.$axios.setToken(libcaldata.access_token, "Bearer")
                // console.log(libcaldata.access_token)
            } else {
                throw new Error(
                    "Auth error. Libcal returned: " + JSON.stringify(libcaldata)
                )
            }
        } catch (e) {
            throw new Error(
                "Libcal API error, see nuxtServerInit function for source. " + e
            )
        }
        try {
            // console.log("Get Global data from Craft")
            let globalData = await this.$graphql.default.request(GLOBALS)
            globalData = removeEmpties(globalData.globalSets || [])

            // Shape data from Craft
            globalData = {
                askALibrarian: globalData[0],
            }
            commit("SET_GLOBALS", globalData)

            let headerData = await this.$graphql.default.request(HEADER_MAIN_MENU_ITEMS)
            commit("SET_HEADER", headerData)

            let footerPrimaryData = await this.$graphql.default.request(FOOTER_PRIMARY_ITEMS)
            commit("SET_FOOTER_PRIMARY", footerPrimaryData)

            let footerSockData = await this.$graphql.default.request(FOOTER_SOCK_ITEMS)
            commit("SET_FOOTER_SOCK", footerSockData)
        } catch (e) {
            throw new Error("Craft API error, trying to set gobals. " + e)
        }
    },
}
