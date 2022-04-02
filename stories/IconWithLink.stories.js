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
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <icon-with-link
        :locations="locations"
        />
    `,
})
