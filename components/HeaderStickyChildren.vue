<template lang="html">
    <header class="header-child-breadcrumbs">
        <!-- TODO Style this header with breadcrumb links and share links -->
        <nuxt-link
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            v-html="item.text"
        />

        <br>

        Share links go here:
        <a
            v-for="item in mainShareLinks"
            :key="item.url"
            :href="item.url"
            target="_blank"
            v-html="item.name"
        />
    </header>
</template>

<!-- TODO Write story for this component -->

<script>
import _get from "lodash/get"
import getShareLinks from "~/utils/getShareLinks"

export default {
    props: {
        hasShareLinks: {
            type: Boolean,
            default: false,
        },
        callToAction: {
            type: Object,
            default: () => {},
        },
        items: {
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
    },
    computed: {
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
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    border-bottom: 1px solid red;
}
</style>
