<template lang="html">
    <div class="flexible-blocks">
        <component
            :is="block.componentName"
            v-bind="block"
            v-for="block in parsedBlocks"
            :key="block.id"
            class="flexible-block"
        />
    </div>
</template>

<script>
// Helpers
import _kebabCase from "lodash/kebabCase"

export default {
    components: {
        // TODO register all other block types
        FlexibleCta: () => import("~/components/Flexible/CtaBlockContentWidth"),
        FlexibleDivider: () => import("~/components/Flexible/Divider"),
        FlexibleHelpTopicCards: () =>
            import("~/components/Flexible/HelpTopicCards.vue"),
        FlexibleBannerFeatured: () =>
            import("~/components/Flexible/BannerFeatured.vue"),
        FlexibleHighlight: () => import("~/components/Flexible/Highlight.vue"),
        FlexiblePullQuote: () => import("~/components/Flexible/PullQuote.vue"),
    },
    props: {
        blocks: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedBlocks() {
            // Shape blocks to work with components
            let output = this.blocks.map((obj) => {
                return {
                    ...obj,
                    componentName: convertName(obj.typeHandle),
                }
            })

            // Remove any un-registered blocks
            return output.filter((obj) => {
                return this.registeredComponents.includes(obj.componentName)
            })
        },
        registeredComponents() {
            // Get all local component names as kebabCase, used to check if component is registered above
            let components = Object.keys(this.$options.components || {})
            return components.map((str) => {
                return _kebabCase(str)
            })
        },
    },
}

function convertName(typeHandle) {
    let output = `flexible-${typeHandle}`

    switch (typeHandle) {
        case "ctaBlockContentWidth":
            output = "cta"
            break

        case "divider":
            output = "divider"
            break

        case "helpTopicCards":
            output = "help-topic-cards"
            break

        case "bannerFeatured":
            output = "banner-featured"
            break

        case "highlight":
            output = "highlight"
            break

        case "pullQuote":
            output = "pull-quote"
            break
    }

    return _kebabCase(output)
}
</script>

<style lang="scss" scoped>
:where(.flexible-blocks) {
    // TODO Style the basics here
}
</style>
