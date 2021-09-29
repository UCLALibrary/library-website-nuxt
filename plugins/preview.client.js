export default function ({ query, enablePreview }) {
    console.log("plugin oreview client exixts in code")
    if (query.preview) {
        console.log("call enable preview")
        enablePreview()
    }
}
