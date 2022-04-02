// Storybook default settings
export default {
    title: "IconWithLink",
}
const mock = {
    locations: [
        {
            id: "523",
            title: "Powell Library",
            to: "visit/locations/powell-library",
        },
        {
            id: "801",
            title: "YRL",
            to: "visit/locations/yrl",
        },
        {
            id: "3062",
            title: "Online",
            to: "visit/locations/online",
        },
    ],
}
// Variations of stories below
// Default = WithLink
export const Default = () => ({
    template: `
        <icon-with-link
        :text="Powell"
        :icon-name="icon-location"
        :to="/visit/library/powell"
        />
    `,
})

export const WithExternalLink = () => ({
    template: `
        <icon-with-link
        :text="Powell"
        :icon-name="con-search"
        :to="https://www.google.com/"
        />
    `,
})

export const WithoutLink = () => ({
    template: `
        <icon-with-link
        :text="Emergency Phone Booth"
        :icon-name="icon-phone"
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
