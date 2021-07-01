// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Teaser / Highlight",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    category: "Ullamco",
    title: "Fames ac turpis egestas sed tempus",
    date: "Pempti, Ocavia 14, 2021",
    time: "3 - 5 pm",
    text:
        "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <block-teaser-highlight
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :date="date"
          :time="time"
          :text="text"
      />
  `,
})

export const ShortTitle = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
      <block-teaser-highlight
          :image="image"
          :to="to"
          category="Excepteurato"
          title="Minim"
          :date="date"
          :time="time"
          :text="text"
      />
  `,
})

export const LongTitle = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
      <block-teaser-highlight
          :image="image"
          :to="to"
          :category="category"
          title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          :date="date"
          :time="time"
          :text="text"
      />
  `,
})
