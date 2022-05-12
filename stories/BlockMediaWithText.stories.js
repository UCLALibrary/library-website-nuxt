export default {
    title: "block / Media with Text",
}

const mock = {
    id: "13669",
    typeHandle: "mediaWithText",
    sectionTitle: "A section of media with text",
    sectionSummary: "<p>A section of media with text</p>",
    mediaWithText: [
        {
            id: "13670",
            titleLink: "A media Link",
            description: "Citation Integration",
            coverImage: [
                {
                    id: "5115",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/Screen-Shot-2022-02-17-at-11.42.39-AM.png",
                    height: 2151,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 2560w",
                    alt: "Screen Shot 2022 02 17 at 11 42 39 AM",
                    focalPoint: [0.5, 0.5],
                },
            ],
            buttonText: "Download this",
            buttonUrl:
                "https://uclalibrary.github.io/research-tips/assets/handouts/citation-integration-final.pdf",
            linkToMedia:
                "https://uclalibrary.github.io/research-tips/assets/handouts/citation-integration-final.pdf",
            typeMedia: "other",
        },
    ],
}

export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :media-link="mediaWithText[0].linkToMedia"
            :is-video="false"
            :is-audio="false"
            :image="mediaWithText[0].coverImage[0]"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
})

export const NoMediaLink = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :is-video="false"
            :is-audio="false"
            :image="mediaWithText[0].coverImage[0]"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
})

export const IsVideo = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :is-video="true"
            :is-audio="false"
            :image="mediaWithText[0].coverImage[0]"
            type-media="video"
        />
    `,
})

export const IsAudio = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :is-video="false"
            :is-audio="true"
            :image="mediaWithText[0].coverImage[0]"
            type-media="audio"
        />
    `,
})

export const NoImage = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :is-video="false"
            :is-audio="false"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
})
