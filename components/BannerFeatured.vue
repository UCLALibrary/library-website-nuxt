<template lang="html">
  <div class="banner-featured">
    <div class="background" />

    <div class="container">
      <heading-arrow class="heading-arrow" :text="breadcrumb.text" />
      <div class="molecule">
        <molecule-half-faceted class="svg" />
      </div>

      <hatch-marks-left />
      <div class="tab">
        <div class="text-area">
          <div class="category">
            {{ category }}
          </div>
          <div class="title">
            {{ title }}
          </div>
          <div class="date-time">
            {{ dates }}
            {{ times }}
            {{ onlineDisplay }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoleculeHalfFaceted from "~/assets/svg/molecule-half-faceted";
import HatchMarksLeft from "~/assets/svg/hatch-marks-left";
export default {
  components: {
    MoleculeHalfFaceted,
    HatchMarksLeft,
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      // Mock as { name: 'Name', to: 'http://fake.url/link' }
      type: Object,
      default: () => {},
    },
    dates: {
      type: String,
      default: "",
    },
    times: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    to: {
      // URL to link to, if blank won't link
      type: String,
      default: "",
    },
    breadcrumb: {
      // mock as { text: 'Title', to: 'http://fake.url' }
      type: Object,
      default: () => {},
    },
    prompt: {
      // text that displays on blue button, e.g. "View exhibit". Links to `props.to`
      type: String,
      default: "",
    },
    alignRight: {
      type: Boolean,
      default: true,
    },
    computed: {
      onlineDisplay() {
        return this.isOnline.true ? "Online" : "";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-featured {
  position: relative;
  z-index: 0;

  .background {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 560px;
    overflow: hidden;

    // background: url(~/assets/svg/molecule-background.svg?url) center -100px,
    //   var(--gradient-image-01);
    // background-size: cover;
  }
  .container {
    max-width: 990px;
    height: 100%;
    background-color: var(--color-purple-03);

    position: relative;
    z-index: 20;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: stretch;
  }

  .molecule {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    width: 990px;
  }

  .svg {
    // flex: 1 1 auto;
    height: 350px;
  }

  // .tab {
  //   position: relative;
  //   z-index: 30;
  //   background-color: var(--color-white);
  //   clip-path: polygon(56% 50%, 71% 70%, 100% 70%, 100% 100%, 0 100%, 0% 50%);
  // }

  .heading-arrow {
    margin-top: 10px;
  }
  .text-area {
    width: 500px;
    height: 240px;
  }
  .title {
    font-size: 40px;
    font-style: normal;
    line-height: 44px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-bottom: 5px;
    color: var(--color-primary-blue);
  }
  .date-time {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-grey-01);
  }

  .category {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.06em;
    text-align: left;
    color: var(--color-dark-blue);
    margin-bottom: 5px;
  }
}
</style>
