// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "NAV / Primary",
}

const items = [
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
]

// TODO Write seperate story for NavMenuItem

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    template: `
        <nav-primary
            :items="items"
            current-path="/about/foo/bar"
        />
    `,
})

export const ExtraSupportLinks = () => ({
    data() {
        const newItems = items
        newItems.push({ ...API.primaryNavlinks[1] })

        return {
            items: newItems,
        }
    },
    template: `
        <nav-primary
            :items="items"
            current-path="/about/foo/bar"
        />
    `,
})
