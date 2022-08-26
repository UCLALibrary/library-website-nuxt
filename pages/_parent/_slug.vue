<template lang="html">
    <main
        id="main"
        class="page page-general-content"
    >
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

        <section-wrapper
            v-if="page.blocks"
            theme="divider"
        >
            <divider-way-finder
                class="divider-way-finder"
            />
        </section-wrapper>

        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <section-wrapper
            v-if="page.blocks.length"
            theme="divider"
        >
            <divider-way-finder
                class="divider-way-finder"
            />
        </section-wrapper>
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
}
</style>
