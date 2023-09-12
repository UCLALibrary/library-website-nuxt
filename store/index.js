// GQL
import GLOBALS from "~/gql/queries/Globals"
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"
import FOOTER_PRIMARY_ITEMS from "~/gql/queries/FooterPrimaryItems"
import FOOTER_SOCK_ITEMS from "~/gql/queries/FooterSockItems"

// UTILS
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
    },
}

// DEFINE ACTIONS
export const actions = {
    // eslint-disable-next-line no-unused-vars
    async nuxtServerInit({ commit }) {
        try {
            // console.log("Get Global data from Craft")
            /* let globalData = await this.$graphql.default.request(GLOBALS)
            globalData = removeEmpties(globalData.globalSets || [])

            // Shape data from Craft
            globalData = {
                askALibrarian: globalData[0],
            }
            commit("SET_GLOBALS", globalData)*/

            /* let headerData = await this.$graphql.default.request(HEADER_MAIN_MENU_ITEMS)
            commit("SET_HEADER", headerData)

            let footerPrimaryData = await this.$graphql.default.request(FOOTER_PRIMARY_ITEMS)
            commit("SET_FOOTER_PRIMARY", footerPrimaryData)

            let footerSockData = await this.$graphql.default.request(FOOTER_SOCK_ITEMS)
            commit("SET_FOOTER_SOCK", footerSockData)*/
        } catch (e) {
            throw new Error("Nuxt Server Init" + e)
        }
    },
    async nuxtGenerateInit({ dispatch }, { generatePayload }) {
        let data = generatePayload || {}

        // Fetch data in parallel
        let headerQuery = dispatch("setHeaderData", data.header)
        let footerQuery = dispatch("setFooterPrimaryData", data.footer)
        let footerSockQuery = dispatch("setFooterSockData", data.footerSock)
        let globalsQuery = dispatch("getGlobals", data.globals)
        const [headerResult, footerResult, footerSockResult, globalsResult] = await Promise.all([
            headerQuery,
            footerQuery,
            footerSockQuery,
            globalsQuery,
        ])

        return {
            header: headerResult,
            footer: footerResult,
            footerSock: footerSockResult,
            globals: globalsResult,
        }
    },
    async setFooterSockData({ commit }, data) {
        try {
            if (!data) {
                data = await this.$graphql.default.request(FOOTER_SOCK_ITEMS)
            }
            commit("SET_FOOTER_SOCK", data)
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to set globals setFooterSockData. " + e)
        }
    },
    async setFooterPrimaryData({ commit }, data) {
        try {
            if (!data) {
                data = await this.$graphql.default.request(FOOTER_PRIMARY_ITEMS)

            }
            commit("SET_FOOTER_PRIMARY", data)
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to set globals setFooterPrimary. " + e)
        }
    },
    async setHeaderData({ commit }, data) {
        try {
            if (!data) {
                data = await this.$graphql.default.request(HEADER_MAIN_MENU_ITEMS)
            }
            commit("SET_HEADER", data)
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to set globals setHeader. " + e)
        }
    },
    async getGlobals({ commit }, data) {
        try {
            if (!data) {
                let globalData =await this.$graphql.default.request(GLOBALS)
                globalData = removeEmpties(globalData.globalSets || [])

                // Shape data from Craft
                data = Object.fromEntries(
                    globalData.map((item) => [item.handle, item] )
                )
                // {
                //     askALibrarian: globalData[0],
                // }
            }
            commit("SET_GLOBALS", data)
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to set globals getGlobals. " + e)
        }
    },
}
