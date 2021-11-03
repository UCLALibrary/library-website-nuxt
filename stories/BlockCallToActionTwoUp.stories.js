// Storybook default settings
export default {
    title: "BLOCK / Call to Action Two Up",
}

const items = [
    {
        svgName: "svg-call-to-action-chat",
        title: "Lorem ipsum dolor sit amet?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Lorem ipsum dolor",
        to: "/help/foo/bar/",
        isDark: false,
        isSmallSize: true,
    },
    {
        svgName: "svg-call-to-action-chat",
        title: "Dolor sit amet Ipsum",
        text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Ipsum dolor amet",
        to: "/help/foo/bar/",
        isDark: true,
        isSmallSize: true,
    },
]

export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    template: `
        <block-call-to-action-two-up
            :items="items"
            isSmallSize=true
        />
    `,
})
