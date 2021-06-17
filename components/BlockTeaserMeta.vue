<template lang="html">
    <div :class="classes">
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
                <span v-html="parsedDateTime" />
                <span v-if="showPipe"> | </span>
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
            <p
                v-if="showText"
                class="text"
                v-html="text"
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
                    v-html="location"
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
        text: {
            type: String,
            default: "",
        },
        date: {
            type: String,
            default: "",
        },
        time: {
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
    },
    computed: {
        classes() {
            return [
                "block-teaser-meta",
                { "is-gallery": this.view == "gallery" },
                { "is-calendar": this.view == "calendar" },
                { "is-highlight": this.view == "highlight" },
            ]
        },
        sectionName() {
            return getSectionName(this.to)
        },
        parsedDateTime() {
            return `${this.date} | ${this.time}`
        },
        parseOnline() {
            return this.isOnline ? " online" : ""
        },
        showText() {
            return this.view == "list" || this.view == "highlight"
        },
        parsedSvgName() {
            return this.location == "online" ? "online-icon" : "location-icon"
        },
        parsedSvgOnline() {
            if (this.view == "gallery") {
                return "online-icon"
            }
        },
        showLocation() {
            // this is used only on Calendar View
            return this.view == "calendar"
        },
        showPipe() {
            if (this.time && this.time != "" && this.isOnline) {
                return true
            }
            // Reduce the extra Pipe Character
            return false
        },
    },
}
</script>

<style lang="scss" scoped>
.block-teaser-meta {
    .meta {
        background-color: var(--color-white);
        max-width: 420px;
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

        .svg-online {
            margin-bottom: -5px;
        }
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

    &.is-gallery {
        .meta {
            max-width: 300px;
        }
    }
    &.is-calendar {
        .meta {
            border-right: 1px dotted var(--color-grey-03);
            max-width: 236px;
            padding-right: 19px;
        }
    }
    &.is-highlight {
        .meta {
            width: 320px;
        }
        .category {
            margin-top: 6px;
        }
        .text {
            margin-top: 15px;
        }
    }

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
}
</style>
