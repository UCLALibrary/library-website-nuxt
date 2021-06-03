<template lang="html">
    <div :class="classes">
        <div class="slot">
            <slot>
                <div class="breadcrumb">
                    <svg-heading-vector class="heading-line" />
                    <div class="text">
                        {{ breadcrumb.text }}
                    </div>
                </div>
            </slot>
        </div>

        <responsive-image
            class="image"
            :image="image"
            :aspect-ratio="56.25"
        >
            <div class="gradient" />

            <svg-molecule-half-faceted class="molecule" />
        </responsive-image>

        <div class="box">
            <div class="box-clipped" />
            <div class="hatch">
                <component
                    :is="hatchSVG"
                    class="svg"
                />
            </div>
        </div>

        <div class="meta">
            <h3
                class="category"
                v-html="category"
            />
            <h2
                class="title"
                v-html="title"
            />
            <div class="detail-block">
                <time class="date">
                    {{ dates }}
                </time>
                <time
                    v-if="parsedTime"
                    class="time"
                    :datetime="times"
                >
                    {{ parsedTime }}
                </time>
                <div
                    v-if="locationDisplay"
                    class="location"
                    v-html="locationDisplay"
                />
            </div>

            <nuxt-link :to="to">
                <button-link
                    :label="prompt"
                    class="button"
                />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
// Helpers
import getSectionName from "~/utils/getSectionName"

// SVGs
import SvgMoleculeHalfFaceted from "~/assets/svg/molecule-half-faceted"
import SvgHatchRight from "~/assets/svg/hatch-right"

export default {
    components: {
        SvgMoleculeHalfFaceted,
        SvgHatchRight,
        SvgHeadingVector: () => import("~/assets/svg/vector-blue"),
        SvgHatchMobile: () => import("~/assets/svg/hatch-mobile"),
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
        classes() {
            return [
                "banner-featured",
                { "hatch-left": !this.alignRight },
                `color-${this.sectionName}`,
            ]
        },
        parsedTime() {
            //TODO make this human readable time
            return this.times
        },
        locationDisplay() {
            let output = this.location
            if (this.isOnline) {
                output = "Online"
            }
            return output
        },
        sectionName() {
            return this.section || getSectionName(this.to)
        },
        hatchSVG() {
            return this.isMobile == true
                ? "svg-hatch-mobile"
                : "svg-hatch-right"
        },
    },
}
</script>

<style lang="scss" scoped>
.banner-featured {
    z-index: 0;
    position: relative;
    overflow: hidden;

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

    .slot {
        position: absolute;
        z-index: 20;
        padding-left: 50px;
        margin-top: 40px;
    }
    .breadcrumb {
        color: var(--color-white);
        font-size: 26px;
        text-transform: capitalize;

        position: absolute;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .heading-line {
            flex-shrink: 0;
            position: relative;
            z-index: 30;
            padding-right: 0;
        }
        .text {
            border: 1px solid var(--color-white);
            padding: 15px 20px 13px 22px;
            margin-left: -10px;
            clip-path: polygon(17px 0, 100% 0, 100% 100%, 0% 100%);
        }
    }

    .gradient {
        background-color: var(--gradient-image-01);
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .molecule {
        right: 0;
        top: 0;
        bottom: 95px;
        margin: auto;
        position: absolute;
        z-index: 20;
        opacity: 45%;
        mix-blend-mode: screen;

        height: 70%;
        width: auto;
    }

    .box {
        width: 100%;
        position: relative;
        z-index: 30;
        margin-top: -95px;
    }
    .meta {
        padding: 0px 0px 0 50px;
        margin-top: -45px;
        position: relative;
        z-index: 40;
        background-color: var(--color-white);
        width: 45%;
    }
    .box-clipped {
        width: 65%;
        background-color: var(--color-white);
        box-sizing: border-box;
        position: relative;
        z-index: 20;
        height: 95px;

        clip-path: polygon(
            0 0,
            calc(100% - 39px) 0,
            100% 95px,
            100% 100%,
            0 100%
        );
    }

    .hatch {
        height: 95px;
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: calc(65% - 99px);
    }

    &.hatch-left {
        .box-clipped {
            margin-left: auto;
            padding-right: 50px;
            padding-left: 100px;
            clip-path: polygon(39px 0, 100% 0, 100% 100%, 0 100%, 0% 95px);
        }
        .meta {
            margin-left: auto;
            padding-right: 50px;
            padding-left: 100px;
        }
        .hatch {
            right: calc(65% - 99px);
            left: auto;

            .svg {
                transform: scaleX(-1);
            }
        }
    }

    .title {
        font-size: 40px;
        line-height: 44px;
        text-align: left;
        margin-bottom: 5px;
        max-width: 500px;
        color: var(--color-primary-blue);
    }
    .detail-block {
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        color: var(--color-grey-01);

        display: flex;
        flex-wrap: nowrap;
    }

    .category {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.06em;
        text-align: left;
        color: var(--color-dark-blue);
        margin-bottom: 5px;
    }

    .date {
        padding-right: 10px;
    }

    .time {
        border-left: 1px solid var(--color-grey-03);
    }

    .location {
        border-left: 1px solid var(--color-grey-03);
        padding: 0 10px;
        height: 24px;
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
    @media #{$lte-phone} {
        // .hatch {
        //     height: 55px;
        // }
        &.hatch-left {
            .meta {
                width: 95%;
                padding-left: 24px;
                padding-right: 24px;
            }

            .category {
                padding-left: 55%;
                margin-top: -55px;
            }
        }

        .slot {
            font-size: 28px;
            padding-left: 24px;
            margin-top: 16px;
        }

        .meta {
            width: 95%;
            padding-left: 24px;
            padding-right: 24px;
        }

        .title {
            margin-top: 55px;
            padding-left: 24px;
            padding-right: 24px;
        }

        .detail-block {
            padding-left: 24px;
            padding-right: 24px;
        }

        .category {
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;
            padding-left: 40px;
            padding-right: 40px;
        }

        .button {
            padding-right: 10%;
            padding-left: 10%;
            width: 240px;
            height: 40px;
            margin-top: 40px;
            text-align: center;
        }

        .image {
            aspect-ratio: 1;
        }
    }
}
</style>
