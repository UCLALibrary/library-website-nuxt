// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
  title: "Section / Post Small",
}

// Variations of stories below
export const Default = () => ({
  data() {
      return {
          items: [...API.BlockPostSmall],
          image: API.image_people
      }
  },
  computed: {
    parsedItems(){
      // Restructuring item to support text key
      return this.items.map(obj => {
        return {
          ...obj,
          text: obj.title
        }
      })
    }
  },
  template: `<section-post-small :items="parsedItems" :image="image"/>`,
})
	