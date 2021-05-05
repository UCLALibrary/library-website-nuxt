// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "DUAL MASONRY / BRICK / Top",
}

const mock1 = { ...API.masonryItems.items[0] }
const mock2 = { ...API.masonryItems.items[1] }

export const ShortText = () => ({
    data() {
        return {
            item: mock1,
        }
    },
    template: `
          <brick-top
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
            item: mock2,
        }
    },
    template: `
          <brick-top
          :category="item.category"
          :title="item.title"
          :prompt="item.prompt"
          :dates="item.dates"
          :to="item.to"
          />
      `,
})
