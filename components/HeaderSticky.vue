<template lang="html">
    <header class="header-sticky">
        <div class="bread-crumb">
            <!--TODO add the right chevron between breadcrumb -->
            <nuxt-link
                v-for="item in crumbs"
                :key="item.path"
                :to="item.path"
                v-html="item.title"
            />
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
            <span class="share-text"> Share </span>
            <a
                v-for="item in mainShareLinks"
                :key="item.url"
                :href="item.url"
                target="_blank"
                v-html="item.name"
            />
            <span> svg for 3 blue dots</span>
        </div>
    </header>
</template>

<script>
import _get from "lodash/get"

import getShareLinks from "~/utils/getShareLinks"

// TODO Share Links design

export default {
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
    computed: {
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
                { name: "Twitter", url: this.allShareLinks.twitter },
                { name: "LinkedIn", url: this.allShareLinks.linkedin },
                { name: "Facebook", url: this.allShareLinks.facebook },
            ]
        },
    },
}
</script>

<style lang="scss" scoped>
.header-sticky {
    background-color: red;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}
</style>

<!-- TODO Write story for this component -->
