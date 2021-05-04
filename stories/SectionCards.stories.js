// Storybook default settings
export default {
    title: "SECTION / Cards",
}

const mock = [{
    iconName: "book-binding-icon",
    to: "/help/foo/bar/",
    title: "Book Binding",
    text: "Here is a decent amount of text to explain this get help with.",
},
{
  iconName: "book-binding-icon",
  to: "/help/foo/baz/",
  title: "Book Binding",
  text: "Here is a decent amount of text to explain this get help with.",
},
{
  iconName: "book-binding-icon",
  to: "/help/foo/fred/",
  title: "Book Binding",
  text: "Here is a decent amount of text to explain this get help with.",
},
{
  iconName: "book-binding-icon",
  to: "/help/foo/thud/",
  title: "Book Binding",
  text: "Here is a decent amount of text to explain this get help with.",
},
{
  iconName: "book-binding-icon",
  to: "/help/foo/qux/",
  title: "Book Binding",
  text: "Here is a decent amount of text to explain this get help with.",
}
];

export const Default = () => ({
    data() {
      let items = mock
      console.log(items)
      return {
        items,
      };
    },
    template: `
    <section-cards 
        :items="items" 
        title="Get Help with" 
        text="Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more." 
        to="/help/foo/bar"
    />
    `,
})
