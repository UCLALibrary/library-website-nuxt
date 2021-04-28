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
                            class="link"
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
                            class="link"
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
                    <div class="submit-button">
                        <input type="submit">
                        <svg-arrow-right class="arrow-svg" />
                    </div>
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
    height: var(--unit-footer-height);
    background-color: var(--color-primary-blue);
    border-bottom: 4px solid var(--color-yellow);
    position: relative;

    .logo-svg {
        width: 100%;
        height: auto;
        path {
            fill: var(--color-white);
        }
    }

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
        margin-top:  100px;
        margin-bottom:  100px;
        border-bottom: 40px solid var(--color-yelow);

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: stretch;
        align-items: center;




        .footer-links {
            padding-right: 50px;
            
            .socials {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-content: flex-start;
                align-items: flex-start;
                margin-bottom: 30px;

                .social-item {
                    z-index: 10;
                    border-right: 1px solid var(--color-white);
                    line-height: 1em;
                    border-right: 1px solid var(--color-white);
                    padding-right: 10px;
                    padding-left: 10px;
                    text-decoration: none;
                    list-style-type: none;
                    &:first-child {
                        padding-left: 0;
                    }
                    &:last-child {
                        border-right: none;
                    }
                    .link {
                        color: var(--color-white);
                        text-decoration: none;
                        &:hover {
                            color: var(--color-primary-yellow);
                        }
                    }
                }
            } // socials

            .press-room {
                display: block;
                text-transform: uppercase;
                .link {
                    color: var(--color-white);
                    text-decoration: none;
                    border-bottom: 2px solid var(--color-primary-yellow);
                    &:hover {
                        color: var(--color-primary-yellow);
                    }
                }
            }
        } // footer-links

        .form {
            color: var(--color-white);

            input {
                background-color: transparent;;
                border: none;
                }

            .stay-updated {

                font-size: 2em;
                font-weight: 200;
            }

            .stay-updated-form {
                //background-color: var(--color-primary-blue);

                border-bottom: 2px solid var(--color-green-01);

                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-content: flex-end;
                align-items: flex-start;

                font-size: 20px;

                &:hover {
                    color: var(--color-white);
                    background-color: coral;
                    opacity: 0.1;
                }
            }

            .stay-updated-email {
                display: flex;
                order: 0;
                flex: 1 1 auto;
                align-self: auto;
                background-color: none;
                font-size: 20px;
            }

            ::placeholder{
                color: white;
            }

            .submit-button {
                background-color: unset;
                border: 0px;
                color: var(--color-white);
                font-size: 20px;
            }

            .arrow-svg {
                path {
                        stroke: var(--color-white);
                    }
            }
        }
    }

    @media #{$lte-tablet} {
        height: 647px;
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
        }
    }
}
</style>
