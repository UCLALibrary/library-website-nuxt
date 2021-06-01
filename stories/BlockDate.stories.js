// Storybook default settings
export default {
    title: "BLOCK / Date",
}

export const Default = () => ({
    template: `<block-date date="10" day="Tuesday" />`,
})

export const BigDate = () => ({
    template: `<block-date date="30" day="Friday" />`,
})

export const LongDayName = () => ({
    template: `<block-date date="30" day="Wednesday" />`,
})
