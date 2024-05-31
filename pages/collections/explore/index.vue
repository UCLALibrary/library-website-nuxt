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

// HEAD METADATA FOR THE TAB TITLES ON THE PAGE
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

// ELASTIC SEARCH FUNCTIONALITY
const hits = ref([])
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ""),
})

// This watcher is called when router pushes updates the query params
watch(
  () => route.query,
  (newVal, oldVal) => {
    console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || "")
    searchES()
  }, { deep: true, immediate: true }
)

// ELASTIC SEARCH FUNCTION
async function searchES() {
  if (
    (route.query.q && route.query.q !== '') ||
    (route.query.filters &&
      queryFilterHasValues(
        parseFilters(route.query.filters || ""),
        config.exploreCollection.filters
      ))
  ) {
    console.log('Search ES HITS query,', route.query.q)
    const queryText = route.query.q || '*'
    const results = await $dataApi.keywordSearchWithFilters(
      queryText,
      config.exploreCollection.searchFields,
      'sectionHandle:collection',
      parseFilters(route.query.filters || ""),
      config.exploreCollection.sortField,
      config.exploreCollection.orderBy,
      config.exploreCollection.resultFields,
      config.exploreCollection.filters
    )

    hits.value = []
    if (results && results.hits && results.hits.total.value > 0) {
      console.log('Search ES HITS,', results.hits.hits)
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      hits.value = []
      noResultsFound.value = true
    }
  } else {
    hits.value = []
    noResultsFound.value = false
  }
}

const parsedPlaceholder = computed(() => {
  return `Search ${page.value.title}`
})

const parseHitsResults = computed(() => {
  return hits.value.map((obj) => {
    return {
      ...obj._source,
      to: obj._source.externalResourceUrl
        ? obj._source.externalResourceUrl
        : `/${obj._source.uri}`,
      image: _get(obj._source, 'heroImage[0]image[0]', null),
      category: obj._source.physicalDigital.join(', '),
    }
  })
})

// This is event handler which is invoked by search-generic component selections
function getSearchData(data) {
  console.log('On the page getsearchdata called')

  // Construct the filters parameter dynamically
  const filters = []
  for (const key in data.filters) {
    if (data.filters[key].length > 0) {
      filters.push(`${key}:(${data.filters[key].join(' OR ')})`)
    }
  }

  // Use the router to navigate with the new query parameters
  useRouter().push({
    path: '/collections/explore',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    }
  })
}

function parseFilters(filtersString) {
  if (!filtersString) return {}

  const filters = {}
  const conditions = filtersString.split(' AND ')

  conditions.forEach(condition => {
    const [key, value] = condition.split(':(')
    const cleanedKey = key.trim()
    const values = value.replace(')', '').split(' OR ').map(v => v.trim())

    filters[cleanedKey] = values
  })

  return filters
}

// fetch filters for the page from ES after page loads in Onmounted hook on the client side
async function setFilters() {
  const searchAggsResponse = await $dataApi.getAggregations(
    config.exploreCollection.filters,
    'collection'
  )
  /* console.log(
      "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
  ) */
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.exploreCollection.filters
  )
}

onMounted(async () => {
  console.log('onMounted called')
  // console.log("ESREADkey:" + config.esReadKey)
  // console.log("ESURLkey:" + config.esURL)
  await setFilters()
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-collections-explore"
  >
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
      Filter by physical/digital & subject area -->
    <search-generic
      search-type="about"
      :filters="searchFilters"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    />

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
    <section-wrapper
      v-show="hits && hits.length > 0"
      class="section-no-top-margin"
    >
      <h2
        v-if="route.query.q"
        class="about-results"
      >
        Displaying {{ hits.length }} results for
        <strong><em>“{{ route.query.q }}”</em></strong>
      </h2>

      <h2
        v-else
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>
      <section-teaser-card :items="parseHitsResults" />
    </section-wrapper>

    <!-- NO RESULTS -->
    <section-wrapper
      v-show="noResultsFound"
      class="section-no-top-margin"
    >
      <div class="error-text">
        <rich-text>
          <h2>Search for “{{ route.query.q }}” not found.</h2>
          <p>
            We can’t find the term you are looking for on this page,
            but we're here to help. <br>
            Try searching the whole site from
            <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these
            regularly visited
            links:
          </p>
          <ul>
            <li>
              <a href="https://www.library.ucla.edu/research-teaching-support/research-help">Research
                Help</a>
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
    </section-wrapper>

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

<style lang="scss" scoped>
.page-collections-explore {}
</style>
