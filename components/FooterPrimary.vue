<template lang="html">
    <footer class="footer-primary">
        <div class="container">

            <div class="footer-links">
                <svg-molecule-half class="molecule-half-svg" />
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

                <ul>
                    <li
                        v-for="item in pressItems"
                        class="press-room"
                    >
                        <smart-link
                            :class="link"
                            :to="item.to"
                            :target="item.target"
                            v-html="item.text"
                        />
                    </li>
                </ul>
            </div>

            <div class="form">
                <h2 class="stay-updated">Stay updated</h2>

                <p>
                    Subscribe to get the latest updates on what's happening
                    with UCLA Library.
                </p>

                <div class="stay-updated-form">
                    <input
                        placeholder="Email Address"
                        class="stay-updated-email"
                    >
                    </input>
                    <input
                        class="submit-button"
                        type="button"
                        value="Submit"
                    >
                        <svg-arrow-right  />
                </div>
            </div>

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
            default: () => []
        },
        pressItems: {
            // Mock with api.links
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.footer-primary {
    background-color: var(--color-primary-blue);
    border-bottom: 4px solid var(--color-yellow);
    position: relative;

    .molecule-half-svg {
        z-index: 10;
        opacity: 45%;
        mix-blend-mode: screen;
        position: absolute;
        top: 30px;
        left: -55px;
        height: 287px;
    }

    .container {
        max-width: 1080; // change to content-width
        margin-top: --unit-gutter;
        margin-bottom: --unit-gutter;
        border-bottom: 40px solid var(--color-yelow);

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: stretch;
        align-items: center;


        .footer-links {
            padding-right: 50px;
            margin-bottom: var(--unit-vertical-gap);
            overflow: hidden;
            margin-right: 25px;

            .logo-svg {
                z-index: 20;
                height: auto;
                path {
                    fill: var(--color-white);
                }
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
                margin-bottom: 30px;

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
                text-decoration: none;
                border-bottom: 2px solid var(--color-primary-yellow);

                .link {
                    border-bottom: 2px solid var(--color-primary-yellow);
                    &:hover {
                        color: var(--color-primary-yellow);
                    }
                }
            }
        } // footer-links

        .form {
            color: var(--color-white);
            margin-left: 25px;

            input {
                background-color: transparent;;
                border: none;
                }

            .stay-updated {

                font-size: 2em;
                font-weight: 200;
            }

            .stay-updated-form {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-content: center;
                align-items: center;

                font-size: 18px;
                ::placeholder{color: white};

                .stay-updated-email {
                    display: flex;
                    order: 0;
                    flex: 1 1 auto;
                    align-self: auto;

                    background-color: none;
                    color: var(--color-white);
                    font-size: 20px;
                }
                .submit-button {
                    background-color: unset;
                    border: 0px;
                    color: var(--color-white);
                    font-size: 18px;
                    background: url(~/assets/svg/arrow-right.svg?url);

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

            .stay-updated-form:hover {
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

        .container {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-content: flex-end;
            align-items: flex-end;

            padding-left: 37px;

            .footer-links {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: center;
                align-content: center;
                align-items: flex-end;

                .logo-svg {
                    margin-right: -70px;
                }

                .socials {
                    .social-item {
                        &:last-child {
                            margin-right: -45px;
                        }
                    }
                }
                .press-room {
                    margin-right: -37px;
                    list-style-type: none;
                }
            }

            .form {
                margin-right: 37px;
            }
        }
    }
}
</style>
