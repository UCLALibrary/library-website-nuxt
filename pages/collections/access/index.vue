<template lang="html">
    <main
        id="main"
        class="page page-collections-access"
    >
        <nav-breadcrumb
            to="/collections"
            :title="page.title"
            parent-title="Collections"
        />

        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <search-generic
            search-type="default"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            placeholder="ACCESS COLLECTIONS"
            @search-ready="getSearchData"
        />

        <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" />
        </section-wrapper>

        <section-wrapper
            v-show="
                page.accessCollections && hits.length == 0 && !noResultsFound
            "
        >
            <section-cards-with-illustrations
                class="section"
                :items="parsedAccessCollections"
                :is-horizontal="true"
            />
        </section-wrapper>
        <section-wrapper v-show="hits && hits.length > 0">
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
            <section-cards-with-illustrations
                class="section"
                :items="parseHitsResults"
                :is-horizontal="true"
            />
        </section-wrapper>

        <section-wrapper
            v-show="noResultsFound"
            class="section-no-top-margin"
        >
            <div class="error-text">
                <rich-text>
                    <h2>Search for “{{ $route.query.q }}” not found.</h2>
                    <p>
                        We can’t find the term you are looking for on this page,
                        but we're here to help. <br>
                        Try searching the whole site from
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
                    </ul>
                </rich-text>
            </div>
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                class="section"
                :items="parsedAssociatedTopics"
                section-title="Associated Topics"
                to="/help/services-resources"
                button-text="All services & Resources"
                :is-horizontal="false"
            />
        </section-wrapper>
    </main>
</template>

<router>
  {
    alias: '/listing-collections/access',
  }
</router>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import ACCESS_COLLECTIONS from "~/gql/queries/CollectionsAccessList.gql"

// UTILITIES
import config from "~/utils/searchConfig"

export default {
    async asyncData({ $graphql, $elasticsearchplugin }) {
        console.log("In asyncData hook collectionsAccess list")

        const pageAsyncData = await $graphql.default.request(ACCESS_COLLECTIONS)

        if (
            pageAsyncData.entry.accessCollections &&
            pageAsyncData.entry.accessCollections.length > 0
        ) {
            for (let collection of pageAsyncData.entry.accessCollections) {
                console.log("Collection indexing:" + collection.slug)
                console.log("Collection:" + collection)
                collection.searchType = "accessCollections"
                collection.to = collection.uri
                    ? collection.uri
                    : collection.externalResourceUrl
                collection.category =
                    collection.workshopOrEventSeriesType ===
                    "help/services-resources"
                        ? "workshop"
                        : collection.serviceOrResourceType
                            ? collection.serviceOrResourceType
                            : collection.typeHandle === "externalResource"
                                ? "resource"
                                : collection.typeHandle === "generalContentPage"
                                    ? "resource"
                                    : collection.typeHandle
                await $elasticsearchplugin.index(collection, collection.slug)
            }
        }

        return {
            page: _get(pageAsyncData, "entry", {}),
        }
    },
    data() {
        return {
            page: {},
            noResultsFound: false,
            hits: [],
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
            },
        }
    },
    async fetch() {
        this.hits = []
        if (this.$route.query.q && this.$route.query.q !== "") {
            const results = await this.$dataApi.keywordSearchWithFilters(
                this.$route.query.q || "*",
                config.accessCollections.searchFields,
                "searchType:accessCollection",
                [],
                config.accessCollections.sortField,
                config.accessCollections.orderBy,
                config.accessCollections.resultFields,
                []
            )
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.noResultsFound = false
            } else {
                this.hits = []
                this.noResultsFound = true
            }
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
            }
        } else {
            this.hits = []
            this.noResultsFound = false
            this.searchGenericQuery = { queryText: "" }
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
        parsedAccessCollections() {
            return this.page.accessCollections.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                }
            })
        },
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.to}`,
                }
            })
        },
        parseHitsResults() {
            /*console.log(
                "ParseHitsResults checking results data:" +
                    JSON.stringify(this.hits)
            )*/
            return this.parseHits()
        },
    },
    fetchOnServer: false,
    fetchKey: "collections-access",
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            console.log("watching queryTEXT: " + newValue)
            // if (newValue === "") this.hits = []
        },
    },
    methods: {
        parseHits() {
            console.log("static mode what is parseHits")
            return this.hits.map((obj) => {
                console.log(
                    "What should the category be?:" +
                        obj["_source"].sectionHandle
                )
                return {
                    ...obj["_source"],
                    to: obj["_source"].externalResourceUrl
                        ? obj["_source"].externalResourceUrl
                        : `/${obj["_source"].uri}`,
                }
            })
        },
        getSearchData(data) {
            this.$router.push({
                path: "/collections/access",
                query: {
                    q: data.text,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-collections-access {
}
</style>
