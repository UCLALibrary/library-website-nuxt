// Import mock api data
import * as API from "~/stories/impact-report.json"

// Storybook default settings
export default {
    title: "IMPACT REPORT / Story with Image",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            item: { ...API.story[0] },
        }
    },
    template: `
      <story-with-image
          :image="item.image"
          :imagetitle="item.image.title"
          :title="item.title"
          :text="item.text"
          :footnote="item.footnote"
          :calltoaction="item.calltoaction"
      />
  `,
})
