export default function (to, from, savedPosition) {
    console.log("ScrollBehaviour to:"+to)
    console.log("ScrollBehaviour from:"+from)
    console.log("ScrollBehaviour savedPosition:"+savedPosition)
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}
