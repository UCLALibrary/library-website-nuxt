// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "Media Badge",
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
      <responsive-image :image="image">
        <media-badge
            :image="image"
            :image-aspect-ratio="60"
        >
            5 Images +
        </media-badge>
      </responsive-image>
  `,
})
