export default {
    title: "block / Campus Map",
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
        <block-campus-map
            :campus-location-id="campusLocationId"
            :location-name="locationName"
            :building-access="buildingAccess"
        />
    `,
})

export const NoText = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-campus-map
            :campus-location-id="campusLocationId"
            :location-name="locationName"
        />
    `,
})

export const ShortText = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-campus-map
            :campus-location-id="campusLocationId"
            :location-name="locationName"
            building-access="<p>Just find it! </p>"
        />
    `,
})
