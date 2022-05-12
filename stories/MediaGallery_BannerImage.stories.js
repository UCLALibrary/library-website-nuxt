// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "MEDIA GALLERY / Banner Image",
}

const mock = {
    image: API.image,
}

export const Default = () => ({
    data() {
        return {
            ...mock,
            expanded: false,
        }
    },
    template: `
      <media-gallery-banner-image
        :image="image"
        n-items=5
        :expanded=false
    />
  `,
})

export const Expanded = () => ({
    data() {
        return {
            ...mock,
            expanded: true,
        }
    },
    template: `
      <media-gallery-banner-image
        :image="image"
        n-items=5
        :expanded="expanded"
    />
  `,
})

export const SingleItem = () => ({
    data() {
        return { ...mock }
    },
    template: `
      <media-gallery-banner-image
        :image="image"
        n-items=1
        expanded=false
    />
  `,
})