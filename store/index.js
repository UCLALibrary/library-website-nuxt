export const state = () => ({
    winHeight: 0,
    winWidth: 0,
    sTop: 0,
})

export const mutations = {
    SET_WIN_DIMENSIONS(state, data) {
        state.winWidth = data.width
        state.winHeight = data.height
    },
    SET_S_TOP(state, data) {
        state.sTop = data
    },
}

// Define actions
export const actions = {
    async nuxtGenerateInit(store, { $config, error, generatePayload }) {
        let data = generatePayload || false

        try {
            // If we have a payload already, don't do the request, use the payload
            if (!data) {
                data = await this.$axios.$post("/oauth/token", {
                    client_id: $config.libcalClientId,
                    client_secret: $config.libcalClientSecret,
                    grant_type: "client_credentials",
                })
            }
            console.log(data)
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
}
