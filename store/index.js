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
    }
}

// Define actions
export const actions = {
    async nuxtServerInit({ commit }) {
            
        try {
            // console.log("Get Global data from Craft")
            console.log("HELLO")

            // ASK A LIBRARIAN Data -------------- --------------
            let globalData = await this.$graphql.default.request(GLOBALS)
            globalData = removeEmpties(globalData.globalSets || [])

            // Shape data from Craft
            globalData = {
                askALibrarian: globalData[0],
            }
            commit("SET_GLOBALS", globalData)

            // MAIN MENU Data -------------- --------------
            let headerData = await this.$graphql.default.request(HEADER_MAIN_MENU_ITEMS)
            commit("SET_HEADER", headerData)


            // FOOTER SPONSOR Data -------------- --------------
            let footerSponsorData = await this.$graphql.default.request(FOOTER_SPONSOR_ITEMS)

            // Shape data from Craft
            footerSponsorData = removeEmpties(footerSponsorData.footerSponsor || [])

            commit("SET_FOOTER_SPONSOR", footerSponsorData[0])
            console.log(JSON.stringify(footerSponsorData))
            console.log("GOODBYE")


            // FOOTER PRIMARY Data -------------- --------------
            let footerPrimaryData = await this.$graphql.default.request(FOOTER_PRIMARY_ITEMS)
            commit("SET_FOOTER_PRIMARY", footerPrimaryData)

            // FOOTER SOCK Data -------------- --------------
            let footerSockData = await this.$graphql.default.request(FOOTER_SOCK_ITEMS)
            commit("SET_FOOTER_SOCK", footerSockData)
        } catch (e) {
            throw new Error("Craft API error, trying to set gobals. " + e)
        }
    },
}
