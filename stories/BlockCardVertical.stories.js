// Import mock api data
import * as API from "~/stories/mock-api.json";

// Storybook default settings
export default {
  title: "BLOCK / Card Vertical",
};

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

export const hasSlot = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `
        <block-card-vertical
        class="more-button"
        :to="to"
        >
            <button-more />
        </block-card-vertical>
  `,
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
