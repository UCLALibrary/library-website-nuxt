// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Banner Featured",
}

const mock = {
    image: API.image,
    to: "/help/foo/bar/",
    title: "Curabitur Tortor Pellentesque Nibh Aenean",
    category: { name: "Ullamcorper", to: "/category/featured/" },
    breadcrumb: { text: "Lectus", to: "http://foo/about/bar" },
    dates: "Junio 1, 2020 - Malesuada 31, 2021",
    isOnline: true,
    prompt: "Cursus Quis",
    alignRight: true,
    hasButton: true,
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
           :has-button="hasButton"
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
           align-right=false
           :has-button="hasButton"
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
           :has-button="hasButton"
        />
    `,
})

export const Slot = () => ({
    data() {
        return {
            image: API.image,
            to: "/visit/foo/bar/",
            title:
                "Sed Lectus Inceptos: Suspendisse in Justo eu Magna Luctus Suscipit",
            category: "Torquent",
            breadcrumb: { text: "Torquent", to: "/help/bar/foo" },
            dates: " Duis 1, 2020 - Curabitur31, 2021",
            isOnline: true,
            prompt: "Cursus Quis",
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
           :has-button="hasButton"
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
            breadcrumb: {
                text: "Curabitur Sollicitudin",
                to: "",
            },
            dates: " Sodales 1, 2020 - Accumsan 31, 2021",
            isOnline: true,
            prompt: "Amet Mauris",
            alignRight: true,
            hasButton: true,
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
           :has-button="hasButton"
        >
            <heading-arrow
                :text="breadcrumb.text"
                :to="breadcrumb.to"
                v-if="breadcrumb.to"
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
           :dates="dates"
           :is-online="isOnline"
           :prompt="prompt"
           :has-button="hasButton"
           :ratio="42"
           times="1:00pm"
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
           :dates="dates"
           :is-online="isOnline"
           :prompt="prompt"
           :ratio="42"
           align-right=false
           :has-button="hasButton"
           times="1:00pm"
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
           :dates="dates"
           :is-online="isOnline"
           :prompt="prompt"
           :ratio="42"
           align-right=false
           times="1:00pm"
           has-button=false
       />
    `,
})
