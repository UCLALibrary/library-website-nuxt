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
                    to: "visit/locations/powell-library",
                },
                {
                    id: "801",
                    title: "YRL",
                    to: "visit/locations/yrl",
                },
            ],
            heroImage: [
                {
                    id: "2971",
                    image: [
                        {
                            id: "2536",
                            src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/hollywood.jpeg",
                            height: 1344,
                            width: 2560,
                            srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/hollywood.jpeg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/hollywood.jpeg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/hollywood.jpeg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/hollywood.jpeg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/hollywood.jpeg 2560w",
                            alt: "Hollywood",
                            focalPoint: [0.5, 0.5],
                        },
                    ],
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

export const WithTypeHandle = () => ({
    data() {
        return {
            block: mock,
            typeHandle: "Event",
        }
    },
    template: `
        <flexible-banner-featured
            :block="block"
            :type-handle="typeHandle"
       />
    `,
})
