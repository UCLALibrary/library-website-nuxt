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
    components: {
        SvgIconExpand: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-expand"
            ),
    },
    data() {
        return { ...mock }
    },
    template: `
      <responsive-image :image="image">
        <media-badge
            :image="image"
            :image-aspect-ratio="60"
        >
            5 Images <svg-icon-expand />
        </media-badge>
      </responsive-image>
  `,
})
