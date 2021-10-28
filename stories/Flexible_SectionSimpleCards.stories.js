export default {
    title: "FLEXIBLE / Section Simple Cards",
}

const mock = {
    simpleCard: [
        {
            id: "3496",
            linkText: null,
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                },
            ],
            subheader: null,
            externalLink: null,
        },
        {
            id: "3497",
            linkText: null,
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                },
            ],
            subheader: null,
            externalLink: null,
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
            contentLink: [],
            subheader: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
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
        {
            id: "3516",
            linkText: "this is a new simple card",
            contentLink: [],
            subheader: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
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

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-section-simple-cards
        :items="block.simpleCard"

        />
    `,
})

const mockOne = {
    simpleCard: [
        {
            id: "3496",
            linkText: null,
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                },
            ],
            subheader: null,
            externalLink: null,
        },
        {
            id: "3497",
            linkText: null,
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                },
            ],
            subheader: null,
            externalLink: null,
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
            contentLink: [],
            subheader: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
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

export const FourCards = () => ({
    data() {
        return { block: mockOne }
    },
    template: `
        <flexible-section-simple-cards
        :items="block.simpleCard"

        />
    `,
})

const mockTwo = {
    simpleCard: [
        {
            id: "3496",
            linkText: null,
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                },
            ],
            subheader: null,
            externalLink: null,
        },
        {
            id: "3497",
            linkText: null,
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                },
            ],
            subheader: null,
            externalLink: null,
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
            contentLink: [],
            subheader: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
            contentLink: [],
            subheader: "a new simple card without a content link",
            externalLink: "http://google.com",
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
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
        return { block: mockTwo }
    },
    template: `
        <flexible-section-simple-cards
        :items="block.simpleCard"

        />
    `,
})
