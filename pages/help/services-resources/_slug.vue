<template lang="html">
    <section class="page-service-detail">
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="page.type"
            :title="page.title"
            :text="page.text"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :to="parsedButtonTo"
            :prompt="parsedButtonText"
            :title="page.title"
            :category="page.type"
            :text="page.text"
        />
        <divider-way-finder
            color="help"
            class="divider-way-finder"
        />
        <h2 class="more-info">
            More Information
        </h2>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <divider-way-finder
            color="help"
            class="divider-way-finder"
        />
        <section-cards
            v-if="parsedAssociatedTopics.length"
            class="section-cards"
            :items="parsedAssociatedTopics"
            title="Associated Topics"
            button-text="All Services and Resources "
            to="/help/services-resources"
        />
        <!-- TODO pull data from Globals entry for Ask a Librarian CTA -->
        <block-call-to-action
            class="block-call-to-action"
            svg-name="svg-call-to-action-chat"
            title="Lorem ipsum dolor sit amet?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Lorem ipsum dolor"
            to="/"
            :is-dark="isDark"
            :is-small-size="isSmallSize"
        />
    </section>
</template>

<script>
// GQL
import SERVICE_OR_RESOURCE_DETAIL from "~/gql/queries/ServiceOrResourceDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(
            SERVICE_OR_RESOURCE_DETAIL,
            {
                slug: params.slug,
            }
        )
        return {
            page: _get(data, "entry", {}),
        }
    },
    computed: {
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.researchGuideUrl ? obj.researchGuideUrl : obj.uri,
                }
            })
        },
        parsedButtonText() {
            let output = ""
            if (this.page.button[0]) {
                output = this.page.button[0].buttonText
            }
            return output
        },
        parsedButtonTo() {
            let output = ""
            if (this.page.button[0]) {
                output = this.page.button[0].buttonUrl
            }
            return output
        },
    },
}
</script>

<style lang="scss" scoped>
.page-service-detail {
    // .banner-text {
        // max-width: $container-xl-full-width + px;
    // }
    .banner-header {
        margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
        margin: var(--unit-gutter) auto;
    }
    .banner-text + .divider-way-finder {
        margin: 0 auto var(--space-2xl);
    }
    .divider-way-finder {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
    }
    .content {
        margin: var(--unit-gutter) auto;
        ::v-deep .pull-quote,
        ::v-deep .simple-cards,
        ::v-deep .section-media-with-text,
        ::v-deep .divider-general {
            margin: var(--unit-gutter) auto;
            max-width: $container-l-main + px;
        }
    }
    .section-cards {
        margin: var(--space-3xl) auto;
    }
    .more-info {
        @include visually-hidden;
    }
    .block-call-to-action {
        margin: var(--space-3xl) auto;
    }
}
</style>
