function onResize({ store }, event = {}) {
    const dimensions = {
        height: window.innerHeight,
        width: window.innerWidth,
    }
    store.commit("SET_WIN_DIMENSIONS", dimensions)
}
function onScroll({ store }, event = {}) {
    store.commit(
        "SET_S_TOP",
        window.pageYOffset || window.scrollY || document.body.scrollTop
    )
}

export default (context, inject) => {
    window.addEventListener("resize", (event) => {
        onResize(context, event)
    })
    window.addEventListener("scroll", (event) => {
        onScroll(context, event)
    })

    // Kick off events to populate store with intial values
    onResize(context)
    onScroll(context)
}
