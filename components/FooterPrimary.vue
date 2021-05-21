<template lang="html">
    <footer class="footer-primary">
        <svg-molecule-half class="molecule-half-svg" />
        <div class="container">
            <div class="footer-links">
                <svg-logo-ucla-library class="logo-svg" />

                <ul class="socials">
                    <li
                        v-for="item in socialItems"
                        class="social-item"
                    >
                        <smart-link
                            :to="item.to"
                            :target="item.target"
                            v-html="item.text"
                        />
                    </li>
                </ul>

                <ul class="press-room">
                    <li v-for="item in pressItems">
                        <smart-link
                            :to="item.to"
                            :target="item.target"
                            v-html="item.text"
                        />
                    </li>
                </ul>
            </div>

            <form class="form">
                <h2 class="title">
                    Stay updated
                </h2>

                <p>
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
import SvgMoleculeHalf from "~/assets/svg/molecule-half"
import SvgArrowRight from "~/assets/svg/arrow-right"

export default {
    name: "FooterPrimary",
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
    },
}
</script>

<style lang="scss" scoped>
.footer-primary {
    background-color: var(--color-primary-blue);
    border-bottom: 4px solid var(--color-yellow);
    position: relative;
    z-index: 0;
    min-height: 375px;
    padding: 0 var(--unit-gutter);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .molecule-half-svg {
        position: absolute;
        z-index: 10;
        opacity: 45%;
        mix-blend-mode: screen;
        top: 30px;
        left: -55px;
        height: 287px;
    }

    .container {
        width: 100%;
        max-width: var(--unit-content-width);
        position: relative;
        z-index: 20;
        margin: 0 auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;

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
                flex-wrap: wrap;
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
                text-transform: uppercase;
                color: var(--color-white);
                list-style-type: none;
                font-family: var(--font-secondary);
                text-decoration: underline;
                text-decoration-thickness: 1.5px;
                // text-decoration: underline;
                // text-decoration-color: var(--color-primary-yellow);
                // text-decoration-thickness: 2px;
                // padding-bottom: 2px;
                // border-bottom: 2px solid var(--color-primary-yellow);
                // display: inline-block;
            }
        } // footer-links

        .form {
            color: var(--color-white);
            margin-left: 25px;

            flex: 1 1 auto;

            input {
                background-color: transparent;
                border: none;
            }

            .title {
                font-size: 2em;
                font-weight: 200;
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
                border-bottom: 2px solid var(--color-green-01);

                font-size: 18px;

                .label {
                    width: 100%;
                    &:focus-within {
                        .description {
                            opacity: 1;
                        }
                    }
                }
                .description {
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    color: var(--color-green-01);
                    font-size: 16px;
                    transition: opacity 400ms ease-in-out;
                }
                .input-email {
                    background-color: none;
                    color: var(--color-white);
                    font-size: 20px;
                    width: calc(100% - 20px);
                    &::placeholder {
                        color: white;
                    }
                    &:focus {
                        background-color: aquamarine;
                    }
                }
                .button-submit {
                    color: var(--color-white);
                    font-size: 18px;
                    //background-color: aquamarine;

                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
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
                color: var(--color-primary-yellow);
            }

            .press-room:hover {
                color: var(--color-primary-yellow);
                text-decoration: none;
            }

            .form-input-block:hover {
                color: var(--color-white);
                background-color: coral;
                opacity: 0.1;
            }
        }
    }

    // Breakpoints
    @media #{$lte-tablet} {
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
            padding-left: 37px;

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
    // Hover states
    @media #{$has-hover} {
        &:hover {
            .press-room:hover {
                color: var(--color-primary-yellow);
            }
        }
    }
}
</style>
