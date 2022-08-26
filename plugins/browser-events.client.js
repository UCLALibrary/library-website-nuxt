// eslint-disable-next-line no-unused-vars
function onResize({ store }, event = {}) {
    const dimensions = {
        height: window.innerHeight,
        width: window.innerWidth,
    }
    // console.log("onresize height "+ dimensions.height)
    // console.log("onresize width "+ dimensions.width)
    store.commit("SET_WIN_DIMENSIONS", dimensions)
}
// eslint-disable-next-line no-unused-vars
function onScroll({ store }, event = {}) {
    store.commit(
        "SET_S_TOP",
        window.pageYOffset || window.scrollY || document.body.scrollTop
    )
}

// eslint-disable-next-line no-unused-vars
export default (context, inject) => {
    window.addEventListener("resize", (event) => {
        onResize(context, event)
    })
    window.addEventListener("scroll", (event) => {
        onScroll(context, event)
    })

    // Kick off events to populate store with intial values
    // console.log("Initial values being set for BROWSER EVENTS")
    onResize(context)
    onScroll(context)
}
