// Storybook default settings
export default {
    title: "SECTION / Cards",
}

const items = [
    {
        iconName: "illustration-book-binding",
        to: "/help/foo/bar/",
        title: "Lacus Luctus",
        text: "Litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
        iconName: "illustration-find-space",
        to: "/help/foo/baz/",
        title: "Ultrices Enim",
        text:
            "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
    },
    {
        iconName: "illustration-digitized-resources",
        to: "/help/foo/fred/",
        title: "Egestas et Augue",
        text: "Suspendisse in justo eu magna luctus suscipit libero eget ante.",
    },
    {
        iconName: "illustration-databases",
        to: "/about/foo/thud/",
        title: "Proin Sodales",
        text:
            "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.",
    },
    {
        iconName: "illustration-remote-access",
        to: "/visit/foo/qux/",
        title: "Taciti sociosqu",
        text:
            "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
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
            text="Curabitur aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. "
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
