export default {
    title: "FLEXIBLE / Media with Text",
}

const mock = {
    id: "4526",
    mediaWithText: [
        {
            id: "4527",
            sectionHeader: "This is a Media With Text",
            shortDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            buttonText: "Download",
            downloadLink: "http://google.com",
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
            imageAltText: "long llama",
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
