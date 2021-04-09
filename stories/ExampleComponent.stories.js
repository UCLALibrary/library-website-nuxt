import ExampleComponent from "~/components/ExampleComponent"

// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "ExampleComponent",
}

// Variations of stories below
export const Default = () => ({
    components: { ExampleComponent },
    template: `<example-component text="Hello world"/>`,
})

export const WithImage = () => ({
    components: { ExampleComponent },
    data() {
        return {
            image: API.image,
            text: API.article.title,
        }
    },
    template: `<example-component :text="text" :image="image"/>`,
})

export const WithSlot = () => ({
    components: { ExampleComponent },
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
