// gql
import GLOBALS from "~/gql/queries/Globals"
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"
import FOOTER_SPONSOR_ITEMS from "~/gql/queries/FooterSponsorItems"
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
    footerSponsor: {},
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
    SET_FOOTER_SPONSOR(state, data) {
        state.footerSponsor = data
    },
    SET_FOOTER_PRIMARY(state, data) {
        state.footerPrimary = data
    },
    SET_FOOTER_SOCK(state, data) {
        state.footerSock = data
    },
}

// Define actions
export const actions = {
    
    // generatePayload is desructured from nuxt context, dispatch is vuex-store dispatch
    async nuxtGenerateInit({ dispatch }, { generatePayload }) {
        // console.log("In nuxtgenerateinit start")
        let data = generatePayload || {}

        // Fetch data in parallel
        let headerQuery = dispatch("setHeaderData", data.header)
        let footerPrimaryQuery = dispatch("setFooterPrimaryData", data.footerPrimary)
        let footerSponsorQuery = dispatch("setFooterSponsoryData", data.footerSponsor)
        let footerSockQuery = dispatch("setFooterSockData", data.footerSock)
        let globalsQuery = dispatch("getGlobals", data.globals)
        const [headerResult, footerPrimaryResult,footerSponsorResult, footerSockResult, globalsResult] = await Promise.all([
            headerQuery,
            footerPrimaryQuery,
            footerSponsorQuery,
            footerSockQuery,
            globalsQuery,
        ])

        // console.log("In nuxtgenerateinit end")

        return {
            header: headerResult,
            footerPrimary: footerPrimaryResult,
            footerSponsor: footerSponsorResult,
            footerSock: footerSockResult,
            globals: globalsResult,
        }
    },
    async setFooterSockData({ commit }, data) {
        try {
            if (!data) {
                // console.log("footersock is being fetched start")
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
                // console.log("footerprimary is being fetched start")
                data = await this.$graphql.default.request(FOOTER_PRIMARY_ITEMS)

            }
            commit("SET_FOOTER_PRIMARY", data)
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to set globals setFooterPrimary. " + e)
        }
    },
    async setFooterSponsoryData({ commit }, data){
        try {
            if (!data) {
                // console.log("footersponsor is being fetched start")
                data = await this.$graphql.default.request(
                    FOOTER_SPONSOR_ITEMS
                )
    
                // Shape data from Craft
                data = removeEmpties(
                    data.footerSponsor || []
                )
    
            }
            commit("SET_FOOTER_SPONSOR", data[0])
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to set globals setFooterSponsor. " + e)
        }
    },
    async setHeaderData({ commit }, data) {
        try {
            if (!data) {
                // console.log("header is being fetched start")
                data = await this.$graphql.default.request(HEADER_MAIN_MENU_ITEMS)
            }
            commit("SET_HEADER", data)
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to  setHeader. " + e)
        }
    },
    async getGlobals({ commit }, data) {
        try {
            if (!data) {
                // console.log("global is being fetched start")
                data = await this.$graphql.default.request(GLOBALS)
                data = removeEmpties(data.globalSets || [])

                // Shape data from Craft
                data = {
                    askALibrarian: data[0],
                    meapCallToAction: data[1],
                }
               
            }
            commit("SET_GLOBALS", data)
            return data
        } catch (e) {
            throw new Error("Craft API error, trying to set globals getGlobals. " + e)
        }
    },
}
