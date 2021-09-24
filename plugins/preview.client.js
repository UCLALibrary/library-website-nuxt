// https://nuxtjs.org/docs/2.x/features/live-preview
/*
NOTES:
- Only available when using target:static
- `enablePreview` is only available in the context object of plugins. Previews are handled client-side and thus the plugin should be run on the client: preview.client.js
- after running `nuxt generate` and `nuxt start`, append `?preview=true` to a page URL
*/

export default function ({ query, enablePreview }) {
    if (query.preview) {
        console.log("call enable preview")
        enablePreview()
    }
}
