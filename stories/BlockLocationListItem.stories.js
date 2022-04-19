export default {
    title: "block / Location List Item",
}

const mock = {
    image: {
        src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/long-llama.jpg",
        height: 352,
        width: 352,
        srcset: "",
        alt: "UCLA Library",
        focalPoint: [0.5, 0.5],
    },
    sectionHeader: "Arts Library",
    workingHours: { // TODO: See how this is getting back from the backend
        day: "Today",
        hours: {
            opening: "8am",
            closing: "5pm",
        }
    },
    to: "http://google.com",

}

export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-location-list-item
            :section-header="sectionHeader"
            :short-description="shortDescription"
            :button-text="buttonText"
            :to="to"
            :is-video="false"
            :is-audio="false"
            :image="image"
        />
    `,
})
