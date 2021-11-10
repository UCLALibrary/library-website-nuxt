export default {
    title: "FLEXIBLE / Section Simple Cards",
}

const mock = {
    simpleCard: [
        {
            id: "3496",
            linkText: "Different Link text",
            contentLink: [
                {
                    id: "1750",
                    url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
                    text: "Here is some text. that should get overwritten",
                },
            ],
            subheader: "Here is some text. so many different names",
            externalLink: "google.com",
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
                "this is a lot of text tow lines this is a lot of text tow lines this is a lot of text tow lines this is a lot of text tow lines this is a lot of text tow lines",
            externalLink: null,
        },
        {
            id: "3516",
            linkText: "this is a new simple card",
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                },
            ],
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
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                },
            ],
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

export const TwoCards = () => ({
    data() {
        return { block: twoCards }
    },
    template: `
        <flexible-section-simple-cards
        :block="block"

        />
    `,
})

const threeCards = {
    simpleCard: [
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
            id: "3497",
            linkText: null,
            contentLink: [
                {
                    id: "483",
                    url: "https://test-craft.library.ucla.edu/about/staff/ashton-prigge",
                    title: "Ashton Prigge",
                    text: "Hi my name is Ashton Prigge",
                },
            ],
            subheader: null,
            externalLink: null,
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
        <flexible-section-simple-cards
        :block="block"

        />
    `,
})

const mockOne = {
    simpleCard: [
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
            subheader: null,
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
            subheader: null,
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

export const FourCards = () => ({
    data() {
        return { block: mockOne }
    },
    template: `
        <flexible-section-simple-cards
        :block="block"

        />
    `,
})

const fiveCards = {
    simpleCard: [
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
            subheader: null,
            externalLink: null,
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
        return { block: fiveCards }
    },
    template: `
        <flexible-section-simple-cards
        :block="block"

        />
    `,
})
