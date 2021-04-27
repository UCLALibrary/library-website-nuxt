<template lang="html">
    <footer class="footer-primary">
        <div class="container">

            <div class="footer-links">
                <div class="ucla-library-logo">
                    <svg-logo-ucla-library class="logo-svg" />
                </div>

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
                <div class="stay-updated-block">
                    <h1 class="stay-updated">
                        Stay updated
                    </h1>
                    <p class="stay-updated">
                        Subscribe to get the latest updates on what's happening
                        with UCLA Library.
                    </p>
                    <div  class="stay-updated-form">
                        <input placeholder="Email Address"  class="stay-updated-email"></input><input class="submit-button " type="submit">
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
    background-color: var(--color-primary-blue);
    background: url(~/assets/svg/molecule-half.svg?url) bottom left fixed,
            var(--gradient-01);
    background-repeat: no-repeat;
    height: var(--unit-footer-height);
    border-bottom: 40px solid var(--color-yelow);

    .container {
        max-width: 1077;
        border-bottom: 40px solid var(--color-yelow);

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        .ucla-library-logo {
            margin: -30px;
            z-index: 0;
            flex: 1 1 auto;

            fill: var(--color-white);

            display: flex;
            align-items: flex-end;

            .logo-svg {
                max-width: 300px;
                width: 100%;
                height: auto;
                path {
                    fill: var(--color-white);
                }
            }
        }

        .socials {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-content: flex-start;
            align-items: flex-start;

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
                        &:hover {
                            color: var(--color-primary-yellow);
                        }
                    }
                }
            }

            .press-room {
                display: block;
                color: var(--color-white);
                border-bottom: 2px solid var(--color-primary-yellow);
                text-transform: uppercase;
            }

        .stay-updated {
            color: var(--color-white);
            font-weight: 200;
        }
        .stay-updated-form {
            background-color: var(--color-primary-blue);
            border: none;
            border-bottom: 2px solid var(--color-green-01);

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: flex-end;
            align-items: flex-start;

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
        }
        ::placeholder{
            color: white;
        }
        .submit-button {
            background-color: unset;
            border: 0px;
            color: var(--color-white)
        }
        .arrow-svg {
            path {
                    stroke: var(--color-white);
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

            .social-links {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-end;
                align-content: flex-end;
                align-items: flex-end;


                font-size: 12px;
                line-height: 2em;

                margin-block-start: unset;
                margin-block-end: unset;
                margin-inline-start: unset;
                margin-inline-end: unset;
                margin:0;
                padding: 0;
                text-indent: 0;

            }
            .press-room {
                display: block;
                margin-right: 0px;
                margin-left: 40px;
                margin-top: 50px;
            }
        }
    }
}
</style>
