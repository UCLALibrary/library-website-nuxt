export default {
    title: "FLEXIBLE / Simple Cards",
}

const mock = {
    simpleCards: [
        {
            id: "5763",
            titleSimpleCard: "simple cards",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    text: "description",
                },
            ],
            summary: "a simple card",
            externalLink: null,
        },
        {
            id: "7435",
            titleSimpleCard: "Powell Library",
            contentLink: [
                {
                    id: "523",
                    url: "https://test-craft.library.ucla.edu/visit/locations/powell-library",
                    title: "Powell Library",
                    text: null,
                },
            ],
            summary: "subheader blah blah blah",
            externalLink: "https://calendar.library.ucla.edu/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
    ],
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-simple-cards
        :block="block"

        />
    `,
})

const twoCards = {
    simpleCards: [
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
    ],
}

export const TwoCards = () => ({
    data() {
        return { block: twoCards }
    },
    template: `
        <flexible-simple-cards
        :block="block"

        />
    `,
})

const threeCards = {
    simpleCards: [
        {
            id: "3516",
            linkText: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            subheader:
                "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar",
            externalLink: "http://google.com",
        },
        {
            id: "3497",
            linkText: null,
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                    title: "Ashton Prigge",
                    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar",
                },
            ],
            subheader: null,
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            linkText: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar",
                },
            ],
            subheader: null,
            externalLink: "http://google.com",
        },
    ],
}

export const ThreeCards = () => ({
    data() {
        return { block: threeCards }
    },
    template: `
        <flexible-simple-cards
        :block="block"
        />
    `,
})

const mockOne = {
    simpleCards: [
        {
            id: "5763",
            titleSimpleCard: "simple cards",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    text: "description",
                },
            ],
            summary: "a simple card",
            externalLink: null,
        },
        {
            id: "7435",
            titleSimpleCard: "Powell Library",
            contentLink: [
                {
                    id: "523",
                    url: "https://test-craft.library.ucla.edu/visit/locations/powell-library",
                    title: "Powell Library",
                    text: null,
                },
            ],
            summary: "subheader blah blah blah",
            externalLink: "https://calendar.library.ucla.edu/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
    ],
}

export const FourCards = () => ({
    data() {
        return { block: mockOne }
    },
    template: `
        <flexible-simple-cards
        :block="block"

        />
    `,
})

const fiveCards = {
    simpleCards: [
        {
            id: "5763",
            titleSimpleCard: "simple cards",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    text: "description",
                },
            ],
            summary: "a simple card",
            externalLink: null,
        },
        {
            id: "7435",
            titleSimpleCard: "Powell Library",
            contentLink: [
                {
                    id: "523",
                    url: "https://test-craft.library.ucla.edu/visit/locations/powell-library",
                    title: "Powell Library",
                    text: null,
                },
            ],
            summary: "subheader blah blah blah",
            externalLink: "https://calendar.library.ucla.edu/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            titleSimpleCard: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
    ],
}

export const FiveCards = () => ({
    data() {
        return { block: fiveCards }
    },
    template: `
        <flexible-simple-cards
        :block="block"

        />
    `,
})
