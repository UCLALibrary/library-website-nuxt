// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Teaser",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    category: "event",
    date: "Thursday, January 28",
    time: "4:30 pm",
    title: "Intro to Oral History Research and Resources",
    text: "This event will introduce attendees to the field of oral history, what oral history research is, and how to locate oral history resources at UCLA and beyond.",
}

// Variations of stories below
export const Default = () => ({
  data() {
      return { item: mock }
  },
  template: `
      <block-teaser
          :item="item"
      />
  `,
})

export const GalleryView = () => ({
    data() {
        return { item: mock }
    },
    template: `
        <block-teaser
            :item="item"
            view="gallery"
        />
    `,
  })
