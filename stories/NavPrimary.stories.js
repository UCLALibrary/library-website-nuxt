// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "NAV / Primary",
}

// Variations of stories below
export const Default = () => ({
  data() {
      return {
          items: [ { ...API.primaryNavlinks[0] }, { ...API.primaryNavlinks[0] }, ...API.primaryNavlinks ],
      }
  },
  template: `<nav-primary :items="items"/>`,
})
