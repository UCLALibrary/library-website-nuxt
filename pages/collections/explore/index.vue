<script>
// LODASH
import _get from "lodash/get"

// HELPERS
import getListingFilters from "../utils/getListingFilters"
import queryFilterHasValues from "../utils/queryFilterHasValues"
import removeTags from "../utils/removeTags"

// SEARCH
import config from "../utils/searchConfig"

// GQL
import COLLECTIONS_EXPLORE_LIST from "../gql/queries/CollectionsExploreList.gql"

// GET DATA
const { $graphql, $getHeaders } = useNuxtApp()
const route = useRoute()

export default {
  async asyncData({ $graphql, route }) {
    const data = await $graphql.default.request(
      COLLECTIONS_EXPLORE_LIST,
      {}
    )

    // //console.log("data:" + data)
    return {
      page: _get(data, "entry", {}),
      collections: _get(data, "entries", {}),
    }
  },
  data() {
    return {
      page: {},
      collections: [],
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
    this.collections = []
    this.hits = []
    if (
      (this.$route.query.q && this.$route.query.q !== "") ||
      (this.$route.query.filters &&
        queryFilterHasValues(
          this.$route.query.filters,
          config.exploreCollection.filters
        ))
    ) {
      if (!this.page.title) {
        const data = await this.$graphql.default.request(
          COLLECTIONS_EXPLORE_LIST
        )
        this.page["title"] = _get(data, "entry.title", "")
        this.page["text"] = _get(data, "entry.text", "")
      }
      let query_text = this.$route.query.q || "*"
      const results = await this.$dataApi.keywordSearchWithFilters(
        query_text,
        config.exploreCollection.searchFields,
        "sectionHandle:collection",
        (this.$route.query.filters &&
          JSON.parse(this.$route.query.filters)) ||
        {},
        config.exploreCollection.sortField,
        config.exploreCollection.orderBy,
        config.exploreCollection.resultFields,
        config.exploreCollection.filters
      )
      //console.log("getsearchdata method:" + JSON.stringify(results))
      this.collections = []
      this.hits = []
      if (results && results.hits && results.hits.total.value > 0) {
        this.hits = results.hits.hits
        this.collections = []
        this.noResultsFound = false
      } else {
        this.hits = []
        this.collections = []
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
      const data = await this.$graphql.default.request(
        COLLECTIONS_EXPLORE_LIST
      )
      // //console.log("data:" + data)
      this.page = _get(data, "entry", {})
      this.collections = _get(data, "entries", [])
    }
  },
  head() {
    let title = this.page ? this.page.title : "... loading"
    let metaDescription = removeTags(this.page.summary)

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
    parsedCollectionList() {
      return this.collections.map((obj) => {
        return {
          ...obj,
          to: obj.externalResourceUrl
            ? obj.externalResourceUrl
            : `/${obj.uri}`,
          image: _get(obj, "heroImage[0]image[0]", null),
          category: obj.category.join(", "),
          title: _get(obj, "title", ""),
          text: _get(obj, "text", ""),
        }
      })
    },
    parsedAssociatedTopics() {
      return this.page.associatedTopics.map((obj) => {
        return {
          ...obj,
          to: obj.externalResourceUrl
            ? obj.externalResourceUrl
            : `/${obj.uri}`,
        }
      })
    },
    parsedPlaceholder() {
      return `Search ${this.page.title}`
    },
    parseHitsResults() {
      return this.parseHits(this.hits)
    },
  },
  watch: {
    "$route.query": "$fetch",
    "$route.query.q"(newValue) {
      //console.log("watching querytEXT:" + newValue)
    },
    "$route.query.filters"(newValue) {
      //console.log("watching filters:" + newValue)
    },
  },
  async mounted() {
    //console.log("In mounted")
    this.setFilters()
  },
  methods: {
    async setFilters() {
      const searchAggsResponse = await this.$dataApi.getAggregations(
        config.exploreCollection.filters,
        "collection"
      )
      /*console.log(
          "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
      )*/
      this.searchFilters = getListingFilters(
        searchAggsResponse,
        config.exploreCollection.filters
      )
    },
    parseHits(hits = []) {
      return hits.map((obj) => {
        return {
          ...obj["_source"],
          to: obj["_source"].externalResourceUrl
            ? obj["_source"].externalResourceUrl
            : `/${obj["_source"].uri}`,
          image: _get(obj["_source"], "heroImage[0]image[0]", null),
          category: obj["_source"].physicalDigital.join(", "),
        }
      })
    },
    getSearchData(data) {
      //console.log("On the page getsearchdata called")
      /*this.page = {}
      this.hits = []*/
      this.$router.push({
        path: "/collections/explore",
        query: {
          q: data.text,
          filters: JSON.stringify(data.filters),
        },
      })
    },
  },
  fetchOnServer: false,
  // multiple components can return the same `fetchKey` and Nuxt will track them both separately
  fetchKey: "explore-collections-index",
}
</script>

<template lang="html">
  <main
    id="main"
    class="page page-collections-explore"
  >
  </main>
</template>

<style
  lang="scss"
  scoped
>
.page-collections-explore {}
</style>
