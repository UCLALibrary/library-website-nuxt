<template lang="html">
    <div class="header-main-responsive">
        <div class="collapse-menu">
            <component
                :is="parsedSvgName"
                :class="isOpened ? 'go-back-svg' : 'close-svg'"
                @click="handleCloseOrReturn"
            />
        </div>
        <ul 
            class="nav-menu-primary"
        >
            <nav-menu-item-responsive
                v-for="(item, index) in parsedPrimaryMenuItems"
                :key="item.id"
                :item="item"
                :index="index"
                :go-back="goBack"
                @shouldOpen="shouldOpen"
            />
        </ul>
        <div
            v-if="!isOpened"
            class="nav-menu-secondary"
        >
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
        <div class="support-us-container">
            <button-link
                v-if="buttonLink"
                :label="label"
                :is-secondary="true"
                class="button"
                :to="buttonLink"
                icon-name="none"
            />
        </div>
        <div class="molecule" />
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
        IconCaretLeft: () =>
            import("~/node_modules/ucla-library-design-tokens/assets/svgs/icon-caret-left")
    },
    props: {
        iconCloseName: {
            type: String,
            default: "icon-close-large",
        },
        iconGoBackName: {
            type: String,
            default: "icon-caret-left",
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
        label: {
            type: String,
            default: "",
        },
        buttonLink: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            isOpened: false,
            goBack: false,
        }
    },
    computed: {
        parsedSvgName() {
            return this.isOpened ? `${this.iconGoBackName}` : `${this.iconCloseName}`
        },
        parsedPrimaryMenuItems() {
            // Return only items that have children (assume these are dropdowns)
            return this.primaryNav.filter((obj) => {
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
        shouldOpen() {
            this.isOpened = !this.isOpened
            this.goBack = false
        },
        handleCloseOrReturn() {
            this.isOpened ? this.goBack = !this.goBack : this.closeMenu()
        },
        closeMenu() {
            console.log('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.header-main-responsive {
    width: 375px;
    height: 100vh;
    background-color: var(--color-primary-blue-03);
    display: flex;
    flex-direction: column;
    position: relative;
    
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
        .go-back-svg {
            cursor: pointer;
            transform: scale(3.5);
            height: 48px;

            .svg__stroke--primary-blue-03 {
                fill: none;
                stroke-width: 0.5;
                stroke: var(--color-default-cyan-02);
            }
        }
    }

    ul {
        list-style-type: none;
    }

    .nav-menu-primary {
        width: 100%;
        padding-inline: 43px;
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

    .support-us-container {
        padding-top: 100px;
        padding-left: 44px;
        padding-bottom: 108px;
        position: absolute;
        bottom: 0;
        
        .button {
            margin: 0px;
            // background-color: var(--color-primary-blue-03);
            border: 1.5px solid var(--color-primary-blue-02);
            // color: var(--color-primary-blue-01);
        }
    }

    .molecule {
        background: url(~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-3d.svg?url);
        // background-size: 900px;
        background-position-y: -55px;
        background-repeat: no-repeat;
        width: 150px;
        height: 250px;
        position: absolute;
        bottom: 0;
        right: 0;

        -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
        filter: FlipV;
        -ms-filter: "FlipV";
    }

    
    // @media #{$medium} {
    //     .support-us-container {
    //         padding-top: 0px;
    //     }
    // }
    @media #{$small} {
        .support-us-container {
            padding-top: 0px;
        }
    }
}
</style>
