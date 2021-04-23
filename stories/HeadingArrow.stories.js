// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "HeadingArrow",
}

export const Default = () => ({
    template: `<heading-arrow text="Library News"/>`,
})

export const Help = () => ({
    data() {
        return {
            to: "/help/foo/bar/",
        }
    },
    template: `<heading-arrow text="Get Help With" :to="to"/>`,
})

export const Visit = () => ({
    data() {
        return {
            to: "/visit/foo/bar/",
        }
    },
    template: `<heading-arrow text="Visit the Library" :to="to"/>`,
})

export const About = () => ({
    data() {
        return {
            to: "/about/foo/bar/",
        }
    },
    template: `<heading-arrow text="Staff Directory" :to="to"/>`,
})
