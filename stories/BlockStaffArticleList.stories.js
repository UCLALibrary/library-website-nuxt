// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Staff Article List",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    category: "Ullamco",
    title: "Fames ac turpis egestas sed tempus lorem ipsum",
    date: "Ocavia 14, 2021",
    authors: ["Lorem Ipsum"],
    description:
        "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :date="date"
          :authors="authors"
          :description="description"
      />
  `,
})

export const MultipleAuthors = () => ({
    data() {
        return { ...mock, authors: ["Lorem Impsum", "Lorem Impsum"] }
    },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :date="date"
          :authors="authors"
          :description="description"
      />
  `,
})
