// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "GLOBAL / Header Sticky",
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
const secondaryItems= [{ ...API.links[0] },{ ...API.links[1] },{ ...API.links[2] }]

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            primaryItems,
            secondaryItems
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
        <header-sticky
            :primary-items="primaryItems"
            :secondary-items="parsedSecondaryItems"
        />
    `,
})

/*export const LongCrumbsText = () => ({
    data() {
        return {
            crumbs : [...mock.crumbs]
        }
    },
    computed: {
        parsedCrumbs() {
            // Restructuring item to support text key
            return this.crumbs.map((obj, index) => {
                return {
                    path: obj.path,
                    title: "Really long text,Really long text, Really long text, Really long text, Really long text",
                }
            })
        },
    },
    template: `
        <header-sticky
            :crumbs="parsedCrumbs"
            share-title="Borrowing Equipments"
            share-text="Short Description of this resource."
            share-url="http://localhost:3000/events/1"
        />
    `,
})

export const WithSocialLinks = () => ({
    data() {
        return {
            crumbs : [...mock.crumbs]
        }
    },
    template: `
        <header-sticky
            :crumbs="crumbs" 
            :has-share-links="true"
            share-title="Python Workshop"
            share-text="Short Description of this resource."
            share-url="http://localhost:3000/events/2"
        />
    `,
})

export const EllipsisTextWithSocialLinks = () => ({
    data() {
        return {
            crumbs : mock.crumbs
        }
    },
    computed: {
        parsedCrumbs() {
            // Restructuring item to support text key
            return this.crumbs.map((obj, index) => {
                if(index == 0) return obj
                return {
                    path: obj.path,
                    title: "Really long text,Really long text, Really long text, Really long text, Really long text",
                }
            })
        },
    },
    template: `
        <header-sticky
            :crumbs="parsedCrumbs" 
            :has-share-links="true"
            share-title="Python Workshop"
            share-text="Short Description of this resource."
            share-url="http://localhost:3000/events/2"
        />
    `,
})

export const WithCallToAction = () => ({
    data() {
        return {
            crumbs : mock.crumbs
        }
    },
    template: `
        <header-sticky 
            :crumbs="crumbs"
            share-title="Python Workshop"
            share-text="Short Description of this resource."
            share-url="http://localhost:3000/events/2"
            :has-call-to-action="true"
            call-to-action-label="Reserve"
            call-to-action-icon-name="svg-arrow-diagonal"
            call-to-action-url="www.example.com"
        />
    `,
})

export const WithLongCallToAction = () => ({
    data() {
        return {
            crumbs : mock.crumbs
        }
    },
    template: `
        <header-sticky 
            :crumbs="crumbs"
            share-title="Python Workshop"
            share-text="Short Description of this resource."
            share-url="http://localhost:3000/events/2"
            :has-call-to-action="true"
            call-to-action-label="Book Consultation"
            call-to-action-icon-name="svg-arrow-diagonal"
            call-to-action-url="www.example.com"
        />
    `,
})*/
