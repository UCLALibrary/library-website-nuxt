import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Teaser / Card",
}

const mock = [
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Feugiat",
        title: "Vel Quam Elementum",
        startDate: "2021-02-05T11:00:00-08:00",
        endDate: "2021-02-05T11:00:00-08:00",
        isOnline: true,
    },
    {
        image: API.image,
        to: "/visit/foo/baz/",
        category: "Tincidunt",
        title:
            "Mauris pellentesque pulvinar pellentesque habitant morbi tristique",
        isOnline: true,
    },
    {
        image: API.image,
        to: "/visit/foo/bat/",
        title: "Adipiscing Tristique",
        isOnline: false,
    },
    {
        image: API.image,
        to: "/visit/foo/ban/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        startDate: "2021-02-05T11:00:00-08:00",
        endDate: "2021-02-05T11:00:00-08:00",
        isOnline: false,
    },
    {
        image: API.image,
        to: "/visit/foo/barf/",
        category: "Curabitur ",
        title: "Vel Quam Elementum",
        startDate: "2021-02-05T11:00:00-08:00",
        endDate: "2021-02-05T11:00:00-08:00",
        isOnline: true,
    },
    {
        image: API.image,
        to: "/visit/foo/bad/",
        category: "Sagittis",
        title: "Aenean Lectus Elit",
        startDate: "2021-02-05T11:00:00-08:00",
        endDate: "2021-02-05T11:00:00-08:00",
        isOnline: true,
    },
    {
        image: API.image,
        to: "/visit/foo/bag/",
        category: "Tortor",
        title: "Vivamus Consectetuer Risus et Tortor",
        startDate: "2021-02-05T11:00:00-08:00",
        endDate: "2021-02-05T11:00:00-08:00",
        isOnline: false,
    },
    {
        image: API.image,
        to: "/visit/foo/bam/",
        category: "Maecenas",
        title: "Proin ut Ligula vel Nunc Egestas Porttitor",
        text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
        isOnline: false,
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    template: `
      <section-teaser-card
        :items="items"
      />
  `,
})
