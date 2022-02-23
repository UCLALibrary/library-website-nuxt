export default {
    title: "FLEXIBLE / Media With Text",
}

const mock = {
    mediaWithText: [
        {
            id: "4527",
            sectionHeader:
                "This is a Media With Text with a Really Really Really Long Title Like Really Long",
            shortDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
        {
            id: "4527",
            buttonText: "External",
            mediaWithTextLink: "http://google.com",
            sectionHeader: "This is a Media With Text",
            shortDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",

            mediaType: "audio",
        },
        {
            id: "4527",
            sectionHeader: "This is a Media With Text",
            shortDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            buttonText: "More",
            mediaWithTextLink: "library.ucla.edu/help/topic",
            mediaType: "video",
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
        {
            id: "4527",
            sectionHeader: "This is a Media With Text",
            shortDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            buttonText: "Download",
            downloadAssetLink: [
                {
                    id: "3101",
                    url: "http://ucla-craft.nitro/assets/IMG_20210803_081620186.jpg",
                },
            ],
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
            sectionHeader:
                "This is a Media With Text with a Really Really Really Long Title Like Really Long",
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
