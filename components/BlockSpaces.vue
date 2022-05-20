<template lang="html">
    <div class="block-spaces">
        <div class="container">
            <div class="arrow-and-title">
                <svg-heading-arrow class="heading-arrow" />
                <!-- if the is a link (:to) - display as a link -->
                <h3
                    v-if="to"
                    class="space-title"
                >
                    <smart-link :to="to">
                        {{ title }}
                    </smart-link>
                </h3>
                <!-- if no link (:to)  - do not display as a link -->
                <h3
                    v-else
                    class="space-title-no-link"
                    v-html="title"
                />
            </div>
            <div class="meta">
                <p
                    class="text"
                    v-html="text"
                />
                <!-- if no buttonUrl -  do not display button -->
                <button-link
                    v-if="to"
                    class="button"
                    :button-url="to"
                    :label="buttonText"
                    :is-secondary="true"
                    :to="to"
                    target="_blank"
                />
            </div>
        </div>
    </div>
</template>

<script>
// https://calendar.library.ucla.edu/admin/api/1.1/endpoint/space_locations

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
        text: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "Reserve",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-spaces {
    max-width: $container-l-main + px;
    border: 2px solid var(--color-primary-blue-01);
    border-radius: $rounded-slightly + px;

    .container {
        padding: var(--space-2xl);

        display: flex;
        flex-direction: column;

        .arrow-and-title {
            display: flex;
            flex-direction: row;
            gap: var(--space-l);

            width: 90%;

            .space-title {
                @include step-2;
                color: var(--color-primary-blue-03);
                margin-bottom: var(--space-m);
            }
        }

        .space-title-no-link {
            @include step-2;
            color: var(--color-primary-blue-03);
            margin-bottom: var(--space-m);
        }

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

            margin-left: calc(80px + var(--space-l));

            .location {
                @include step-0;
                color: var(--color-primary-blue-03);
                margin-bottom: var(--space-m);
                .icon {
                    margin-bottom: -10px;
                }
                .location-title {
                    line-height: 20px;
                }
            }
            .text {
                @include step-0;
                margin-top: 0;
                margin-bottom: var(--space-m);
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

    // Breakpoints
    @media #{$medium} {
        .container {
            display: flex;
            flex-direction: column;

            .arrow-and-title {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-content: stretch;
                align-items: center;

                .space-title {
                    margin-left: 0;
                }
            }
            .svg__graphic-chevron-right {
                margin-bottom: var(--space-m);
            }
            .meta {
                margin-left: 0px;
            }

            .heading-arrow {
                width: 40px;
                height: 40px;
                flex-basis: 40px;
            }
        }
    }

    @media #{$small} {
        .container {
            width: 90%;
            .heading-arrow {
                margin-bottom: var(--space-m);
            }
        }

        ::v-deep .button-link {
            margin: 0;
        }

        ::v-deep .button {
            width: 100%;
        }
    }
}
</style>
