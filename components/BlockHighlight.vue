<template lang="html">
    <div :class="classes">
        <responsive-image
            :image="image"
            :aspect-ratio="imageAspectRatio"
            class="image"
        />

        <div
            v-if="hasTriangle"
            class="clipped"
        >
            <div class="floating-highlighlight" />
            <div class="clipped-box" />
        </div>

        <div class="meta">
            <div
                class="category"
                v-html="category"
            />
            <nuxt-link :to="to">
                <h3
                    class="title"
                    v-html="title"
                />
            </nuxt-link>

            <div class="date-time">
                <time
                    v-if="dates"
                    class="dates"
                    v-html="dates"
                />
                <time
                    v-if="times"
                    class="times"
                    :datetime="times"
                    v-html="times"
                />
                <component
                    :is="parsedSvgOnline"
                    v-if="isOnline"
                    class="svg svg-online"
                />
                <span
                    v-if="isOnline"
                    v-html="parseOnline"
                />
            </div>
            <div
                v-if="text"
                class="text"
                v-html="text"
            />
            <div
                v-if="location"
                class="location"
            >
                <component
                    :is="parsedSvgLocation"
                    class="svg"
                />

                <span
                    class="location-name"
                    v-html="location"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        SvgIconLocation: () => import("~/assets/svg/icon-location"),
        SvgIconOnline: () => import("~/assets/svg/icon-online"),
    },
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        to: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        dates: {
            type: String,
            default: "",
        },
        times: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        hasTriangle: {
            type: Boolean,
            default: false,
        },
        isVertical: {
            type: Boolean,
            default: false,
        },
        imageAspectRatio: {
            type: Number,
            default: 0,
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        location: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return [
                "block-highlight",
                { "is-vertical": this.isVertical },
                { "has-triangle": this.hasTriangle },
            ]
        },
        parseOnline() {
            // TODO this can be a link to zoom or ?
            return this.isOnline ? "online" : ""
        },
        parsedSvgOnline() {
            return "svg-icon-online"
        },
        parsedSvgLocation() {
            return "svg-icon-location"
        },
    },
}
</script>

<style lang="scss" scoped>
.block-highlight {
    max-width: 456px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: row;

    .clipped {
        width: 100%;
        height: 47px;
        margin-top: -54px;
        position: relative;
        z-index: 0;

        .floating-highlighlight {
            z-index: 30;
            position: absolute;
            width: calc(100% - 55px);
            top: 0;
            left: 5px;
            height: 47px;
            background-color: var(--color-visit-fushia-03);

            clip-path: polygon(
                0 0,
                calc(100% - 20px) 0,
                100% 47px,
                calc(100% - 1.5px) 47px,
                calc(100% - 21px) 1.5px,
                0 1.5px
            );
        }

        .clipped-box {
            position: absolute;
            z-index: 30;
            top: 8px;
            left: 0px;
            width: calc(100% - 57px);
            height: 47px;
            box-sizing: border-box;
            background-color: var(--color-white);
            clip-path: polygon(
                0 0,
                calc(100% - 20px) 0,
                100% 47px,
                calc(100% - 1.5px) 47px,
                0 47px,
                0 1.5px
            );
        }
    }

    .meta {
        z-index: 10;
        position: relative;
        width: 100%;
        min-height: 255px;
        box-sizing: border-box;
    }

    .category {
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-primary-blue-05);
    }
    .title {
        font-weight: 500;
        font-size: 26px;
        line-height: 130%;
        letter-spacing: 0.01em;
        color: var(--color-primary-blue-03);
        margin: 16px 0 0 0;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .date-time {
        font-weight: 300;
        font-size: 18px;
        line-height: 140%;
        color: var(color-grey-01);
        margin-top: 10px;
        .times {
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid var(--color-secondary-grey-02);
        }
        .svg-online {
            margin-bottom: -5px;
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid var(--color-secondary-grey-02);
        }
    }
    .text {
        font-size: 18px;
        font-weight: 400;
        line-height: 140%;
        margin: 24px 0 0 0;
        color: var(--color-black);

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .location {
        display: flex;

        color: var(--color-primary-blue-03);
        margin-top: 11px;

        .location-name {
            align-self: center;
        }
    }

    // Variations
    &.is-vertical {
        flex-direction: column;
        margin-bottom: 50px;

        &:not(.has-triangle) {
            max-height: 420px;

            .meta {
                margin-top: 16px;
                max-width: 300px;
            }
            .image {
                width: 300px;
            }
        }
        // for clipped version
        &.has-triangle {
            .meta {
                margin-top: -25px;
                padding: 0 60px 0 17px;
            }
        }
    }
    &:not(&.is-vertical) {
        max-width: 990px;
        .meta {
            max-width: 412px;
            margin-top: 16px;
            padding-bottom: 16px;
            overflow: hidden;
        }
        .image {
            width: 456px;
            max-height: 274px;
            margin-right: 56px;
        }
        .title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .text {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    // Breakpoints
    @media #{$medium} {
        &:not(&.is-vertical) {
            max-width: 95%;
            padding-left: 5px;
            padding-right: 5px;
        }
    }

    @media #{$small} {
        &.is-vertical {
            // for clipped version
            &.has-triangle {
            }
        }
        &:not(&.is-vertical) {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;

            max-height: 550px;
            max-width: 100%;
            padding-left: 5px;
            padding-right: 5px;

            .image {
                max-width: 100%;
            }
        }
    }

    // Themes
    --color-theme: var(--color-primary-blue-02);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --color-theme: var(--color-help);
    }
    &.color-about {
        --color-theme: var(--color-about);
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            .title {
                text-decoration: underline;
                text-decoration-color: var(--color-default-cyan-03);
                text-decoration-thickness: 1.5px;
            }
        }
    }
}
</style>
