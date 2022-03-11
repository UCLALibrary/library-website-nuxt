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
                />
            </div>
        </div>
    </div>
</template>

<script>
import SvgHeadingArrow from "~/node_modules/ucla-library-design-tokens/assets/svgs/graphic-chevron-right"
import SvgIconLocation from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"

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
        // Use button component with icon-arrow-right svg
        // arrow-horizontal svg (desktop), arrow-horizontal-small svg (tablet and mobile)
    },
}
</script>

<style lang="scss" scoped>
.block-spaces {


    max-width: calc($container-l-main + 128) + px;
    border: 2px solid var(--color-primary-blue-01);
    border-radius: var(--rounded-slightly-all);
    .container {
        margin: 48px auto;
        width: 90%;

        display: flex;
        flex-direction: row;

        .svg__graphic-chevron-right {
            flex-shrink: 0;
            flex-basis: 80px;

            .svg__stroke--wayfinder {
                stroke: var(--color-about-purple-03);
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
            .title{
                    font-weight: 500;
                    font-size: 36px;
                    line-height: 120%;
                    color: var(--color-primary-blue-03);
                }
            .location {
                color: var(--color-primary-blue-03);
                padding-bottom: 2px;
                .icon {
                    margin-bottom: -10px;
                }
                .location-title {
                    line-height: 20px;
                }
            }
            .button {
                .icon-name {

                }
            }
        }
    }

    // Hover states
    @media #{$has-hover} {
        .title:hover {
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
    // Breakpoints
    // @media #{$small} {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-content: center;
    //     align-items: center;

    //     .image {
    //         margin: 27px 56px 64px;
    //     }
    //     .meta {
    //         margin-bottom: 48px;
    //         margin-right: 0px;
    //     }
    //     .icon-block {
    //         .location {
    //             display: flex;
    //             flex-direction: column;
    //         }
    //         .location-link + .location-link {
    //             border-style: hidden;
    //             margin-left: 0px;
    //             margin-top: 5px;
    //             padding-left: 0px;
    //         }
    //     }
    // }

</style>
