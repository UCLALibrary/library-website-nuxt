<template lang="html">
  <nuxt-link :to="to" :class="classes">
    <component :is="parsedSvgName" class="svg" />
    <div :class="metaClasses">
      <div class="title" v-html="title" />
      <h3 class="text" v-html="text" />
    </div>
  </nuxt-link>
</template>

<script>
import getSectionName from "~/utils/getSectionName";
import BookBindingIcon from "~/assets/svg/illustrations/book-binding-icon";

export default {
  components: {
    BookBindingIcon,
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
      return getSectionName(this.to);
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

  &:hover {
    transform: scale(1.1);
  }

  .svg {
    flex-grow: 0;
    flex-shrink: 0;
    margin-top: 10px;
  }

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
    font-family: var(--font-secondary);
    font-size: 16px;
    font-weight: normal;
    line-height: 150%;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    color: var(--color-dark-blue);
  }
  .meta {
    width: 300px;
    min-height: 200px;
    transition-property: background-color, box-shadow;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;
    background-color: var(--color-lightest-blue);

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

    // Hovers
    @media #{$has-hover} {
      &:hover {
        background-color: var(--color-theme);
        box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
        .title {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
