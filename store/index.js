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
    async nuxtGenerateInit(store, { $config, error, generatePayload }) {
        let data = generatePayload || false

        try {
            // If we have a payload already, don't do the request, use the payload
            if (!generatePayload) {
                let data = await this.$axios.$post("/oauth/token", {
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
                "Libcal API error, see nuxtServerInit function for source. " + e
            )
        }
    },
}
