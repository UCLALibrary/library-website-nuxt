export default {
    title: "FLEXIBLE / Associated Topic Cards",
}

const itemsVertical = {
    id: "13783",
    typeHandle: "associatedTopicCards",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    associatedTopicsFlexiblePageBlock: [
        {
            id: "13899",
            topics: [
                {
                    to: "/help/road-work",
                    title: "Road Work Guide",
                    text: "<p>A research guide</p>",
                },
                {
                    title: "Types of Sinkholes",
                    text:
                        "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
                    to: "/help/types-sinkholes",
                },
                {
                    to: "/help/animals",
                    title: "Animals eat food!",
                    text: "<p>Some animals eat plants and plant products like grass, leaves and fodder. Goat, cow, horse and sheep eat only plants.</p>",
                },
            ],
        },
    ],
}

// Variations of stories below
// TwoCards
export const Default = () => ({
    data() {
        return { block: itemsVertical }
    },
    template: `
      <flexible-associated-topic-cards
          :block="block"
      />
  `,
})
