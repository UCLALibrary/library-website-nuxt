<template lang="html">
    <main
        id="main"
        class="page page-general-content"
    >
        <nav-breadcrumb
            v-if="page"
            :title="page.title"
            class="breadcrumb"
        />
        <banner-text
            v-if="page && (!page.heroImage || page.heroImage.length == 0)"
            class="banner-text"
            :category="page.format"
            :title="page.title"
            :text="page.summary"
        />

        <section-wrapper class="section-banner">
            <banner-header
                v-if="page && page.heroImage && page.heroImage.length == 1"
                :image="page.heroImage[0].image[0]"
                :category="page.format"
                :title="page.title"
                :text="page.summary"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider-way-finder"
                color="visit"
            />
        </section-wrapper>

        <flexible-blocks
            v-if="page"
            class="flexible-content"
            :blocks="page.blocks"
        />
    </main>
</template>

<script>
// GQL
import GENERAL_CONTENT_DETAIL from "~/gql/queries/GeneralContentDetail"
// Helpers
import _get from "lodash/get"
export default {
    async asyncData({ $graphql, params }) {
        // Do not remove testing live preview

        const data = await $graphql.default.request(GENERAL_CONTENT_DETAIL, {
            slug: params.pathMatch.substring(
                params.pathMatch.lastIndexOf("/") + 1
            ),
        })
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
}
</script>

<style lang="scss" scoped>
.page-general-content {
    .banner-text,
    .banner-header {
        --color-theme: var(--color-visit-fushia-03);
    }
    ::v-deep .divider-way-finder {
        --color-border: var(--color-visit-fushia-03);
    }
    .section-banner {
        margin-top: 0;
    }
}
</style>
