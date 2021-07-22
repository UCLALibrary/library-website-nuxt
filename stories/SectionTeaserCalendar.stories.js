import * as API from "~/stories/mock-api.json"
import dayjs from "dayjs"

// Storybook default settings
export default {
    title: "SECTION / Teaser / Calendar",
}

const mock = [
    {
        category: "Exhibit",
        title: "Opening Reception: Fusce dapibus, tellus ac cursus commodo",
        dateStart: "2021-06-01T19:00:00",
        dateEnd: "2021-06-01T21:45:00",
        location: "Music Library",
    },
    {
        category: "Screening",
        title: "Vivamus sagittis lacus vel augue laoreet",
        dateStart: "2021-06-01T19:30:00",
        dateEnd: "",
        location: "Billy Wilder Theater",
    },
    {
        category: "Exhibit",
        title: "Fusce dapibus, tellus ac cursus commodo",
        dateStart: "2021-06-11T00:00:00",
        dateEnd: "2021-07-31T02:00:00",
        location: "Music Library",
    },
    {
        category: "Screening",
        title: "Vivamus sagittis lacus vel augue laoreet",
        dateStart: "2021-06-11T19:30:00",
        location: "Billy Wilder Theater",
    },
    {
        category: "Event Series",
        title: "Vivamus sagittis lacus vel augue laoreet",
        dateStart: "2021-06-11T19:30:00",
        location: "Billy Wilder Theater",
    },
    {
        category: "Exhibit",
        title: "Opening Reception: Fusce dapibus, tellus ac cursus commodo",
        dateStart: "2021-06-01T19:30:00",
        dateEnd: "2021-06-01T21:00:00",
        location: "Music Library",
    },
    {
        category: "Screening",
        title: "Vivamus sagittis lacus vel augue laoreet",
        dateStart: "2021-06-11T19:30:00",
        dateEnd: "",
        location: "Billy Wilder Theater",
    },
    {
        category: "Screening",
        title: "Vivamus 6/5 sagittis lacus vel augue laoreet",
        dateStart: "2021-06-05T19:30:00",
        dateEnd: "",
        location: "Billy Wilder Theater",
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
