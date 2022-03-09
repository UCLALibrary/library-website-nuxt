// Storybook default settings
export default {
    title: "BLOCK / Access",
}

const mock = {
    buildingAccess:
        "<p>Park at parking structure 2. You cannot park in the round about. Powell is the second building in on the quad.</p>",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<block-access  :building-access="buildingAccess"/>`,
})
