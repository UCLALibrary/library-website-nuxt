export default {
    title: "BLOCK / Location List Item",
}

const mock = {
    image: {
        src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/long-llama.jpg",
        height: 352,
        width: 352,
        srcset: "",
        alt: "UCLA Library",
        focalPoint: [0.5, 0.5],
    },
    title: "Arts Library",
    day: "Today",
    startTime: "8am",
    endTime: "5pm",
    reserveSeat: "http://google.com",
    address: "1337 Trails End Road Fort Lauderdale, FL 33301",
    addressLink: "http://google.com",
    amenities: [
        "3dPrintingEtchingEtc",
        "24HourStudySpace",
        "adaStations",
        "cafe"
    ],
    to: "http://google.com"

}

export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-location-list-item
            :title="title"
            :short-description="shortDescription"
            :to="to"
            :image="image"
            :day="day"
            :startTime="startTime"
            :endTime="endTime"
            :address="address"
            :addressLink="addressLink"
            :amenities="amenities"
        />
    `,
})
