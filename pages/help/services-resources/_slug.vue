<template lang="html">
    <section class="page-service-detail">
        <nav-breadcrumb :title="page.title" />
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
        <section-cards-with-illustrations
            v-if="parsedAssociatedTopics.length"
            class="section-cards"
            :items="parsedAssociatedTopics"
            title="Associated Topics"
            button-text="All Services and Resources "
            to="/help/services-resources"
        />
        <block-call-to-action
            class="block-call-to-action"
            svg-name="svg-call-to-action-chat"
            :title="askALibrarian.askALibrarianTitle"
            :text="askALibrarian.askALibrarianText"
            :name="askALibrarian.buttonUrl[0].buttonText"
            :to="askALibrarian.buttonUrl[0].buttonUrl"
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
    data() {
        return {
            askALibrarian: this.$store.state.globals.askALibrarian,
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
            return _get(this.page, "button[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "button[0].buttonUrl", "")
        },
        // Does not always show up?
        // askALibrarian() {
        //     return this.$store.state.globals.askALibrarian
        // },
    },
}
</script>

<style lang="scss" scoped>
.page-service-detail {
    .banner-text {
        --color-theme: var(--color-help-green-03);
    }
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
        margin: 0 auto;
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
