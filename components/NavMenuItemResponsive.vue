<template lang="html">
    <li class="nav-menu-item">
        <span
            class="section-name block"
            :data-sub-menu-title-id="index"
            @click="toggleItem(index)"
        >{{ item.name }}</span>

        <ul
            :data-sub-menu-item-id="index"
            class="sub-menu hidden"
        >
            <li
                v-for="child in parsedChildren"
                :key="child.id"
                class="sub-menu-item"
                @click="closeMenu"
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
    name: "NavMenuItemResponsive",
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        index: {
            type: Number,
            default: 0,
        },
        goBack: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
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
    watch: {
        goBack: function (newVal) {
            newVal ? this.resetAccordion() : null
        },
    },
    methods: {
        toggleItem(itemIndex) {
            const subMenuItemInfoElement = document.querySelectorAll(
                '[data-sub-menu-item-id="' + itemIndex + '"]'
            )[0]
            const subMenuTitleElement = document.querySelectorAll(
                'li span:not([data-sub-menu-title-id="' + itemIndex + '"]'
            )
            if (subMenuItemInfoElement.classList.contains("block")) {
                subMenuItemInfoElement.classList.remove("block")
                subMenuItemInfoElement.classList.add("hidden")

                for (let title of subMenuTitleElement) {
                    title.classList.remove("hidden")
                    title.classList.add("block")
                }
            } else {
                subMenuItemInfoElement.classList.remove("hidden")
                subMenuItemInfoElement.classList.add("block")

                for (let title of subMenuTitleElement) {
                    title.classList.remove("block")
                    title.classList.add("hidden")
                }
            }
            this.$emit("shouldOpen")
            this.$emit("itemOpenedColor", itemIndex)
        },
        resetAccordion() {
            this.$emit("shouldOpen")
            const subMenuTitleElement = document.querySelectorAll(
                "[data-sub-menu-title-id]"
            )
            for (let title of subMenuTitleElement) {
                title.classList.remove("hidden")
                title.classList.add("block")
            }
            const subMenuItemInfoElement = document.querySelectorAll(
                "[data-sub-menu-item-id]"
            )
            for (let item of subMenuItemInfoElement) {
                item.classList.remove("block")
                item.classList.add("hidden")
            }
        },
        closeMenu() {
            this.$emit("closeMainMenu")
            this.$emit("closeMenuItem")
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-menu-item {
    margin: 0px;
    padding: 0px;
    position: inherit;
    justify-content: left;
    text-align: left;

    // Top level menu
    .section-name {
        margin-bottom: 24px;
        line-height: 28px;
        font-size: 28px;
        font-weight: 600;
        text-align: left;
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        position: relative;
        color: white;
        cursor: pointer;

        &.block {
            display: block;
        }

        &.hidden {
            display: none;
        }
    }

    // Sub menu
    .sub-menu {
        list-style: none;
        font-size: 20px;
        font-weight: 400;
        font-family: var(--font-secondary);
        line-height: 24px;
        letter-spacing: 0.01em;
        color: var(--color-white);

        &.block {
            display: block;
        }

        &.hidden {
            display: none;
        }
    }

    .sub-menu-item {
        &:first-child {
            margin-top: 36px;
        }
        &:last-child {
            margin-bottom: 36px;
        }
    }
    .sub-menu-link {
        padding: 12px 0px;
        display: block;
    }
}
</style>
