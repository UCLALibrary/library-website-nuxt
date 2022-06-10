// // Storybook default settings
// export default {
//     title: "Media Gallery / Lightbox",
// }

// const mock = [
//     {
//         "id": "4602",
//         "altText": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//         "captionText": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//         "captionTitle": "Zooland",
//         "image": [{
//             "src": "https://via.placeholder.com/1920x1080",
//             "height": 1080,
//             "width": 1920,
//             "sizes": "100vw",
//             "alt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             "title": "Lorem ipsum"
//         }],
//         "slug": null,
//         "sortOrder": 1,
//         "title": null,
//         "typeHandle": "image"
//     },
//     {
//         "id": "4603",
//         "altText": "parking",
//         "captionText": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//         "captionTitle": "Image two",
//         "image": [
//             {
//                 "src": "https://via.placeholder.com/960x540",
//                 "height": 540,
//                 "width": 960,
//                 "id": "2568",
//                 "img": "<img src=\"$ASSET_VOLUME_BASE_URL/images/parking.png\" width=\"400\" height=\"400\" alt=\"Parking\">",
//                 "kind": "image",
//                 "size": "14067",
//                 "slug": null,
//                 "title": "Parking"
//             }
//         ],
//         "slug": null,
//         "sortOrder": 2,
//         "title": null,
//         "typeHandle": "image"
//     },
//     {
//         "id": "4604",
//         "altText": "abcd",
//         "captionText": null,
//         "captionTitle": "For number three we're going to see what it looks like with a very long title",
//         "image": [
//             {
//                 "src": "https://via.placeholder.com/1100x850",
//                 "height": 850,
//                 "width": 1100,
//                 "id": "2555",
//                 "img": "<img src=\"$ASSET_VOLUME_BASE_URL/images/pile.jpg\" width=\"539\" height=\"360\" alt=\"Pile\">",
//                 "kind": "image",
//                 "size": "117787",
//                 "slug": null,
//                 "title": "Pile"
//             }
//         ],
//         "slug": null,
//         "sortOrder": 3,
//         "title": null,
//         "typeHandle": "image"
//     },
//     {
//         "id": "4605",
//         "altText": "abcd",
//         "captionText": null,
//         "captionTitle": "Four",
//         "image": [
//             {
//                 "src": "https://via.placeholder.com/1080x1920",
//                 "height": 1920,
//                 "width": 1080,
//                 "id": "2536",
//                 "img": "<img src=\"$ASSET_VOLUME_BASE_URL/images/hollywood.jpeg\" width=\"1200\" height=\"630\" alt=\"Hollywood\">",
//                 "kind": "image",
//                 "size": "178185",
//                 "slug": null,
//                 "title": "Hollywood"
//             }
//         ],
//         "slug": null,
//         "sortOrder": 4,
//         "title": null,
//         "typeHandle": "image"
//     },
//     {
//         "id": "4607",
//         "altText": "abcd",
//         "captionText": null,
//         "captionTitle": "Five",
//         "image": [
//             {
//                 "src": "https://via.placeholder.com/540x960",
//                 "id": "2338",
//                 "img": "<img src=\"$ASSET_VOLUME_BASE_URL/images/long-llama.jpg\" width=\"566\" height=\"467\" alt=\"Long llama\">",
//                 "height": 960,
//                 "kind": "image",
//                 "size": "201179",
//                 "slug": null,
//                 "title": "Long llama",
//                 "width": 540
//             }
//         ],
//         "slug": null,
//         "sortOrder": 6,
//         "title": null,
//         "typeHandle": "image"
//     },
//     {
//         "id": "4606",
//         "altText": "abcd",
//         "captionText": null,
//         "captionTitle": "Six",
//         "image": [
//             {
//                 "src": "https://via.placeholder.com/850x1100",
//                 "id": "1120",
//                 "img": "<img src=\"$ASSET_VOLUME_BASE_URL/images/breitenbach.jpeg\" width=\"300\" height=\"289\" alt=\"Breitenbach\">",
//                 "height": 1100,
//                 "kind": "image",
//                 "size": "39404",
//                 "slug": null,
//                 "title": "Breitenbach",
//                 "width": 850
//             }
//         ],
//         "slug": null,
//         "sortOrder": 5,
//         "title": null,
//         "typeHandle": "image"
//     }
// ]

// // Variations of stories below
// export const Default = () => ({
//     data() {
//         return {
//             block: mock,
//             captionTitle: mock.title,
//             captionText: mock.alt,
//         }
//     },
//     template: `<media-gallery-lightbox :block="block" :n-items="5" />`,
// })

// export const FirstItem = () => ({
//     data() {
//         return {
//             block: mock,
//             captionTitle: mock.title,
//             captionText: mock.alt,
//         }
//     },
//     template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" :selection-index="0" :n-items="9" />`,
// })

// export const LastItem = () => ({
//     data() {
//         return {
//             image: mock,
//             captionTitle: mock.title,
//             captionText: mock.alt,
//         }
//     },
//     template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" :selection-index="3" :n-items="4" />`,
// })

// export const OnlyItem = () => ({
//     data() {
//         return {
//             image: mock,
//             captionTitle: mock.title,
//             captionText: mock.alt,
//         }
//     },
//     template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" />`,
// })