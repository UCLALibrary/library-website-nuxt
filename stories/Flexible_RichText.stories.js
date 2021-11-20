// Storybook default settings
export default {
    title: "FLEXIBLE / Rich Text",
}

const mock = {
    id: "3052",
    richText:
        '<figure style="float:right;width:282px;max-width:282px;margin-left:10px;margin-right:10px;"><img src="https://test-craft.library.ucla.edu/assets/images/zooland.jpeg" alt="ZooLand" /><figcaption>Zoo</figcaption></figure><p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><figure><iframe width="560" height="315" src="https://www.youtube.com/embed/wn7s7podZWI" title="YouTube video player" frameborder="0"></iframe></figure><figure><figure><h2>\n The Outer Space Treaty\n</h2>\n<p>\n Hearts of the stars something incredible is waiting to be known corpus callosum rich in mystery two ghostly white figures in coveralls and helmets are soflty dancing a very small stage in a vast cosmic arena. Are creatures of the cosmos across the centuries courage of our questions inconspicuous motes of rock and gas hundreds of thousands Orion\'s sword.\n</p>\n<figure><blockquote class="twitter-tweet">\n <p lang="en" dir="ltr" xml:lang="en">\n Crew Dragon docked to the <a href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw">@Space_Station</a> <a href="https://t.co/JG5e2XjZ4n">pic.twitter.com/JG5e2XjZ4n</a>\n </p>\n — SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1278799363804811264?ref_src=twsrc%5Etfw">July 2, 2020</a>\n </blockquote>\n </figure><p>\n Star stuff harvesting star light kindling the energy hidden in matter a mote of dust suspended in a sunbeam bits of moving fluff another world brain is the seed of intelligence. Take root and flourish kindling the energy hidden in matter the carbon in our apple pies kindling the energy hidden in matter citizens of distant epochs bits of moving fluff.\n</p>\n<iframe width="600" height="450" frameborder="0" style="border:0;"></iframe></figure><p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></figure>',
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    template: `
        <flexible-rich-text
            :block="block"
        />
    `,
})

const mockTwo = {
    id: "3784",
    richText:
        '<blockquote>Here is a cool quote</blockquote>\n<figure style="float:left;width:704px;max-width:704px;margin-left:10px;margin-right:10px;"><img src="https://test-craft.library.ucla.edu/assets/printing_press_md.jpg" alt="A printing press" /><figcaption>A Printing press</figcaption></figure>',
}

// Variations of stories below
export const SecondRichText = () => ({
    data() {
        return {
            block: mockTwo,
        }
    },
    template: `
        <flexible-rich-text
            :block="block"
        />
    `,
})
