<template lang="html">
    <div :class="classes">
        <nuxt-link
            v-if="showImage"
            class="image"
        >
            <responsive-image
                :image="item.image"
                :aspect-ratio="100"
            />
        </nuxt-link>
        <div class="meta">
            <div
                class="category"
                v-html="item.category"
            />
            <nuxt-link :to="item.to">
                <h3
                    class="title"
                    v-html="item.title"
                />
            </nuxt-link>
            <div
                class="date-time"
                v-html="parsedDateTime"
            />
            <p
                v-if="showText"
                class="text"
                v-html="item.text"
            />
            <div
                v-if="showLocation"
                class="location"
            >
                <component
                    :is="parsedSvgName"
                    class="svg"
                />

                <span
                    class="location-name"
                    v-html="item.location"
                />
            </div>
        </div>
    </div>
</template>

<script>
import getSectionName from "~/utils/getSectionName"

export default {
    components: {
        LocationIcon: () => import("~/assets/svg/location-icon"),
        OnlineIcon: () => import("~/assets/svg/online-icon"),
    },
    props: {
        view: {
            type: String,
            default: "list", // other options are highlight, gallery or calendar
        },
        item: {
            // Mock: api.page {image: {}, to, category, title, location, dates, format, times, text}
            type: Object,
            default: () => {},
        },
    },
    computed: {
        classes() {
            return [
                "block-teaser",
                { "is-gallery": this.view == "gallery" },
                { "is-calendar": this.view == "calendar" },
            ]
        },
        sectionName() {
            return getSectionName(this.item.to)
        },
        parsedDateTime() {
            return `${this.item.date} | ${this.item.time}`
        },
        showText() {
            return this.view == "list" || this.view == "highlight"
        },
        showImage() {
            return (
                this.view == "list" ||
                this.view == "highlight" ||
                this.view == "gallery"
            )
        },
        parsedSvgName() {
            return this.item.location == "online"
                ? "online-icon"
                : "location-icon"
        },
        showLocation() {
            return this.view == "calendar"
        },
    },
}
</script>

<style lang="scss" scoped>
.block-teaser {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 930px;
    height: 270px;

    // Themes
    --color-theme: var(--color-primary-light-blue);
    &.color-visit {
        --color-theme: var(--color-visit);
    }
    &.color-help {
        --color-theme: var(--color-help);
    }
    &.color-about {
        --color-theme: var(--color-about);
    }

    .image {
        //flex: 1 1 auto;
        width: 456px;
    }

    .meta {
        margin-left: 56px;
        max-width: 420px;
    }
    &.is-gallery {
        width: 930px;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;
        height: 323px;

        .image {
            // max-height: 180px;
        }
        .meta {
            margin-left: 0;
            margin-top: 50px;
        }
    }
    &.is-calendar {
        justify-content: flex-start;

        .meta {
            border-right: 1px dotted var(--color-grey-03);
            max-width: 236px;
            padding-right: 19px;
        }
    }
    .category {
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-dark-blue);
    }

    .title {
        font-weight: 500;
        font-size: 26px;
        line-height: 130%;
        letter-spacing: 0.01em;
        color: var(--color-blue-01);
        margin: 16px 0 0 0;

        /*display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;*/
    }
    .date-time {
        font-weight: 300;
        font-size: 18px;
        line-height: 140%;
        color: var(color-grey-01);
        margin-top: 10px;
    }
    .text {
        font-size: 18px;
        font-weight: 400;
        line-height: 140%;
        margin: 24px 0 0 0;
        color: var(--color-black);

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .location {
        display: flex;

        color: var(--color-primary-blue);
        margin-top: 11px;

        .location-name {
            align-self: center;
        }
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
        width: auto;
        margin: 0 var(--unit-gutter);
    }
}
</style>
