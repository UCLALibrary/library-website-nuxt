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

export const LongCrumbsText = () => ({
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
})
