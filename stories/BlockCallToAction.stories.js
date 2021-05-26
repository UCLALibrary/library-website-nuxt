// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Call to Action",}

const mock = {
    to: "/help/foo/bar/",
    title: "Not finding what you are looking for?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
            :title="title"
            :text="text"
        />
    `,
})
export const LongText = () => ({
    data() {
        return {
            items: [...API.links],
        }
    },
    computed: {
        parsedItems() {
            // Restructuring item to support text key
            return this.items.map((obj, i) => {
                let text = obj.name

                if (i == 0) {
                    text = "UCLA Library Copyright Policies"
                }

                return {
                    ...obj,
                    text,
                }
            })
        },
    },
    template: `<footer-sock :items="parsedItems"/>`,
})
