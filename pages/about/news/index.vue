<template>
    <main
        id="main"
        class="page page-news"
    >
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            placeholder="Search News"
            @search-ready="getSearchData"
        />
        <h2 class="visually-hidden">
            Highlighted News
        </h2>

        <section-wrapper
            v-show="
                summaryData &&
                    parsedFeaturedNews &&
                    parsedFeaturedNews.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            class="section-no-top-margin"
        >
            <banner-featured
                :image="parsedBannerHeader.image"
                :title="parsedBannerHeader.title"
                :byline="parsedByline"
                breadcrumb="Featured"
                :description="parsedBannerHeader.text"
                :date-created="parsedBannerHeader.dateCreated"
                :to="parsedBannerHeader.to"
                :align-right="true"
                prompt="Read More"
                class="banner section-featured-banner"
            />

            <divider-general v-if="parsedSectionHighlight.length" />

            <section-teaser-highlight
                v-if="parsedSectionHighlight.length"
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="search-margin"
            />
        </section-wrapper>

        <section-wrapper
            v-show="page && page.length && hits.length == 0 && !noResultsFound"
        >
            <section-staff-article-list
                :items="parsedNewsList"
                section-title="All News"
            />
        </section-wrapper>

        <section-wrapper
            v-show="hits && hits.length > 0"
            class="section-no-top-margin"
        >
            <h2
                v-if="$route.query.q"
                class="about-results"
            >
                Displaying {{ hits.length }} results for
                <strong><em>“{{ $route.query.q }}</em></strong>”
            </h2>
            <h2
                v-else
                class="about-results"
            >
                Displaying {{ hits.length }} results
            </h2>

            <section-staff-article-list :items="parseHitsResults" />
        </section-wrapper>

        <!-- NO RESULTS -->
        <section-wrapper
            v-show="noResultsFound"
            class="section-no-top-margin"
        >
            <div class="error-text">
                <rich-text>
                    <h2>Search for “{{ $route.query.q }}” not found.</h2>
                    <p>
                        We can’t find the term you are looking for on this page.
                        <br>
                        <!-- Try searching the whole site from
                        <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these regularly visited links:
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://www.library.ucla.edu/research-teaching-support/research-help"
                            >Research Help</a>
                        </li>
                        <li>
                            <a href="/help/services-resources/ask-us">Ask Us</a>
                        </li>
                        <li>
                            <a
                                href="https://www.library.ucla.edu/use/access-privileges/disability-resources"
                            >Accessibility Resources</a>
                        </li>
                    </ul> -->
                    </p>
                </rich-text>
            </div>
        </section-wrapper>
        <section-wrapper theme="divider">
            <divider-way-finder
                color="search-margin"
                class="divider"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action :is-meap-global="true" />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// Search
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"
import queryFilterHasValues from "~/utils/queryFilterHasValues"

// GQL
import ARTICLE_NEWS_LIST from "~/gql/queries/ArticleNewsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(ARTICLE_NEWS_LIST, {})
        return {
            summaryData: _get(data, "entry", {}),
            page: _get(data, "entries", {}),
        }
    },
    data() {
        return {
            summaryData: {},
            page: [],
            hits: [],
            title: "",
            noResultsFound: false,
            searchFilters: [],
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            },
        }
    },
    async fetch() {
        this.page = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            (this.$route.query.filters &&
                queryFilterHasValues(
                    this.$route.query.filters,
                    config.meapArticle.filters
                ))
        ) {
            if (!this.summaryData.title) {
                const data = await this.$graphql.default.request(
                    ARTICLE_NEWS_LIST
                )
                this.summaryData["title"] = _get(data, "entry.title", "")
                this.summaryData["summary"] = _get(data, "entry.summary", "")
            }
            let query_text = this.$route.query.q || "*"
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.meapArticle.searchFields,
                "sectionHandle:meapArticle",
                JSON.parse(this.$route.query.filters) || {},
                config.meapArticle.sortField,
                config.meapArticle.orderBy,
                config.meapArticle.resultFields,
                config.meapArticle.filters
            )
            this.page = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.page = []
                this.noResultsFound = false
            } else {
                this.hits = []
                this.page = []
                this.noResultsFound = true
            }
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            }
        } else {
            this.hits = []
            this.noResultsFound = false
            // if route queries are empty fetch data from craft
            const data = await this.$graphql.default.request(ARTICLE_NEWS_LIST)
            this.summaryData = _get(data, "entry", {})
            this.page = _get(data, "entries", [])
        }
    },
    head() {
        let title = this.summaryData ? this.summaryData.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedFeaturedNews() {
            if (this.summaryData && this.summaryData.meapNewsListing) {
                return this.summaryData.meapNewsListing.map((obj) => {
                    return {
                        ...obj,
                        to: `/about/news/${obj.to}`,
                        image: _get(obj, "heroImage[0].image[0]", null),
                        category: _get(obj, "category[0].title", ""),
                        dateCreated: _get(obj, "dateCreated", ""),
                        byline: _get(obj, "articleStaff", []),
                        bylineOne: _get(obj, "articleStaff[0].title", ""),
                        bylineTwo: _get(obj, "dateCreated", ""),
                    }
                })
            } else return []
        },
        parsedBannerHeader() {
            if (this.summaryData && this.summaryData.meapNewsListing) {
                return this.parsedFeaturedNews[0]
            } else return {}
        },
        parsedSectionHighlight() {
            if (this.summaryData && this.summaryData.meapNewsListing) {
                return this.parsedFeaturedNews.slice(1).map((obj) => {
                    return {
                        ...obj,
                        bylineTwo:
                            obj.bylineTwo != null
                                ? format(
                                    new Date(obj.bylineTwo),
                                    "MMMM d, yyyy"
                                )
                                : "",
                    }
                })
            } else return []
        },
        parsedNewsList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    category: _get(obj, "category[0].title", ""),
                }
            })
        },
        parsedByline() {
            let byline = (this.summaryData.articleStaff || []).map((entry) => {
                return `${entry.byline} ${
                    entry.title || entry.staffMember[0].title
                }`
            })
            return byline.map((entry) => {
                return entry
            })
        },
        parseHitsResults() {
            return this.parseHits(this.hits)
        },
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {},
        "$route.query.filters"(newValue) {},
    },
    async mounted() {
        this.setFilters()
    },
    methods: {
        queryFilterHasValues() {
            if (!this.$route.query.filters) return false
            let routeQueryFilters = JSON.parse(this.$route.query.filters)
            let configFilters = config.meapArticle.filters
            for (const filter of configFilters) {
                console.log(filter)
                if (
                    Array.isArray(routeQueryFilters[filter.esFieldName]) &&
                    routeQueryFilters[filter.esFieldName].length > 0
                ) {
                    return true
                } else if (
                    routeQueryFilters[filter.esFieldName] &&
                    !Array.isArray(routeQueryFilters[filter.esFieldName]) &&
                    routeQueryFilters[filter.esFieldName] != ""
                ) {
                    return true
                }
            }
            return false
        },
        async setFilters() {
            const searchAggsResponse = await this.$dataApi.getAggregations(
                config.meapArticle.filters,
                "meapArticle"
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.meapArticle.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                return {
                    ...obj["_source"],
                    to: `/about/news/${obj["_source"].to}`,
                    image: _get(obj["_source"], "heroImage[0].image[0]", {}),
                    category: _get(obj["_source"], "category[0].title", ""),
                    description: _get(obj["_source"], "text", ""),
                }
            })
        },
        getSearchData(data) {
            //console.log("On the page getsearchdata called " + data)
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/about/news",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
        },
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "article-index",
}
</script>

<style lang="scss" scoped>
.page-news {
    // .banner {
    //     margin: 0 auto;
    //     margin-bottom: var(--space-2xl);
    // }
    .generic-search {
        margin-bottom: var(--space-3xl);
    }
    ::v-deep .block-staff-article-item {
        --divider-color: var(--color-secondary-grey-02);
    }
    .banner-header.color-about {
        --color-theme: var(--color-visit-fushia-03);
    }
    ::v-deep .block-highlight.color-about {
        --floating-highlight-color-theme: var(--color-visit-fushia-03);
    }
    @media #{$medium} {
        .banner-header {
            margin-top: 0;
        }
    }
}
</style>
