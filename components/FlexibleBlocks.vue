<template lang="html">
    <div class="flexible-blocks">
        <component
            :is="block.componentName"
            v-for="block in parsedBlocks"
            :key="block.id"
            :block="block"
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
        FlexibleCtaBlock2Up: () => import("~/components/Flexible/CtaBlock2Up"),
        FlexibleDivider: () => import("~/components/Flexible/Divider"),
        FlexibleHelpTopicCards: () =>
            import("~/components/Flexible/HelpTopicCards.vue"),
        FlexibleBannerFeatured: () =>
            import("~/components/Flexible/BannerFeatured.vue"),
        FlexibleHighlight: () => import("~/components/Flexible/Highlight.vue"),
        FlexibleSimpleCards: () =>
            import("~/components/Flexible/SimpleCards.vue"),
        FlexiblePullQuote: () => import("~/components/Flexible/PullQuote.vue"),
        FlexibleCardWithImage: () =>
            import("~/components/Flexible/CardWithImage.vue"),
        FlexibleRichText: () => import("~/components/Flexible/RichText.vue"),
        FlexibleMediaWithText: () =>
            import("~/components/Flexible/MediaWithText.vue"),
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
                // console.log(obj)
                return {
                    ...obj,
                    componentName: convertName(obj.typeHandle),
                }
            })
            // console.log(output)
            // Remove any un-registered blocks
            output = output.filter((obj) => {
                console.log(
                    this.registeredComponents.includes(obj.componentName)
                )
                return this.registeredComponents.includes(obj.componentName)
            })

            return output
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

    return _kebabCase(output)
}
</script>

<style lang="scss" scoped>
.flexible-blocks {
    .flexible-block {
        padding: var(--unit-gutter) 0;

        &:first-child {
            padding-top: 0;
        }

        &.divider-general,
        &.pull-quote {
            padding: 0;
            margin: var(--unit-gutter) auto;
            max-width: $container-l-main + px;
        }
    }

    .flexible-block:nth-child(even) {
        background-color: var(--color-secondary-grey-01);
        --color-theme: var(--color-secondary-grey-01);

        &.simple-cards,
        &.divider-general,
        &.pull-quote {
            background-color: var(--color-white);
        }

        &.divider-general {
            padding: 0;
        }
    }
} 
</style>
