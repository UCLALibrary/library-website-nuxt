// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "FLEXIBLE / Banner Featured",
}

const mock = {
    id: "2789",
    contentLink: [
        {
            url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
            to: "/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
            title: "Exhibit to test card with image content link",
            date: [
                {
                    startDate: "2021-09-03T08:00:00+00:00",
                    endDate: "2021-10-08T07:10:00+00:00",
                },
            ],
            associatedLocations: [
                {
                    id: "523",
                    title: "Powell Library",
                },
                {
                    id: "801",
                    title: "YRL",
                },
            ],
            image: [
                {
                    image: API.image,
                    altText: "flower",
                },
            ],
        },
    ],
    alignment: "left",
    buttonText: "See More",
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
})
