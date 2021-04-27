// Storybook default settings
export default {
    title: "DIVIDER / Way Finder",
}

// Variations of stories below
export const Default = () => ({
    template: `<divider-way-finder />`,
})

export const Visit = () => ({
    template: `<divider-way-finder color="visit"/>`,
})

export const About = () => ({
    template: `<divider-way-finder color="about" />`,
})

export const Help = () => ({
    template: `<divider-way-finder color="help"/>`,
})
