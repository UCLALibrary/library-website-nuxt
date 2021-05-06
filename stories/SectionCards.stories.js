// Storybook default settings
export default {
    title: "SECTION / Cards",
}

const items = [
    {
        iconName: "illustration-book-binding",
        to: "/help/foo/bar/",
        title: "Book Binding",
        text: "Here is a decent amount of text to explain this get help with.",
    },
    {
        iconName: "illustration-find-space",
        to: "/help/foo/baz/",
        title: "Book Binding",
        text: "Here is a decent amount of text to explain this get help with.",
    },
    {
        iconName: "illustration-digitized-resources",
        to: "/help/foo/fred/",
        title: "Book Binding",
        text: "Here is a decent amount of text to explain this get help with.",
    },
    {
        iconName: "illustration-databases",
        to: "/about/foo/thud/",
        title: "Book Binding",
        text:
            "Here is a decent amount of text to explain this get help with.Here is a decent amount of text to explain this get help with.Here is a decent amount of text to explain this get help with.",
    },
    {
        iconName: "illustration-remote-access",
        to: "/visit/foo/qux/",
        title: "Book Binding",
        text: "Here is a decent amount of text to explain this get help with.",
    },
]

export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    template: `
        <section-cards
            :items="items"
            title="Get Help with"
            text="Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more."
            to="/help/foo/bar"
        />
    `,
})

export const NoText = () => ({
    data() {
        return {
            items,
        }
    },
    template: `
        <section-cards
            :items="items"
            title="Get Help with"
            to="/help/foo/bar"
        />
    `,
})

export const OneCard = () => ({
    data() {
        return {
            items,
        }
    },
    computed: {
        parsedItems() {
            return [{ ...this.items[0] }]
        },
    },
    template: `
        <section-cards
            :items="parsedItems"
            title="Get Help with"
            to="/help/foo/bar"
        />
    `,
})

export const TwoCards = () => ({
    data() {
        return {
            items,
        }
    },
    computed: {
        parsedItems() {
            return [{ ...this.items[0] }, { ...this.items[1] }]
        },
    },
    template: `
        <section-cards
            :items="parsedItems"
            title="Get Help with"
            to="/help/foo/bar"
        />
    `,
})
