// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Event",
}

export const ShortText = () => ({
    data() {
        return {
            item: { ...API.bricks[0] },
        }
    },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            :to="item.to"
        />
    `,
})

export const LongText = () => ({
    data() {
        return {
            item: { ...API.bricks[1] },
        }
    },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            :to="item.to"
        />
    `,
})
