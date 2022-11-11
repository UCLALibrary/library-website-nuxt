<template lang="html">
    <main
        id="main"
        class="page page-general-content"
    >
        <nav-breadcrumb
            to="/about/policies"
            :title="page.title"
            parent-title="Policies"
        />

        <banner-text
            v-if="page && (!page.heroImage || page.heroImage.length == 0)"
            class="banner-text"
            :category="page.format"
            :title="page.title"
            :text="page.summary"
        />

        <section-wrapper
            v-if="page && page.heroImage && page.heroImage.length == 1"
            class="section-banner"
        >
            <banner-header
                :image="page.heroImage[0].image[0]"
                :category="page.format"
                :title="page.title"
                :text="page.summary"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider-way-finder"
                color="about"
            />
        </section-wrapper>

        <!-- Rich Text is not showing up -->
        <flexible-blocks
            v-if="page"
            class="flexible-content"
            :blocks="page.blocks"
        />
    </main>
</template>

<script>
// GQL
import POLICY_DETAIL from "~/gql/queries/PolicyDetail"

// Helpers
import _get from "lodash/get"

// about/policies/shhh

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Policy detail from Craft for live preview"
        )
        const data = await $graphql.default.request(POLICY_DETAIL, {
            slug: params.slug,
        })
        // console.log("Data fetched: " + JSON.stringify(data))
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
}
</style>
