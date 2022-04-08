export default {
    title: "block / Hours",
}

const mock = {
    campusLocationId: "280",
    locationName: "YRL Library",
    buildingAccess:
        "<p>Park at parking structure 2. You cannot park in the round about. Powell is the second building in on the quad. Walk straight ahead for about 15 minutes. Wear your walking shoes. Finally when you are there walk up the stairs to the rotunda. You are at the library now.</p>",
}

export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-hours lid="4690"/>
    `,
})

export const NoInternalLocations = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-hours lid="4693"/>
    `,
})

export const MoreInternalLocations = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-hours lid="2081"/>
    `,
})



