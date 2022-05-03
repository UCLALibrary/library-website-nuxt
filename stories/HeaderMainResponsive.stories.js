// Import mock api data
import * as API from "~/stories/mock-api.json"
import HeaderMainResponsive from "~/components/HeaderMainResponsive"

// Storybook default settings
export default {
    title: "GLOBAL / Header Main Responsive",
}

const primaryItems = [
    { ...API.primaryNavlinks[0] },
    {
        ...API.primaryNavlinks[0],
        name: "Visit",
        url: "/visit/",
    },
    {
        ...API.primaryNavlinks[0],
        name: "About",
        url: "/about/",
    },
    { ...API.primaryNavlinks[3] },
]

const secondaryItems = [
    ...API.links, 
    { 
        ...API.links[0]
    }
]

const mock = {
    label: "Support Us",
    isSecondary: false,
    buttonLink: "#"
}

const Template = (args, { argTypes }) => ({
    components: { HeaderMainResponsive },
    props: Object.keys(argTypes),
    template: '<header-main-responsive v-bind="$props" />',
})

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            primaryItems,
            secondaryItems,
            ...mock
        }
    },
    computed: {
        parsedSecondaryItems() {
            // Restructuring item to support text key
            return this.secondaryItems.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
    },
    template: `
        <header-main-responsive :primary-nav="primaryItems" 
        :secondary-nav="parsedSecondaryItems"
        current-path="/about/foo/bar"
        :label="label"
        :isSecondary="isSecondary"
        :buttonLink="buttonLink"/>
    `,
})

export const WithControls = Template.bind({})
WithControls.args = { ...primaryItems }
