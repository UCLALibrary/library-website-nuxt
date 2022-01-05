// Import mock api data
import * as API from "~/stories/mock-api.json"

export default {
    title: "Rich Text",
}

const mock = {
    textBlocks: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla urna, euismod at sagittis ac, aliquam ut sem. Phasellus varius lacinia nisl nec fermentum. Sed dignissim metus quis consequat pretium. In hac habitasse platea dictumst. Ut vel dignissim eros. Aliquam lacus tellus, molestie a nisi non, suscipit consectetur dolor. Donec sit amet venenatis ante. Nullam blandit rhoncus massa, ac consequat ante egestas in. Pellentesque lobortis sed ex ac viverra. Proin et semper mauris. Pellentesque pulvinar cursus ipsum sit amet scelerisque. Praesent mollis fringilla est, quis rutrum sapien viverra eu.<br><br> Sed vitae lectus tristique, consequat mauris sed, commodo metus. Sed sit amet turpis urna. Donec nisl felis, imperdiet a nisi et, commodo imperdiet magna. Phasellus sed nisi a nulla vehicula volutpat. Nulla est justo, gravida et dui laoreet, viverra suscipit odio. Sed blandit leo elit, at eleifend neque facilisis in. Fusce congue dapibus vestibulum. Aliquam eget erat sed magna elementum maximus vitae ac quam. Cras massa tellus, pulvinar non nibh a, gravida vulputate ante. Pellentesque pharetra luctus turpis, et rutrum leo. Pellentesque commodo, sem id placerat mattis, elit dui vehicula ipsum, in vulputate dui augue a metus. Proin nec mi ut orci laoreet gravida id non leo. Vestibulum sodales tincidunt libero, vitae bibendum urna gravida ullamcorper. Morbi sagittis id justo nec condimentum. Aenean at ex nec sapien semper viverra eget sed erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla urna, euismod at sagittis ac, aliquam ut sem. Phasellus varius lacinia nisl nec fermentum. Sed dignissim metus quis consequat pretium. In hac habitasse platea dictumst. .<br><br>Ut vel dignissim eros. Aliquam lacus tellus, molestie a nisi non, suscipit consectetur dolor. Donec sit amet venenatis ante. Nullam blandit rhoncus massa, ac consequat ante egestas in. Pellentesque lobortis sed ex ac viverra. Proin et semper mauris. Pellentesque pulvinar cursus ipsum sit amet scelerisque. Praesent mollis fringilla est, quis rutrum sapien viverra eu. Sed vitae lectus tristique, consequat mauris sed, commodo metus. Sed sit amet turpis urna. Donec nisl felis, imperdiet a nisi et, commodo imperdiet magna. Phasellus sed nisi a nulla vehicula volutpat. Nulla est justo, gravida et dui laoreet, viverra suscipit odio. Sed blandit leo elit, at eleifend neque facilisis in. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.",
    ],
    image: API.image,
    caption: "A photo caption",
    pullQuote: {
        text: "Vestibulum sodales tincidunt libero, vitae bibendum urna gravida ullamcorper. Morbi sagittis id justo nec condimentum. Aenean at ex nec sapien semper viverra eget sed erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla urna, euismod at sagittis ac, aliquam ut sem. Phasellus varius lacinia nisl nec fermentum.",
        attribution: "Ashton Prigge",
    },
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<rich-text
        :text-blocks="textBlocks"
        :pull-quote="pullQuote"
        :image="image"
        :caption="caption"
    />`,
})

export const NoPullQuote = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<rich-text
        :text-blocks="textBlocks"
        :image="image"
        :caption="caption"
    />`,
})

export const NoImage = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<rich-text
        :text-blocks="textBlocks"
        :pull-quote="pullQuote"
        :caption="caption"
    />`,
})

export const TextOnly = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<rich-text
        :text-blocks="textBlocks"
    />`,
})
