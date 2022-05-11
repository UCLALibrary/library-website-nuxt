// Storybook default settings
export default {
    title: "Media Gallery / Lightbox",
}

const mock = [
    {
        "src": "https://via.placeholder.com/1920x1080",
        "height": 1080,
        "width": 1920,
        "sizes": "100vw",
        "alt": "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "title": "1x-Lorem ipsum"
    },
    {
        "src": "https://via.placeholder.com/1920x1080",
        "height": 1080,
        "width": 1920,
        "sizes": "100vw",
        "alt": "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "title": "2x-Lorem ipsum"
    },
    {
        "src": "https://via.placeholder.com/1920x1080",
        "height": 1080,
        "width": 1920,
        "sizes": "100vw",
        "alt": "3-Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "title": "3x-Lorem ipsum"
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            image: mock
        }
    },
    template: `<media-gallery-lightbox :image="image" :n-items="image.length" />`,
})

export const FirstItem = () => ({
    data() {
        return {
            image: mock,
            captionTitle: mock.title,
            captionText: mock.alt,
        }
    },
    template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" :selection-index="0" :n-items="9" />`,
})

export const LastItem = () => ({
    data() {
        return {
            image: mock,
            captionTitle: mock.title,
            captionText: mock.alt,
        }
    },
    template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" :selection-index="3" :n-items="4" />`,
})

export const OnlyItem = () => ({
    data() {
        return {
            image: mock,
            captionTitle: mock.title,
            captionText: mock.alt,
        }
    },
    template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" />`,
})