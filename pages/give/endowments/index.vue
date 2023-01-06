<template lang="html">
    <main
        id="main"
        class="page page-endowment-listing"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <!-- TODO: Add search/filter function
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            @search-ready="getSearchData"
        /> -->

        <section-wrapper theme="divider">
            <divider-way-finder
                class="search-margin"
                color="about"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.featuredEndowments.length"
            class="section-no-top-margin"
            :section-title="page.featuredEndowments[0].titleGeneral"
            :section-summary="page.featuredEndowments[0].sectionSummary"
        >
            <section-teaser-card
                v-if="parsedFeaturedEndowments.length"
                class="section"
                :items="parsedFeaturedEndowments"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
        </section-wrapper>

        <section-wrapper section-title="All Collection Endowments">
            <section-generic-list
                :items="parsedEndowmentsList"
            />
            <!-- pagination -->
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                svg-name="svg-call-to-action-money"
                title="Give to the UCLA Library"
                text="Your contributions help us build our collections for the benefit or our students, faculty, staff and the general public."
                name="Give Now"
                to="/give"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import ENDOWMENTS_LIST from "~/gql/queries/EndowmentList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(ENDOWMENTS_LIST, {})
        return {
            page: _get(data, "entry", {}),
            endowments: _get(data, "entries", {}),
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
    computed: {
        parsedFeaturedEndowments() {
            return this.page.featuredEndowments[0].featuredEndowments.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    alternativeFullName: _get(obj, "alternativeName[0].fullName", null),
                    language: _get(obj, "alternativeName[0].languageAltName", null),
                }
            })
        },
        parsedEndowmentsList() {
            return this.endowments.map((obj) => {
                return {
                    ...obj,
                    jobPostingURL: `/${obj.to}`,
                    alternativeFullName: _get(obj, "alternativeName[0].fullName", null),
                    language: _get(obj, "alternativeName[0].languageAltName", null),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-endowment-listing {
    ::v-deep .block-highlight.is-vertical:not(.has-triangle) .image {
        height: 572px;
    }
    ::v-deep .block-highlight.is-vertical:not(.has-triangle) .image .media {
        object-fit: contain;
    }
    .search-margin {
        margin: var(--space-2xl) auto;
    }

    ::v-deep .section-teaser-card .card {
        width: calc((100% - 32px)/ 2);
        @media #{$small} {
            width: 100%;
        }
    }

    @media #{$medium} {
        ::v-deep .block-highlight.is-vertical:not(.has-triangle) .image {
            height: 390px;
        }
    }
}
</style>

