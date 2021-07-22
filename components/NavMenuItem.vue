<template lang="html">
    <li :class="classes">
        <span
            class="section-name"
            v-html="item.name"
        />

        <ul class="sub-menu">
            <li
                v-for="child in parsedChildren"
                :key="child.id"
                class="sub-menu-item"
            >
                <smart-link
                    :class="child.classes"
                    :to="child.to"
                    :target="child.target"
                    v-html="child.name"
                />
            </li>
        </ul>
    </li>
</template>

<script>
// Helpers
import formatLinkTarget from "~/utils/formatLinkTarget"

export default {
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        isOpened: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        classes() {
            return [
                this.item.classes,
                "nav-menu-item",
                { "is-active": this.isActive },
                { "is-opened": this.isOpened },
            ]
        },
        parsedChildren() {
            return this.item.children.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                    classes: `sub-menu-link ${obj.classes || ""}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-menu-item {
    margin: 0 5px;
    padding: 0;
    position: relative;
    min-width: 128px;
    max-width: 192px;

    display: inline-block;
    vertical-align: top;

    // Top level menu
    .section-name {
        height: var(--unit-height);
        line-height: var(--unit-height);
        text-align: center;
        display: block;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            height: 5px;
            width: 100%;
            opacity: 0;
            background-color: var(--color-primary-yellow);
            transition: opacity 400ms ease-in-out;
        }
    }

    // Sub menu columns
    .sub-menu {
        position: relative;
        z-index: 10;
        list-style: none;
        font-size: 16px;
        font-weight: 600;
        font-family: var(--font-secondary);
        line-height: 120%;
        letter-spacing: 0.01em;
        color: var(--color-white);
        max-height: 0;
        overflow: hidden;
        opacity: 0;

        transition-property: max-height, opacity;
        transition-duration: 800ms, 400ms;
        transition-timing-function: ease-in-out;
    }
    .sub-menu-item {
        transition: background-color 400ms ease-in-out;

        &:first-child {
            margin-top: 36px;
        }
        &:last-child {
            margin-bottom: 36px;
        }
    }
    .sub-menu-link {
        padding: 12px 32px;
        display: block;
    }

    // States
    &.is-active {
        .section-name::after {
            opacity: 1;
        }
    }
    &.is-opened {
        .sub-menu {
            max-height: 100vh;
            opacity: 0.45;
        }
    }
    &.is-opened.is-active {
        .sub-menu {
            opacity: 1;
        }
    }

    // Hover
    @media #{$has-hover} {
        .sub-menu-item:hover {
            background-color: rgba(#ffffff, 0.1);
            text-decoration: underline;
            text-decoration-color: var(--color-primary-yellow);
        }
    }
}
</style>
