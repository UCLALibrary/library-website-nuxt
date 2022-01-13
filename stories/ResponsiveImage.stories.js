import ResponsiveImage from "~/components/ResponsiveImage"

// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "GLOBAL / Responsive Image",
}

// Variations of stories below
export const Default = () => ({
    components: { ResponsiveImage },
    data() {
        return {
            image: API.image,
        }
    },
    template: `<responsive-image :image="image"/>`,
})

export const SquareRatio = () => ({
    components: { ResponsiveImage },
    data() {
        return {
            image: API.image,
        }
    },
    template: `
        <responsive-image
            :image="image"
            :aspect-ratio="100"
        />
    `,
})

export const ObjectFitContain = () => ({
    components: { ResponsiveImage },
    data() {
        return {
            image: API.image,
        }
    },
    template: `
        <responsive-image
            :image="image"
            :aspect-ratio="100"
            object-fit="contain"
        />
    `,
})
