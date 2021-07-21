import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Teaser / List",
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
        to: "/visit/foo/baz/",
        category: "Sagittis",
        title: "Amet nisl suscipit adipiscing bibendum lectus sed",
        date: "Mars, Ocavia 17, 2021",
        time: "6 - 8 pm",
        text:
            "A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.",
    },
    {
        image: API.image,
        to: "/visit/foo/bat/",
        category: "Tincidunt",
        title: "Scelerisque varius morbi enim nunc ornare quam",
        date: "Augustus, Avril 14, 2021",
        time: "3:23pm - 12:45 pm",
        text:
            "Eu ultrices vitae auctor eu augue. Dolor morbi non arcu risus quis varius quam. Augue lacus viverra vitae congue eu consequat.",
    },
    {
        image: API.image,
        to: "/visit/foo/ban/",
        category: "Gravida",
        title:
            "At varius vel pharetra vel turpis. Quam vulputate dignissim suspendisse in est ante in. Sed cras ornare arcu. Non diam phasellus vestibulum.",
        date: "Martius, Fevrier 14, 2021",
        time: "8:00 - 5 pm",
        text: "Accumsan tortor posuere ac ut consequat semper viverra libero.",
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
