// Storybook default settings
export default {
    title: "BLOCK / Hours",
}

const mock = {

}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-hours

        />
    `,
})
