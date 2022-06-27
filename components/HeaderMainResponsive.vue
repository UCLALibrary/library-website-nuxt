<template lang="html">
    <nav
        role="navigation"
        aria-label="Menu"
        class="header-main-responsive"
        :class="isOpened ? 'fullHeight' : 'collapsedHeight'"
    >
        <div
            v-if="!isOpened"
            class="collapsed-menu"
        >
            <nuxt-link
                    to="/"
                    aria-label="UCLA Library home page"
                >
                <component
                    :is="`LogoLibrary`"
                    width="155"
                    height="55"
                    class="logo-ucla"
                    role="button"
                />
            </nuxt-link>
            <component
                :is="`IconMenu`"
                class="hamburguer"
                role="button"
                aria-label="Hamburguer button"
                :is-opened="isOpened"
                @click="toggleMenu"
            />
        </div>
        <div v-else class="expanded-menu-container">
            <div class="expanded-menu">
                <nuxt-link
                    to="/"
                    aria-label="UCLA Library home page"
                >
                    <component
                        :is="`LogoLibrary`"
                        width="155"
                        height="55"
                        class="expanded-logo"
                        @click="toggleMenu"
                    />
                </nuxt-link>
                <component
                    :is="parsedSvgName"
                    :class="isItemOpened ? 'go-back-svg' : 'close-svg'"
                    :aria-label="
                        isItemOpened ? 'Go back button' : 'Close button'
                    "
                    @click="handleCloseOrReturn"
                />
            </div>
            <ul class="nav-menu-primary">
                <nav-menu-item-responsive
                    v-for="(item, index) in parsedPrimaryMenuItems"
                    :key="item.id"
                    :item="item"
                    :index="index"
                    :go-back="goBack"
                    @shouldOpen="shouldOpen"
                    @itemOpenedColor="itemOpenedColor"
                    @closeMainMenu="toggleMenu"
                    @closeMenuItem="closeItem"
                />
            </ul>
            <div
                v-if="isOpened"
                class="nav-menu-secondary"
            >
                <ul class="list">
                    <li
                        v-for="item in parsedSecondaryMenuItems"
                        :key="item.id"
                        class="list-item"
                        @click="toggleMenu"
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
                    v-if="supportLinks.length"
                    :label="supportLinks[0].name"
                    :is-secondary="true"
                    class="button"
                    :to="supportLinks[0].to"
                    icon-name="none"
                    @click="toggleMenu"
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
    </nav>
</template>

<script>
// Helpers
import formatLinkTarget from "~/utils/formatLinkTarget"

export default {
    components: {
        IconCloseLarge: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-close-large"
            ),
        IconCaretLeft: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-caret-circle-left"
            ),
        Molecule3d: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-3d"
            ),
        IconMenu: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-menu"
            ),
        LogoLibrary: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/logo-library"
            ),
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
            default: () => [],
        },
        secondaryNav: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            isOpened: false,
            isItemOpened: false,
            goBack: false,
            moleculeColor: "cyan",
        }
    },
    computed: {
        parsedSvgName() {
            return this.isItemOpened
                ? `${this.iconGoBackName}`
                : `${this.iconCloseName}`
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

        supportLinks() {
            // Generally this is just the last "Support Us" link, but we are going to allow it to be more than 1
            return this.primaryNav.filter((obj) => {
                // Return items that don't have sub-menu children
                return !obj.children || !obj.children.length
            })
        },
    },
    methods: {
        shouldOpen() {
            this.isItemOpened = !this.isItemOpened
            this.goBack = false
        },
        handleCloseOrReturn() {
            if (this.isItemOpened) {
                this.goBack = !this.goBack
                this.moleculeColor = "cyan"
            } else {
                this.isOpened = false
            }
        },
        itemOpenedColor(itemIndex) {
            if (itemIndex === 0) {
                this.moleculeColor = "green"
            } else if (itemIndex === 1) {
                this.moleculeColor = "pink"
            } else if (itemIndex === 2) {
                this.moleculeColor = "purple"
            }

            if (this.isItemOpened === false) {
                this.moleculeColor = "cyan"
            }
        },
        toggleMenu() {
            this.isOpened = !this.isOpened
        },
        closeItem() {
            this.isItemOpened = false
        },
    },
}
</script>

<style lang="scss" scoped>
.fullHeight {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 400;
}

.collapsedHeight {
    height: 100%;
    box-shadow: 0px 2px 8px rgba(113, 113, 113, 0.08);
}

.header-main-responsive {
    width: 100vw;
    height: 100%;
    background-color: var(--color-primary-blue-03);
    display: flex;
    flex-direction: column;

    .collapsed-menu {
        width: 100vw;
        height: 100%;
        padding: 32px var(--unit-gutter) 0;
        background-color: var(--color-white);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .hamburguer {
            cursor: pointer;
        }
    }

    .expanded-menu-container {
        overflow-y: auto;
    }

    .expanded-menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        padding: 0 var(--unit-gutter);
        margin: 32px 0;
        background-color: var(--color-primary-blue-03);

        .svg__logo-library {
            .svg__fill--primary-blue-03,
            .svg__fill--black {
                fill: var(--color-white);
            }
        }

        .close-svg {
            cursor: pointer;

            .svg__fill--primary-blue-01 {
                fill: transparent;
            }
        }
        .go-back-svg {
            cursor: pointer;
            height: 48px;

            .svg__fill--primary-blue-01 {
                fill: transparent;
            }

            .svg__fill--primary-blue-03 {
                fill: var(--color-default-cyan-02);
            }
        }
    }

    ul {
        list-style-type: none;
    }

    .nav-menu-primary {
        margin: 64px var(--unit-gutter);
    }

    .nav-menu-secondary {
        margin: 64px var(--unit-gutter);

        .list {
            color: white;

            .list-item {
                margin-bottom: 24px;
                font-family: var(--font-primary);
                font-size: 20px;
                font-weight: 400;
                line-height: 1;

                .link {
                    @include clickable-area;
                }
            }
        }
    }

    .support-us-container {
        margin: 64px var(--unit-gutter);

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

    @media #{$small} {
        .support-us-container {
            padding-top: 0px;
        }
    }
}
</style>
