<template lang="html">
    <main
        id="main"
        class="page page-service-detail"
    >
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
            v-if="page.heroImage && page.heroImage.length >= 1"
            :image="page.heroImage[0].image[0]"
            :to="parsedButtonTo"
            :prompt="parsedButtonText"
            :title="page.title"
            :category="page.type"
            :text="page.text"
        />

        <flexible-blocks
            v-if="page.blocks && page.blocks.length"
            :blocks="page.blocks"
        />

        <section-wrapper
            v-if="
                page.blocks &&
                    page.blocks.length &&
                    page.parsedAssociatedTopics &&
                    page.parsedAssociatedTopics.length
            "
        >
            <divider-way-finder color="help" />
        </section-wrapper>

        <section-cards-with-illustrations
            v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
            :items="parsedAssociatedTopics"
            title="Associated Topics"
            button-text="All Resources"
            to="/applicants/resources"
        />

        <block-call-to-action :is-global="true" />
    </main>
</template>

<script>
// GQL
import RESOURCE_DETAIL from "~/gql/queries/ResourceDetail";

// Helpers
import _get from "lodash/get";

export default {
    async asyncData({ $graphql, params, store }) {
    // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(RESOURCE_DETAIL, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data));
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading";
        return {
            title: title,
        }
    },
    computed: {
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                }
            })
        },
        parsedButtonText() {
            return _get(this.page, "button[0].buttonText", "");
        },
        parsedButtonTo() {
            return _get(this.page, "button[0].buttonUrl", "");
        },
    },
}
</script>

<style lang="scss" scoped>
  .page-service-detail {
    > * {
      margin-left: auto;
      margin-right: auto;
    }

    .banner-text {
      --color-theme: var(--color-help-green-03);
    }
  }
</style>
