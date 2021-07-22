import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Teaser / Calendar",
}

const mock = [
    {
        category: "Exhibit",
        title: "Opening Reception: Fusce dapibus, tellus ac cursus commodo",
        dateStart: "2021-06-01",
        dateEnd: "2021-06-01",
        timeStart: "8pm",
        location: "Music Library",
    },
    {
        category: "Screening",
        title: "Vivamus sagittis lacus vel augue laoreet",
        dateStart: "2021-06-01",
        dateEnd: "",
        timeStart: "5pm",
        location: "Billy Wilder Theater",
    },
    {
        category: "Exhibit",
        title: "Fusce dapibus, tellus ac cursus commodo",
        dateStart: "2021-06-11",
        dateEnd: "2021-07-31",
        timeStart: "10am",
        location: "Music Library",
    },
    {
        category: "Screening",
        title: "Vivamus sagittis lacus vel augue laoreet",
        dateStart: "2021-06-11",
        timeStart: "8pm",
        location: "Billy Wilder Theater",
    },
    {
        category: "Event Series",
        title: "Vivamus sagittis lacus vel augue laoreet",
        dateStart: "2021-06-11",
        location: "Billy Wilder Theater",
        timeStart: "8pm",
    },
    {
        category: "Exhibit",
        title: "Opening Reception: Fusce dapibus, tellus ac cursus commodo",
        dateStart: "2021-06-01",
        dateEnd: "2021-06-01",
        location: "Music Library",
        timeStart: "8pm",
    },
    {
        category: "Screening",
        title: "Vivamus sagittis lacus vel augue laoreet",
        dateStart: "2021-06-11",
        dateEnd: "",
        location: "Billy Wilder Theater",
        timeStart: "8pm",
    },
    {
        category: "Screening",
        title: "Vivamus 6/5 sagittis lacus vel augue laoreet",
        dateStart: "2021-06-05",
        dateEnd: "",
        location: "Billy Wilder Theater",
        timeStart: "6pm",
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
