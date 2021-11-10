export default {
    title: "FLEXIBLE / Section Card With Image",
}

const mock = {
    id: "3550",
    cardWithImage: [
        {
            id: "3575",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    to: "visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet",
                    date: [
                        {
                            startDate: "2021-09-08T07:00:00+00:00",
                            endDate: "2021-09-29T07:00:00+00:00",
                        },
                    ],
                    associatedLocations: [
                        {
                            id: "523",
                            title: "Powell Library",
                            to: "visit/locations/powell-library",
                        },
                    ],
                    image: [
                        {
                            id: "1687",
                            image: [
                                {
                                    id: "1214",
                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/IMG_20210608_182730371.jpg",
                                    height: 1920,
                                    width: 2560,
                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 2560w",
                                    alt: "IMG 20210608 182730371",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                            altText: "flowers",
                        },
                    ],
                },
            ],
        },
        {
            id: "3575",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    to: "visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet",
                    date: [
                        {
                            startDate: "2021-09-08T07:00:00+00:00",
                            endDate: "2021-09-29T07:00:00+00:00",
                        },
                    ],
                    associatedLocations: [
                        {
                            id: "523",
                            title: "Powell Library",
                            to: "visit/locations/powell-library",
                        },
                    ],
                    image: [
                        {
                            id: "1687",
                            image: [
                                {
                                    id: "1214",
                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/IMG_20210608_182730371.jpg",
                                    height: 1920,
                                    width: 2560,
                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 2560w",
                                    alt: "IMG 20210608 182730371",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                            altText: "flowers",
                        },
                    ],
                },
            ],
        },
        {
            id: "3575",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    to: "visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet",
                    date: [
                        {
                            startDate: "2021-09-08T07:00:00+00:00",
                            endDate: "2021-09-29T07:00:00+00:00",
                        },
                    ],
                    associatedLocations: [
                        {
                            id: "523",
                            title: "Powell Library",
                            to: "visit/locations/powell-library",
                        },
                    ],
                    image: [
                        {
                            id: "1687",
                            image: [
                                {
                                    id: "1214",
                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/IMG_20210608_182730371.jpg",
                                    height: 1920,
                                    width: 2560,
                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 2560w",
                                    alt: "IMG 20210608 182730371",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                            altText: "flowers",
                        },
                    ],
                },
            ],
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
        <flexible-section-card-with-image
            :block="block"
       />
    `,
})
