// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "Block Post Small",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            image: API.image,
        }
    },
    template: `<block-post-small category="featured" author="Ashton Prigge" title="New Library News You Should Read" :image="image"/>`,
})
