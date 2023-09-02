export default defineNuxtPlugin(async (nuxtApp) => {
    const token = cookieFromRequestHeaders("token")

    if (token) {
        const auth = useAuth(nuxtApp.$pinia)
        auth.setToken(token)
        await auth.fetchUser()
    }
})
