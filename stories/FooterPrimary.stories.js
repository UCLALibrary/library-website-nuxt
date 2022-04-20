// // Import mock api data
// import * as API from "~/stories/mock-api.json"

// // Storybook default settings
// export default {
//     title: "FOOTER / Primary",
// }

// // Variations of stories below
// export const Default = () => ({
//     data() {
//         return {
//             items: [...API.footerPrimaryLinks],
//         }
//     },
//     computed: {
//         footerPrimaryItems() {
//             return {
//                 items: [...API.footerPrimaryLinks],
//             }
//         },
//         parsedSocialItems() {
//             return this.footerPrimaryItems[0].children.map((obj) => {
//                 return {
//                     ...obj,
//                     target: formatLinkTarget(obj.target),
//                 }
//             })
//         },
//         parsedPressItems() {
//             return this.footerPrimaryItems[1].children.map((obj) => {
//                 return {
//                     ...obj,
//                     target: formatLinkTarget(obj.target),
//                 }
//             })
//         },
//     },
//     template: `<footer-primary :form="true" />`,
// })

// export const NoForm = () => ({
//     data() {
//         return {
//             items: [...API.shortLinks],
//             pressItems: [{ ...API.links[0] }],
//         }
//     },
//     computed: {
//         parsedItems() {
//             // Restructuring item to support text key
//             return this.items.map((obj) => {
//                 return {
//                     ...obj,
//                     text: obj.name,
//                 }
//             })
//         },
//         parsedPressItems() {
//             // Restructuring item to support text key
//             return this.pressItems.map((obj) => {
//                 return {
//                     ...obj,
//                     text: obj.name,
//                 }
//             })
//         },
//     },
//     template: `<footer-primary :form="false" />`,
// })
