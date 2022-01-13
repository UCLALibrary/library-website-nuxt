// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Banner Header",
}

const mock = {
    image: API.image,
    to: "/help/foo/bar/",
    title: "Curabitur Tortor Pellentesque Nibh Aenean",
    breadcrumb: "Lectus",
    startDate: "1995-12-17T03:24:00",
    endDate: "1995-12-17T03:24:00",
    byline: "By Cursus Quis",
    locations: [
        {
            id: "523",
            title: "Powell Library",
            to: "visit/locations/powell-library",
        },
        {
            id: "3062",
            title: "Online",
            to: "visit/locations/online",
        },
    ],
    prompt: "Cursus Quis",
    alignRight: true,
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :prompt="prompt"
           :locations="locations"
       />
    `,
})

export const LeftAligned = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           :prompt="prompt"
           :align-right="false"
           :locations="locations"
       />
    `,
})

export const NoBreadcrumb = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :start-date="startDate"
           :end-date="endDate"
           :prompt="prompt"
           :align-right="false"
           :locations="locations"
       />
    `,
})

export const Article = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :prompt="prompt"
           :align-right="false"
       />
    `,
})

export const Location = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-header
           :image="image"
           :title="title"
           :align-right="false"
       />
    `,
})
