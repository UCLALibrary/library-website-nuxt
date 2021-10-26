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
          :is-vertical="true"
          :is-online="true"
          :image-aspect-ratio="60"
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
          :is-vertical="true"
          :image-aspect-ratio="60"
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
          :is-vertical="true"
          :image-aspect-ratio="60"
      />
  `,
})

export const Card = () => ({
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
      :is-vertical="true"
      :image-aspect-ratio="60"
      />
  `,
})
export const CardShortTitle = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <block-highlight
      :image="image"
      :to="to"
      :category="category"
      title="Minim"
      :dates="date"
      :times="time"
      :is-vertical="true"
      :image-aspect-ratio="60"
      />
  `,
})

export const CardLongTitle = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <block-highlight
      :image="image"
      :to="to"
      :category="category"
      title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      :dates="date"
      :times="time"
      :is-vertical="true"
      :image-aspect-ratio="60"
      />
  `,
})

export const List = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <block-highlight
      :image="image"
      :to="to"
      :category="category"
      :title="title"
      :text="text"
      :dates="date"
      :times="time"
      :image-aspect-ratio="60"
      />
  `,
})

export const ListShortTitle = () => ({
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
          title="Minim"
          :dates="date"
          :times="time"
          :text="text"
          :image-aspect-ratio="60"
      />
  `,
})

export const ListLongTitle = () => ({
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
          :image-aspect-ratio="60"
      />
  `,
})

