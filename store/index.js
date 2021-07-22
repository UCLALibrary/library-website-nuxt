// gql
import GLOBALS from "~/gql/queries/Gobals"
// utils
import removeEmpties from "~/utils/removeEmpties"

export const state = () => ({
    winHeight: 0,
    winWidth: 0,
    sTop: 0,
    globals: {}
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
    }
}

// Define actions
export const actions = {
    async nuxtGenerateInit(store, { $config, generatePayload }) {
        let data = generatePayload || false
        
         if(!data) {
            data=  setLibCalToken(data)
         }
         return data
        
    },
    async setLibCalToken(data){
        try {
            // If we have a payload already, don't do the request, use the payload
            if (!data) {
                data = await this.$axios.$post("/oauth/token", {
                    client_id: $config.libcalClientId,
                    client_secret: $config.libcalClientSecret,
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
    async getGlobals({$graphql, store}) {
        try {
            const data = await $graphql.default.request(GLOBALS)
            store.commit('SET_GLOBALS', removeEmpties(data.globalSets || []))
        } catch (e) {
            throw new Error(
                "Craft API error, trying to set gobals. " +
                    e
            )
        }
    }
}
