// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "NAV / Primary",
}

// TODO Write seperate story for NavMenuItem

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items: [
                { ...API.primaryNavlinks[0] },
                {
                    ...API.primaryNavlinks[0],
                    name: "Visit",
                    url: "/visit/",
                },
                {
                    ...API.primaryNavlinks[0],
                    name: "About",
                    url: "/about/",
                },
                { ...API.primaryNavlinks[1] },
            ],
        }
    },
    template: `
        <nav-primary
            :items="items"
            current-path="/about/foo/bar"
        />
    `,
})
