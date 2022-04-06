// Storybook default settings
export default {
    title: "Icon With Link",
}
const mock = {}
// Variations of stories below
// Default = WithLink
export const Default = () => ({
    template: `
        <icon-with-link
            text="Powell"
            icon-name="svg-icon-location"
            to="/visit/library/powell"
        />
    `,
})

export const WithExternalLink = () => ({
    template: `
        <icon-with-link
            text="See More"
            icon-name="svg-icon-search"
            to="https://www.google.com/"
        />
    `,
})

export const InternalLink = () => ({
    template: `
        <icon-with-link
            text="Emergency Phone Booth"
            icon-name="svg-icon-phone"
            to= "/help/services-and-resources"
        />
    `,
})

export const ConsultationIconLink = () => ({
    template: `
        <icon-with-link
            text="Book a Consultation"
            icon-name="svg-icon-consultation"
            to= "/help/services-and-resources"
        />
    `,
})

export const LongText = () => ({
    template: `
        <icon-with-link
            text="A Icon with Link with Very Very Long Text What Happens?"
            icon-name="svg-icon-consultation"
            to= "/help/services-and-resources"
        />
    `,
})
