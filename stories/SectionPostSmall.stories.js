// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "Section / Post Small",
}

const items = [
    {
        ...API.article,
        image: API.image,
    },
    {
        ...API.article,
        image: API.image,
        to: "/about/foo/bar",
    },
    {
        ...API.article,
        image: API.image,
        to: "/help/foo/bar",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    computed: {
        parsedItems() {
            // Restructuring item to support text key
            return this.items
        },
    },
    template: `<section-post-small :items="parsedItems" to="/news/"/>`,
})
