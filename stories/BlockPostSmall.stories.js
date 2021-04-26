// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "Block Post Small",
}

// Variations of stories below
export const Visit = () => ({
    data() {
        return {
            image: API.image,
            to: "/visit/foo/bar/",
            category: { featured: "/visit/foo/bar/" },
        }
    },
    template: `<block-post-small :category="category" author="Ashton Prigge" title="New Library News You Should Read" :image="image" :to="to" />`,
})

// Variations of stories below
export const Help = () => ({
    data() {
        return {
            image: API.image,
            to: "/help/foo/bar/",
            category: { featured: "/visit/foo/bar/" },
        }
    },
    template: `<block-post-small :category="category" author="Ashton Prigge" title="New Library News You Should Read" :image="image" :to="to" />`,
})

// Variations of stories below
export const About = () => ({
    data() {
        return {
            image: API.image,
            to: "/about/foo/bar/",
            category: { featured: "/visit/foo/bar/" },
        }
    },
    template: `<block-post-small :category="category" author="Ashton Prigge" title="New Library News You Should Read" :image="image" :to="to" />`,
})
