export default {
    title: "SECTION / Simple Cards",
}

const mockTwoCards = {
    id: "13783",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "6622",
            text: "<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>",
            title: "Connecting from Off-Campus",
            slug: "connecting-from-off-campus",
            uri: "help/services-resources/connecting-from-off-campus",
            type: "resource",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
    ],
}

// Variations of stories below
// -------2----------------
export const Default = () => ({
    data() {
        return { ...mockTwoCards }
    },
    template: `
        <simple-cards
            :items="cards"
            :section-title="sectionTitle"
            :section-summary="sectionSummary"
        />
    `,
})

// -------3----------------
const mockThreeCards = {
    id: "13783",
    sectionTitle: "Fix Potholes",
    sectionSummary:
    "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "8203",
            text: "<h3>The Library Prize for Undergraduate Research recognizes and honors excellence in undergraduate research at UCLA. The application period for the 2022 Library Prize for Undergraduate Research closes on March 30, 2022 at 11:59 p.m. PT.</h3>",
            title: "Library Prize for Undergraduate Research",
            slug: "library-prize-for-undergraduate-research",
            uri: "about/awards-grants/library-prize-for-undergraduate-research",
        },
        {
            id: "6622",
            text: "<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>",
            title: "Connecting from Off-Campus",
            slug: "connecting-from-off-campus",
            uri: "help/services-resources/connecting-from-off-campus",
            type: "resource",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
    ],
}

export const ThreeCards = () => ({
    data() {
        return { ...mockThreeCards }
    },
    template: `
        <simple-cards
            :items="cards"
            :section-title="sectionTitle"
            :section-summary="sectionSummary" />
    `,
})

// -------4----------------

const mockFourCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "8203",
            text: "<h3>The Library Prize for Undergraduate Research recognizes and honors excellence in undergraduate research at UCLA. The application period for the 2022 Library Prize for Undergraduate Research closes on March 30, 2022 at 11:59 p.m. PT.</h3>",
            title: "Library Prize for Undergraduate Research",
            slug: "library-prize-for-undergraduate-research",
            uri: "about/awards-grants/library-prize-for-undergraduate-research",
        },
        {
            id: "6622",
            text: "<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>",
            title: "Connecting from Off-Campus",
            slug: "connecting-from-off-campus",
            uri: "help/services-resources/connecting-from-off-campus",
            type: "resource",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
    ],
}

export const FourCards = () => ({
    data() {
        return { ...mockFourCards }
    },
    template: `
    <simple-cards
        :items="cards"
        :section-title="sectionTitle"
        :section-summary="sectionSummary" />
    `,
})

// -------5----------------

const mockFiveCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "8203",
            text: "<h3>The Library Prize for Undergraduate Research recognizes and honors excellence in undergraduate research at UCLA. The application period for the 2022 Library Prize for Undergraduate Research closes on March 30, 2022 at 11:59 p.m. PT.</h3>",
            title: "Library Prize for Undergraduate Research",
            slug: "library-prize-for-undergraduate-research",
            uri: "about/awards-grants/library-prize-for-undergraduate-research",
        },
        {
            id: "6622",
            text: "<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>",
            title: "Connecting from Off-Campus",
            slug: "connecting-from-off-campus",
            uri: "help/services-resources/connecting-from-off-campus",
            type: "resource",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
    ],
}

export const FiveCards = () => ({
    data() {
        return { ...mockFiveCards }
    },
    template: `
    <simple-cards
        :items="cards"
        :section-title="sectionTitle"
        :section-summary="sectionSummary" />
    `,
})

// -------6----------------

const mockSixCards = {
    id: "13783",
    cards: [
        {
            id: "8203",
            text: "<h3>The Library Prize for Undergraduate Research recognizes and honors excellence in undergraduate research at UCLA. The application period for the 2022 Library Prize for Undergraduate Research closes on March 30, 2022 at 11:59 p.m. PT.</h3>",
            title: "Library Prize for Undergraduate Research",
            slug: "library-prize-for-undergraduate-research",
            uri: "about/awards-grants/library-prize-for-undergraduate-research",
        },
        {
            id: "6622",
            text: "<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>",
            title: "Connecting from Off-Campus",
            slug: "connecting-from-off-campus",
            uri: "help/services-resources/connecting-from-off-campus",
            type: "resource",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
        {
            id: "6407",
            text: "<p>A research guide</p>",
            title: "A new research guide",
            slug: "a-new-research-guide",
            uri: null,
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
    ],
}

export const SixCards = () => ({
    data() {
        return { ...mockSixCards }
    },
    template: `
    <simple-cards
        :items="cards"
        section-title="Test Services and Resources Cards"
        section-summary="Test summary page, for Services and Resources Card" />
    `,
})
