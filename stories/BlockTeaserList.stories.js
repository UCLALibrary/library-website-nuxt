// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Teaser / List",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    category: "Ullamco",
    title: "Fames ac turpis egestas sed tempus lorem ipsum",
    date: "Pempti, Ocavia 14, 2021",
    time: "3 - 5 pm",
    text:
        "Version control is the lab notebook of the digital world. It’s what professionals use to keep track of what they’ve done and enables collaboration with others. Version control is what software developers use for their work. It is a cool tool.",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <block-teaser-list
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
      <block-teaser-list
      :image="image"
      :to="to"
      :category="category"
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
      <block-teaser-list
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
