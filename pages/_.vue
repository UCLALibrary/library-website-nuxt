<template lang="html">
    <main id="main" class="page page-general-content">
        <nav-breadcrumb
            v-if="page"
            :title="page.title"
            class="breadcrumb"
            :to="parseParentPageURL"
            :parent-title="parseParentTitle"
        />

        <banner-text
            v-if="page && (!page.heroImage || page.heroImage.length == 0)"
            class="banner-text"
            :category="page.format"
            :title="page.title"
            :text="page.summary"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />

        <section-wrapper class="section-banner">
            <banner-header
                v-if="page && page.heroImage && page.heroImage.length == 1"
                :image="page.heroImage[0].image[0]"
                :category="page.format"
                :title="page.title"
                :text="page.summary"
                :to="parsedButtonTo"
                :prompt="parsedButtonText"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder class="divider-way-finder" color="default" />
        </section-wrapper>

        <page-anchor
            v-if="h2Array.length >=3"
            :section-titles= h2Array
        />

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

// GQL
import GENERAL_CONTENT_DETAIL from "~/gql/queries/GeneralContentDetail"

export default {
    async asyncData({ $graphql, params, $elasticsearchplugin, error }) {
        const path = params.pathMatch.replace(/^\/|\/$/g, '') // trim initial and/or final slashes
        const data = await $graphql.default.request(GENERAL_CONTENT_DETAIL, {
            path: path,
        })
        /*console.log(
            "General Content page path is: " + path
        )*/
        if (data && data.entry && data.entry.slug) {
            $elasticsearchplugin.index(data.entry, path.replaceAll("/", "--"))
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
        return {
            page: data["entry"],
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    data() {
        return {
            h2Array: [] // anchor tags
        }
    },
    computed: {
        parseParentPageURL() {
            if (this.page.parent && this.page.parent.uri)
                return `/${this.page.parent.uri}`

            return "/"
        },
        parseParentTitle() {
            if (this.page.parent && this.page.parent.title)
                return this.page.parent.title

            return "Home"
        },
        parsedButtonText() {
            return _get(this.page, "button[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "button[0].buttonUrl", "")
        },
    },
    mounted() {
        // Call the plugin method to get the .section-header2 and .section-header3 elements
        this.h2Array = this.$getHeaders.getHeadersMethod();
    }
}
</script>

<style lang="scss" scoped>
.page-general-content {
    ::v-deep .divider-way-finder {
        --color-border: var(--color-visit-fushia-03);
    }
    .section-banner {
        margin-top: 0;
    }
}
</style>
