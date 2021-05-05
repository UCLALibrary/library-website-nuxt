// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "DUAL MASONRY / SECTION",
}

const mock = { ...API.masonryItems }

export const Default = () => ({
    data() {
        return {
            items: mock.items,
            to: mock.to,
        }
    },
    template: `
          <section-dual-masonry
            :items="items"
            to="/visit/"
          />
      `,
})
