export default {
    title: "DividerGeneral",
}

export const Default = () => ({
    template: `<divider-general/>`,
})

export const DividerGeneralLight = () => ({
    data() {
        return {
            bold: False,
        }
    },
    template: `<divider-general v-bind:style=bold />`,
})
