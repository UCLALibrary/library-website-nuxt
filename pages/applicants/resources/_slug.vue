<template lang="html">
    <main
        id="main"
        class="page page-resource-detail"
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

        <section-wrapper class="section-banner">
            <banner-header
                v-if="page.heroImage && page.heroImage.length >= 1"
                :image="page.heroImage[0].image[0]"
                :to="parsedButtonTo"
                :prompt="parsedButtonText"
                :title="page.title"
                :category="page.type"
                :text="page.text"
            />
        </section-wrapper>

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
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-cards-with-illustrations
            v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
            :items="parsedAssociatedTopics"
            title="Associated Topics"
            button-text="All Resources"
            to="/applicants/resources"
        />

        <section-wrapper>
            <block-call-to-action :is-meap-global="true" />
        </section-wrapper>
    </main>
</template>

<script>
// GQL
import RESOURCE_DETAIL from "~/gql/queries/ResourceDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
    // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(RESOURCE_DETAIL, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
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
            return _get(this.page, "button[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "button[0].buttonUrl", "")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-resource-detail {
    .banner-text,
    .banner-header {
      --color-theme: var(--color-about-purple-03);
    }

    .section-banner {
        margin-top: 0;
    }
}
</style>
