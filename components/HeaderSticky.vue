<template lang="html">
    <header :class="classes">
        <div class="bread-crumbs">
            <!--TODO add the right chevron between breadcrumb -->
            <nuxt-link
                :key="crumbs[0].path"
                :to="crumbs[0].path"
                class="crumb-link"
                v-html="crumbs[0].title"
            />
            <svg-chevron-left class="chevron-left" />
            <span>{{ crumbs[1].title }}</span>
        </div>
        <div
            v-if="hasCallToAction"
            class="call-to-action"
        >
            <smart-link
                :to="callToActionURL"
                :target="parseTarget"
            >
                <button-link
                    :label="callToActionLabel"
                    :icon-name="callToActionIconName"
                    :is-secondary="true"
                    class="button"
                />
            </smart-link>
        </div>
        <div
            v-if="hasShareLinks"
            class="social-shares"
        >
            <div class="main-shares">
                <span class="share-label"> Share </span>
                <a
                    v-for="item in mainShareLinks"
                    :key="item.name"
                    :href="item.url"
                    target="_blank"
                    class="main-share-link"
                >
                    <component
                        :is="item.icon"
                        class="svg"
                    />
                </a>
                <span @click="toggleShare()">
                    <svg-icon-ellipsis class="svg-ellipsis" />
                    <svg-glyph-close class="svg-close" />
                </span>
            </div>
            <div class="other-shares">
                <a
                    v-for="item in otherShareLinks"
                    :key="item.name"
                    :href="item.url"
                    target="_blank"
                    class="other-link"
                >
                    <component
                        :is="item.icon"
                        class="svg"
                    />
                    <span class="share-name">{{ item.name }}</span>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
//lodash
import _get from "lodash/get"
//helpers
import getShareLinks from "~/utils/getShareLinks"

// TODO Share Links design
//svgs
import SvgIconSocialTwitter from "~/assets/svg/icon-social-twitter"
import SvgIconSocialLinkedin from "~/assets/svg/icon-social-linkedin"
import SvgIconSocialFacebook from "~/assets/svg/icon-social-facebook"
import SvgIconSocialWhatsapp from "~/assets/svg/icon-social-whatsapp"
import SvgIconSharePrinter from "~/assets/svg/icon-share-printer"
import SvgIconShareEmail from "~/assets/svg/icon-share-email"
import SvgIconEllipsis from "~/assets/svg/icon-ellipsis"
import SvgGlyphClose from "~/assets/svg/glyph-close"
import SvgChevronLeft from "~/assets/svg/chevron-left"

export default {
    components: {
        SvgIconSocialTwitter,
        SvgIconSocialLinkedin,
        SvgIconSocialFacebook,
        SvgIconSocialWhatsapp,
        SvgIconSharePrinter,
        SvgIconShareEmail,
        SvgIconEllipsis,
        SvgGlyphClose,
        SvgChevronLeft,
    },
    props: {
        crumbs: {
            type: Array,
            default: () => [],
        },
        shareUrl: {
            type: String,
            default: "",
        },
        shareText: {
            type: String,
            default: "",
        },
        shareTitle: {
            type: String,
            default: "",
        },
        hasShareLinks: {
            type: Boolean,
            default: false,
        },
        hasCallToAction: {
            type: Boolean,
            default: false,
        },
        callToActionLabel: {
            type: String,
            default: "",
        },
        callToActionIconName: {
            type: String,
            default: "",
        },
        callToActionURL: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            isOpened: false,
        }
    },
    computed: {
        classes() {
            return [
                "header-sticky",
                { "is-opened": this.isOpened },
                { "has-call-to-action": this.hasCallToAction },
                { "has-share-links": this.hasShareLinks },
            ]
        },
        parseTarget() {
            return this.callToActionIconName.includes("arrow-diagonal")
                ? "_blank"
                : ""
        },
        parsedShareUrl() {
            let domWindow = {}
            if (process.client) {
                domWindow = window
            }
            return this.shareUrl || _get(domWindow, "location.href", "")
        },
        allShareLinks() {
            return getShareLinks({
                title: this.shareTitle,
                text: this.shareText,
                url: this.parsedShareUrl,
            })
        },
        mainShareLinks() {
            return [
                {
                    name: "Twitter",
                    url: this.allShareLinks.twitter,
                    icon: "svg-icon-social-twitter",
                },
                {
                    name: "LinkedIn",
                    url: this.allShareLinks.linkedin,
                    icon: "svg-icon-social-linkedin",
                },
                {
                    name: "Facebook",
                    url: this.allShareLinks.facebook,
                    icon: "svg-icon-social-facebook",
                },
            ]
        },
        otherShareLinks() {
            return [
                {
                    name: "Email",
                    url: this.allShareLinks.email,
                    icon: "svg-icon-share-email",
                },
                {
                    name: "WhatsApp",
                    url: this.allShareLinks.whatsapp,
                    icon: "svg-icon-social-whatsapp",
                },
                {
                    name: "Print",
                    url: this.allShareLinks.printer,
                    icon: "svg-icon-share-printer",
                },
            ]
        },
    },
    methods: {
        toggleShare() {
            this.isOpened = !this.isOpened
        },
    },
}
</script>

<style lang="scss" scoped>
.header-sticky {
    background-color: var(--color-white);
    width: 100%;
    padding: 15px 200px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    .bread-crumbs {
        width: 816px;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;

        font-family: Karbon;
        font-style: normal;
        font-size: 20px;
        line-height: 150%;

        .crumb-link {
            color: var(--color-primary-blue-03);
            font-weight: 500;
        }
        .chevron-left {
            margin: 0 8px;
            margin-bottom: -6px;
        }
    }
    .call-to-action {
        margin-left: 24px;
    }
    .social-shares {
        width: 240px;
        .svg-close {
            display: none;
            margin-left: 42px;
            .outline {
                stroke: var(--color-black);
            }
            cursor: pointer;
        }
        .main-shares {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
            // padding: 20px 47px;
            .share-label {
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 135%;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                margin-right: 23px;
            }
            .main-share-link {
                margin: 0 2px;
            }
            .svg-ellipsis {
                margin-left: 32px;
                cursor: pointer;
            }
        }
        .other-shares {
            background-color: var(--color-white);
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            padding: 10px 22px;
            position: absolute;
            max-width: 230px;
            transition-property: opacity, max-height;
            transition-duration: 400ms;
            transition-timing-function: ease-in-out;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            align-content: center;

            .other-link {
                &:first-child {
                    margin-right: 30px;
                }
                margin-top: 16px;
                display: flex;
                flex-direction: row;
                align-items: center;
                align-content: center;
            }
        }
    }

    // States
    &.is-opened {
        .svg-close {
            display: inline;
        }
        .svg-ellipsis {
            display: none;
        }
        .other-shares {
            max-height: 120px;
            opacity: 1;
        }
    }

    // Hovers
    @media #{$has-hover} {
        .main-share-link:hover,
        .other-link:hover {
            .svg {
                .color {
                    // stroke: #eaf2fb;
                    fill: #eaf2fb;
                }
                .outline {
                    fill: #0b6ab7;
                    // stroke: #0b6ab7;
                }
                .outline-email-innercircle {
                    stroke: #0b6ab7;
                }
                .outline-printer {
                    stroke: #0b6ab7;
                }
            }
        }
    }

    // Breakpoints
    @media #{$lte-tablet} {
        padding: unset;
    }
    @media #{$lte-phone} {
        padding: unset;
        &.has-call-to-action,
        &.has-share-links {
            .bread-crumbs {
                display: none;
            }
            .call-to-action {
                margin-right: 10px;
            }
        }
    }
}
</style>

<!-- TODO Write story for this component -->
