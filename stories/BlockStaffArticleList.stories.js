// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Staff / Article / List",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    category: "Ullamco",
    title: "Fames ac turpis egestas sed tempus lorem ipsum",
    date: "1995-12-17T03:24:00",
    authors: [{ title: "Justo Magna", id: 123 }],
    description:
        "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
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
        return {
            ...mock,
            authors: [
                {title: "Justo Magna", id: "article-1"},
                {title: "Luctus Suscipit", id: "article-2"},
                {title: "Morbi lacinia", id: "article-3"},
                {title: "Vestibulum Tincidunt", id: "article-4"},
                {title: "Ut Ultrices Malesuada Enim", id: "article-5"},
            ],
        }
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

export const LongTitle = () => ({
    data() {
        return { ...mock, authors: [{id: "article-1", title: "Justo Magna"}, {id: "article-2", title: "Luctus Suscipit"}] }
    },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          title="Mauris Rhoncus Aenean Vel Elit Scelerisque Mauris Pellentesque Pulvinar Rhoncus Aenean Vel Elit Scelerisque"
          :date="date"
          :authors="authors"
          :description="description"
      />
  `,
})

export const LongDescription = () => ({
    data() {
        return { ...mock, authors: [{title: "Justo Magna", id: "article1", slug: "/staff/Justo-Magna"}, {title: "Luctus Suscipit", id: "article2", slug: "/staff/Luctus-Suscipit"}] }
    },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :date="date"
          :authors="authors"
          description="Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien."
      />
  `,
})
