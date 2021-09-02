export default function ({ query, enablePreview }) {
    console.log("In preview mode function")
    if (query.preview) {
        console.log("call enable preview")
        enablePreview()
    }
}
