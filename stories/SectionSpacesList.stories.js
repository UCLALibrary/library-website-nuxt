// Storybook default settings
export default {
    title: "SECTION / Spaces / List",
}

const mock = [
    {
        to: "/spaces/foo",
        title: "Turpis Portico",
        location: "Fames Turpis Building",
        text: "Etiam faucibus tellus quis magna finibus auctor. Fusce sagittis vel lectus sed ullamcorper. Proin faucibus nibh ut purus consequat lobortis. Aenean eu fermentum leo, vitae egestas eros. Vivamus urna nibh, porttitor in egestas eu, eleifend ac felis. Praesent sed tristique nibh. Nulla dignissim purus at metus consequat, vitae pharetra orci efficitur. Vivamus facilisis massa vel ipsum vestibulum, porta efficitur dolor aliquam.",
        buttonUrl: "http://google.com"
    },
    {
        to: "/spaces/fee",
        title: "Von Junz",
        location: "Debordist Room",
        text: "If one examines Marxist class, one is faced with a choice: either reject Baudrillardist simulation or conclude that the significance of the artist is social comment. The premise of Debordist situation implies that the law is capable of significance. Therefore, any number of constructions concerning a self-sufficient reality may be found.",
        buttonUrl: "http://google.com"
    },
    {
        to: "/spaces/faa",
        title: "Beefeater Numpty",
        location: "Pennyboy Cottage",
        text: "Gosh beefeater numpty scouser rambunctious a bottle of plonk know your onions, cornish pasty spend a penny cheerio down the local mush. What a mug one off blimey a comely wench nose rag ponce gobsmacked pennyboy cottage pie, ey up fake tan spam fritters marvelous chippy hedgehog chav.",
        buttonUrl: "http://google.com"
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    template: `
      <section-spaces-list
        :items="items"
      />
  `,
})
