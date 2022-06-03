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
        FlexibleCallToAction: () =>
            import("~/components/Flexible/CtaBlockContentWidth"),
        FlexibleCtaBlock2Up: () => import("~/components/Flexible/CtaBlock2Up"),
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
        FlexibleMediaGallery: () =>
            import("~/components/Flexible/MediaGallery.vue"),
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
        margin-bottom: var(--space-3xl);

        &:first-child {
            padding-top: 0;
        }

        &.divider-general {
            padding: 0;
            margin: var(--unit-gutter) auto;
            max-width: $container-l-main + px;
        }
    }

    .flexible-block:nth-child(even) {
        background-color: var(--color-secondary-grey-01);
        --color-theme: var(--color-secondary-grey-01);

        &.flexible-simple-cards,
        &.divider-general,
        &.pull-quote {
            background-color: var(--color-white);
        }

        &.divider-general {
            padding: 0;
        }
        ::v-deep .flexible-media-with-text {
            .clipped-play,
            .clipped-play-mobile {
                background-color: var(--color-secondary-grey-01);
            }
        }
    }

    .flexible-block:nth-child(even).flexible-simple-cards {
        padding-top: 0;

        ::v-deep > .simple-cards::before {
            content: "";
            display: block;
            height: 1px;
            width: 100%;
            max-width: $container-l-main + px;
            border-top: 2px dotted var(--color-secondary-grey-02);
            margin-bottom: var(--space-2xl);
        }
    }

    // .flexible-block:nth-child(even).pull-quote {
    //     padding-top: 0;

    //     ::v-deep > &::before {
    //         content: "";
    //         display: block;
    //         height: 1px;
    //         width: 100%;
    //         max-width: $container-l-main + px;
    //         border-top: 2px dotted var(--color-secondary-grey-02);
    //         margin-bottom: var(--space-2xl);
    //     }
    // }

    .flexible-block:last-child.flexible-simple-cards {
        padding-bottom: 0;
    }

    @media #{$medium} {
        .flexible-block {
            padding: var(--space-2xl) var(--unit-gutter);
        }
    }
}
</style>
