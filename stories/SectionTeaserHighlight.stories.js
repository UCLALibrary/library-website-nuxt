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
        startDate: "2021-09-03T08:00:00+00:00",
        endDate: "2021-10-08T07:10:00+00:00",
        text: "Ultricies leo integer malesuada nunc vel risus commodo viverra.",
    },
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Aliquam Varius",
        title: "Pretium magna eget dignissim placerat arcu velit et metus",
        startDate: "2021-09-03T08:00:00+00:00",
        endDate: "2021-10-08T07:10:00+00:00",
        locations: [
            { title: "Powellarium", to: "/location/bar" },
            {
                title: "Research Library (Charles E. Young)",
                to: "/location/baz",
            },
        ],
        text: "Pellentesque molestie, est ut vestibulum convallis, velit ante auctor mauris, sed mattis dolor ante ac purus. Nullam egestas neque sed ullamcorper suscipit.",
    },
    {
        image: API.image,
        to: "/visit/foo/baz/",
        category: "Sagittis",
        title: "Auctor Ligula",
        startDate: "2021-01-03T08:00:00+00:00",
        endDate: "2021-02-08T07:10:00+00:00",
        locations: [
            { title: "Powellarium", to: "/location/bar" },
            {
                title: "Research Library (Charles E. Young)",
                to: "/location/baz",
            },
        ],
        text: "Proin sit amet leo eros. Pellentesque luctus tortor eu aliquet tristique. Proin fringilla enim eget sagittis mattis. Praesent faucibus libero ipsum.",
    },
    {
        image: API.image,
        to: "/visit/foo/baz/",
        category: "Tristique",
        title: "Amet nisl suscipit adipiscing bibendum lectus sed",
        startDate: "2021-09-03T08:00:00+00:00",
        endDate: "2021-10-08T07:10:00+00:00",
        text: "A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.",
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
