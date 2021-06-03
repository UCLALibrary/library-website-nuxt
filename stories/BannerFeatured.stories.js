// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Banner Featured",
}

const mock = {
    image: API.image,
    to: "/help/foo/bar/",
    title: "New Director of Film and Television Archive",
    category: { name: "Featured", to: "/category/featured/" },
    breadcrumb: { text: "Title", to: "http://foo/about/bar" },
    dates: " July 1, 2020 - December 31, 2021",
    isOnline: true,
    prompt: "Read More",
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
           :dates="dates"
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
           :dates="dates"
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
           :dates="dates"
           is-online=false
           :prompt="prompt"
           align-right=false
        />
    `,
})

export const Slot = () => ({
    data() {
        return {
            image: API.image,
            to: "/visit/foo/bar/",
            title: "Drawn to Paradise: Jewish Musicians in Los Angeles",
            category: "Featured",
            breadcrumb: { text: "Featured", to: "/help/bar/foo" },
            dates: " July 1, 2020 - December 31, 2021",
            isOnline: true,
            prompt: "Read More",
            alignRight: true,
        }
    },
    template: `
        <banner-featured
           :image="image"
           to="/about/foo/bar/"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :dates="dates"
           is-online=false
           :prompt="prompt"
           align-right=false
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
            title: "New Director of Film and Television Archive",
            category: "Featured",
            breadcrumb: {
                text: "New Featured Exhibitions",
                to: "",
            },
            dates: " July 1, 2020 - December 31, 2021",
            isOnline: true,
            prompt: "Read More",
            alignRight: true,
        }
    },
    template: `
        <banner-featured
           :image="image"
           to="/about/foo/bar/"
           :title="title"
           :category="category"
           :breadcrumb="breadcrumb"
           :dates="dates"
           is-online=false
           :prompt="prompt"
           align-right=false
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
