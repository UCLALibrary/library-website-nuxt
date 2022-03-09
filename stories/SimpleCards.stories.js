export default {
    title: "Simple Cards",
}
const mock = {
    simpleCards: [
        {
            id: "5763",
            title: "simple cards",
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
            title: "Powell Library",
            contentLink: [
                {
                    id: "523",
                    url: "https://test-craft.library.ucla.edu/visit/locations/powell-library",
                    title: "Powell Library",
                    text: null,
                },
            ],
            summary: "summary blah blah blah",
            externalLink: "https://calendar.library.ucla.edu/",
        },
        {
            id: "7481",
            title: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            title: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            title: "Go to this exhibit",
            contentLink: [],
            summary: "it will be great",
            externalLink: "https://github.com/",
        },
        {
            id: "7481",
            title: "Go to this exhibit",
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
        <simple-cards
        :block="block"
        />
    `,
})
const twoCards = {
    simpleCards: [
        {
            id: "5763",
            title: "simple cards",
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
            title: "Powell Library",
            contentLink: [
                {
                    id: "523",
                    url: "https://test-craft.library.ucla.edu/visit/locations/powell-library",
                    title: "Powell Library",
                    text: null,
                },
            ],
            summary: "summary blah blah blah",
            externalLink: "https://calendar.library.ucla.edu/",
        },
    ],
}
export const TwoCards = () => ({
    data() {
        return { block: twoCards }
    },
    template: `
        <simple-cards
        :block="block"
        />
    `,
})
const threeCards = {
    simpleCards: [
        {
            id: "5763",
            title: "simple cards",
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
            title: "Powell Library",
            contentLink: [
                {
                    id: "523",
                    url: "https://test-craft.library.ucla.edu/visit/locations/powell-library",
                    title: "Powell Library",
                    text: null,
                },
            ],
            summary: "summary blah blah blah",
            externalLink: "https://calendar.library.ucla.edu/",
        },
        {
            id: "7435",
            title: "Powell Library",
            contentLink: [
                {
                    id: "523",
                    url: "https://test-craft.library.ucla.edu/visit/locations/powell-library",
                    title: "Powell Library",
                    text: null,
                },
            ],
            summary: "summary blah blah blah",
            externalLink: "https://calendar.library.ucla.edu/",
        },
    ],
}
export const ThreeCards = () => ({
    data() {
        return { block: threeCards }
    },
    template: `
        <simple-cards
        :block="block"
        />
    `,
})
const mockOne = {
    simpleCards: [
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            summary: null,
            externalLink: null,
        },
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            summary: null,
            externalLink: null,
        },
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            summary: null,
            externalLink: null,
        },
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            summary:
                "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar",
            externalLink: null,
        },
    ],
}
export const FourCards = () => ({
    data() {
        return { block: mockOne }
    },
    template: `
        <simple-cards
        :block="block"
        />
    `,
})
const fiveCards = {
    simpleCards: [
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            summary: null,
            externalLink: null,
        },
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            summary: null,
            externalLink: null,
        },
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [],
            summary: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [],
            summary: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            title: "This is a new simple card",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    title: "Scholarship Award",
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            summary: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
    ],
}
export const FiveCards = () => ({
    data() {
        return { block: fiveCards }
    },
    template: `
        <simple-cards
        :block="block"
        />
    `,
})
