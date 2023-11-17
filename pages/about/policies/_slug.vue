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
            <divider-way-finder
                class="divider-way-finder"
                color="about"
            />
        </section-wrapper>

        <page-anchor
            v-if="h2Array.length >= 3"
            :section-titles="h2Array"
        />

        <!-- Rich Text is not showing up -->
        <flexible-blocks
            v-if="page"
            class="flexible-content"
            :blocks="page.blocks"
        />
    </main>
</template>
<router>
    {
      redirect: to => {
        // the function receives the target route as the argument
        // a relative location doesn't start with `/`
        // or { path: 'profile'}
        const { hash, params, query } = to
        if (params.slug === 'report-problematic-content-and-description-in-uclas-library-collections-and-archives') {
          return "https://ucla.libwizard.com/id/38f45c482a5fcb0b715a7e9e3ddee8b2"
        } else  if (
            params.slug ===
            "toward-ethical-and-inclusive-descriptive-practices-in-ucla-library-special-collections"
        ) {
            return "/about/polices/ethical-description"
        }
      },
    }
  </router>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import POLICY_DETAIL from "~/gql/queries/PolicyDetail"

export default {
    async asyncData({ $graphql, params, $elasticsearchplugin, error }) {
        // Do not remove testing live preview
        /*console.log(
            "fetching graphql data for Policy detail from Craft for live preview"
        )*/

        const data = await $graphql.default.request(POLICY_DETAIL, {
            slug: params.slug,
        })
        if (!data.entry) {
            error({ statusCode: 404, message: "Page not found" })
        }
        if (data) await $elasticsearchplugin.index(data.entry, params.slug)
        // //console.log("Data fetched: " + JSON.stringify(data))

        return {
            page: _get(data, "entry", {}),
        }
    },
    data() {
        return {
            h2Array: [], // anchor tags
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: metaDescription,
                },
            ],
        }
    },
    mounted() {
        // Call the plugin method to get the .section-header2 and .section-header3 elements
        this.h2Array = this.$getHeaders.getHeadersMethod()
        //window.onNuxtReady(() => { window.$nuxt.$router.push('/your-route') })
    },
}
</script>

<style lang="scss" scoped>
.page-general-content {
}
</style>
