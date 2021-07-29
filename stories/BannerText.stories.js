// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Banner Text",
}

const mock = {
    category: "Event",
    text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.",
    title: "Curabitur Tortor Pellentesque Nibh Aenean",
    buttonText: "More Information",
    to: "/help/foo/bar/",
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
