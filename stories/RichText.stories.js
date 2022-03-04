// Storybook default settings
export default {
    title: "GLOBAL / Rich Text",
}

const mock = {
    richText:
        '<h3>Here is a title</h3><figure class="figure image-right"><img src="https://test-craft.library.ucla.edu/assets/images/zooland.jpeg" alt="ZooLand" /><figcaption>Zoo</figcaption></figure><p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><figure><iframe width="560" height="315" src="https://www.youtube.com/embed/wn7s7podZWI" title="YouTube video player" frameborder="0"></iframe></figure><h2>\n The Outer Space Treaty\n</h2>\n<p>\n Hearts of the stars something incredible is waiting to be known corpus callosum rich in mystery two ghostly white figures in coveralls and helmets are soflty dancing a very small stage in a vast cosmic arena. Are creatures of the cosmos across the centuries courage of our questions inconspicuous motes of rock and gas hundreds of thousands Orion\'s sword.\n</p>\n<blockquote class="twitter-tweet">\n <p lang="en" dir="ltr" xml:lang="en">\n Crew Dragon docked to the <a href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw">@Space_Station</a> <a href="https://t.co/JG5e2XjZ4n">pic.twitter.com/JG5e2XjZ4n</a>\n </p>\n — SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1278799363804811264?ref_src=twsrc%5Etfw">July 2, 2020</a>\n </blockquote>\n <p>\n Star stuff harvesting star light kindling the energy hidden in matter a mote of dust suspended in a sunbeam bits of moving fluff another world brain is the seed of intelligence. Take root and flourish kindling the energy hidden in matter the carbon in our apple pies kindling the energy hidden in matter citizens of distant epochs bits of moving fluff.\n</p>\n<p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></figure>',
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    template: `
        <rich-text
            :rich-text-content="block.richText"
        />
    `,
})

const mockTwo = {
    id: "3784",
    richText:
        '<blockquote>Here is a cool quote</blockquote>\n<figure class="figure image-left"><img src="https://test-craft.library.ucla.edu/assets/printing_press_md.jpg" alt="A printing press" /><figcaption>A Printing press</figcaption></figure>',
}

export const QuoteImage = () => ({
    data() {
        return {
            block: mockTwo,
        }
    },
    template: `
        <rich-text
            :rich-text-content="block.richText"
        />
    `,
})

const mockFour = {
    id: "4003",
    richText:
        '<p>Creating Vue components allows us to extract repeatable parts of the interface coupled with its functionality into reusable pieces of code. This alone can get our application pretty far in terms of maintainability and flexibility. However, our collective experience has proved that this alone might not be enough, especially when your application is getting really big – think several hundred components. When dealing with such large applications, sharing and reusing code becomes especially important.</p>\n<figure class="figure image-left"><img src="https://test-craft.library.ucla.edu/assets/shortbread-cookies.jpg" alt="short bread cookies" /><figcaption>yummy short bread cookies</figcaption></figure><p>Let’s imagine that in our app, we have a view to show a list of repositories of a certain user. On top of that, we want to apply search and filter capabilities. Our component handling this view could look like this:</p>\n<p>Creating Vue components allows us to extract repeatable parts of the interface coupled with its functionality into reusable pieces of code. This alone can get our application pretty far in terms of maintainability and flexibility. However, our collective experience has proved that this alone might not be enough, especially when your application is getting really big – think several hundred components. When dealing with such large applications, sharing and reusing code becomes especially important.</p>\n<p>Let’s imagine that in our app, we have a view to show a list of repositories of a certain user. On top of that, we want to apply search and filter capabilities. Our component handling this view could look like this:</p><figure class=" figure image-right"><img src="https://test-craft.library.ucla.edu/assets/IMG_20210829_132932553.jpg" alt="dreaming code" /><figcaption>dreaming code</figcaption></figure>',
}

export const ImagePositionLeft = () => ({
    data() {
        return {
            block: mockFour,
        }
    },
    template: `
         <rich-text
            :rich-text-content="block.richText"
         />
    `,
})

const mockFive = {
    id: "4004",
    richText:
        '<p>Creating Vue components allows us to extract repeatable parts of the interface coupled with its functionality into reusable pieces of code. This alone can get our application pretty far in terms of maintainability and flexibility. However, our collective experience has proved that this alone might not be enough, especially when your application is getting really big – think several hundred components. When dealing with such large applications, sharing and reusing code becomes especially important.</p>\n<figure class="figure"><img src="https://test-craft.library.ucla.edu/assets/shortbread-cookies.jpg" alt="short bread cookies" /><figcaption>yummy short bread cookies</figcaption></figure><p>Let’s imagine that in our app, we have a view to show a list of repositories of a certain user. On top of that, we want to apply search and filter capabilities. Our component handling this view could look like this:</p>\n<p>Creating Vue components allows us to extract repeatable parts of the interface coupled with its functionality into reusable pieces of code. This alone can get our application pretty far in terms of maintainability and flexibility. However, our collective experience has proved that this alone might not be enough, especially when your application is getting really big – think several hundred components. When dealing with such large applications, sharing and reusing code becomes especially important.</p>\n<p>Let’s imagine that in our app, we have a view to show a list of repositories of a certain user. On top of that, we want to apply search and filter capabilities. Our component handling this view could look like this:</p><figure class="figure"><img src="https://test-craft.library.ucla.edu/assets/IMG_20210829_132932553.jpg" alt="dreaming code" /><figcaption>dreaming code</figcaption></figure> <h3>This is an h3</h3><h4>This is an h4</h4><h5>This is an h5</h5><blockquote>this is a quote</blockquote>\n\n<p>This is normal text</p>\n<p><strong>Bolded text</strong></p>\n<p><em>Italic text</em><del><br /></del></p>\n<p><em><del>Strikethrough</del><br /></em></p><ul><li>an item in unordered</li><li>an item in unordered</li><li>an item in unordered</li></ul>\n<ol><li>this is an ordered list</li><li>ordered list</li></ol>\n<h3><a href="http://google.com/" target="_blank" rel="noreferrer noopener">this is a link</a></h3><h3><br /></h3>',
}

export const AllRichText = () => ({
    data() {
        return {
            block: mockFive,
        }
    },
    template: `
         <rich-text
            :rich-text-content="block.richText"
         />
    `,
})
