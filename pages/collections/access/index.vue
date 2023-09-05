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
            :placeholder="parsedPlaceholder"
            @search-ready="getSearchData"
        />

        <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                class="section"
                :items="parsedAccessCollections"
                :is-horizontal="true"
            />
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
        console.log( "In asyncdata hook collectionsAccess list")

        const pageAsyncData = await $graphql.default.request(ACCESS_COLLECTIONS)

        if (
            pageAsyncData.entry.accessCollections &&
            pageAsyncData.entry.accessCollections.length > 0
        ) {
            pageAsyncData.entry.accessCollections.forEach((element) => {
                element.searchType = "accessCollections"
                element.to = element.uri ? element.uri : element.externalResourceUrl
                element.category =
                    element.workshopOrEventSeriesType === "help/services-resources"
                        ? "workshop"
                        : element.serviceOrResourceTypej
                            ? element.serviceOrResourceType
                            : element.typeHandle === "externalResource"
                                ? "resource"
                                : element.typeHandle === "generalContentPage"
                                    ? "resource"
                                    : element.typeHandle

            })
            // add logic to reindex these documents to add a new field to support searching on this page
            await $elasticsearchplugin.index(element, element.slug)
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
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            console.log("watching querytEXT:" + newValue)
            // if (newValue === "") this.hits = []
        },
    },
    methods: {
        parseHits() {
            console.log("static mode what is parseHits")
            return this.hits.map((obj) => {
                console.log(
                    "what should be the category?:" +
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
