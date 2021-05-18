<template lang="html">
    <div class="banner-featured">
        <div class="container">
            <div v-if="breadcrumb.to">
                <heading-arrow
                    class="heading-arrow"
                    :text="breadcrumb.text"
                    :to="breadcrumb.to"
                />
            </div>
            <div
                v-else
                class="slot"
            >
                <slot name="banner-text">
                    {{ breadcrumb.text }}
                </slot>
            </div>
            <responsive-image
                class="image"
                :image="image"
            />
            <molecule-half-faceted class="molecule" />
            <div :class="classes">
                <component :is="alignmentHatchmarks" />

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
                    <button-link
                        :label="prompt"
                        :to="to"
                        class="button"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getSectionName from "~/utils/getSectionName"

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
            let output = ""
            if (this.isOnline == true) {
                output = "| Online"
            }
            if (this.location) {
                output = `| ${this.location}`
            }
            return output
        },
        sectionName() {
            return this.section || getSectionName(this.to)
        },
        classes() {
            return [
                "white-box",
                `hatchmarks-right-${this.alignRight}`,
                "hatch-marks",
                `color-${this.sectionName}`,
            ]
        },
        alignmentHatchmarks() {
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
    z-index: 1;
    position: relative;

    .container {
        z-index: 2;
        max-width: 1200px;
    }

    .heading-arrow {
        position: absolute;
        z-index: 4;
        padding-left: 110px;
        margin-top: 40px;
    }

    .slot {
        border: 1px solid var(--color-white);
        color: var(--color-white);
        position: absolute;
        z-index: 4;
        padding-left: 110px;
        font-size: 44px;
        margin-top: 40px;
        line-height: 100%;
        text-transform: capitalize;
        font-weight: normal;
    }

    .image {
        position: relative;
        z-index: 3;
        max-width: 100%;
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

    .hatch-marks {
        z-index: 5;
        padding-left: 10px;

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
        .hatch {
            stroke: var(--color-theme);
        }
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
        max-width: 500px;
        z-index: 5;
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

    .button {
        width: 180px;
        height: 50px;
        padding: 0px 0px;
        margin-top: 16px;
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            .title {
                text-decoration: underline;
                text-decoration-color: var(--color-cyan-01);
                text-decoration-thickness: 1.5px;
            }
        }
    }
}
</style>
