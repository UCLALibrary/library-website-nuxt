// Storybook default settings
export default {
    title: "BUTTON / More",
}

// Variations of stories below
export const Default = () => ({
    template: `<button-more/>`,
})

export const WithAlternateText = () => ({
    template: `<button-more text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>`,
})
