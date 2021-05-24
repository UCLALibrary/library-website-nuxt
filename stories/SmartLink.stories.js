// Storybook default settings
export default {
    title: "GLOBAL / Smart Link",
}

// Variations of stories below
export const Default = () => ({
    template: `
    <smart-link
      to="/"
    >
      This will render as a nuxt link
    </smart-link>
  `,
})

export const ExternalLink = () => ({
    template: `
    <smart-link
      to="http://www.ucla.edu"
      target="_blank"
    >
      This will render as a external link
    </smart-link>
  `,
})
