// Storybook default settings
export default {
    title: "IconWithLink",
}

// Variations of stories below
export const Default = () => ({
    template: `<icon-with-link/>`,
})

export const WithAlternateText = () => ({
    template: `<icon-with-link text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>`,
})
