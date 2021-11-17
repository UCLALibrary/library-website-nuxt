export default {
    title: "FLEXIBLE / Simple Cards",
}

const mock = {
    simpleCard: [
        {
            id: "3496",
            linkText: "Different Link text",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/visit/awards-grants/scholarship-award",
                    text: "Here is some text. that should get overwritten",
                },
            ],
            subheader: "Here is some text. so many different names",
            externalLink: null,
        },
        {
            id: "3497",
            linkText: null,
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                    title: "Staff",
                },
            ],
            subheader:
                "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar",
            externalLink: null,
        },
        {
            id: "3516",
            linkText: "This is a new simple card",
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                },
            ],
            subheader:
                "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar",
            externalLink: null,
        },
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
            externalLink: null,
        },
        {
            id: "3516",
            linkText: "This is a new simple card",
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                },
            ],
            subheader:
                "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar",
            externalLink: null,
        },
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
            externalLink: null,
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
    simpleCard: [
        {
            id: "3496",
            linkText: null,
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    text: "Learn more here",
                    title: "Scholarships",
                },
            ],
            subheader: null,
            externalLink: null,
        },
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
            externalLink: null,
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
    simpleCard: [
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
    simpleCard: [
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
            subheader: null,
            externalLink: null,
        },
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
            subheader: null,
            externalLink: null,
        },
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
            subheader: null,
            externalLink: null,
        },
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
            externalLink: null,
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
    simpleCard: [
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
            subheader: null,
            externalLink: null,
        },
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
            subheader: null,
            externalLink: null,
        },
        {
            id: "3516",
            linkText: "This is a new simple card",
            contentLink: [],
            subheader: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            linkText: "This is a new simple card",
            contentLink: [],
            subheader: "a new simple card without a content link",
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
                    text: "this is a lot of sample test to see how wide this card will get",
                },
            ],
            subheader: "a new simple card without a content link",
            externalLink: "http://google.com",
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
