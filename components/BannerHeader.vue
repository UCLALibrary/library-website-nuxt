<template lang="html">
    <div :class="classes">
        <div
            v-if="category"
            class="category"
        >
            <svg-heading-vector class="heading-line" />
            <div
                class="text"
                v-html="category"
            />
        </div>

        <component
            :is="parsedMediaComponent"
            class="media"
            :image="parsedMediaProp"
            :aspect-ratio="parsedRatio"
        >
            <div
                v-if="image"
                :class="gradientClasses"
            />

            <svg-molecule-half-faceted class="molecule" />
        </component>

        <div class="hatch-box">
            <div class="clipped-box" />
            <div class="hatch">
                <svg-hatch-right class="svg" />
            </div>
        </div>

        <div class="meta">
            <h1
                class="title"
                v-html="title"
            />
            <rich-text
                v-if="text"
                class="snippet"
                :rich-text-content="text"
            />
            <div class="byline">
                <div
                    v-for="(item, index) in byline"
                    v-if="byline"
                    :key="index"
                    class="byline-item"
                >
                    {{ item }}
                </div>
                <time
                    v-if="dateCreated"
                    class="date-created"
                    v-html="parsedDateCreated"
                />
                <time
                    v-if="startDate"
                    class="schedule-item"
                    v-html="parsedDate"
                />
                <time
                    v-if="startDate"
                    class="schedule-item"
                    v-html="parsedTime"
                />
            </div>
            <div
                v-if="email"
                class="contact-info"
            >
                <component
                    :is="`svg-icon-email`"
                    class="contact-svg"
                />
                <smart-link
                    :to="`mailto:${email}`"
                    target="_blank"
                    class="link-icon"
                >
                    {{ email }}
                </smart-link>
            </div>
            <div
                v-if="phone"
                class="contact-info"
            >
                <component
                    :is="`svg-icon-phone`"
                    class="contact-svg"
                />

                <smart-link
                    :to="`tel:${phone}`"
                    target="_blank"
                    class="link-icon"
                >
                    {{ phone }}
                </smart-link>
            </div>
            <div
                v-if="staffDirectoryLink"
                class="contact-info"
            >
                <component
                    :is="`svg-icon-person`"
                    class="contact-svg"
                />
                <smart-link
                    :to="staffDirectoryLink"
                    class="link-icon"
                    v-html="`View staff directory`"
                />
            </div>
            <div
                v-if="addressLink"
                class="contact-info"
            >
                <component
                    :is="`svg-icon-location`"
                    class="contact-svg"
                />
                <smart-link
                    :to="addressLink"
                    target="_blank"
                    class="link-icon"
                >
                    {{ address }}
                </smart-link>
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
            <button-link
                v-if="to"
                :label="prompt"
                :is-secondary="true"
                class="button"
                :to="to"
            />
        </div>
    </div>
</template>

<script>
// Helpers
import getSectionName from "~/utils/getSectionName"
import format from "date-fns/format"
import formatEventTimes from "~/utils/formatEventTimes"
import formatEventDates from "~/utils/formatEventDates"

// SVGs
import SvgMoleculeHalfFaceted from "~~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-half-overlay"
import SvgHatchRight from "~/assets/svg/hatch-right"

export default {
    components: {
        SvgMoleculeHalfFaceted,
        SvgHatchRight,
        SvgHeadingVector: () => import("~/assets/svg/vector-blue"),
        SvgIconLocation: () =>
            import(
                "~~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
            ),
        SvgIconOnline: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-virtual"
            ),
        SvgIconEmail: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-email"
            ),
        SvgIconPhone: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-phone"
            ),
        SvgIconPerson: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-person"
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
        text: {
            type: String,
            default: "",
        },
        byline: {
            type: Array,
            default: () => [],
        },
        dateCreated: {
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
        category: {
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
        //contact info for Location Detail Page
        email: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
        addressLink: {
            type: String,
            default: "",
        },
        staffDirectoryLink: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return [
                "banner-header",
                { "hatch-left": !this.alignRight },
                `color-${this.sectionName}`,
            ]
        },
        parsedDateCreated() {
            return format(new Date(this.dateCreated), "MMMM d, Y")
        },
        parsedDate() {
            return formatEventDates(this.startDate, this.endDate)
        },
        parsedTime() {
            return formatEventTimes(this.startDate, this.endDate)
        },
        sectionName() {
            return this.to
                ? getSectionName(this.to)
                : getSectionName(this.$route.path)
        },
        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            // if (this.$store.state.winWidth <= 750) {
            //     output = 100
            // }
            return output
        },
        parsedMediaComponent() {
            return this.image ? "responsive-image" : "responsive-video"
        },
        parsedMediaProp() {
            return this.image ? this.image : this.video
        },
        gradientClasses() {
            return this.category ? "gradient" : "gradient-no-category"
        },
        parsedLocations() {
            return this.locations.reduce(function (filtered, location) {
                if (location.title !== "Online") {
                    location.svg = "svg-icon-location"
                    filtered.push(location)
                }
                return filtered
            }, [])
        },
        parsedIsOnline() {
            return this.locations.reduce(function (filtered, location) {
                if (location.title === "Online") {
                    location.svg = "svg-icon-online"
                    filtered.push(location)
                }
                return filtered
            }, [])
        },
    },
}
</script>

<style lang="scss" scoped>
.banner-header {
    z-index: 0;
    position: relative;
    overflow: hidden;
    background-color: var(--color-white);
    max-width: $container-xl-banner + px;

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

    .category {
        color: var(--color-white);
        font-size: 26px;
        text-transform: capitalize;

        position: absolute;
        z-index: 20;
        padding-left: 64px;
        margin-top: 64px;

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
    .media {
        max-height: 66vh;
    }
    .gradient {
        background: $overlay-01;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .gradient-no-category {
        background: $overlay-02;
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
        width: 75%;
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

    .meta {
        margin: -60px auto 0;
        position: relative;
        z-index: 40;
        padding-right: 300px;
        max-width: $container-l-main + px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-end;
    }

    .title {
        color: var(--color-primary-blue-03);
        @include step-4;
        margin-bottom: var(--space-m);
    }
    .snippet {
        @include step-0;
        color: var(--color-secondary-grey-04);
        font-weight: 400;
        margin-bottom: var(--space-m);

        ::v-deep p {
            margin: 0;
        }
    }
    .byline {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;

        font-size: 20px;
        margin-bottom: 24px;
    }
    .byline-item {
        display: flex;
        flex-direction: row;

        font-size: 20px;
        line-height: 24px;
        text-align: left;
        color: var(--color-primary-blue-03);
    }
    .date-created {
        color: var(--color-primary-blue-03);
    }

    .schedule {
        line-height: 24px;
        text-align: left;
        color: var(--color-primary-blue-03);
        margin-top: 24px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .schedule-item,
    .byline-item {
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

    .contact-info {
        color: var(--color-primary-blue-03);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: var(--space-xs);
        margin-bottom: var(--space-xs);
        @include button;
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
    .location-svg,
    .contact-svg {
        flex-shrink: 0;
    }
    .button {
        width: 180px;
        height: 50px;
        padding: 0px 0px;
        margin: var(--space-m) 0 0 0;
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
            right: calc(75% - 99px);
            left: auto;

            .svg {
                transform: scaleX(-1);
            }
        }
        .meta {
            padding-left: 300px;
            padding-right: $whitespace-s-sides + px;
            margin-left: auto;

            align-content: flex-start;
        }
        .button {
            width: 180px;
            height: 50px;
            padding: 0px 0px;
        }
    }

    @media #{$medium} {
        .meta {
            padding-left: $whitespace-m-sides + px;
            margin-left: 0;
        }
        .byline,
        .schedule {
            display: flex;
            flex-direction: column;
            padding-left: 0;
            align-items: flex-start;
        }
        .schedule-item,
        .byline-item {
            margin-top: 8px;
            &:after {
                display: none;
            }
        }
        .date-created {
            margin-top: 24px;
        }
    }

    @media #{$small} {
        .media {
            max-height: 375px;
        }
        .category {
            font-size: 28px;
            padding-left: 16px;
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

        .meta {
            width: 100%;
            margin-top: 0;
            padding-left: var(--unit-gutter);
            padding-right: var(--unit-gutter);
            position: static;
            margin: 0 0 0 0;
        }
        .title {
            margin: 10px 0 5px 0px;
        }
        .byline,
        .schedule {
            display: flex;
            flex-direction: column;
            padding-left: 0;
        }
        .schedule-item,
        .byline-item {
            margin-top: 8px;
            &:after {
                display: none;
            }
        }
        .button {
            width: 324px;
            height: 40px;
            margin: 24px 0 0 0;
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
            .meta {
                width: 100%;
                margin: 0 0 0 0;
                padding-left: var(--unit-gutter);
                padding-right: var(--unit-gutter);
                position: static;
            }
            .button {
                width: 324px;
                height: 40px;
                margin: 24px 0 10px 0;
            }
        }
    }
}
</style>
