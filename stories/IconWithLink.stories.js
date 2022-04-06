// Storybook default settings
export default {
    title: "IconWithLink",
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
            text="Powell"
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

// icon-calendar
// icon-card
// icon-consultation
// icon-ellipsis
// icon-email
// icon-list
// icon-location
// icon-online
// icon-phone
// icon-search
// icon-virtual
// icon-share-email
// icon-share-printer
