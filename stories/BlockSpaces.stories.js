// Storybook default settings
export default {
    title: "BLOCK / Spaces",
}

const mock = {
    to: "/staff/foo",
    title: "Turpis Portico",
    location: "Fames Turpis Building",
    text: "Etiam faucibus tellus quis magna finibus auctor. Fusce sagittis vel lectus sed ullamcorper. Proin faucibus nibh ut purus consequat lobortis. Aenean eu fermentum leo, vitae egestas eros. Vivamus urna nibh, porttitor in egestas eu, eleifend ac felis. Praesent sed tristique nibh. Nulla dignissim purus at metus consequat, vitae pharetra orci efficitur. Vivamus facilisis massa vel ipsum vestibulum, porta efficitur dolor aliquam.",
    buttonUrl: "https://calendar.library.ucla.edu/r/new/availability?lid=4361&zone=0&gid=7748&capacity=2&_ga=2.67369617.1259852155.1647299416-1441825369.1643758196"
}

const mock2 = {
    to: "/staff/foo",
    title: "Turpis Portico",
    location: "Fames Turpis Building",
    text: "Etiam faucibus tellus quis magna finibus auctor. Fusce sagittis vel lectus sed ullamcorper. Proin faucibus nibh ut purus consequat lobortis. Aenean eu fermentum leo, vitae egestas eros. Vivamus urna nibh, porttitor in egestas eu, eleifend ac felis. Praesent sed tristique nibh. Nulla dignissim purus at metus consequat, vitae pharetra orci efficitur. Vivamus facilisis massa vel ipsum vestibulum, porta efficitur dolor aliquam.",
    buttonUrl: "https://www.google.com/"
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
