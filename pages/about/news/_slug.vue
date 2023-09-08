<template lang="html">
    <main
        id="main"
        class="page page-news-detail"
    >
        <nav-breadcrumb
            to="/about/news"
            :title="page.title"
            parent-title="All Library News"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="parsedCategory"
            :title="page.title"
            :text="page.text"
            :byline="parsedByline"
            :locations="parsedLocations"
            :date-created="page.postDate"
        />

        <section-wrapper
            v-if="page && page.heroImage && page.heroImage.length == 1"
            class="section-banner"
        >
            <banner-header
                :image="page.heroImage[0].image[0]"
                :to="page.to"
                :category="parsedCategory"
                :title="page.title"
                :text="page.text"
                :byline="parsedByline"
                :locations="parsedLocations"
                :date-created="page.postDate"
                :align-right="true"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <section-wrapper
            v-if="parsedAssociatedStaffMember.length > 0"
            theme="divider"
        >
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper
            v-if="parsedAssociatedStaffMember.length > 0"
            class="associated-staff-member"
            section-title="Associated Staff Member"
        >
            <section-staff-list :items="parsedAssociatedStaffMember" />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import format from "date-fns/format"
import removeTags from "~/utils/removeTags"

// GQL
import ARTICLE_DETAIL from "~/gql/queries/ArticleDetail"

export default {
    async asyncData({ $graphql, params, store, $elasticsearchplugin, error }) {
        // Do not remove testing live preview
        /*console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )*/
        const data = await $graphql.default.request(ARTICLE_DETAIL, {
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
    computed: {
        parsedByline() {
            let byline = (this.page.contributors || []).map((contributor) => {
                if (
                    (contributor.staffMember &&
                        contributor.staffMember.length > 0) ||
                    contributor.title
                )
                    return `${contributor.byline || ""} ${
                        contributor.title || contributor.staffMember[0].title
                    }`
            })
            return byline.map((contributor) => {
                return contributor
            })
        },
        parsedDate() {
            return format(new Date(this.page.postDate), "MMMM d, Y")
        },

        parsedAssociatedStaffMember() {
            return this.page.associatedStaffMember.map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                }
            })
        },
        parsedCategory() {
            return this.page.category[0] ? this.page.category[0].title : ""
        },
        parsedLocations() {
            return this.page.locations.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news-detail {
    .highlighted-news {
        @include visually-hidden;
    }
}
</style>
