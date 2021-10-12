<template lang="html">
    <header :class="classes">
        <div class="bread-crumb">
            <!--TODO add the right chevron between breadcrumb -->
            <nuxt-link
                :key="crumbs[0].path"
                :to="crumbs[0].path"
                v-html="crumbs[0].title"
            />
            <svg-chevron-left class="chevron-left" />
            <span>{{ crumbs[1].title }}</span>
        </div>
        <div v-if="hasCallToAction">
            <smart-link
                :to="callToActionURL"
                :target="parseTarget"
            >
                <button-link
                    :label="callToActionLabel"
                    :icon-name="callToActionIconName"
                    class="button"
                />
            </smart-link>
        </div>
        <div
            v-if="hasShareLinks"
            class="social-shares"
        >
            <div class="main-shares">
                <span class="share-text"> Share </span>
                <a
                    v-for="item in mainShareLinks"
                    :key="item.name"
                    :href="item.url"
                    target="_blank"
                >
                    <component :is="item.icon" />
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
                    <component :is="item.icon" />
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
            return ["header-sticky", { "is-opened": this.isOpened }]
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
    .bread-crumb {
        width: 816px;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
    }
    .social-shares {
        width: 240px;
        .svg-close {
            display: none;
        }
        .main-shares {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            align-content: center;
            // padding: 20px 47px;
        }
        .other-shares {
            background-color: var(--color-white);
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            padding: 10px 22px;
            position: absolute;
            max-width: 240px;
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
                &:not(last-child) {
                    padding-right: 30px;
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

    // Breakpoints
    @media #{$lte-phone} {
    }
}
</style>

<!-- TODO Write story for this component -->
