import ButtonLink from "~/components/ButtonLink"

// Storybook default settings
export default {
    title: "BUTTON / Link",
    component: ButtonLink,
    argTypes: {
        label: { type: "string" },
        iconName: { type: "select", options: ["arrow-right-small"] },
        isSecondary: { type: "boolean" },
    },
}

const Template = (args, { argTypes }) => ({
    components: { ButtonLink },
    props: Object.keys(argTypes),
    template: '<button-link v-bind="$props" />',
})

export const WithControls = Template.bind({})
WithControls.args = {
    label: "Ibus orci Luctus",
    isSecondary: false,
}

// Variations of stories below
export const Default = () => ({
    template: `<button-link label="Egest perl Conub"/>`,
})

export const NotPrimary = () => ({
    template: `<button-link label="Etiam et Ultrices" :isSecondary="true" to='/help/more'/>`,
})

export const LongLabel = () => ({
    template: `<button-link label="Proin sodales dolor sit amet." iconName="svg-arrow-right" to='/help/more'/>`,
})

export const HasGlyph = () => ({
    template: `<button-link label="Aug id Dignissim" :isSecondary="true" iconName="svg-arrow-right" to='/help/more'/>`,
})
export const HasExternalGlyph = () => ({
    template: `<button-link label="Aug id Dignissim" :isSecondary="true" iconName="svg-arrow-diagonal" to='www.google.com'/>`,
})
// export const HasDownloadGlyph = () => ({
//     template: `<button-link label="Aug id Dignissim" :isSecondary="true" iconName="svg-arrow-download" to='/downloads'/>`,
// })
