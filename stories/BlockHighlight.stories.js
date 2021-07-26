// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Highlight",
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
    imageAspectRatio: 60,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :dates="date"
          :times="time"
          :text="text"
          :has-triangle="true"
          :is-verticle="true"
          :is-online="true"
          location="online"
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
      <block-highlight
          :image="image"
          :to="to"
          category="Excepteurato"
          title="Minim"
          :dates="date"
          :times="time"
          :text="text"
          :has-triangle="true"
          :is-verticle="true"
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
      <block-highlight
          :image="image"
          :to="to"
          :category="category"
          title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          :dates="date"
          :times="time"
          :text="text"
          :has-triangle="true"
          :is-verticle="true"
      />
  `,
})
