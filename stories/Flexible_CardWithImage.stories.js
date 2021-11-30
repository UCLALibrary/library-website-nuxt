export default {
    title: "FLEXIBLE / Card With Image",
}

const mock = {
    id: "3968",
    cardWithImage: [
        {
            id: "3969",
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
            imageAltText: "hollywood",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    uri: "visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    date: [
                        {
                            startDate: "2021-09-08T07:00:00+00:00",
                            endDate: null,
                        },
                    ],
                    associatedLocations: [
                        {
                            id: "523",
                            title: "Powell Library",
                            to: "visit/locations/powell-library",
                        },
                    ],
                },
            ],
            shortDescription: null,
        },
        {
            id: "3970",
            image: [
                {
                    id: "2338",
                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/long-llama.jpg",
                    height: 2113,
                    width: 2560,
                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/long-llama.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/long-llama.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/long-llama.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/long-llama.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/long-llama.jpg 2560w",
                    alt: "Long llama",
                    focalPoint: [0.5, 0.5],
                },
            ],
            imageAltText: "llama",
            contentLink: [
                {
                    id: "1542",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                    uri: "visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                    title: "Exhibit to test card with image content link",
                    date: [
                        {
                            startDate: "2021-09-03T08:00:00+00:00",
                            endDate: null,
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
                        {
                            id: "3062",
                            title: "Online",
                            to: "visit/locations/online",
                        },
                    ],
                },
            ],
            shortDescription: null,
        },
        {
            id: "3971",
            image: [
                {
                    id: "314",
                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/GalacticCore_SpitzerSchmidt_960.jpeg",
                    height: 1768,
                    width: 2560,
                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/GalacticCore_SpitzerSchmidt_960.jpeg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/GalacticCore_SpitzerSchmidt_960.jpeg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/GalacticCore_SpitzerSchmidt_960.jpeg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/GalacticCore_SpitzerSchmidt_960.jpeg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/GalacticCore_SpitzerSchmidt_960.jpeg 2560w",
                    alt: "Galactic Core Spitzer Schmidt 960",
                    focalPoint: [0.5, 0.5],
                },
            ],
            imageAltText: "galactic",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    uri: "visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    date: [
                        {
                            startDate: "2021-09-08T07:00:00+00:00",
                            endDate: null,
                        },
                    ],
                    associatedLocations: [
                        {
                            id: "523",
                            title: "Powell Library",
                            to: "visit/locations/powell-library",
                        },
                    ],
                },
            ],
            shortDescription: "Here is a short description",
        },
    ],
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
})
