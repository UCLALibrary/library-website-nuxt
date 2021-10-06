<template lang="html">
    <header class="header-sticky">
        <div class="bread-crumb">
            <!--TODO add the right chevron between breadcrumb -->
            <nuxt-link
                v-for="item in crumbs"
                :key="item.to"
                :to="item.to"
                v-html="item.text"
            />
        </div>
        <div v-if="hasCallToAction">
            <nuxt-link :to="to">
                <button-link
                    :label="callToAction.prompt"
                    :icon-name="callToAction.iconName"
                    class="button"
                />
            </nuxt-link>
        </div>
        <div class="social-shares">
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
// import _get from "lodash/get"
import startCase from "lodash/startcase"
import getShareLinks from "~/utils/getShareLinks"

// TODO Share Links design

export default {
    props: {
        hasShareLinks: {
            type: Boolean,
            default: false,
        },
        hasCallToAction: {
            type: Boolean,
            default: false,
        },
        callToAction: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        crumbs() {
            const pathArray = this.$route.path.split("/")
            pathArray.shift()
            const breadcrumbs = pathArray.reduce(
                (breadcrumbArray, path, idx) => {
                    if (path) {
                        breadcrumbArray.push({
                            to: breadcrumbArray[idx - 1]
                                ? "/" +
                                  breadcrumbArray[idx - 1].path +
                                  "/" +
                                  path
                                : "/" + path,
                            text: startCase(path),
                        })
                    }

                    return breadcrumbArray
                },
                []
            )
            return breadcrumbs
        },
        /* parsedShareUrl() {
            let domWindow = {}
            if (process.client) {
                domWindow = window
            }
            return this.shareUrl || _get(domWindow, "location.href", "")
        }, */
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
    background-color: red;
    height: 96px;

    transform: translateY(-100%);
    transition: transform 400ms ease-in-out;

    // States
    .has-scrolled-past-header & {
        transform: translateY(0);
    }
}
</style>

<!-- TODO Write story for this component -->
