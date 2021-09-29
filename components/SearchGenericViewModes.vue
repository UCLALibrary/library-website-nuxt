<template lang="html">
    <div
        :class="classes"
        @click="toggleOpen"
    >
        <button class="view-btn">
            <div class="selected">
                <span v-if="isOpened">View</span>
                <component
                    :is="`svg-${selectedItem.iconName}`"
                    v-else
                    class="svg"
                />
            </div>

            <div class="chevron">
                <svg-chevron-down class="svg" />
            </div>
        </button>

        <ul class="view-list">
            <li
                v-for="view in parsedItems"
                :key="view.slug"
                :class="view.classes"
                @click="onClick(view.slug)"
            >
                <component
                    :is="`svg-${view.iconName}`"
                    class="svg"
                />
                <div v-html="view.title" />
            </li>
        </ul>
    </div>
</template>

<script>
import SvgChevronDown from "~/assets/svg/chevron-down"

export default {
    components: {
        SvgChevronDown,
        SvgIconCalendar: () => import("~/assets/svg/icon-calendar"),
        SvgIconCard: () => import("~/assets/svg/icon-card"),
        SvgIconList: () => import("~/assets/svg/icon-list"),
    },
    props: {
        isOpened: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array,
            default: () => [],
        },
        selected: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return ["search-generic-view-modes", { "is-opened": this.isOpened }]
        },
        selectedItem() {
            return (
                this.items.find((obj) => {
                    return obj.slug == this.selected
                }) || {}
            )
        },
        parsedItems() {
            return this.items.map((obj) => {
                let classes = "list-item"
                if (obj.slug == this.selected) {
                    classes = "list-item is-active"
                }

                return {
                    classes,
                    ...obj,
                }
            })
        },
    },
    methods: {
        toggleOpen() {
            this.$emit("update:isOpened", !this.isOpened)
        },
        onClick(slug) {
            this.$emit("update:selected", slug)
            this.$emit("view-changed", slug)
        },
    },
}
</script>

<style lang="scss" scoped>
.search-generic-view-modes {
    position: relative;

    margin-left: 8px;
    font-family: var(--font-secondary);
    font-size: 18px;

    .view-btn {
        width: 106px;
        height: 60px;
        font-size: 18px;
        overflow: hidden;

        font-family: var(--font-secondary);
        color: var(--color-white);
        background-color: var(--color-primary-blue-03);
        padding: 0 50px 0 16px;
        position: relative;

        border-radius: 0;
        border: 1.5px solid transparent;

        transition-property: border-color, border-radius;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;

        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
    }
    .selected {
        width: 100%;
        box-sizing: border-box;
        text-align: center;

        .svg {
            display: inline-block;
            transform: translateY(2px);
        }
    }
    .chevron {
        font-size: 16px;
        color: var(--color-white);
        position: absolute;
        width: 40px;
        right: 0;
        top: 0;
        height: 100%;
        transition: background-color 400ms ease-in-out;

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .svg path {
        stroke: var(--color-white);
    }

    .view-list {
        margin-top: 8px;
        list-style: none;
        background-color: var(--color-primary-blue-03);
        color: var(--color-white);
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        text-align: center;
        border-radius: var(--rounded-slightly-all);
        border: 1.5px solid transparent;

        padding: 16px 8px;

        position: absolute;
        top: 100%;
        right: 0;

        transition-property: opacity, max-height, border;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;
    }
    .list-item {
        height: 72px;
        padding: 12px 8px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0);
        border-radius: var(--rounded-slightly-all);
        transition: background-color 400ms ease-in-out;

        .svg {
            display: block;
            margin: 0 auto;
        }
    }

    // Open state
    &.is-opened {
        .view-btn {
            border-radius: var(--rounded-slightly-all);
            border-color: var(--color-fushia-03);
        }
        .view-list {
            max-height: 220px;
            opacity: 1;
            border-color: var(--color-fushia-03);
        }
    }

    // Hovers
    @media #{$has-hover} {
        .list-item:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
}
</style>
