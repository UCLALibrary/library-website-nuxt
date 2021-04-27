// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
  title: "FOOTER / FooterPrimary",
}

// Variations of stories below
export const Default = () => ({
  data() {
      return {
          items: [...API.links,...API.links],
          pressItems: [{...API.links[0]}],
      }
  },
  computed: {
    parsedItems(){
      // Restructuring item to support text key
      return this.items.map(obj => {
        return {
          ...obj,
          text: obj.name
        }
      })
    },
    parsedPressItems(){
      // Restructuring item to support text key
      return this.pressItems.map(obj => {
        return {
          ...obj,
          text: obj.name
        }
      })
    }
  },
  template: `<footer-primary :social-items="parsedItems" :press-items="parsedPressItems" />`,
})
