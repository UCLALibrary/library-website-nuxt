export const state = () => ({
    winHeight: 0,
    winWidth: 0,
})

export const mutations = {
    SET_WIN_DIMENSIONS(state, data) {
        state.winWidth = data.width
        state.winHeight = data.height
    },
}
