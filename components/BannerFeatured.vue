<template lang="html">
    <div class="banner-featured">
        <div class="container">
            <heading-arrow
                class="heading-arrow"
                :text="breadcrumb.text"
                :to="breadcrumb.to"
            />
            <!-- do i need to wrap this in a v-if, v-else? -->
            <slot name="banner-text" />
            <responsive-image
                class="image"
                :image="image"
            />
            <molecule-half-faceted class="molecule" />
            <div :class="classes">
                <component
                    :is="hatchMarks"
                    class="hatch-marks"
                />

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
                    <button-link :label="prompt" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        MoleculeHalfFaceted: () => import("~/assets/svg/molecule-half-faceted"),
        HatchMarksLeft: () => import("~/assets/svg/hatch-marks-left"),
        HatchMarksRight: () => import("~/assets/svg/hatch-marks-right"),
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
    },
    computed: {
        onlineDisplay() {
            return this.isOnline == true ? "| Online" : ""
        },
        classes() {
            return ["white-box", `hatchmarks-right-${this.alignRight}`]
        },
        hatchMarks() {
            return this.alignRight == true
                ? "hatch-marks-right"
                : "hatch-marks-left"
        },
    },
}
</script>

<style lang="scss" scoped>
.banner-featured {
    max-width: 1200px;
    height: 600px;
    z-index: 1;
    position: relative;

    .container {
        z-index: 2;
    }

    .heading-arrow {
        position: absolute;
        z-index: 4;
        padding-left: 110px;
        margin-top: 40px;
    }
    .image {
        position: relative;
        z-index: 3;
        max-width: 1200px;
        height: 100%;
        background: var(gradient-image-01);
    }

    .white-box {
        height: 280px;
        width: 100%;
        background-color: white;
        z-index: 4;
        position: absolute;
        display: flex;
        flex-direction: row;
        top: 400px;
        // clip-path: polygon(
        //     56% 50%,
        //     71% 70%,
        //     100% 70%,
        //     100% 100%,
        //     0 100%,
        //     0% 50%
        // );
    }

    // Themes
    --color-theme: var(--color-primary-blue);
    &.color-visit {
        --color-theme: var(--color-visit);
    }
    &.color-help {
        --color-theme: var(--color-help);
    }
    &.color-about {
        --color-theme: var(--color-about);
    }

    .hatch-marks {
        z-index: 5;
        height: 180px;
        stroke: var(--color-theme);
    }

    .hatchmarks-right-true {
        flex-direction: row-reverse;
    }

    .molecule {
        right: -30px;
        top: 10px;
        position: absolute;
        z-index: 6;
        height: 400px;
    }

    .text-area {
        width: 500px;
        z-index: 5;
        right: 10px;
        margin-top: 50px;
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
