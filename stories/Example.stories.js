import ExampleComponent from "~/components/ExampleComponent"

// Storybook default settings
export default {
    title: "ExampleComponent",
}

// Mock out an image
const image = {
    srcset: "",
    sizes: "",
    src: "https://via.placeholder.com/1920x1080",
    alt: "Image alt text here",
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
            image,
        }
    },
    template: `<example-component text="This one has an image" :image="image"/>`,
})

export const WithSlot = () => ({
    components: { ExampleComponent },
    data() {
        return {
            image,
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
