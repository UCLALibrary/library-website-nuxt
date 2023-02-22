export default async function (to, from, savedPosition) {
    console.log("ScrollBehaviour to:"+JSON.stringify(to))
    console.log("ScrollBehaviour from:"+JSON.stringify(from))
    console.log("ScrollBehaviour savedPosition:"+JSON.stringify(savedPosition))
    /* if (savedPosition) {
        
        // eslint-disable-next-line no-unused-vars
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(savedPosition)
            }, 500)
        })
    } else {*/
    // Forcing to scroll on top for now. 
    return { x: 0, y: 0 }
    /* }*/
}
