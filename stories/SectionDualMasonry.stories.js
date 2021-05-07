// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Dual Masonry",
}

const items = API.bricks

export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    template: `
        <section-dual-masonry
            :items="items"
            to="/visit/foo"
        />
    `,
})
