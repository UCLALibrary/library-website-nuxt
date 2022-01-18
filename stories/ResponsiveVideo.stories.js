// Import mock api data
import { data as API } from "~/stories/video.json"

export default {
    title: "GLOBAL / Responsive Video",
}

export const ImageWithVideo = () => ({
    data() {
        return {
            image: API.images.nodes[0],
        }
    },
    template: `<responsive-video :image="image" />`,
})
