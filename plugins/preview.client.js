export default function ({ query, enablePreview }) {
    console.log("plugin preview client exists in code")
    if (query.preview) {
        console.log("In preview mode")
        enablePreview()
    }
}
