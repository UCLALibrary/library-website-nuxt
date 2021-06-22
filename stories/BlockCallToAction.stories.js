// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Call to Action",
}

const mock = {
    to: "/help/foo/bar/",

    name: "Lorem ipsum dolor",
    title: "Lorem ipsum dolor sit amet?",
    text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-call-to-action

            :to="to"
            :name="name"
            :title="title"
            :text="text"
            icon-name= "svg-call-to-action-chat"
        />
    `,
})

// Variations of stories below
export const DarkBlue = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-call-to-action
            is-light-blue="false"
            :to="to"
            :name="name"
            :title="title"
            :text="text"
            icon-name= "svg-call-to-action-chat"
        />
    `,
})

// Variations of stories below
export const SmallCTA = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-call-to-action
            is-full-size="false"
            :to="to"
            :name="name"
            :title="title"
            :text="text"
            icon-name= "svg-call-to-action-chat"
        />
    `,
})
