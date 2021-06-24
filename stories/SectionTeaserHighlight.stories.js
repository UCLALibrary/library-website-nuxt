import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Teaser / Highlight",
}

const mock = [
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Pempti, Ocavia 14, 2021",
        time: "3 - 5 pm",
        text: "Ultricies leo integer malesuada nunc vel risus commodo viverra.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Aliquam Varius",
        title: "Pretium magna eget dignissim placerat arcu velit et metus",
        date: "Pempti, Ocavia 14, 2021",
        time: "1 - 3 pm",
        text:
            "Pellentesque molestie, est ut vestibulum convallis, velit ante auctor mauris, sed mattis dolor ante ac purus. Nullam egestas neque sed ullamcorper suscipit.",
    },
    {
        image: API.image,
        to: "/visit/foo/baz/",
        category: "Sagittis",
        title: "Auctor Ligula",
        date: "Mercury, Ocavia 16, 2021",
        time: "4 - 6 pm",
        text:
            "Proin sit amet leo eros. Pellentesque luctus tortor eu aliquet tristique. Proin fringilla enim eget sagittis mattis. Praesent faucibus libero ipsum.",
    },
    {
        image: API.image,
        to: "/visit/foo/baz/",
        category: "Tristique",
        title: "Amet nisl suscipit adipiscing bibendum lectus sed",
        date: "Mars, Ocavia 17, 2021",
        time: "6 - 8 pm",
        text:
            "A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    template: `
      <section-teaser-highlight
        :items="items"
      />
  `,
})
