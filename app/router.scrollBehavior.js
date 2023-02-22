export default async function (to, from, savedPosition) {
    console.log("ScrollBehaviour to:"+JSON.stringify(to))
    console.log("ScrollBehaviour from:"+JSON.stringify(from))
    console.log("ScrollBehaviour savedPosition:"+JSON.stringify(savedPosition))
    

    const findEl = async (hash, x = 0) => {
        return (
            document.querySelector(hash) ||
        new Promise((resolve) => {
            if (x > 0) {
                return resolve(document.querySelector("#app"))
            }
            setTimeout(() => {
                resolve(findEl(hash, 1))
            }, 1000)
        })
        )
    }
    const notListingPage = (fullPath) =>{
        switch (fullPath) {
            case "/about/staff":
                return true
             
            case "/about/news":
                return true
             
            case "/visit/locations":
                return false
             
            case "/collections/explore":
                return false
            case "/visit/events-exhibitions":
                return false
            case "/search-site":
                return false
    
            default:
                return true
              
        }
      
    }

    if (to.hash) {
        console.log("to hash:"+ to.hash)
        const el = await findEl(to.hash)
        if(el) {
            if ("scrollBehavior" in document.documentElement.style) {
                console.log("hash path hit scroll to")
                return window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
            } else {
                return window.scrollTo(0, el.offsetTop)
            }
        }
    } else {
        if(notListingPage(to.fullPath)) {
            if (savedPosition && savedPosition["y"] < 2000) {
                return savedPosition
            }
        }
    }
    return { x: 0, y: 0, behavior: "smooth" }
  
}


