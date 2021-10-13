// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Banner Featured",
}

const mock = {
    image: API.image,
    to: "/help/foo/bar/",
    title: "Curabitur Tortor Pellentesque Nibh Aenean",
    category: "Ullamcorper",
    breadcrumb: "Lectus",
    startDate: "1995-12-17T03:24:00",
    endDate: "1995-12-17T03:24:00",
    isOnline: true,
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
        <banner-featured
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           :is-online="isOnline"
           :prompt="prompt"
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
        <banner-featured
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           :is-online="isOnline"
           :prompt="prompt"
           :align-right="false"
       />
    `,
})

export const NotOnline = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-featured
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           :is-online="false"
           :prompt="prompt"
           :align-right="alignRight"
        />
    `,
})

export const Slot = () => ({
    data() {
        return {
            image: API.image,
            to: "/visit/foo/bar/",
            title: "Sed Lectus Inceptos: Suspendisse in Justo eu Magna Luctus Suscipit",
            category: "Torquent",
            breadcrumb: "Torquent",
            date: "1995-12-17T03:24:00",
            isOnline: true,
            prompt: "Cursus Quis",
            alignRight: false,
        }
    },
    template: `
        <banner-featured
           :image="image"
           to="/about/foo/bar/"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           is-online=false
           :prompt="prompt"
           :align-right="alignRight"
           location="YRL"
        >
            <heading-arrow
                :text="breadcrumb.text"
                :to="breadcrumb.to"
                v-if="breadcrumb.to"
            />
        </banner-featured>
    `,
})

export const LongHeading = () => ({
    data() {
        return {
            image: API.image,
            to: "/visit/foo/bar/",
            title: "Sit Amet Augue Congue Elementum Aliquet Risus Ultricies",
            category: "Curabitur",
            breadcrumb: "Curabitur Sollicitudin",
            date: "1995-12-17T03:24:00",
            isOnline: true,
            prompt: "Amet Mauris",
            alignRight: false,
        }
    },
    template: `
        <banner-featured
           :image="image"
           to="/about/foo/bar/"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           is-online=false
           :prompt="prompt"
           :align-right="alignRight"
           location="YRL"

        >
            <heading-arrow
                :text="breadcrumb"
                v-if="breadcrumb"
            />
        </banner-featured>
    `,
})

export const WideImage = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-featured
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           :is-online="isOnline"
           :prompt="prompt"
           :ratio="42"

       />
    `,
})

export const WideImageLeftAligned = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-featured
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           :is-online="isOnline"
           :prompt="prompt"
           :ratio="42"
           :align-right="false"

       />
    `,
})

export const NoButton = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <banner-featured
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :start-date="startDate"
           :end-date="endDate"
           :is-online="isOnline"
           :prompt="prompt"
           :ratio="42"
           :align-right="false"
       />
    `,
})
