// gql
import GLOBALS from "~/gql/queries/Globals"

// utils
import removeEmpties from "~/utils/removeEmpties"
import _get from "lodash/get"

export const state = () => ({
    winHeight: 0,
    winWidth: 0,
    sTop: 0,
    globals: {},
    tokenPresent: false,
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
    SET_TOKEN_FLAG(state, data) {
        console.log("token is "+data)
        state.tokenPresent = data
    },
}

// Define actions
export const actions = {
    async nuxtServerInit({ commit }, { $config, error }) {
        try {
            const libcaldata = await this.$axios.$post("/oauth/token", {
                client_id: $config.libcalClientId,
                client_secret: $config.libcalClientSecret,
                grant_type: "client_credentials",
            })

            if (libcaldata.access_token) {
                this.$axios.setToken(libcaldata.access_token, "Bearer")
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
    },
}
