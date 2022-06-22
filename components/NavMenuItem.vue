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
                >
                    {{ child.name }}
                </smart-link>
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
        font-size: 20px;
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
            height: 4px;
            width: 100%;
            opacity: 0;
            background-color: var(--color-primary-yellow-01);
            transition: opacity $transition-timing-normal ease-in-out;
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
        transition-duration: $transition-timing-normal;
        transition-timing-function: ease-in-out;
    }
    .sub-menu-item {
        transition: background-color $transition-timing-normal ease-in-out;

        &:first-child {
            margin-top: 32px;
        }
        &:last-child {
            margin-bottom: 32px;
        }
    }
    .sub-menu-link {
        padding: 10px 32px;
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
            max-height: 200px; // TODO Change this number once you know what max menu height is
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
        .sub-menu-item .sub-menu-link:hover {
            background-color: rgba(#ffffff, 0.1);
            text-decoration: underline;
            text-decoration-color: var(--color-primary-yellow-01);
            border-radius: 2px;
        }
    }
}
</style>
