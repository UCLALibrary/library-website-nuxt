<template lang="html">
    <main id="main" class="page page-general-content">
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
            :text="page.text"
        />

        <section-wrapper
            v-if="page && page.heroImage && page.heroImage.length == 1"
            class="section-banner"
        >
            <banner-header
                :image="page.heroImage[0].image[0]"
                :category="page.format"
                :title="page.title"
                :text="page.text"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder class="divider-way-finder" color="about" />
        </section-wrapper>

        <page-anchor
            v-if="h2Array.length >=3"
            :section-titles= h2Array
        />

        <!-- Rich Text is not showing up -->
        <flexible-blocks
            v-if="page"
            class="flexible-content"
            :blocks="page.blocks"
        />
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import POLICY_DETAIL from "~/gql/queries/PolicyDetail"

export default {
    async asyncData({ $graphql, params, store, $elasticsearchplugin, error }) {
        // Do not remove testing live preview
        /*console.log(
            "fetching graphql data for Policy detail from Craft for live preview"
        )*/
        const data = await $graphql.default.request(POLICY_DETAIL, {
            slug: params.slug,
        })
        if (!data.entry) {
            error({ statusCode: 404, message: 'Page not found' })
        }
        if (data) await $elasticsearchplugin.index(data.entry, params.slug)
        // //console.log("Data fetched: " + JSON.stringify(data))

        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: metaDescription
                }
            ],
        }
    },
    data() {
        return {
            h2Array: [] // anchor tags
        }
    },
    mounted() {
        // Call the plugin method to get the .section-header2 and .section-header3 elements
        this.h2Array = this.$getHeaders.getHeadersMethod();
    }
}
</script>

<style lang="scss" scoped>
.page-general-content {
}
</style>
