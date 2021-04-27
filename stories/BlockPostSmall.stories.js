// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Post Small",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    categoryName: "featured",
}

// Variations of stories below
export const Visit = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-post-small
            :category-name="categoryName"
            author="Ashton Prigge"
            title="New Library News You Should Read"
            :image="image"
            :to="to"
        />
    `,
})

// Variations of stories below
export const About = () => ({
    data() {
        return {
            ...mock,
            to: "/about/foo/bar/",
        }
    },
    template: `
        <block-post-small
            :category-name="categoryName"
            author="Ashton Prigge"
            title="New Library News You Should Read"
            :image="image"
            :to="to"
        />
    `,
})

// Variations of stories below
export const Help = () => ({
    data() {
        return {
            ...mock,
            to: "/help/foo/bar/",
        }
    },
    template: `
        <block-post-small
            :category-name="categoryName"
            author="Ashton Prigge"
            title="New Library News You Should Read"
            :image="image"
            :to="to"
        />
    `,
})
