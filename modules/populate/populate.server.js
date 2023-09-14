/*
 * This nuxt plugin will run a store action called nuxtGenerateInit
 * and store the returned result and pass it as context.generatePayload
 * in subsequent calls to nuxtGenerateInit.
 */

/*
    These are used to keep track of whether the payload has been populated in memory and store data if necessary.
*/
const kPopulated = Symbol("kPopulated")
const inMemory = {}

export default async (context) => {
    const { payload: isGenerate, store } = context // here we are destructuring nuxt context, isGenerate is the alias

    // If isGenerate and we have the data from previous request, then populate payload once per server boot
    /*
    It first checks if isGenerate is true in the context payload. 
    This indicates whether the current operation is a Nuxt.js generation. 
    If it is a generation and the payload has been populated in a previous request (inMemory[kPopulated] exists), 
    it sets the context.generatePayload to the previously stored data and dispatches the "nuxtGenerateInit" action from the Vuex store.
    */
    if (isGenerate && inMemory[kPopulated]) {
        context.generatePayload = inMemory[kPopulated]
        await store.dispatch("nuxtGenerateInit", context)
        return
    }

    // We don't have previous data, so run nuxtGenerateInit with no payload added, and save result
    if (store._actions.nuxtGenerateInit) {
        const data = await store.dispatch("nuxtGenerateInit", context)
        if (isGenerate) {
            inMemory[kPopulated] = data
        }
    }
}
