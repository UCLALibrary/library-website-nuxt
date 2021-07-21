import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Teaser / Calendar",
}

const mock = [
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        dateStart: "Sunday, October 14, 2021",
        dateEnd: "Sunday, October 14, 2021",
        time: "3 pm - 5 pm",
        text: "Ultricies leo integer malesuada nunc vel risus commodo viverra.",
        location: "YRL"
    },
    {
        image: API.image,
        to: "/visit/foo/baz/",
        category: "Sagittis",
        title: "Amet nisl suscipit adipiscing bibendum lectus sed",
        dateStart: "Monday, October 17, 2021",
        dateEnd: "Monday, October 17, 2021",
        time: "6 pm- 8 pm",
        location: "Powell"
        text:
            "A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.",
    },
    {
        image: API.image,
        to: "/visit/foo/bat/",
        category: "Tincidunt",
        title: "Scelerisque varius morbi enim nunc ornare quam",
        dateStart: "Tuesday, April 14, 2021",
        dateEnd: "Monday, October 17, 2021",
        time: "8:23am - 12:45 pm",
        location: "YRL",
        text:
            "Eu ultrices vitae auctor eu augue. Dolor morbi non arcu risus quis varius quam. Augue lacus viverra vitae congue eu consequat.",
    },
    {
        image: API.image,
        to: "/visit/foo/ban/",
        category: "Gravida",
        title:
            "At varius vel pharetra vel turpis. Quam vulputate dignissim suspendisse in est ante in. Sed cras ornare arcu. Non diam phasellus vestibulum.",
        dateStart: "Monday, February 14, 2021",
        dateEnd: "Monday, October 17, 2021",
        time: "8:00am - 5 pm",
        location: "YRL",
        text: "Accumsan tortor posuere ac ut consequat semper viverra libero.",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { events: mock }
    },
    template: `
      <section-teaser-calendar
        :events="events"
      />
  `,
})
