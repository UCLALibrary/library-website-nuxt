function onResize({ store }, event = {}) {
    const dimensions = {
        height: window.innerHeight,
        width: window.innerWidth,
    }
    store.commit("SET_WIN_DIMENSIONS", dimensions)
}

export default (context, inject) => {
    window.addEventListener("resize", (event) => {
        onResize(context, event)
    })

    // Kick off events to populate store with intial values
    onResize(context)
}
