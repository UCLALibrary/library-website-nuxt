// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "HeadingArrow",
}

export const Default = () => ({
    template: `<heading-arrow/>`,
})

export const Visit = () => ({
    template: `<heading-arrow text="Visit the Library" to="/visit/foo/bar/"/>`,
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
