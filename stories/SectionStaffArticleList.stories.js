import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Staff / Article / List",
}

const mock = [
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "1995-12-17T03:24:00",
        authors: [{ title: "Justo Magna", id: 123 }],
        description:
            "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "2020-12-17T03:24:00",
        authors: [
            { title: "Justo Magna", id: 123 },
            { title: "Luctus Suscipit", id: 124 },
            { title: "Morbi lacinia", id: 125 },
            { title: "Vestibulum Tincidunt", id: 126 },
            { title: "Ut Ultrices Malesuada Enim", id: 127 }
        ],
        description:
            "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title:
            "Mauris Rhoncus Aenean Vel Elit Scelerisque Mauris Pellentesque Pulvinar Rhoncus Aenean Vel Elit Scelerisque",
        date: "1998-12-17T03:24:00",
        authors: [
            { title: "Justo Magna", id: 123 },
            { title: "Luctus Suscipit", id: 124 }
        ],
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
