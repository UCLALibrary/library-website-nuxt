// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Teaser / Meta",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    category: "event",
    date: "Thursday, January 28",
    time: "4:30 pm",
    title: "Intro to Oral History Research and Resources",
    location: "online",
    text: "This event will introduce attendees to the field of oral history, what oral history research is, and how to locate oral history resources at UCLA and beyond.",
}

// Variations of stories below
export const Default = () => ({
  data() {
      return { item: mock }
  },
  template: `
      <block-teaser-meta
          :item="item"
      />
  `,
})

export const GalleryView = () => ({
    data() {
        return { item: mock }
    },
    template: `
        <block-teaser-meta
            :item="item"
            view="gallery"
        />
    `,
})

export const HighlightView = () => ({
    data() {
        return { item: mock }
    },
    template: `
        <block-teaser-meta
            :item="item"
            view="highlight"
        />
    `,
})

export const CalendarView = () => ({
    data() {
        return { 
            item: { 
                ...mock,  
                date: "February 11–May 31, 2019", 
                time: "7:00 pm – 9:00 pm",
                location: "Music Library",
            } 
        }
    },
    template: `
        <block-teaser-meta
            :item="item"
            view="calendar"
        />
    `,
})
