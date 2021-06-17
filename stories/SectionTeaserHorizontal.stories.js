import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Teaser List",
}

const mock = [
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Pempti, Ocavia 14, 2021",
        time: "3 - 5 pm",
        text:
            "Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Pempti, Ocavia 14, 2021",
        time: "3 - 5 pm",
        text:
            "Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum.Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum.Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum. Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Pempti, Ocavia 14, 2021",
        time: "3 - 5 pm",
        text:
            "Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title:
            "Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum",
        date: "Pempti, Ocavia 14, 2021",
        time: "3 - 5 pm",
        text:
            "Fames ac turpis egestas sed tempus lorem ipsum sed tempus lorem ipsum.",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    template: `
      <section-teaser-list
        :items="items"
      />
  `,
})
