// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Teaser / Card",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    category: "Ullamco",
    title: "Fames ac turpis egestas sed tempus",
    date: "Pempti, Ocavia 14, 2021",
    time: "3 - 5 pm",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { item: mock }
    },
    template: `
      <block-teaser-card
        :item="item"
      />
  `,
})

export const ShortTitle = () => ({
    data() {
        return {
            item: {
                ...mock,
                title: "Minim",
            },
        }
    },
    template: `
      <block-teaser-card
        :item="item"
      />
  `,
})

export const LongTitle = () => ({
    data() {
        return {
            item: {
                ...mock,
                title:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            },
        }
    },
    template: `
      <block-teaser-card
        :item="item"
      />
  `,
})
