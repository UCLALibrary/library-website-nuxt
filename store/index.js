// gql
import GLOBALS from "~/gql/queries/Globals"

// utils
import removeEmpties from "~/utils/removeEmpties"

export const state = () => ({
    winHeight: 0,
    winWidth: 0,
    sTop: 0,
    globals: {},
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
                askALibrarian: globalData[1],
            }
            commit("SET_GLOBALS", globalData)
        } catch (e) {
            throw new Error("Craft API error, trying to set gobals. " + e)
        }
    },
}
