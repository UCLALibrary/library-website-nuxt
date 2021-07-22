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
    async nuxtGenerateInit({ store, dispatch }, { generatePayload }) {
        let data = generatePayload || {}

        // Fetch data in parallel
        let libCalQuery = dispatch("setLibCalToken", data.libCal)
        let globalsQuery = dispatch("getGlobals", data.globals)
        const [libCalResult, globalsResult] = await Promise.all([
            libCalQuery,
            globalsQuery,
        ])

        return {
            libCal: libCalResult,
            globals: globalsResult,
        }
    },
    async setLibCalToken(context, data) {
        try {
            // If we have a payload already, don't do the request, use the payload
            if (!data) {
                data = await this.$axios.$post("/oauth/token", {
                    client_id: process.env.LIBCAL_CLIENT_ID,
                    client_secret: process.env.LIBCAL_CLIENT_SECRET,
                    grant_type: "client_credentials",
                })
            }

            if (data.access_token) {
                this.$axios.setToken(data.access_token, "Bearer")
                return data
            } else {
                throw new Error(
                    "Auth error. Libcal returned: " + JSON.stringify(data)
                )
            }
        } catch (e) {
            throw new Error(
                "Libcal API error, see nuxtGenerateInit function for source. " +
                    e
            )
        }
    },
    async getGlobals({ commit }, data) {
        try {
            if (!data) {
                data = await this.$graphql.default.request(GLOBALS)
                data = removeEmpties(data.globalSets || [])

                // Shape data from Craft
                data = {
                    appointmentsLink: _get(data, "[0].appointmentsLink[0]", {}),
                }
            }
            commit("SET_GLOBALS", data)
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to set gobals. " + e)
        }
    },
}
