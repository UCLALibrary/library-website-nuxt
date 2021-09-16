// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Banner Text",
}

const mock = {
    category: "Event",
    text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.",
    title: "Curabitur Tortor Pellentesque",
    buttonText: "Curabitur",
    to: "/about/foo/bar/",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-text
        :category="category"
        :text="text"
        :title="title"
        :button-text="buttonText"
        :to="to"
    />`,
})

export const LongTitle = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-text
        :category="category"
        :text="text"
        :title="title"
        :button-text="buttonText"
        :to="to"
    />`,
})

export const NoButton = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-text
        :category="category"
        :text="text"
        :title="title"
    />`,
})

export const NoText = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-text
        :category="category"
        :title="title"
    />`,
})

export const DarkBlue = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-text
        :category="category"
        :title="title"
    />`,
})

export const LocationInfo = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-text
        :category="category"
        :title="title"
    />`,
})
