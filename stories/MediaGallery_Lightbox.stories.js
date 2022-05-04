// Storybook default settings
export default {
    title: "Media Gallery / Lightbox",
}

const mock = {
    "src": "https://via.placeholder.com/1920x1080",
    "height": 1080,
    "width": 1920,
    "sizes": "100vw",
    "alt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "title": "Lorem ipsum"
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            image: mock,
            captionTitle: mock.title,
            captionText: mock.alt,
        }
    },
    template: `<media-gallery-lightbox :image="image" :caption-title="captionTitle" :caption-text="captionText" :selection-index="3" :n-items="5" />`,
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