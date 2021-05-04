<template lang="html">
  <nuxt-link :to="to" :class="classes">
    <component :is="parsedSvgName" v-if="iconName && title" class="svg" />
    <div v-if="iconName && title" :class="metaClasses">
      <div class="title" v-html="title" />
      <h3 class="text" v-html="text" />
    </div>

    <slot />
  </nuxt-link>
</template>

<script>
import getSectionName from "~/utils/getSectionName";
// SVGs
import BookBindingIcon from "~/assets/svg/illustrations/book-binding-icon";
import BorrowingBooksIcon from "~/assets/svg/illustrations/borrowing-books-icon";
import DatabasesIcon from "~/assets/svg/illustrations/databases-icon";
import DigitizedResourcesIcon from "~/assets/svg/illustrations/digitized-resources-icon";
import FindSpaceIcon from "~/assets/svg/illustrations/find-space-icon";
import RemoteAccessIcon from "~/assets/svg/illustrations/remote-access-icon";
import ResearchIcon from "~/assets/svg/illustrations/research-icon";
import TeachingIcon from "~/assets/svg/illustrations/teaching-icon";
export default {
  components: {
    BookBindingIcon,
    BorrowingBooksIcon,
    DatabasesIcon,
    DigitizedResourcesIcon,
    FindSpaceIcon,
    RemoteAccessIcon,
    ResearchIcon,
    TeachingIcon,
  },
  props: {
    iconName: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return ["block-card-vertical", `color-${this.sectionName}`];
    },
    metaClasses() {
      return ["meta", `color-${this.sectionName}`];
    },
    sectionName() {
      return this.$slots.default ? "default" : getSectionName(this.to);
    },
    parsedSvgName() {
      return `${this.iconName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.block-card-vertical {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border: 2px solid var(--color-lightest-blue);
  width: 300px;
  height: 400px;
  transition: transform 0.2s;

  .svg {
    flex-grow: 0;
    flex-shrink: 0;
    margin-top: 10px;
  }

  .meta {
    width: 300px;
    height: 200px;
    transition-property: background-color, box-shadow;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;
    background-color: var(--color-lightest-blue);

    .title {
      font-family: var(--font-primary);
      font-size: 24px;
      line-height: 110%;
      text-align: center;
      letter-spacing: 0.01em;
      font-weight: 500;
      margin-top: 35px;
      margin-bottom: 10px;
      color: var(--color-dark-blue);
    }

    .text {
      height: 90px;
      font-family: var(--font-secondary);
      font-size: 16px;
      font-weight: normal;
      line-height: 150%;
      text-align: center;
      padding-left: 40px;
      padding-right: 40px;
      color: var(--color-dark-blue);
      overflow: hidden;
      text-overflow: ellipsis;
    }

    // Themes
    --color-theme: var(--color-primary-light-blue);
    &.color-visit {
      --color-theme: var(--color-fushia-03);
    }
    &.color-help {
      --color-theme: var(--color-green-03);
    }
    &.color-about {
      --color-theme: var(--color-purple-03);
    }
  }
  // Hovers
  @media #{$has-hover} {
    &:hover {
      transform: scale(1.1);
      .meta {
        background-color: var(--color-theme);
        box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
      }
      .title {
        text-decoration: underline;
      }
    }
  }
}
</style>
