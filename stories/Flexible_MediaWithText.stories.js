export default {
    title: "FLEXIBLE / Media With Text",
}

const mock = {
    mediaWithText: [
        {
            id: "8405",
            titleMediaWithText: "Some media with text",
            description: "A super cool dog",
            buttonText: "See more about this cool dog",
            mediaType: "otherResource",
            mediaWithTextLink: "http://www.dogs.com",
            media: [],
            image: [
                {
                    id: "6093",
                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/PXL_20220219_233308350.jpg",
                    height: 3414,
                    width: 2560,
                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/PXL_20220219_233308350.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/PXL_20220219_233308350.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/PXL_20220219_233308350.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/PXL_20220219_233308350.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/PXL_20220219_233308350.jpg 2560w",
                    alt: "PXL 20220219 233308350",
                    focalPoint: [0.5, 0.5],
                },
            ],
        },
        {
            id: "8445",
            titleMediaWithText: "A video",
            description: "A video to view",
            buttonText: "view the video",
            mediaType: "otherResource",
            mediaWithTextLink: "http://www.youtube.com",
            media: [
                {
                    id: "2003",
                    url: "https://test-craft.library.ucla.edu/assets/Documents/Parking-Pass-Chargers-vs-49ers.pdf",
                },
            ],
            image: [
                {
                    id: "6615",
                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/PXL_20220207_005115918.jpg",
                    height: 1920,
                    width: 2560,
                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/PXL_20220207_005115918.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/PXL_20220207_005115918.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/PXL_20220207_005115918.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/PXL_20220207_005115918.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/PXL_20220207_005115918.jpg 2560w",
                    alt: "PXL 20220207 005115918",
                    focalPoint: [0.5, 0.5],
                },
            ],
        },
    ],
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-media-with-text
            :block="block"

        />
    `,
})

export const IsGreyBackground = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-media-with-text
            :block="block"
            :is-grey-background=true

        />
    `,
})

const mockSingle = {
    mediaWithText: [
        {
            id: "4527",
            titleMediaWithText:
                "This is a Media With Text with a Really Really Really Really Long Title Like Really Long",
            shortDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            buttonText: "Internal",
            mediaWithTextLink: "library.ucla.edu/help/topic",
            mediaType: "resource",
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
        },
    ],
}

export const Single = () => ({
    data() {
        return { block: mockSingle }
    },
    template: `
        <flexible-media-with-text
            :block="block"
            :is-grey-background=true

        />
    `,
})
