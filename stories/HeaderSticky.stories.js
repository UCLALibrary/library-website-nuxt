// Storybook default settings
export default {
    title: "GLOBAL / Header Sticky",
}

const mock = {
    crumbs: [
        { title: "Breadcrumb 1 Text", path: "." },
        { title: "Breadcrumb 2 Text", path: "/test" },
    ]
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            crumbs : mock.crumbs
        }
    },
    template: `
        <header-sticky
            :crumbs="crumbs"
            share-title="Borrowing Equipments"
            share-text="Short Description of this resource."
            share-url="http://localhost:3000/events/1"
        />
    `,
})

export const WithSocialLinks = () => ({
    data() {
        return {
            crumbs : mock.crumbs
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
            call-to-action-label="Errrr"
            call-to-action-icon-name="svg-arrow-diagonal"
            call-to-action-url="www.example.com"
        />
    `,
})
