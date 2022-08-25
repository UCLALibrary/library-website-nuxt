<template lang="html">
    <main class="page page-general-content">
        <nav-breadcrumb
            :title="page.title"
            class="breadcrumb"
        />
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="page.format"
            :title="page.title"
            :text="page.summary"
        />

        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :category="page.format"
            :title="page.title"
            :text="page.summary"
        />

        <flexible-blocks
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
            slug: params.slug,
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

    .flexible-content {
        margin: 0 auto;
        max-width: $container-l-main + px;
    }

    .breadcrumb {
        margin-top: var(--space-l);
        margin-bottom: var(--space-l);
    }

    @media #{$medium} {
        .flexible-content {
            padding: 0 var(--unit-gutter);
        }
    }
}
</style>
