// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Brick",
}

const mock = { ...API.masonryItems.items[0] }
const mock2 = { ...API.masonryItems.items[1] }

export const MoleculeTopShortText = () => ({
    data() {
        return {
            item: mock,
        }
    },
    template: `
          <text-and-graphic-brick
          :category="item.category"
          :title="item.title"
          :prompt="item.promt"
          :dates="item.dates"
          :to="item.to"
          class="molecule-top"
          />
      `,
})

export const MoleculeBottomLongText = () => ({
    data() {
        return {
            item: mock2,
        }
    },
    template: `
          <text-and-graphic-brick
          :category="item.category"
          :title="item.title"
          :prompt="item.promt"
          :dates="item.dates"
          :to="item.to"
          class="molecule-bottom"
          />
      `,
})
