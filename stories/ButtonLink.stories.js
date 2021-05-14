// Storybook default settings
export default {
  title: "BUTTON / Link",
}

// Variations of stories below
export const Default = () => ({
  template: `<button-link label="Read full story"/>`,
})

export const NotPrimary = () => ({
  template: `<button-link label="Ask a Librarian" :isSecondary="true"/>`,
})

export const LongLabel = () => ({
  template: `<button-link label="Lorem ipsum dolor sit amet." iconName="arrow-right-small"/>`,
})

export const HasGlyph = () => ({
  template: `<button-link label="Ask a Librarian" :isSecondary="true" iconName="arrow-right-small"/>`,
})
