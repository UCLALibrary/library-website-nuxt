// Import mock gql data
import * as GQL from "~/stories/mock-gql.json"

export default {
    title: "FLEXIBLE / Simple Cards",
}

const mockGqlTwoCards = {
    cards: [
        {
            title: GQL.cards[0].title,
            summary: GQL.cards[0].summary,
            to: GQL.cards[0].externalLink
        },
        {
            title: GQL.cards[1].title,
            summary: GQL.cards[1].summary,
            to: GQL.cards[1].contentLink[0].slug
        }
    ]
}

const mockGqlThreeCards = {
    cards: [
        {
            title: GQL.cards[0].title,
            summary: GQL.cards[0].summary,
            to: GQL.cards[0].externalLink
        },
        {
            title: GQL.cards[1].title,
            summary: GQL.cards[1].summary,
            to: GQL.cards[1].contentLink[0].slug
        },
        {
            title: GQL.cards[2].title,
            summary: GQL.cards[2].summary,
            to: GQL.cards[2].externalLink
        }
    ]
}

const mockGqlFiveCards = {
    cards: [
        {
            title: GQL.cards[0].title,
            summary: GQL.cards[0].summary,
            to: GQL.cards[0].externalLink
        },
        {
            title: GQL.cards[1].title,
            summary: GQL.cards[1].summary,
            to: GQL.cards[1].contentLink[0].slug
        },
        {
            title: GQL.cards[2].title,
            summary: GQL.cards[2].summary,
            to: GQL.cards[2].externalLink
        },
        {
            title: GQL.cards[3].title,
            summary: GQL.cards[3].summary,
            to: GQL.cards[3].contentLink[0].slug
        },
        {
            title: GQL.cards[4].title,
            summary: GQL.cards[4].summary,
            to: GQL.cards[4].externalLink
        },
    ]
}

// Variations of stories below
// mockGqlTwoCards
export const Default= () => ({
    data() {
        return { block: mockGqlTwoCards }
    },
    template: `
        <simple-cards :block="block" />
    `,
})

export const ThreeCards = () => ({
    data() {
        return { block: mockGqlThreeCards }
    },
    template: `
        <simple-cards :block="block" />
    `,
})

export const FiveCards = () => ({
    data() {
        return { block: mockGqlFiveCards  }
    },
    template: `
        <simple-cards :block="block" />
    `,
})
