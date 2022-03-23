// Storybook default settings
export default {
    title: "BLOCK / Spaces",
}

const mock = {
    to: "https://calendar.library.ucla.edu",
    title: "Bureaux de Garçons",
    location: "Fast Lane Building",
    text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan. Global iconic Gaggenau Muji bulletin premium espresso delightful destination vibrant remarkable elegant bureaux boutique. Sunspel exclusive first-class espresso, Fast Lane intricate Melbourne Airbus A380 pintxos Shinkansen Swiss vibrant the highest quality."
}

const mock2 = {
    to: "https://www.gettyimages.com/photos/cute-llamas",
    title: "Tote Bag Boutique",
    location: "Destination Building",
    text: "Nordic classic hand-crafted Marylebone elegant soft power bespoke signature punctual pintxos handsome discerning Asia-Pacific global international. Exquisite Asia-Pacific Washlet sharp. Exquisite Lufthansa hub, concierge cosy bureaux finest joy global iconic Nordic Singapore. Hand-crafted joy alluring intricate.",
}

const mock3 = {
    to: "",
    title: "Ginza Tsutaya Lounge",
    location: "K-pop Kanteen",
    text: "Punctual tote bag the highest quality Nordic, sharp Singapore Gaggenau international Ginza Tsutaya conversation joy lovely Helsinki perfect. Uniforms classic izakaya Ettinger. Signature ANA sharp, liveable Shinkansen Asia-Pacific soft power. Efficient Scandinavian liveable international craftsmanship remarkable cutting-edge premium business class eclectic K-pop lovely Washlet classic.",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            item: {
                ...mock,
            },
        }
    },
    template: `
      <block-spaces
        v-bind="item"
      />
  `,
})

export const ExternalLink = () => ({
    data() {
        return {
            item: {
                ...mock2,
            },
        }
    },
    template: `
      <block-spaces
        v-bind="item"
      />
  `,
})

export const NoLink = () => ({
    data() {
        return {
            item: {
                ...mock3,
            },
        }
    },
    template: `
      <block-spaces
        v-bind="item"
      />
  `,
})
