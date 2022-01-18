// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "GLOBAL / Responsive Video",
}

export const ImageWithVideo = () => ({
    data() {
        return {
            image: API.video,
        }
    },
    template: `<responsive-video :image="image" />`,
})

export const VideoWithControls = () => ({
    data() {
        return {
            image: API.video,
        }
    },
    template: `<responsive-video :image="image" :controls="true"/>`,
})
