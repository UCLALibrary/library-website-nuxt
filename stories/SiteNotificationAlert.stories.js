// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "Global / SiteNotificationAlert",
}

export const Default = () => ({
    data() {
        return {
            title: API.alert.title,
            text: API.alert.text
        }
    },
    template: `<site-notification-alert :title="title" :text="text" />`,
})

// Variations of stories below
export const LongMessage = () => ({
    data() {
        return {
            title: API.alert.title,
            text: API.alert.textLong
        }
    },
    template: `<site-notification-alert :title="title" :text="text" />`,
})