<script setup>
// LODASH
import _get from 'lodash/get'

// UTILITIES
import removeTags from '../utils/removeTags'

// GQL
import COLLECTIONS_EXPLORE_LIST from '../gql/queries/CollectionsExploreList.gql'

// ELASTIC SEARCH UTILITIES
import getListingFilters from '../utils/getListingFilters'
import config from '../utils/searchConfig'
import queryFilterHasValues from '../utils/queryFilterHasValues'

const { $graphql, $dataApi } = useNuxtApp()

// ROUTING
const route = useRoute()
definePageMeta({
  layout: 'default',
  path: '/collections/explore',
  alias: ['/listing-collections/explore'],
})

// ASYNC DATA
const { data, error } = await useAsyncData('collection', async () => {
  const data = await $graphql.default.request(COLLECTIONS_EXPLORE_LIST)
  return data
})
if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.', fatal: true
  })
}

if (!data.value.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

// DATA
const page = ref(_get(data.value, 'entry', {}))
const collections = ref(_get(data.value, 'entries', []))
const title = ref('')

// PREVIEW MODE
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
  collections.value = _get(newVal, 'entries', [])
})

// ES search functionality
const hits = ref([])
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters:
    (route.query.filters &&
      JSON.parse(route.query.filters)) ||
    {},
})

// Elastic Search Function
async function searchES() {
  collections.value = []
  hits.value = []
  if (
    (route.query.q && route.query.q !== '') ||
    (route.query.filters &&
      queryFilterHasValues(
        route.query.filters,
        config.exploreCollection.filters
      ))
  ) {
    if (!page.title) {
      const data = await $graphql.default.request(
        COLLECTIONS_EXPLORE_LIST
      )
      page["title"] = _get(data, "entry.title", "")
      page["text"] = _get(data, "entry.text", "")
    }

    const query_text = route.query.q || "*"
    const results = await $dataApi.keywordSearchWithFilters(
      query_text,
      config.exploreCollection.searchFields,
      "sectionHandle:collection",
      (route.query.filters &&
        JSON.parse(route.query.filters)) ||
      {},
      config.exploreCollection.sortField,
      config.exploreCollection.orderBy,
      config.exploreCollection.resultFields,
      config.exploreCollection.filters
    )
    //console.log("getsearchdata method:" + JSON.stringify(results))
    collections.value = []
    hits.value = []
    if (results && results.hits && results.hits.total.value > 0) {
      hits.value = results.hits.hits
      collections = []
      noResultsFound.value = false
    } else {
      hits.value = []
      collections.value = []
      noResultsFound.value = true
    }
    searchGenericQuery = {
      queryText: route.query.q || "",
      queryFilters:
        ($route.query.filters &&
          JSON.parse(route.query.filters)) ||
        {},
    }
  } else {
    hits.value = []
    noResultsFound.value = false
    // if route queries are empty fetch data from craft
    const data = await $graphql.default.request(
      COLLECTIONS_EXPLORE_LIST
    )
    // //console.log("data:" + data)
    page.value = _get(data, "entry", {})
    collections.value = _get(data, "entries", [])
  }
}
// ES watcher
watch(() => route?.query, (oldValue, newValue) => {
  if (oldValue !== newValue) {
    if (newValue?.q === '') hits.value = []
    searchGenericQuery.value.queryText = route.query.q || ''
    searchES()
  }
}, { deep: true, immediate: true })

// ENABLE PREVIEW MODE
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

// HEAD

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.summary),
    }
  ],
})

// COMPUTED
const parsedCollectionList = computed(() => {
  return collections.value.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
      image: _get(obj, 'heroImage[0]image[0]', null),
      category: obj.category.join(', '),
      title: _get(obj, 'title', ''),
      text: _get(obj, 'text', ''),
    }
  })
})

const parsedAssociatedTopics = computed(() => {
  return page.value.associatedTopics.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
    }
  })
})

/* TODO: Enable when search functionality is ready */
const parsedPlaceholder = computed(() => {
  return `Search ${page.title}`
})

const parseHitsResults = computed(() => {
  return parseHits(hits)
})




/* TODO: Incorporate when search functionality is ready? */
// Watch route for new queries
// watch: {
//   "$route.query": "$fetch",
//     "$route.query.q"(newValue) {
//     //console.log("watching querytEXT:" + newValue)
//   },
//   "$route.query.filters"(newValue) {
//     //console.log("watching filters:" + newValue)
//   },
// }

// watch(() => route.query, (newVal, oldVal) => {

// }, { deep: true, immediate: true })

//   async mounted() {
//   //console.log("In mounted")
//   this.setFilters()
// }

// ES watcher
/* TODO: Incorporate when search functionality is ready? */
// async function setFilters() {
//   const searchAggsResponse = await this.$dataApi.getAggregations(
//     config.exploreCollection.filters,
//     "collection"
//   )
//   /*console.log(
//       "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
//   )*/
//   searchFilters.value = getListingFilters(
//     searchAggsResponse,
//     config.exploreCollection.filters
//   )
// }

/* TODO: Incorporate when search functionality is ready? */
// function parseHits(hits = []) {
//   return hits?.map((obj) => {
//     return {
//       ...obj["_source"],
//       to: obj["_source"].externalResourceUrl
//         ? obj["_source"].externalResourceUrl
//         : `/${obj["_source"].uri}`,
//       image: _get(obj["_source"], "heroImage[0]image[0]", null),
//       category: obj["_source"].physicalDigital.join(", "),
//     }
//   })
// }

/* TODO: Incorporate when search functionality is ready? */
// function getSearchData(data) {
//   // console.log("On the page getsearchdata called " + data)
//   // this.page = {}
//   // this.hits = []
//   console.log('data text', data.text)
//   console.log('data filters', JSON.stringify(data.filters))
//   useRouter().push({
//     path: "/collections/explore",
//     query: {
//       q: data.text,
//       filters: JSON.stringify(data.filters),
//     },
//   })
// }

// NOT A METHOD
/* TODO: Refactor when search functionality is ready */
// fetchOnServer: false,
//   // multiple components can return the same `fetchKey` and Nuxt will track them both separately
//   fetchKey: "explore-collections-index",

</script>

<template lang="html">
  <main
    id="main"
    class="page page-collections-explore"
  >

    <!-- <h3>DATA: {{ data }}</h3>
    <h3>PAGE: {{ page }}</h3> -->
    <!-- <h3>COLLECTIONS: {{ collections }}</h3> -->

    <!-- DELETE AT THE END -->
    <!-- <h3> parsedCollectionList -- {{ parsedCollectionList }}</h3>
    <hr> -->
    <!-- <h3>parsedAssociatedTopics -- {{ parsedAssociatedTopics }}</h3>
    <hr> -->
    <h3>parsedPlaceholder -- {{ parsedPlaceholder }}</h3>
    <hr>
    <h3>parseHitsResults -- {{ parseHitsResults }}</h3>
    <hr>
    <h3>DATA -- {{ `On the page getsearchdata called ${data}` }}</h3>

    <nav-breadcrumb
      to="/collections"
      title="Explore Featured Collections"
      parent-title="Collections"
    />

    <masthead-secondary
      :title="page.title"
      :text="page.summary"
    />

    <!-- SEARCH
                Filters by physical/digital & subject area -->
    <!-- <search-generic
      search-type="about"
      :filters="searchFilters"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    /> -->

    <section-wrapper theme="divider">
      <divider-way-finder class="search-margin" />
    </section-wrapper>



    <section-wrapper
      v-show="page &&
      parsedCollectionList &&
      parsedCollectionList.length &&
      hits.length == 0 &&
      !noResultsFound
      "
      class="section-no-top-margin"
    >
      <section-teaser-card :items="parsedCollectionList" />
    </section-wrapper>

    <!-- FILTERS -->
    <!-- <section-wrapper
      v-show="hits && hits.length > 0"
      class="section-no-top-margin"
    >
      <h2
        v-if="$route.query.q"
        class="about-results"
      >
        Displaying {{ hits.length }} results for
        <strong><em>“{{ $route.query.q }}”</em></strong>
      </h2>

      <h2
        v-else
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>
      <section-teaser-card :items="parseHitsResults" />
    </section-wrapper> -->

    <!-- NO RESULTS -->
    <!-- <section-wrapper
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
            <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these regularly visited
            links:
          </p>
          <ul>
            <li>
              <a href="https://www.library.ucla.edu/research-teaching-support/research-help">Research Help</a>
            </li>
            <li>
              <a href="/help/services-resources/ask-us">Ask Us</a>
            </li>
            <li>
              <a href="https://www.library.ucla.edu/use/access-privileges/disability-resources">Accessibility
                Resources</a>
            </li>
          </ul>
        </rich-text>
      </div>
    </section-wrapper> -->

    <section-wrapper>
      <divider-way-finder
        class="divider-way-finder"
        color="default"
      />
    </section-wrapper>

    <section-wrapper>
      <section-cards-with-illustrations
        class="section"
        :items="parsedAssociatedTopics"
        button-text="All services & resources"
        to="/help/services-resources"
        section-title="Associated Topics"
      />
    </section-wrapper>
  </main>
</template>

<style
  lang="scss"
  scoped
>
.page-collections-explore {}
</style>
