export default function () {
    // this.nuxt.hook("generate:done", async (context) => {
    //     console.log("generation is done" + context)
    // })

    const { nuxt } = this

    console.log(nuxt.options)
    console.log(context)
}
