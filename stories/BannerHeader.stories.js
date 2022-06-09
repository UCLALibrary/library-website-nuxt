// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Banner Header",
}

const mock = {
    image: API.image,
    video: API.video,
    to: "/help/foo/bar/",
    title: "Curabitur Tortor Pellentesque Nibh Aenean",
    category: "Lectus",
    startDate: "1995-12-17T03:24:00",
    endDate: "1995-12-17T03:24:00",
    byline: ["Cursus Quis"],
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
           :category="category"
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
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :prompt="prompt"
           :align-right="false"
           :locations="locations"
       />
    `,
})

export const NoCategory = () => ({
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

export const WithByline = () => ({
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

export const OnlyTitle = () => ({
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

export const Video = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-header
           :video="video"
           :title="title"
           :align-right="false"
       />
    `,
})

export const WithContactInfo = () => ({
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
           text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
           email="ada@somewhere.com"
           phone="555-555-5555"
           address="1337 Trails End Road Fort Lauderdale, FL 33301"
           staff-directory-link="/about/staff?q=*&location=slug"
           address-link="https://map.ucla.edu/?k=false&id=81516"
           :prompt="prompt"
           
       />
    `,
})

// --------- ARTICLE --------------

const article = {
    image: API.image,
    title: "I Like Turtles",
    category: "Library News",
    dateCreated: "2022-02-09T10:57:46-08:00",
    byline: ["Jen Diamond", "Courtney Hoffner"],
    alignRight: true,
}

export const ArticleDetail= () => ({
    data() {
        return {
            ...article,
        }
    },
    template: `
        <banner-header
           :image="image"
           :title="title"
           :byline:"byline"
           :dateCreated="dateCreated"
       />
    `,
})
