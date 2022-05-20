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
    startDate: "2022-03-31T07:00:00+00:00",
    endDate: "2021-11-26T11:00:00-08:00",
    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
    imageAspectRatio: 60,
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
}

const mock2 = {
    image: API.image,
    to: "/about/foo/bar/",
    category: "Lerisque",
    title: "Orci Dapibus",
    startDate: "2021-02-05T11:00:00-08:00",
    endDate: "2021-02-05T11:00:00-08:00",
    text: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
    imageAspectRatio: 60,
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
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
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :has-triangle="true"
          :is-vertical="true"
          :image-aspect-ratio="60"
          :locations="locations"
      />
  `,
})

export const About = () => ({
    data() {
        return { ...mock2 }
    },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :has-triangle="true"
          :is-vertical="true"
          :image-aspect-ratio="60"
          :locations="locations"
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
          :start-date="startDate"
          :end-date="endDate"
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
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :has-triangle="true"
          :is-vertical="true"
          :image-aspect-ratio="60"
          :locations="locations"
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
      :start-date="startDate"
      :end-date="endDate"
      :is-vertical="true"
      :image-aspect-ratio="60"
      :locations="locations"
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
      :start-date="startDate"
      :end-date="endDate"
      :is-vertical="true"
      :image-aspect-ratio="60"
      :locations="locations"
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
      :start-date="startDate"
      :end-date="endDate"
      :is-vertical="true"
      :image-aspect-ratio="60"
      :locations="locations"
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
      :start-date="startDate"
      :end-date="endDate"
      :locations="locations"
      :image-aspect-ratio="60"
      />
  `,
})

export const ListShortTitle = () => ({
    data() {
        return {
            ...mock2,
        }
    },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          :category="category"
          title="Minim"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :image-aspect-ratio="60"
          :locations="locations"
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
          to="/help/foo/bar/"
          :category="category"
          title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :image-aspect-ratio="60"
          :locations="locations"
      />
  `,
})
