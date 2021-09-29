export default {
    title: "Heading / Arrow",
}

export const Default = () => ({
    template: `<heading-arrow/>`,
})

export const Visit = () => ({
    template: `<heading-arrow text="Visit the Library" to="/visit/foo/bar/" section="visit"/>`,
})

export const About = () => ({
    template: `<heading-arrow text="Staff Directory" to="/about/foo/bar/"/>`,
})

export const Help = () => ({
    template: `<heading-arrow text="Get Help With" to="/help/foo/bar/"/>`,
})

export const Section = () => ({
    template: `<heading-arrow text="Visit the Library" to="" section="visit"/>`,
})
