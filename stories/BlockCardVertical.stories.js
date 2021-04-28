// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Card Vertical",
}

const mock = {
    iconName: "book-binding",
    to: "/help/foo/bar/",
    title: "Borrowing Books and Equipment",
    text: "Here is a decent amount of text to explain this get help with.",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-vertical
        :iconName="iconName"
        :to="to"
        :title="title"
        :text="text" />`,
})

export const Visit = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-vertical
        :iconName="iconName"
        to="/visit/foo/bar"
        :title="title"
        :text="text" />`,
})
