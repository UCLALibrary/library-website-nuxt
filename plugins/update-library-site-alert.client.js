export default function({store}, inject){
    inject('updateSiteAlert', {
        updateSiteAlert,
    })

    async function updateSiteAlert(){
        await store.dispatch('updateGlobals')
    }
}
