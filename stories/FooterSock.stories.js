// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "FOOTER / Footer Sock",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items: [...API.links, ...API.links],
        }
    },
    computed: {
        parsedItems() {
            // Restructuring item to support text key
            return this.items.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
    },
    template: `<footer-sock :items="parsedItems"/>`,
})
