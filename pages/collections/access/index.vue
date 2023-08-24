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
            <!-- :filters="searchFilters.filters"
                :view-modes="searchFilters.views"
                @view-mode-change="viewModeChanger" -->

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

export default {
    async asyncData({ $graphql, $elasticsearchplugin }) {
        const data = await $graphql.default.request(ACCESS_COLLECTIONS)
        data.entry.accessCollections.forEach((element) => {
            element.to = element.uri ? element.uri : element.externalResourceUrl
            element.searchType = "accessCollections"
            element.category =
                element.workshopOrEventSeriesType === "help/services-resources"
                    ? "workshop"
                    : element.serviceOrResourceType
                        ? element.serviceOrResourceType
                        : element.typeHandle === "externalResource"
                            ? "resource"
                            : element.typeHandle === "generalContentPage"
                                ? "resource"
                                : element.typeHandle
        })



// add logic to reindex these documents to add a new field to support searching on this page
        await $elasticsearchplugin.index(element, element.slug)
        if (
            serverData.affiliateLibraries &&
            serverData.affiliateLibraries.length > 0
        ) {
            //console.log("External Resource indexing:")
            for (let affiliateLibrary of serverData.affiliateLibraries) {
                /*console.log(
                    "External Resource indexing:" + affiliateLibrary.slug
                )*/
                await $elasticsearchplugin.index(
                    affiliateLibrary,
                    affiliateLibrary.slug
                )
            }
        }





        return {
            page: _get(data, "entry", {}),
        }
    },
    data() {
        return {
            page: {},
            noResultsFound: false,
            hits: [],
            searchGenericQuery: {queryText: this.$route.query.q || "",
        },
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
