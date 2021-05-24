import ButtonLink from '~/components/ButtonLink'

// Storybook default settings
export default {
  title: "BUTTON / Link",
  component: ButtonLink,
  argTypes: {
    label: { type: 'string' },
    iconName: { type: 'select', options: ['arrow-right-small']},
    isSecondary: { type: 'boolean' },
  }
}

const Template = (args, { argTypes }) => ({
  components: { ButtonLink },
  props: Object.keys(argTypes),
  template: '<button-link v-bind="$props" />'
})

export const WithControls = Template.bind({})
WithControls.args = {
  label: 'Read full story',
  isSecondary: false,
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
