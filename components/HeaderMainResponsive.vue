<template lang="html">
    <div class="header-main-responsive">
        <div class="collapse-menu">
            <component
                :is="parsedSvgName"
                class="close-svg"
            />
        </div>
        <div 
            class="nav-menu-primary"
        >
            <div
                v-for="(item) in parsedPrimaryMenuItems"
                :key="item.id"
                :item="item"
                :is-active="item.isActive"
                :is-opened="isOpened"
                @click.native="toggleMenu"
                @mouseover.native="setActive(index)"
                @mouseleave.native="clearActive"
            >
                <ul class="menu">
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
                </ul>
            </div>
        </div>
        <div class="nav-menu-secondary">
            <ul class="list">
                <li
                    v-for="item in parsedSecondaryMenuItems"
                    :key="item.id"
                    class="list-item"
                >
                    <smart-link
                        class="link underline-hover"
                        :to="item.to"
                        :target="item.target"
                    >
                        {{ item.name }}
                    </smart-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// Helpers
import formatLinkTarget from "~/utils/formatLinkTarget"

export default {
    name: 'HeaderMainResponsive',
    components: {
        IconCloseLarge: () =>
            import("~/node_modules/ucla-library-design-tokens/assets/svgs/icon-close-large"),
    },
    props: {
        iconName: {
            type: String,
            default: "icon-close-large",
        },
        primaryNav: {
            // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
            type: Array,
            default: () => []
        },
        secondaryNav: {
            type: Array,
            default: () => []
        },
        currentPath: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            activeMenuIndex: -1,
        }
    },
    computed: {
        parsedSvgName() {
            return `${this.iconName}`
        },
        parsedPrimaryMenuItems() {
            // Add an isActive property to all menu items
            const items = this.primaryNav.map((obj, index) => {
                return {
                    ...obj,
                    isActive: index == this.activeMenuIndex,
                }
            })

            // Return only items that have children (assume these are dropdowns)
            return items.filter((obj) => {
                return obj.children && obj.children.length
            })
        },
        parsedSecondaryMenuItems() {
            return this.secondaryNav.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        },
    },
    methods: {
        toggleMenu() {
            this.isOpened = !this.isOpened
        },
        setActive(index) {
            // On hover, set current active menu item
            this.activeMenuIndex = index
        },
        clearActive() {
            // Reset active item back to the one from the route URL
            this.activeMenuIndex = this.currentPathActiveIndex
        },
    }
}
</script>

<style lang="scss" scoped>
.header-main-responsive {
    width: 375px;
    height: 800px;
    background-color: var(--color-primary-blue-03);
    display: flex;
    flex-direction: column;
    
    .collapse-menu {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: end;
        padding: 38px 43px 114px 43px;

        .close-svg {
            cursor: pointer;
            // Adjustments: Set svg to blue background
            .svg__fill--primary-blue-01 {
                fill: var(--color-primary-blue-03);
            }
        }
    }

    ul {
        list-style-type: none;
    }

    .nav-menu-primary {
        width: 100%;
        padding-inline: 43px;

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
            cursor: pointer;
            position: relative;
            color: white;
        }

        // Sub menu columns
        .sub-menu {
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
            transition-duration: 400ms, 400ms;
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
            .sub-menu-item:hover {
                background-color: rgba(#ffffff, 0.1);
                text-decoration: underline;
                text-decoration-color: var(--color-primary-yellow-01);
            }
        }
    }

    .nav-menu-secondary {
        width: 100%;
        padding-inline: 43px;
        padding-top: 40px;

        .list {
            color: white;

            .list-item {
                padding-bottom: 24px;
                font-size: 20px;
                font-weight: 400;
            }
        }
    }
}
</style>
