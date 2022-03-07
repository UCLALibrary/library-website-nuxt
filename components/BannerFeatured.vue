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

        <component
            :is="parsedMediaComponent"
            class="media"
            :image="parsedMediaProp"
            :aspect-ratio="parsedRatio"
        >
            <div
                v-if="image"
                class="gradient"
            />

            <svg-molecule-half-faceted class="molecule" />
        </component>

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
                class="category category-desktop"
                v-html="category"
            />
            <!-- TODO make the id unique programmaticly -->
            <h3
                id="banner-featured"
                class="title"
                v-html="title"
            >
                <!--nuxt-link
                    :to="to"
                    v-html="title"
                /-->
            </h3>

            <p
                v-if="description"
                class="description"
                v-html="description"
            />

            <div
                v-if="startDate || endDate"
                class="schedule"
            >
                <time
                    v-if="startDate"
                    class="schedule-item"
                    v-html="parsedDate"
                />
                <time
                    v-if="endDate"
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
                aria-labelledby="banner-featured"
            >
                <button-link
                    v-if="prompt"
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

import SvgHatchRight from "~/assets/svg/hatch-right"

export default {
    components: {
        SvgHatchRight,
        SvgMoleculeHalfFaceted: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-half-overlay"
            ),
        SvgHeadingVector: () => import("~/assets/svg/vector-blue"),
        SvgIconLocation: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
            ),
        SvgIconOnline: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-virtual"
            ),
    },
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        video: {
            type: Object,
            default: () => {},
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
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
        parsedMediaComponent() {
            return this.image ? "responsive-image" : "responsive-video"
        },
        parsedMediaProp() {
            return this.image ? this.image : this.video
        },
        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            // if (this.$store.state.winWidth <= 750) {
            //     output = 100
            // }
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
    max-width: $container-xl-full-width + px;

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
        background: var(--gradient-image-01),
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
        opacity: 0.3;
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
        position: relative;
        z-index: 20;
        height: 100px;

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
        margin: -60px auto 0;
        position: relative;
        z-index: 40;
        padding-right: clamp(360px, 35%, 600px);
        max-width: $container-l-main + px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-end;
    }

    .category {
        @include overline;
        margin-bottom: $component-06 + px;
    }
    .title {
        line-height: 44px;
        margin-bottom: 5px;
        color: var(--color-primary-blue-03);
        @include step-2;
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

    // Variant
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
            padding-left: clamp(368px, 35%, 600px);
            padding-right: $whitespace-s-sides + px;;
            margin-left: auto;

            align-content: flex-start;
            align-items: flex-start;
        }
    }

    // Breakpoints
    
    @media #{$medium} {
        .meta {
            padding-left: $whitespace-m-sides + px;
            margin-left: 0;
        }
    }

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
                width: 70vw;
                height: auto;
            }
        }
        .category-mobile {
            display: block;
            padding-right: calc(40px + var(--unit-gutter));
            padding-left: var(--unit-gutter);
            height: 40px;
            padding-top: 7px;

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
            padding-right: var(--unit-gutter);
            padding-left: $whitespace-s-sides + px;
            position: static;
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
                position: static;
            }
        }
    }
}
</style>
