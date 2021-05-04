// Import mock api data
import * as API from "~/stories/mock-api.json";

// Storybook default settings
export default {
  title: "BLOCK / Card Vertical",
};

const mock = {
  iconName: "book-binding-icon",
  to: "/help/foo/bar/",
  title: "Example Service",
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
        iconName="find-space-icon"
        to="/about/foo/bar"
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
        iconName="digitized-resources-icon"
        to="/help/foo/bar"
        :title="title"
        text="We doubt the critics, reject the status quo and see opportunity in dissatisfaction. Our campus, faculty and students are driven by optimism. It is not naïve; it is essential. And it has fueled every accomplishment, allowing us to redefine what's possible, time after time." />`,
});

export const Databases = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `
        <block-card-vertical
        iconName="databases-icon"
        to="/visit/foo/bar"
        :title="title"
        :text="text" />`,
});

export const RemoteAccess = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `
        <block-card-vertical
        iconName="remote-access-icon"
        to="/visit/foo/bar"
        :title="title"
        :text="text" />`,
});

export const Research = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `
        <block-card-vertical
        iconName="research-icon"
        to="/visit/foo/bar"
        :title="title"
        :text="text" />`,
});

export const Teaching = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `
        <block-card-vertical
        iconName="teaching-icon"
        to="/visit/foo/bar"
        :title="title"
        :text="text" />`,
});
