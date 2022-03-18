// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "Media Gallery / Thumbnail Card",
}

const mock = {
    image: API.image,
}


// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <media-gallery-thumbnail-card
        style="max-width: 400px"
        :image="image"
        :caption-title="image.title"
        :caption-text="image.alt"
      />
  `,
})
