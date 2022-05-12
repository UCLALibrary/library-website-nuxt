export default {
    title: "FLEXIBLE / Simple Cards",
}

<<<<<<< HEAD
const mockTwoCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary: "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    researchGuideUrl: "http://libguides.library.ucla.edu"
                }
            ]
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary: "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/"
        }
    ]
}

// Variations of stories below
// TwoCards
export const Default = () => ({
    data() {
        return { block: mockTwoCards }
    },
    template: `
      <simple-cards
          :block="block"
      />
  `,
})

// -------3----------------
const mockThreeCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary: "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    researchGuideUrl: "http://libguides.library.ucla.edu"
                }
            ]
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary: "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/"
        },
        {
            "id": "13899",
            "contentLink": [
                {
                    "slug": "road-work",
                    "title": "Road Work Guide",
                    "summary": "<p>A research guide</p>",
                    "researchGuideUrl": "http://libguides.library.ucla.edu"
                }
            ]
        }
    ]
}

export const ThreeCards = () => ({
    data() {
        return { block: mockThreeCards }
    },
    template: `
      <simple-cards :block="block" />
  `,
})

// -------4----------------

const mockFourCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary: "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    researchGuideUrl: "http://libguides.library.ucla.edu"
                }
            ]
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary: "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/"
        },
        {
            "id": "13899",
            "contentLink": [
                {
                    "slug": "road-work",
                    "title": "Road Work Guide",
                    "summary": "<p>A research guide</p>",
                    "researchGuideUrl": "http://libguides.library.ucla.edu"
                }
            ]
        },
        {
            "id": "13900",
            "title": "Types of Sinkholes",
            "summary": "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            "externalLink": "https://www.heliconusa.com/types-of-sinkholes/"
=======
const mockGqlTwoCards = {
    sectionTitle: "Mammals",
    sectionSummary:
        "<p>Mammals include humans and all other animals that are warm-blooded vertebrates (vertebrates have backbones) with hair. They feed their young with milk and have a more well-developed brain than other types of animals. </p>",
    cards: [
        {
            title: GQL.cards[0].title,
            summary: GQL.cards[0].text,
            to: GQL.cards[0].externalLink,
        },
        {
            title: GQL.cards[1].title,
            summary: GQL.cards[1].text,
            to: GQL.cards[1].contentLink[0].slug,
        },
    ],
}

const mockGqlThreeCards = {
    sectionTitle: "Mammals",
    cards: [
        {
            sectionTitle: "Mammals",
            title: GQL.cards[0].title,
            summary: GQL.cards[0].text,
            to: GQL.cards[0].externalLink,
        },
        {
            title: GQL.cards[1].title,
            summary: GQL.cards[1].text,
            to: GQL.cards[1].contentLink[0].slug,
        },
        {
            title: GQL.cards[2].title,
            summary: GQL.cards[2].text,
            to: GQL.cards[2].externalLink,
        },
    ],
}

const mockGqlFiveCards = {
    sectionTitle: "Mammals",
    cards: [
        {
            title: GQL.cards[0].title,
            summary: GQL.cards[0].text,
            to: GQL.cards[0].externalLink,
        },
        {
            title: GQL.cards[1].title,
            summary: GQL.cards[1].text,
            to: GQL.cards[1].contentLink[0].slug,
        },
        {
            title: GQL.cards[2].title,
            summary: GQL.cards[2].text,
            to: GQL.cards[2].externalLink,
        },
        {
            title: GQL.cards[3].title,
            summary: GQL.cards[3].text,
            to: GQL.cards[3].contentLink[0].slug,
        },
        {
            title: GQL.cards[4].title,
            summary: GQL.cards[4].text,
            to: GQL.cards[4].externalLink,
>>>>>>> 4aa1f2c (Big rebase, update simple cards to work as non flexible component)
        },
    ],
}

<<<<<<< HEAD
export const FourCards = () => ({
=======
// Variations of stories below
// mockGqlTwoCards
export const Default = () => ({
>>>>>>> 4aa1f2c (Big rebase, update simple cards to work as non flexible component)
    data() {
        return { block: mockFourCards  }
    },
    template: `
<<<<<<< HEAD
      <simple-cards :block="block" />
  `,
=======
        <flexible-simple-cards :block="block" />
    `,
>>>>>>> 4aa1f2c (Big rebase, update simple cards to work as non flexible component)
})

// -------5----------------

const mockFiveCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary: "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    researchGuideUrl: "http://libguides.library.ucla.edu"
                }
            ]
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary: "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/"
        },
        {
            "id": "13899",
            "contentLink": [
                {
                    "slug": "road-work",
                    "title": "Road Work Guide",
                    "summary": "<p>A research guide</p>",
                    "researchGuideUrl": "http://libguides.library.ucla.edu"
                }
            ]
        },
        {
            "id": "13900",
            "title": "Types of Sinkholes",
            "summary": "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            "externalLink": "https://www.heliconusa.com/types-of-sinkholes/"
        },
        {
            "id": "13958",
            "contentLink": [
                {
                    "slug": "frost-heave",
                    "title": "Frost Heave",
                    "summary": "<p>Frost heave refers to <strong>the upward or outward movement of the ground surface (or objects on, or in, ground) caused by formation of ice in soil</strong>.</p>"
                }
            ]
        }
    ]
}

export const FiveCards = () => ({
    data() {
        return { block: mockFiveCards  }
    },
    template: `
<<<<<<< HEAD
      <simple-cards :block="block" />
  `,
=======
        <flexible-simple-cards :block="block" />
    `,
>>>>>>> 4aa1f2c (Big rebase, update simple cards to work as non flexible component)
})

// -------6----------------

const mockSixCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary: "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    researchGuideUrl: "http://libguides.library.ucla.edu"
                }
            ]
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary: "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/"
        },
        {
            "id": "13899",
            "contentLink": [
                {
                    "slug": "road-work",
                    "title": "Road Work Guide",
                    "summary": "<p>A research guide</p>",
                    "researchGuideUrl": "http://libguides.library.ucla.edu"
                }
            ]
        },
        {
            "id": "13900",
            "title": "Types of Sinkholes",
            "summary": "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            "externalLink": "https://www.heliconusa.com/types-of-sinkholes/"
        },
        {
            "id": "13958",
            "contentLink": [
                {
                    "slug": "frost-heave",
                    "title": "Frost Heave",
                    "summary": "<p>Frost heave refers to <strong>the upward or outward movement of the ground surface (or objects on, or in, ground) caused by formation of ice in soil</strong>.</p>"
                }
            ]
        },
        {
            "id": "13784",
            "contentLink": [
                {
                    "slug": "foxes",
                    "title": "Foxes - Guides",
                    "summary": "<p>Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae.</p>",
                    "researchGuideUrl": "http://libguides.library.ucla.edu"
                }
            ]
        },
    ]
}

export const SixCards = () => ({
    data() {
<<<<<<< HEAD
        return { block: mockSixCards  }
    },
    template: `
      <simple-cards :block="block" />
  `,
=======
        return { block: mockGqlFiveCards }
    },
    template: `
        <flexible-simple-cards :block="block" />
    `,
>>>>>>> 4aa1f2c (Big rebase, update simple cards to work as non flexible component)
})
