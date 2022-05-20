<template lang="html">
    <div :class="classes">
        <div class="banner-text-content-container">
            <div
                v-if="category"
                class="meta"
            >
                <svg-heading-vector class="heading-line" />
                <div
                    :class="categoryClasses"
                    v-html="category"
                />
            </div>
            <div class="content">
                <h1
                    class="title"
                    v-html="title"
                />
                <div
                    v-if="text"
                    class="text"
                    v-html="text"
                />
                <div
                    v-if="date"
                    class="schedule"
                >
                    <time
                        v-if="date"
                        class="schedule-item"
                        v-html="parsedDate"
                    />
                    <time
                        v-if="date"
                        class="schedule-item"
                        v-html="parsedTime"
                    />
                    <!-- TODO this can be multiple locations, on own line with icon -->
                    <div
                        v-if="isOnline"
                        class="schedule-item"
                    >
                        Online
                    </div>
                </div>
                <div
                    v-if="locations.length"
                    class="location-group"
                >
                    <nuxt-link
                        v-for="location in locations"
                        :key="`location-${location.id}`"
                        :to="location.to"
                        class="location-link"
                    >
                        <svg-icon-location class="location-svg" />
                        <span
                            class="location"
                            v-html="location.title"
                        />
                    </nuxt-link>
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
                    <nuxt-link
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

                <button-link
                    v-if="to"
                    :label="buttonText"
                    :to="to"
                    :is-secondary="true"
                    icon-name="svg-arrow-diagonal"
                />
            </div>
        </div>

        <!-- <svg-molecule-two-facets class="molecule" /> -->
    </div>
</template>

<script>
import format from "date-fns/format"

// SVGs
import SvgMoleculeTwoFacets from "~/assets/svg/molecule-two-facets"
import SvgHeadingVector from "~/assets/svg/vector-blue"

// Utility functions
import formatEventTimes from "~/utils/formatEventTimes"
import formatEventDates from "~/utils/formatEventDates"
import getSectionName from "~/utils/getSectionName"

export default {
    components: {
        SvgMoleculeTwoFacets,
        SvgHeadingVector,
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
        SvgIconLocation: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
            ),
        SvgIconPerson: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-person"
            ),
    },
    props: {
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
            required: true,
        },
        date: {
            type: String,
            default: "",
        },
        locations: {
            type: Array,
            default: () => [],
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        isDarkBlue: {
            type: Boolean,
            default: false,
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
            let output = ["banner-text", "theme-light"]
            if (this.isDarkBlue) {
                output = ["banner-text", "theme-dark"]
            }
            return output
        },
        parseDarkBackground() {
            let output = true
            if (this.isDarkBlue) {
                output = false
            }
            return output
        },
        sectionName() {
            return getSectionName(this.to)
        },
        categoryClasses() {
            return ["category", `color-${this.sectionName}`]
        },
        parsedDate() {
            return formatEventDates(this.date, this.date)
        },
        parsedTime() {
            return formatEventTimes(this.date, this.date)
        },
    },
}
</script>

<style lang="scss" scoped>
// Variations for dark blue and white backgrounds
.theme-light {
    --background-color: var(--color-white);
    --category-title-color: var(--color-primary-blue-05);
    --title-color: var(--color-primary-blue-03);
    --text-color: var(--color-black);
    --schedule-item-color: var(--color-secondary-grey-04);
    --schedule-item-border: var(--color-secondary-grey-02);
    --button-border-color: var(--color-primary-blue-03);
    --facet-inside-color: var(--color-primary-blue-02);
    --facet-outside-color: var(--color-primary-blue-03);
    --location-color: var(--color-primary-blue-03);
    --location-icon-color: var(--color-primary-blue-03);
    --hover-border-color: var(--color-primary-blue-02);
    --hover-background-color: var(--color-white);
}
.theme-dark {
    --background-color: var(--color-primary-blue-03);
    --category-title-color: var(--color-white);
    --title-color: var(--color-white);
    --text-color: var(--color-white);
    --schedule-item-color: var(--color-white);
    --schedule-item-border: var(--color-primary-yellow-01);
    --button-border-color: var(--color-default-cyan-02);
    --facet-inside-color: var(--color-default-cyan-02);
    --facet-outside-color: var(--color-default-cyan-03);
    --location-color: var(--color-white);
    --location-icon-color: var(--color-white);
    --hover-border-color: var(--color-white);
    --hover-background-color: var(--color-primary-blue-03);
}
.banner-text {
    padding: calc(var(--space-2xl) - 22px) 0 var(--space-2xl);
    margin: 0 auto;
    background-color: var(--background-color);
    position: relative;
    z-index: 0;
    background-image: url("~/assets/svg/molecule-two-facets.svg?url");
    background-position: 100% 50%;
    background-size: 144px;
    background-repeat: no-repeat;
    max-width: 1680px;
    .meta {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: -52px;
    }
    // Themes for category outline
    --color-theme: var(--color-primary-blue-03);
    .color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    .color-help {
        --color-theme: var(--color-help-green-03);
    }
    .color-about {
        --color-theme: var(--color-about-purple-03);
    }
    .category {
        color: var(--category-title-color);
        @include step-0;
        line-height: 1;
        text-transform: capitalize;
        border: 1px solid var(--color-theme);
        padding: 12px 20px;
        margin-left: -10px;
        clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
    }
    .heading-line {
        flex-shrink: 0;
        padding-right: 0;
        height: 96px;
    }
    .banner-text-content-container {
        max-width: $container-l-main + px;
        margin: auto;

        .meta {
            margin-bottom: var(--space-l);
        }

        .content {
            max-width: calc(100% - 144px);

            > *:last-child {
                margin-bottom: 0;
            }
        }

        ::v-deep .text p {
            margin: 0;
        }
    }
    .title {
        color: var(--title-color);
        @include step-5;
        margin-bottom: var(--space-s);
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
    .text {
        margin-bottom: var(--space-m);
    }
    .schedule {
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        font-family: var(--font-secondary);
        color: var(--schedule-item-color);
        margin: 24px 0 8px 0;
        // padding-left: 52px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .schedule-item {
        &:after {
            content: "";
            border-left: 1px solid var(--schedule-item-border);
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
        color: var(--location-color);
        font-family: var(--font-secondary);
        font-size: 20px;
        line-height: 1;
        // padding-left: 52px;
    }
    .location-link {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
    }
    .location-svg {
        .location-icon {
            fill: var(--location-icon-color);
        }
        .location-icon-line {
            stroke: var(--location-icon-color);
        }
    }
    ::v-deep .text p {
        margin-bottom: 24px;
        color: var(--text-color);
        @include step-0;
        font-weight: $font-weight-regular;
    }
    .button-link {
        border: 1px solid var(--button-border-color);
    }
    .molecule {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        margin: auto;
        position: absolute;
        z-index: 20;
        width: auto;
        .facet-outside {
            fill: var(--facet-outside-color);
        }
        .facet-inside {
            fill: var(--facet-inside-color);
        }
        &.theme-dark {
            .button-link {
                background-color: var(--color-primary-blue-03);
                color: var(--color-white);
            }
        }
    }

    // Hovers
    @media #{$has-hover} {
        &.theme-dark {
            .button-link:hover {
                // border: 1px solid var(--hover-border-color);
                background-color: var(--hover-background-color);
                color: var(--text-color);
            }
        }
    }
}
// Breakpoints
@media #{$extra-large} {
    .banner-text {
        // margin-top: 72px;
        .text {
            max-width: 788px;
        }
    }
}
@media #{$medium} {
    .banner-text {
        background-size: 128px;
        padding-top: var(--unit-gutter);
        .banner-text-content-container {
            padding-left: var(--unit-gutter);
        }
        .text {
            padding-right: 120px;
        }
        .button-link {
            margin-top: 32px;
        }
    }
}
@media #{$small} {
    .banner-text {
        background-size: 96px;
        background-position-y: 40px;
        .meta {
            margin-left: 0;
        }
        .banner-text-content-container .content {
            max-width: calc(100% - 96px);
        }
        .schedule {
            display: flex;
            flex-direction: column;
            padding-left: 0;
        }
        .schedule-item {
            &:after {
                display: none;
            }
        }
        .location-group {
            padding-left: 0;
        }
        .text {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
        }
        .molecule {
            height: 215px;
            width: auto;
            top: 32px;
            transform: none;
        }
        .button-link {
            max-width: 100%;
            margin: 32px 0 0 0;
        }
    }
}
</style>
