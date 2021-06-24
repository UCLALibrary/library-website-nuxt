export const state = () => ({
    winHeight: 0,
    winWidth: 0,
    libCalToken: "",
})

export const mutations = {
    SET_WIN_DIMENSIONS(state, data) {
        state.winWidth = data.width
        state.winHeight = data.height
    },
    SET_LIBCAL_TOKEN(state, data) {
        state.libCalToken = data
    },
}

// Define actions
export const actions = {
    async nuxtServerInit({ commit }, { $config, error }) {
        try {
            const data = await this.$axios.$post("/oauth/token", {
                client_id: $config.libcalClientId,
                client_secret: $config.libcalClientSecret,
                grant_type: "client_credentials",
            })

            if (data.access_token) {
                this.$axios.setToken(data.access_token, "Bearer")

                commit("SET_LIBCAL_TOKEN", data.access_token)
            } else {
                throw new Error(
                    "Auth error. Libcal returned: " + JSON.stringify(data)
                )
            }
        } catch (e) {
            throw new Error(
                "Libcal API error, see nuxtServerInit function for source. " + e
            )
        }
    },
}
