import ResponsiveImage from "~/components/ResponsiveImage"

// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "ResponsiveImage",
}

// Variations of stories below
export const Default = () => ({
    components: { ResponsiveImage },
    data() {
        return {
            image: API.image,
        }
    },
    template: `<responsive-image v-bind="image"/>`,
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
            v-bind="image"
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
            v-bind="image"
            :aspect-ratio="100"
            object-fit="contain"
        />
    `,
})
