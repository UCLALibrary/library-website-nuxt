import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "IMPACT REPORT / Grid Gallery",
}

const mock = [
    {
        image: API.image,
        monthYear: "March 2020",
        to: "/visit/foo/bar/",
        headlineText: "Vel Quam Elementum",
        snippet: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. ",
    },
    {
        image: API.image,
        monthYear: "March 2020",
        to: "/visit/foo/baz/",
        headlineText:
            "Mauris pellentesque pulvinar pellentesque habitant morbi tristique",
        snippet: "Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
    },
    {
        image: API.image,
        monthYear: "March 2020",
        to: "/visit/foo/bat/",
        headlineText: "Adipiscing Tristique",
        snippet: "Vel eros donec ac odio  nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. ",
    },
    {
        image: API.image,
        monthYear: "March 2020",
        to: "/visit/foo/ban/",
        headlineText: "Fames ac turpis egestas sed tempus lorem ipsum",
        snippet: "Vel eros donec ac .",
    },
    {
        image: API.image,
        monthYear: "March 2020",
        to: "/visit/foo/barf/",
        headlineText: "Vel Quam Elementum",
    },
    {
        image: API.image,
        to: "/visit/foo/bad/",
        headlineText: "Aenean Lectus Elit",
        snippet: "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
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

export const FeaturedWithSnippet = () => ({
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

export const FeaturedNoSnippet = () => ({
    data() {
        return { items: mock }
    },
    computed: {
        parsedItems() {
            return this.items.map((obj, index) => {
                let copyObj = Object.assign({}, obj);
                let featured = false
                if(index == 3) copyObj.snippet = ""
                if(index == 5 || index == 3) featured = true
                return {
                    ...copyObj,
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
