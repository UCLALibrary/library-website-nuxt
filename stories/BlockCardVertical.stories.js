// Import mock api data
import * as API from "~/stories/mock-api.json";
import { BlockCardVertical } from "~/components/BlockCardVertical"

// Storybook default settings
export default {
  component: BlockCardVertical,
  title: "BLOCK / Card Vertical",
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: [
          'book-binding-icon',
          'borrowing-books-equipment-icon',
        ],
      }
    },
    to: {
      control: {
        type: 'radio',
        options: [
          '/help/foo',
          '/about/bar',
          '/visit/baz',
        ],
      }
    },
  },
};

export const WithControls = (args, { argTypes }) => ({
  components: BlockCardVertical,
  props: Object.keys(argTypes),
  template: `<block-card-vertical v-bind="$props" v-on="$props" />`,
})

WithControls.args = {
  iconName: 'book-binding-icon',
  title: 'Book Binding',
  text: 'Here is a decent amount of text to explain this get help with.',
  to: '/help/foo'
}

const mock = {
  iconName: "book-binding-icon",
  to: "/help/foo/bar/",
  title: "Book Binding",
  text: "Here is a decent amount of text to explain this get help with.",
};

export const Default = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `
        <block-card-vertical
        :iconName="iconName"
        :to="to"
        :title="title"
        :text="text" />`,
});

export const Visit = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `
        <block-card-vertical
        :iconName="iconName"
        to="/visit/foo/bar"
        :title="title"
        :text="text" />`,
});

export const LongText = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `
        <block-card-vertical
        :iconName="iconName"
        to="/visit/foo/bar"
        :title="title"
        text="We doubt the critics, reject the status quo and see opportunity in dissatisfaction. Our campus, faculty and students are driven by optimism. It is not naïve; it is essential. And it has fueled every accomplishment, allowing us to redefine what's possible, time after time." />`,
});
