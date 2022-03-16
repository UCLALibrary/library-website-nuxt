<template lang="html">
    <div class="block-spaces">
        <div class="container">
            <svg-heading-arrow class="heading-arrow" />

            <div class="meta">
                <h1 class="space-title">
                    <nuxt-link
                        :to="to"
                        v-html="title"
                    />
                </h1>

                <nuxt-link
                    :to="location.to"
                    class="location"
                >
                    <svg-icon-location class="icon" />
                    <span
                        class="location-title"
                        v-html="location"
                    />
                </nuxt-link>
                <p
                    class="text"
                    v-html="text"
                />
                <button-link
                    v-if="to"
                    class="button"
                    :button-url="to"
                    :label="buttonText"
                    :icon-name="iconName"
                    :is-secondary="true"
                    :to="buttonUrl"
                    aria-labelledby="block-spaces"
                />
            </div>
        </div>
    </div>
</template>

<script>
// https://calendar.library.ucla.edu/admin/api/1.1/endpoint/space_locations
// https://calendar.library.ucla.edu/admin/api/1.1/endpoint/space_items
import SvgHeadingArrow from "~/node_modules/ucla-library-design-tokens/assets/svgs/graphic-chevron-right"
import SvgIconLocation from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
// Use button component with icon-arrow-right svg
// arrow-horizontal svg (desktop)
// arrow-horizontal-small svg (tablet and mobile)

export default {
    components: {
        SvgHeadingArrow,
        SvgIconLocation,
    },
    props: {
        to: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        location: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "Reserve",
        },
        buttonUrl: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-spaces {
    max-width: calc($container-l-main + 128) + px;
    border: 2px solid var(--color-primary-blue-01);
    border-radius: var(--rounded-slightly-all);
    .container {
        margin: 64px auto;
        width: 90%;

        display: flex;
        flex-direction: row;

        .svg__graphic-chevron-right {
            flex-shrink: 0;
            flex-basis: 80px;

            .svg__stroke--wayfinder {
                stroke: var(--color-visit-fushia-03);
            }
        }

        .meta {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: flex-start;
            align-items: flex-start;

            margin-left: 40px;
            .space-title{
                    font-weight: 500;
                    font-size: 36px;
                    line-height: 120%;
                    color: var(--color-primary-blue-03);
                    margin-bottom: 24px;
                }
            .location {
                color: var(--color-primary-blue-03);
                padding-bottom: 24px;
                .icon {
                    margin-bottom: -10px;
                }
                .location-title {
                    line-height: 20px;
                }
            }
            .text {
                margin-bottom: 24px;
            }
            .button {
                .icon-name {
                }
            }
        }
    }

    // Hover states
    @media #{$has-hover} {
        .space-title:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-primary-blue-03);
            text-decoration-thickness: 1.5px;
        }
        .location-title:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-primary-blue-03);
            text-decoration-thickness: 1.5px;
        }
    }
}

</style>
