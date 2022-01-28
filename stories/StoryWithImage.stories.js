// Import mock api data
import * as API from "~/stories/impact-report_index.json"

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
          :caption="item.image.caption"
          :title="item.title"
          :text="item.text"
          :footnote="item.footnote"
          :calltoaction="item.calltoaction"
      />
  `,
})
