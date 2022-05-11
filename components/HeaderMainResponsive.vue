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
                @itemOpened="itemOpened"
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
        <component
            :is="`Molecule3d`"
            width="150"
            height="247"
            viewBox="50 57 50 250"
            class="molecule"
            :class="moleculeColor"
        />
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
            import("~/node_modules/ucla-library-design-tokens/assets/svgs/icon-caret-left"),
        Molecule3d: () =>
            import("~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-3d"),
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
            moleculeColor: "cyan"
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
            if(this.isOpened) {
                this.goBack = !this.goBack
                this.moleculeColor = "cyan"
            } else {
                this.closeMenu()
            }
        },
        closeMenu() {
            console.log('close')
        },
        itemOpened(itemIndex) {
            if(itemIndex === 0) {
                this.moleculeColor = "green"
            } else if(itemIndex === 1) {
                this.moleculeColor = "pink"
            } else if(itemIndex === 2)  {
                this.moleculeColor = "purple"
            }

            if(this.isOpened === false) {
                this.moleculeColor = "cyan"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header-main-responsive {
    width: 375px;
    min-height: 100vh;
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
        margin-top: auto;
        
        .button {
            margin: 0px;
            border: 1.5px solid var(--color-primary-blue-02);
        }
    }

    .cyan {
        .svg__stroke--default-cyan-03 {
            stroke: var(--color-default-cyan-02);
        }
    }

    .green {
        .svg__stroke--default-cyan-03 {
            stroke: var(--color-help-green-02);
        }
    }

    .pink {
        .svg__stroke--default-cyan-03 {
            stroke: var(--color-visit-fushia-02);
        }
    }

    .purple {
        .svg__stroke--default-cyan-03 {
            stroke: var(--color-about-purple-03);
        }
    }

    .molecule {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;

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
