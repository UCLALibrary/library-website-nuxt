// Storybook default settings
export default {
    title: "SECTION / Pagination",
}

export const Default = () => ({
    template: `<section-pagination previousTo="/page/1" nextTo="/page/3" />`,
})

export const FirstPage = () => ({
    template: `<section-pagination nextTo="/page/1" />`,
})

export const LastPage = () => ({
    template: `<section-pagination previousTo="/page/10" />`,
})
