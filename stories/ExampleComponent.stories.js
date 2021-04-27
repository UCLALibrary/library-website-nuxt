import SvgLogoUcla from "~/assets/svg/logo-ucla"

// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "EXAMPLE / Component",
}

// Variations of stories below
export const Default = () => ({
    template: `<example-component text="Hello world"/>`,
})

export const WithImage = () => ({
    data() {
        return {
            image: API.image,
            text: API.article.title,
            to: "/help/foo/bar/",
        }
    },
    template: `<example-component :text="text" :image="image"/>`,
})

export const WithSlot = () => ({
    data() {
        return {
            image: API.image,
        }
    },
    template: `
        <example-component
            text="This one has an image"
            :image="image"
        >
            <template v-slot:before>
                This is before
            </template>

            <template v-slot:after>
                This is after
            </template>

            This is the default slot.
        </example-component>
    `,
})

export const WithSvg = () => ({
    components: {
        SvgLogoUcla,
    },
    template: `
        <example-component text="Hello world">
            <svg-logo-ucla/>
        </example-component>
    `,
})
