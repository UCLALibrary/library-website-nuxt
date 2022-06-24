<template lang="html">
    <footer class="footer-primary">
        <svg-molecule-half class="molecule-half-svg" />
        <div :class="classes">
            <div class="footer-links">
                <nuxt-link
                    to="/"
                    class="logo-ucla"
                >
                    <svg-logo-ucla-library class="logo-svg" />
                    <span class="visually-hidden">UCLA Library Home</span>
                </nuxt-link>
                <ul class="socials">
                    <li
                        v-for="item in parsedSocialItems"
                        :key="item.id"
                        class="social-item"
                    >
                        <a
                            :href="item.to"
                            :target="item.target"
                            a
                        >
                            {{ item.name }}
                        </a>
                    </li>
                </ul>

                <ul
                    class="press-links"
                >
                    <li
                        v-for="item in parsedPressItems"
                        :key="item.id"
                        class="press-item"
                    >
                        <smart-link
                            :to="item.to"
                            :target="item.target"
                        >
                            {{ item.name }}
                        </smart-link>
                    </li>
                </ul>
            </div>

            <form
                v-if="form"
                class="form"
            >
                <div class="form-header">
                    <h2 class="title">Stay updated</h2>

                    <p class="statement">
                        Subscribe to get the latest updates on what's happening with
                        UCLA Library.
                    </p>
                </div>

                <div class="input-block">
                    <div class="field">
                        <input
                            name="email"
                            id="email"
                            placeholder="asdf@ucla.edu"
                            class="input-email"
                        >
                        <label for="email" class="label">Email Address</label>
                    </div>
                    
                    <button
                        class="button-submit"
                        type="submit"
                    >
                        Submit
                        <svg-arrow-right class="arrow-svg" />
                    </button>
                </div>
            </form>
        </div>
    </footer>
</template>

<script>
// Helpers
import formatLinkTarget from "~/utils/formatLinkTarget"

import SvgLogoUclaLibrary from "~/node_modules/ucla-library-design-tokens/assets/svgs/logo-library"
import SvgMoleculeHalf from "~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-half"
import SvgArrowRight from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-arrow-right"

export default {
    components: {
        SvgLogoUclaLibrary,
        SvgMoleculeHalf,
        SvgArrowRight,
    },
    props: {
        /*socialItems: {
            type: Array,
            default: () => [],
        },
        pressItems: {
            type: Array,
            default: () => [],
        },*/
        form: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        classes() {
            return this.form ? ["container"] : ["container no-form"]
        },
        parsedSocialItems() {
            if (Object.keys(this.$store.state.footerPrimary).length !== 0) {
                return this.$store.state.footerPrimary.nodes[0].children.map(
                    (obj) => {
                        return {
                            ...obj,
                            target: formatLinkTarget(obj.target),
                        }
                    }
                )
            } else {
                console.log(
                    "Vuex state data not present: is it client side:" +
                        process.client
                )
            }
            return []
        },
        parsedPressItems() {
            if (Object.keys(this.$store.state.footerPrimary).length !== 0) {
                return this.$store.state.footerPrimary.nodes[1].children.map(
                    (obj) => {
                        return {
                            ...obj,
                            target: formatLinkTarget(obj.target),
                        }
                    }
                )
            } else {
                console.log(
                    "Vuex state data not present: is it client side:" +
                        process.client
                )
            }
            return []
        },
    },
}
</script>

<style lang="scss" scoped>
.footer-primary {
    --unit-content-width: #{$container-l-cta}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    background-color: var(--color-primary-blue-03);
    border-bottom: 4px solid var(--color-primary-yellow-01);
    position: relative;
    z-index: 0;
    padding: var(--unit-gutter);

    .molecule-half-svg {
        position: absolute;
        z-index: 10;
        opacity: 0.5;
        top: 30px;
        left: -55px;
        height: 287px;
        transform: rotate(180deg);

        .svg__fill-bottom,
        .svg__fill-top {
            fill: var(--color-primary-blue-02);
            opacity: 0.25;
        }

        .svg__fill-accent {
            fill: var(--color-primary-blue-02);
            opacity: 0.55;
        }
    }

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        gap: 128px;

        width: 100%;
        max-width: var(--unit-content-width);
        position: relative;
        z-index: 20;
        margin: 0 auto;

        &.no-form {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: center;
        }

        // Footer Links - Left / Top
        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 40px;
            
            .logo-svg {
                height: auto;
                width: 304px;
                max-width: 100%;

                path {
                    fill: var(--color-white);
                }
            }

            .socials {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-content: flex-start;
                align-items: flex-start;

                color: var(--color-white);
                text-decoration: none;
                list-style-type: none;
                z-index: 10;

                .social-item {
                    line-height: 1em;
                    padding-right: 8px;
                    padding-left: 8px;

                    &:first-child {
                        padding-left: 0;
                    }
                    border-right: 1px solid var(--color-white);
                    
                    &:last-child {
                        border-right: 0;
                    }
                }
            } // socials

            .press-links {
                display: inline-flex;
                flex-direction: column;
                align-self: flex-start;
                gap: 16px;
            }
            .press-item {
                align-self: flex-start;
                text-transform: uppercase;
                color: var(--color-white);
                list-style-type: none;
                font-weight: 600;
                font-size: 20px;
                letter-spacing: .1em;
                border-bottom: 2px solid var(--color-primary-yellow-01);
                line-height: 1.2;

                .is-link {
                    position: relative;

                    @include clickable-area;
                }
            }
        } // footer-links

        // Form - Right / Bottom
        .form {
            color: var(--color-white);
            padding-top: 16px;

            input {
                background-color: transparent;
            }

            input:placeholder-shown + label {
            cursor: text;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transform-origin: left bottom;
            transform: translate(0, 2.125rem) scale(1.25);
            }

            ::-webkit-input-placeholder {
            opacity: 0;
            transition: inherit;
            }

            input:focus::-webkit-input-placeholder {
            opacity: 1;
            color: white;
            }

            input:not(:placeholder-shown) + label,
            input:focus + label {
                color: var(--color-help-green-02);
                font-size: 16px;
                font-weight: 500;
            transform: translate(0, -8px) scale(1);
            cursor: pointer;
            }

            .field {
            display: flex;
            flex-flow: column-reverse;
            width: 100%;
            }

            label, input {
            transition: all 0.2s;
            touch-action: manipulation;
            }

            input {
                @include step-0;
                line-height: 1.2;
                color: white;
            border: 0;
            border-radius: 4px;
            padding: 8px 12px;
            -webkit-appearance: none;
            cursor: text;
            }

            input:focus {
            outline: 0;
            background-color: rgba(#fff, .1);
            color: var(--color-white);
            }

            .form-header {
                display: flex;
                flex-direction: column;
                margin-bottom: 32px;
            }

            .title {
                @include step-3;
            }

            .statement {
                @include step-0;
                margin: 0;
            }

            .input-block {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-content: center;
                align-items: flex-end;
                padding-bottom: 8px;

                position: relative;
                border-bottom: 2px solid var(--color-help-green-03);
                font-family: var(--font-primary);

                .description {
                    position: absolute;
                    top: 0;
                    color: var(--color-help-green-03);
                    font-size: 16px;
                    opacity: 0;
                    transition: opacity 400ms ease-in-out;
                }

                // .input-email {
                //     font-size: 18px;
                //     color: var(--color-white);
                //     background-color: none;
                //     width: calc(100% - 20px);

                //     &::placeholder {
                //         color: white;
                //     }

                //     &:focus-visible {
                //         color: var(--color-white);
                //         outline: none;
                //         background-color: rgba(255, 255, 255, 0.1);
                //         padding: 10px;
                //         border-radius: 4px;
                //     }
                // }

                .button-submit {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    height: 40px;
                    padding-left: 16px;

                    color: var(--color-white);
                    @include button;
                }

                .arrow-svg {
                    path {
                        stroke: var(--color-white);
                        color: var(--color-white);
                    }
                }
            }
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            .social-item:hover {
                color: var(--color-primary-yellow-01);
            }

            .press-item:hover {
                color: var(--color-primary-yellow-01);
                text-decoration: none;
            }
        }
    }

    // Breakpoints
    @media #{$medium} {
        padding: var(--unit-gutter);

        .container {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-content: flex-end;
            align-items: flex-end;
            gap: 32px;

            &.no-form {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-content: flex-end;
                align-items: flex-end;
            }

            .form {
                width: 100%;

                .form-header {
                    margin-bottom: 24px;
                }
            }

            .footer-links {
                flex-wrap: nowrap;
                align-items: flex-end;

                .social-item:last-child {
                    padding-right: 0;
                }

                .press-item {
                    align-self: flex-end;
                }

                .press-links {
                    align-self: flex-end;
                }
            }
        }
    }

    @media #{$small} {
        padding-top: 48px;
        padding-bottom: 48px;

        .container {
            gap: 48px;

            .form {
                .statement {
                    line-height: 1.4;
                    font-size: 16px;
                }
                
                .form-header {
                    margin-bottom: 16px;
                }

                .field {
                    width: calc(100% - 108px);
                }
            }
        }
    }

    @media (max-width: 375px) {
        .container {
            align-items: center;
        }
    }
}
</style>
