export default {
    title: "BLOCK / Simple Card",
}

const mockExternal = {
    title: "Types of Sinkholes",
    summary: "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
    externalLink: "https://www.heliconusa.com/types-of-sinkholes/"
}

const mockInternal = {
    "id": "13785",
    "contentLink": [
        {
            "slug": "sink-hole",
            "title": "Sink Hole",
            "summary": "<p>Man-made sinkholes are the result of a variety of practices, from drilling to mining to changes in water diversion systems to broken pipes.</p>"
        }
    ]
}

const mockInternalGuide = {
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

// Variations of stories below
// ExternalLink
export const Default = () => ({
    data() {
        return { ...mockExternal }
    },
    template: `
        <block-simple-card
            :title="title"
            :text="summary"
            :to="externalLink"
        />
    `,
})

export const InternalLink = () => ({
    data() {
        return { ...mockInternal }
    },
    template: `
        <block-simple-card
            :title="contentLink[0].title"
            :text="contentLink[0].summary"
            :to="contentLink[0].slug"
        />
    `,
})

export const InternalLinkGuide = () => ({
    data() {
        return { ...mockInternalGuide }
    },
    template: `
        <block-simple-card
            :title="contentLink[0].title"
            :text="contentLink[0].summary"
            :to="contentLink[0].researchGuideUrl"
        />
    `,
})
