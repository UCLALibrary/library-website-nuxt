// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Banner Featured",
}

const mock = {
    image: API.image,
    to: "/help/foo/bar/",
    title: "New Director of Film and Television Archive",
    category: "Featured",
    breadcrumb: { text: "Title", to: "http:///foo/about/bar" },
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
    template: `<banner-featured
   :image="image"
   :to="to"
   :title="title"
   :category="category"
   :breadcrumb="breadcrumb"
   :dates="dates"
   :is-online="isOnline"
   :prompt="prompt"
  /> `,
})

export const NotOnline = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-featured
   :image="image"
   :to="to"
   :title="title"
   :category="category"
   :breadcrumb="breadcrumb"
   :dates="dates"
   is-online=false
   :prompt="prompt"
   align-right=false
  /> `,
})

export const Slot = () => ({
    data() {
        return {
            image: API.image,
            to: "/visit/foo/bar/",
            title: "New Director of Film and Television Archive",
            category: "Featured",
            breadcrumb: { text: "Featured", to: "" },
            dates: " July 1, 2020 - December 31, 2021",
            isOnline: true,
            prompt: "Read More",
            alignRight: true,
        }
    },
    template: `<banner-featured
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
   v-slot:banner-text= "Featured"
  /> `,
})
