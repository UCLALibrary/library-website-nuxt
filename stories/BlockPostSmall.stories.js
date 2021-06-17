// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Post Small",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    categoryName: "faucibus",
    author: "Inceptos Himenaeos",
    title: "Suspendisse in justo eu magna",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-post-small
            :category-name="categoryName"
            :author="author"
            :title="title"
            :image="image"
            to="/legal/"
        />
    `,
})
export const Visit = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-post-small
            :category-name="categoryName"
            :author="author"
            :title="title"
            :image="image"
            :to="to"
        />
    `,
})

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
            :author="author"
            :title="title"
            :image="image"
            :to="to"
        />
    `,
})

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
            :author="author"
            :title="title"
            :image="image"
            :to="to"
        />
    `,
})

export const LongText = () => ({
    data() {
        return {
            ...mock,
            to: "/help/foo/bar/",
        }
    },
    template: `
        <block-post-small
            category-name="Morbi in dui quis est ullamcorper"
            :author="author"
            title="Nulla facilisi dolor sit amet, consectetur adipiscing elit. In egestas nisl eget tellus posuere, eu malesuada massa lobortis."
            :image="image"
            :to="to"
        />
    `,
})
