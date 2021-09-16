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
    location: "Curabitur Tortor",
    date: "1995-12-17T03:24:00",
    buttonText: "Curabitur",
    to: "/visit/foo/bar/",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-text
        :category="category"
        :title="title"
        :text="text"

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
        :date="date"
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
        :date="date"
    />`,
})

export const DarkBlueBackground = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<banner-text
        :category="category"
        :title="title"
        :button-text="buttonText"
        :date="date"
        :to="to"
        :isDarkBlue="true"
    />`,
})

export const LocationInfo = () => ({
    data() {
        return {
            ...mock,
            to: "/help/foo/bar/",
        }
    },
    template: `<banner-text
        :category="category"
        :title="title"
        :date="date"
        :location="location"
        :text="text"
        :to="to"
    />`,
})
