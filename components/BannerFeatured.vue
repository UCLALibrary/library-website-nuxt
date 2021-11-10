<template lang="html">
    <div :class="classes">
        <div class="slot">
            <slot>
                <div
                    v-if="breadcrumb"
                    class="breadcrumb"
                >
                    <svg-heading-vector class="heading-line" />
                    <h3 class="text">
                        {{ breadcrumb }}
                    </h3>
                </div>
            </slot>
        </div>

        <responsive-image
            class="image"
            :image="image"
            :aspect-ratio="parsedRatio"
        >
            <div class="gradient" />

            <svg-molecule-half-faceted class="molecule" />
        </responsive-image>

        <div class="hatch-box">
            <div class="clipped-box">
                <h3
                    v-if="category"
                    class="category category-mobile"
                    v-html="category"
                />
            </div>
            <div class="hatch">
                <svg-hatch-right class="svg" />
            </div>
        </div>

        <div class="meta">
            <div
                v-if="category"
                class="category category-desktop"
                v-html="category"
            />
            <h3 class="title">
                <nuxt-link
                    :to="to"
                    v-html="title"
                />
            </h3>

            <div class="schedule">
                <time
                    v-if="startDate"
                    class="schedule-item"
                    v-html="parsedDate"
                />
                <time
                    v-if="parsedTime"
                    class="schedule-item"
                    v-html="parsedTime"
                />
            </div>
            <div
                v-if="locations.length"
                class="location-group"
            >
                <nuxt-link
                    v-for="location in parsedLocations"
                    :key="`location-${location.id}`"
                    :to="location.to"
                    class="location-link"
                >
                    <component
                        :is="location.svg"
                        class="location-svg"
                    />
                    <span
                        class="location"
                        v-html="location.title"
                    />
                </nuxt-link>
                <div
                    v-for="location in parsedIsOnline"
                    :key="`location-${location.id}`"
                    class="location-online"
                >
                    <component
                        :is="location.svg"
                        class="location-svg"
                    />
                    <span
                        class="location"
                        v-html="location.title"
                    />
                </div>
            </div>

            <nuxt-link
                v-if="to"
                :to="to"
            >
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
import formatEventTimes from "~/utils/formatEventTimes"
import formatEventDates from "~/utils/formatEventDates"

// SVGs
import SvgMoleculeHalfFaceted from "~/assets/svg/molecule-half-faceted"
import SvgHatchRight from "~/assets/svg/hatch-right"

export default {
    components: {
        SvgMoleculeHalfFaceted,
        SvgHatchRight,
        SvgHeadingVector: () => import("~/assets/svg/vector-blue"),
        SvgIconLocation: () => import("~/assets/svg/icon-location"),
        SvgIconOnline: () => import("~/assets/svg/icon-online"),
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
            type: String,
            default: "",
        },
        startDate: {
            type: String,
            default: "",
        },
        endDate: {
            type: String,
            default: "",
        },
        locations: {
            type: Array,
            default: () => [],
        },
        to: {
            // URL to link to, if blank won't link
            type: String,
            default: "",
        },
        breadcrumb: {
            type: String,
            default: "",
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
        ratio: {
            type: Number,
            default: 56.25,
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
        parsedDate() {
            return formatEventDates(this.startDate, this.endDate)
        },
        parsedTime() {
            return formatEventTimes(this.startDate, this.endDate)
        },
        sectionName() {
            return this.section || getSectionName(this.to)
        },
        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            if (this.$store.state.winWidth <= 750) {
                output = 100
            }
            return output
        },
        parsedLocations() {
            let parsedLocations = []
            for (let location in this.locations) {
                if (this.locations[location].title == "Online") {
                    break
                } else {
                    this.locations[location].svg = "svg-icon-location"
                    parsedLocations.push(this.locations[location])
                }
            }
            return parsedLocations
        },
        parsedIsOnline() {
            let parsedOnline = []
            for (let location in this.locations) {
                if (this.locations[location].title == "Online") {
                    this.locations[location].svg = "svg-icon-online"
                    parsedOnline.push(this.locations[location])
                }
            }
            return parsedOnline
        },
    },
}
</script>

<style lang="scss" scoped>
.banner-featured {
    z-index: 0;
    position: relative;
    overflow: hidden;
    background-color: var(--color-white);

    // Themes
    --color-theme: var(--color-primary-blue-03);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --color-theme: var(--color-help-green-03);
    }
    &.color-about {
        --color-theme: var(--color-about-purple-03);
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

        display: flex;
        align-items: center;
        justify-content: flex-start;

        .heading-line {
            flex-shrink: 0;
            padding-right: 0;
        }
        .text {
            border: 1px solid var(--color-white);
            padding: 15px 20px 13px 22px;
            margin-left: -10px;
            clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
            line-height: 1;
        }
    }
    //TODO update with variables
    .gradient {
        background: linear-gradient(
                117.49deg,
                #0f0f0f 0%,
                rgba(15, 15, 15, 0.25) 31.88%,
                rgba(15, 15, 15, 0) 58.42%
            ),
            linear-gradient(
                180deg,
                rgba(15, 15, 15, 0) 0%,
                rgba(15, 15, 15, 0.25) 67.57%,
                #0f0f0f 100%
            );
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
        opacity: 30%;
        mix-blend-mode: screen;

        height: 70%;
        width: auto;
    }

    .hatch-box {
        width: 100%;
        position: relative;
        z-index: 30;
        margin-top: -95px;
        overflow: hidden;
    }
    .clipped-box {
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
            100% 102%,
            0 102%
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
    .category-mobile {
        display: none;
    }

    .meta {
        padding: 0 50px;
        margin: -60px 0 0 0;
        position: relative;
        z-index: 40;
        width: 65%;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-end;
        align-items: flex-end;

        > * {
            max-width: 550px;
            width: 100%;
        }
    }
    .category {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.06em;
        text-align: left;
        color: var(--color-primary-blue-05);
        margin-bottom: 16px;
        text-transform: uppercase;
    }
    .title {
        font-size: 40px;
        line-height: 44px;
        text-align: left;
        margin-bottom: 5px;
        color: var(--color-primary-blue-03);
        font-weight: 500;
    }
    .schedule {
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        color: var(--color-secondary-grey-04);
        margin: 10px 0 8px 0;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .schedule-item {
        &:after {
            content: "";
            border-left: 1px solid var(--color-secondary-grey-02);
            margin: 0 10px;
            height: 18px;
            display: inline-block;
            vertical-align: middle;
            position: relative;
        }
        &:last-child {
            margin-right: 0;
        }
        &:last-child:after {
            display: none;
        }
    }
    .location-group {
        font-family: var(--font-secondary);
        font-size: 20px;
        line-height: 1;
    }
    .location-link {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;

        color: var(--color-primary-blue-03);
    }
    .location-online {
        color: var(--color-secondary-grey-05);

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
    }
    .location {
        padding: 0 0 5px 5px;
    }
    .button {
        width: 180px;
        height: 50px;
        padding: 0px 0px;
        margin-top: 16px;
    }

    // Varient
    &.hatch-left {
        .clipped-box {
            margin-left: auto;
            padding-right: 50px;
            padding-left: 100px;
            clip-path: polygon(39px 0, 105% 0, 100% 102%, 0 102%, 0% 95px);
        }
        .hatch {
            right: calc(65% - 99px);
            left: auto;

            .svg {
                transform: scaleX(-1);
            }
        }
        .meta {
            padding-left: 75px;
            margin-left: auto;

            align-content: flex-start;
            align-items: flex-start;
        }
    }

    // Hovers
    @media #{$has-hover} {
        .title:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-default-cyan-03);
            text-decoration-thickness: 1.5px;
        }
    }

    // Breakpoints
    @media #{$small} {
        .slot {
            font-size: 28px;
            padding-left: 20px;
            margin-top: 16px;
        }
        .molecule {
            margin-bottom: -45px;
            height: 215px;
            width: auto;
        }
        .hatch-box {
            margin-top: -40px;
        }
        .clipped-box {
            height: 40px;
        }
        .hatch {
            left: calc(65% - 44px);
            height: 40px;

            .svg {
                width: 50vw;
                height: auto;
            }
        }
        .category-mobile {
            display: block;
            padding-right: calc(40px + var(--unit-gutter));
            padding-left: var(--unit-gutter);
            height: 40px;
            padding-top: 7px;
            box-sizing: border-box;

            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-content: flex-start;
            align-items: flex-start;
        }

        .meta {
            width: 100%;
            margin-top: 0;
            padding-left: var(--unit-gutter);
            padding-right: var(--unit-gutter);
            box-sizing: border-box;
            position: static;

            > * {
                max-width: 100%;
            }
        }
        .category-desktop {
            display: none;
        }
        .title {
            margin-top: 40px;
        }
        .button {
            width: 100%;
            height: 40px;
            margin: 40px 0 0 0;
        }

        // Variant
        &.hatch-left {
            .clipped-box {
                padding-left: var(--unit-gutter);
                padding-right: var(--unit-gutter);
            }
            .hatch {
                right: calc(65% - 44px);
            }
            .category-mobile {
                align-content: center;
                align-items: center;
            }
            .meta {
                width: 100%;
                margin-top: 0;
                padding-left: var(--unit-gutter);
                padding-right: var(--unit-gutter);
                box-sizing: border-box;
                position: static;
            }
        }
    }
}
</style>
