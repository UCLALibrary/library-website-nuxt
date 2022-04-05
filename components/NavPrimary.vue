<template lang="html">
    <nav :class="classes">
        <div class="item-top">
            <nuxt-link
                to="/"
                aria-label="UCLA Library home page"
            >
                <svg-logo-ucla-library
                    class="svg logo-ucla"
                    alt="UCLA Library logo blue"
                />
            </nuxt-link>
        </div>

        <ul class="menu">
            <nav-menu-item
                v-for="(item, index) in parsedItems"
                v-if="item.children"
                :key="item.id"
                :item="item"
                :is-active="item.isActive"
                :is-opened="isOpened"
                @click.native="toggleMenu"
                @mouseover.native="setActive(index)"
                @mouseleave.native="clearActive"
            />
        </ul>

        <div class="support-links">
            <div
                v-for="item in supportLinks"
                class="item-top"
            >
                <smart-link
                    class="support-link underline-hover"
                    :to="item.to"
                >
                    {{ item.name }}
                </smart-link>
            </div>
        </div>

        <div class="background-white" />
        <div
            class="background-blue"
            @click="toggleMenu"
        />

        <div
            v-if="isOpened"
            class="click-blocker"
            @click="toggleMenu"
        />
    </nav>
</template>

<script>
import SvgLogoUclaLibrary from "~/assets/svg/logo-ucla-library"

// TODO Handle "click outside" event to close menu. Or just add a "click-blocker" DIV to the page.
// SEE https://stackoverflow.com/questions/53013471/vuejs-2-custom-directive-to-close-when-clicked-outside-not-working

export default {
    components: {
        SvgLogoUclaLibrary,
    },
    props: {
        items: {
            // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
            type: Array,
            default: () => [],
        },
        currentPath: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            isOpened: false,
            activeMenuIndex: -1,
        }
    },
    computed: {
        classes() {
            return [
                "nav-primary",
                { "is-opened": this.isOpened },
                { "not-hovered": this.activeMenuIndex == -1 },
            ]
        },
        supportLinks() {
            // Generally this is just the last "Support Us" link, but we are going to allwo it to be more than 1
            return this.items.filter((obj) => {
                console.log(obj)
                // Return items that don't have sub-menu children
                return !obj.children || !obj.children.length
            })
        },
        currentPathActiveIndex() {
            // Find the index for the active menu item based on current route URL
            const currentPath = this.currentPath || this.$route.path
            return this.items.findIndex((obj, index) => {
                return currentPath.includes(obj.url)
            })
        },
        parsedItems() {
            // Add an isActive property to all menu items
            const items = this.items.map((obj, index) => {
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
    },
    mounted() {
        this.activeMenuIndex = this.currentPathActiveIndex
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
    },
}
</script>

<style lang="scss" scoped>
.nav-primary {
    --unit-height: 80px;
    padding: 0 var(--unit-gutter);
    position: relative;
    width: 100%;
    z-index: 10;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: space-between;
    align-items: flex-start;

    .item-top {
        height: var(--unit-height);
        position: relative;
        z-index: 10;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        .nuxt-link-active {
            color: var(--color-primary-blue-03);
        }
    }

    .logo-ucla {
        height: 23px;
        width: auto;
    }

    .menu {
        margin: 0;
        padding: 0;
        list-style-type: none;
        position: relative;
        z-index: 10;
    }

    .support-links {
        position: relative;
        z-index: 10;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 18px;
            bottom: 18px;
            width: 1px;
            background-color: var(--color-secondary-grey-02);
        }
        .item-top {
            display: inline-flex;
            margin-left: 30px;
        }
    }

    .background-white {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background-color: var(--color-white);
        border-bottom: 1px solid var(--color-secondary-grey-02);
        z-index: 0;
    }

    .background-blue {
        background-color: var(--color-primary-blue-03);
        position: absolute;
        top: calc(var(--unit-height) + 1px);
        bottom: 0;
        width: 100%;
        left: 0;
        opacity: 0;
        transition: opacity 1000ms ease-in-out;
        border-bottom: 1px solid var(--color-secondary-grey-02);
        z-index: 0;
    }

    .click-blocker {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -10;
    }

    // States
    &.is-opened {
        .background-blue {
            opacity: 0.9;
        }
    }

    // Hovers
    &.not-hovered {
        ::v-deep .nav-menu-item .sub-menu {
            opacity: 1;
        }
    }
}
</style>
