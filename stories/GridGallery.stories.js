import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "IMPACT REPORT / Grid Gallery",
}

const mock = [
    {
        image: API.image,
        to: "/visit/foo/bar/",
        headlineText: "Vel Quam Elementum",
        date: "Pempti, Mars 14, 2021",
        shortSnippet: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
    },
    {
        image: API.image,
        to: "/visit/foo/baz/",
        headlineText:
            "Mauris pellentesque pulvinar pellentesque habitant morbi tristique",
        date: "Augustus, Avril 14, 2021",
        shortSnippet: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
    },
    {
        image: API.image,
        to: "/visit/foo/bat/",
        headlineText: "Adipiscing Tristique",
        date: "Martius, Fevrier 14, 2021",
        shortSnippet: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
    },
    {
        image: API.image,
        to: "/visit/foo/ban/",
        headlineText: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Mercurii, Ocavia 14, 2021",
        shortSnippet: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
    },
    {
        image: API.image,
        to: "/visit/foo/barf/",
        headlineText: "Vel Quam Elementum",
        date: "Pempti, Mars 14, 2021",
        shortSnippet: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
    },
    {
        image: API.image,
        to: "/visit/foo/bad/",
        headlineText: "Aenean Lectus Elit",
        date: "Augustus, Avril14, 2021",
        shortSnippet: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    template: `
      <grid-gallery
        :items="items"
      />
  `,
})

export const Featured = () => ({
    data() {
        return { items: mock }
    },
    computed: {
        parsedItems() {
            return this.items.map((obj, index) => {
                let featured = false
                if(index == 5) featured = true
                return {
                    ...obj,
                    featured: featured,
                }
            })
        },
    },
    template: `
      <grid-gallery
        :items="parsedItems"
      />
  `,
})
