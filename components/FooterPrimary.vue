<template lang="html">
    <footer class="footer-primary">
        <svg-molecule-half class="molecule-half-svg" />
        <div :class="classes">
            <div class="footer-links">
                <svg-logo-ucla-library class="logo-svg" />

                <ul class="socials">
                    <li
                        v-for="item in socialItems"
                        :key="item.text"
                        class="social-item"
                    >
                        <smart-link
                            :to="item.to"
                            :target="item.target"
                            v-html="item.text"
                        />
                    </li>
                </ul>

                <ul
                    v-if="form"
                    class="press-room"
                >
                    <li
                        v-for="item in pressItems"
                        :key="item.text"
                    >
                        <smart-link
                            :to="item.to"
                            :target="item.target"
                            v-html="item.text"
                        />
                    </li>
                </ul>
            </div>

            <form
                v-if="form"
                class="form"
            >
                <h2 class="title">
                    Stay updated
                </h2>

                <p class="statement">
                    Subscribe to get the latest updates on what's happening with
                    UCLA Library.
                </p>

                <div class="input-block">
                    <label class="label">
                        <span class="description">Email Address *</span>
                        <input
                            placeholder="Email Address"
                            class="input-email"
                        >
                    </label>
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
import SvgLogoUclaLibrary from "~/assets/svg/logo-ucla-library"
import SvgMoleculeHalf from "~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-half"
import SvgArrowRight from "~/assets/svg/arrow-right"

export default {
    // name: "FooterPrimary",
    components: {
        SvgLogoUclaLibrary,
        SvgMoleculeHalf,
        SvgArrowRight,
    },
    props: {
        socialItems: {
            // Mock with api.links
            type: Array,
            default: () => [],
        },
        pressItems: {
            // Mock with api.links
            type: Array,
            default: () => [],
        },
        form: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        classes() {
            return this.form ? ["container"] : ["container no-form"]
        },
    },
}
</script>

<style lang="scss" scoped>
.footer-primary {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    background-color: var(--color-primary-blue-03);
    border-bottom: 4px solid var(--color-primary-yellow-01);
    position: relative;
    z-index: 0;
    min-height: 375px;
    padding: 0 var(--unit-gutter);

    .molecule-half-svg {
        position: absolute;
        z-index: 10;
        opacity: 0.45;
        mix-blend-mode: screen;
        top: 30px;
        left: -55px;
        height: 287px;
        transform: rotate(180deg);
    }

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;

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
            padding-right: 50px;
            margin-right: 25px;

            .logo-svg {
                height: auto;
                width: 100%;
                path {
                    fill: var(--color-white);
                }
                margin-bottom: 35px;
            }

            .socials {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                align-content: flex-start;
                align-items: flex-start;

                color: var(--color-white);
                text-decoration: none;
                list-style-type: none;
                z-index: 10px;
                margin-bottom: 45px;

                .social-item {
                    line-height: 1em;
                    padding-right: 10px;
                    padding-left: 10px;
                    &:first-child {
                        padding-left: 0;
                    }
                    border-right: 1px solid var(--color-white);
                    &:last-child {
                        border-right: 0px;
                    }
                }
            } // socials

            .press-room {
                display: inline-block;

                text-transform: uppercase;
                color: var(--color-white);
                list-style-type: none;
                font-family: var(--font-secondary);
                border-bottom: 2px solid var(--color-primary-yellow-01);
                line-height: 1.25;
            }
        } // footer-links

        // Form - Right / Bottom
        .form {
            flex: 1 1 auto;

            color: var(--color-white);
            margin-left: 25px;

            input {
                background-color: transparent;
                border: none;
            }

            .title {
                font-size: 2em;
                font-weight: 200;
            }

            .statement {
                margin-bottom: 35px;
            }

            .input-block {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-content: center;
                align-items: center;

                position: relative;
                padding-top: 15px;
                padding-bottom: 2px;
                border-bottom: 2px solid var(--color-help-green-03);
                font-size: 18px;
                font-family: var(--font-primary);

                .label {
                    width: 100%;
                    font-family: var(--font-secondary);

                    &:focus-within {
                        .description {
                            opacity: 1;
                        }
                    }
                }

                .description {
                    position: absolute;
                    top: 0;
                    color: var(--color-help-green-03);
                    font-size: 16px;
                    opacity: 0;
                    transition: opacity 400ms ease-in-out;
                }

                .input-email {
                    font-size: 18px;
                    color: var(--color-white);
                    background-color: none;
                    width: calc(100% - 20px);

                    &::placeholder {
                        color: white;
                    }

                    &:focus-visible {
                        color: var(--color-white);
                        outline: none;
                        background-color: rgba(255, 255, 255, 0.1);
                        padding: 10px;
                        border-radius: 4px;
                    }
                }

                .button-submit {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-content: center;
                    align-items: center;

                    color: var(--color-white);
                    font-size: 18px;
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

            .press-room:hover {
                color: var(--color-primary-yellow-01);
                text-decoration: none;
            }
        }
    }

    // Breakpoints
    @media #{$medium} {
        display: block;
        padding-top: 25px;
        padding-bottom: 54px;
        height: 646;

        .container {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-content: flex-end;
            align-items: flex-end;

            padding-top: 100px;

            &.no-form {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-content: flex-end;
                align-items: flex-end;
            }

            .footer-links {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: center;
                align-content: center;
                align-items: flex-end;

                .logo-svg {
                    margin-right: -35px;
                    margin-bottom: 25px;
                }

                .socials {
                    .social-item {
                        &:last-child {
                            margin-right: -45px;
                        }
                    }
                }
                .press-room {
                    margin-right: -35px;
                    margin-bottom: 133px;
                }
            }

            .form {
                margin-right: 37px;
                margin-bottom: 88px;
            }
        }
    }
}
</style>
