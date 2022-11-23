<template lang="html">
    <main
        id="main"
        class="page page-general-content"
    >
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
            <divider-way-finder
                class="divider-way-finder"
                color="default"
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
    async asyncData({ $graphql, params, $elasticsearchplugin, redirect }) {
        const data = await $graphql.default.request(GENERAL_CONTENT_DETAIL, {
            slug: params.pathMatch.substring(
                params.pathMatch.lastIndexOf("/") + 1
            ),
        })
        if (data && data.entry && data.entry.slug && data.entry.slug != null) {
            console.log(
                "General Content page slug is: " +
                    params.pathMatch.substring(
                        params.pathMatch.lastIndexOf("/") + 1
                    )
            )
            if (data.entry.parent && data.entry.parent != null) {
                console.log("parent exists in General content page")
                await $elasticsearchplugin.index(
                    data.entry,
                    data.entry.parent && data.entry.parent.slug
                        ? data.entry.parent.slug + "--" + data.entry.slug
                        : data.entry.slug
                )
            } else await $elasticsearchplugin.index(data.entry, data.entry.slug)
        } else {
            return redirect(404, "/")
        }
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
