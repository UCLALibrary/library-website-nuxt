// Import mock gql data
import * as GQL from "~/stories/mock-gql.json"

export default {
    title: "BLOCK / Simple Card",
}

const mockGqlExternal = {
    title: GQL.cards[2].title,
    text: GQL.cards[2].summary,
    to: GQL.cards[2].externalLink
}

const mockGqlInternal = {
    title: GQL.cards[1].title,
    text: GQL.cards[1].summary,
    to: GQL.cards[1].contentLink[0].slug
}

// Variations of stories below
// ExternalLinkMockGql
export const Default = () => ({
    data() {
        return { ...mockGqlExternal }
    },
    template: `
        <block-simple-card
            :title="title"
            :text="text"
            :to="to"
        />
    `,
})

export const InternalLinkMockGql = () => ({
    data() {
        return { ...mockGqlInternal }
    },
    template: `
        <block-simple-card
            :title="title"
            :text="text"
            :to="to"
        />
    `,
})

// --------------

// const mockExternal = {
//     "id": "12716",
//     "title": "Bunnies & Rabbits",
//     "summary": "Bunny refers to the small, bun-shaped tail. A rabbit is a type of mammal. They are small, furry animals with large ears and powerful back legs that can be seen hopping around in meadows in the springtime.",
//     "externalLink": "https://petkeen.com/bunny-vs-rabbit/"
// }

// export const ExternalLink = () => ({
//     data() {
//         return { ...mockExternal }
//     },
//     template: `
//         <block-simple-card
//             :title="title"
//             :text="summary"
//             :to="externalLink"
//         />
//     `,
// })

// const mockInternal = {
//     "id": "12717",
//     "title": "Foxes",
//     "summary": "Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail.",
//     "contentLink": [
//         {
//             "slug": "foxes",
//         }
//     ]
// }



// export const ExternalLink = () => ({
//     data() {
//         return { block: mockInternal }
//     },
//     template: `
//         <block-simple-card
//             :title="title"
//             :text="summary"
//             :to="contentLink[0].slug"
//         />
//     `,
// })
