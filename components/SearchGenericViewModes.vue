<template lang="html">
    <div
        :class="classes"
        @click="toggleOpen"
    >
        <button class="view-btn">
            <span class="title"> View </span>
        </button>

        <ul class="view-list">
            <li
                v-for="view in items"
                :key="view.slug"
                class="list-item"
                @click="$emit('view-mode-change', view.slug)"
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
export default {
    components: {
        SvgIconCalendar: () => import("~/assets/svg/icon-calendar"),
        SvgIconCard: () => import("~/assets/svg/icon-card"),
        SvgIconList: () => import("~/assets/svg/icon-list"),
    },
    props: {
        isOpened: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            items: [
                {
                    slug: "list",
                    iconName: "icon-list",
                    title: "List",
                },
                {
                    slug: "card",
                    iconName: "icon-card",
                    title: "Card",
                },
                {
                    slug: "calendar",
                    iconName: "icon-calendar",
                    title: "Calendar",
                },
            ],
        }
    },
    computed: {
        classes() {
            return ["search-generic-view-modes", { "is-opened": this.isOpened }]
        },
    },
    methods: {
        toggleOpen() {
            this.$emit("update:isOpened", !this.isOpened)
        },
    },
}
</script>

<style lang="scss" scoped>
.search-generic-view-modes {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;

    .view-btn {
        width: 106px;
        height: 60px;
        background-color: var(--color-primary-blue);
        padding-right: 16px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;

        // TODO Use an SVG not Font Awesome
        &::after {
            content: "\f107";
            font-size: 16px;
            font-family: "Font-Awesome";
            color: var(--color-white);
        }
    }

    .view-list {
        margin-top: 15px;
        list-style: none;
        background-color: var(--color-primary-blue);
        color: var(--color-white);
        opacity: 0;
        max-height: 0;
        overflow: hidden;

        transition-property: opacity, max-height;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;

        .list-item {
            margin-top: 12px;
            font-size: 18px;
            font-weight: 400;
            text-align: center;

            &:last-child {
                margin-bottom: 12px;
            }
        }
        .svg:last-child {
            padding-left: 15px;
        }
    }

    .title {
        color: var(--color-white);
        margin-left: 16px;
        font-size: 18px;
        font-weight: 400;
    }

    // Open state
    &.is-opened {
        .view-list {
            max-height: 220px;
            opacity: 1;
        }

        .button {
            &::after {
                content: "\f106";
            }
        }
    }
}
</style>
