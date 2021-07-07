import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Staff Article List",
}

const mock = [
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Ocavia 14, 2021",
        authors: ["Justo Magna"],
        description:
            "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Ocavia 14, 2021",
        authors: ["Justo Magna"],
        description:
            "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Ocavia 14, 2021",
        authors: ["Justo Magna"],
        description:
            "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    template: `
      <section-staff-article-list
        :items="items"
        section-title="Articles"
      />
  `,
})
