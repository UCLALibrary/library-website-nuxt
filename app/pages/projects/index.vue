<script setup lang="ts">
// GQL
import PROJECT_LIST from "../gql/queries/ProjectList.gql"
// Helpers
import _get from "lodash/get"
import stripMeapFromURI from "~/utils/stripMeapFromURI"
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"
import queryFilterHasValues from "~/utils/queryFilterHasValues"

const { $graphql } = useNuxtApp()


const { data, error } = await useAsyncData('project-list', async () => {
  const data = await $graphql.default.request(PROJECT_LIST)
  return data
})

const dataValue = data.value as Record<string, unknown> | undefined

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!dataValue?.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

// DATA
const summaryData = ref(_get(data.value, 'entry', []))
const parsedAssociatedTopics = computed(() => {
  if (!summaryData.value.featuredMeapResourcesListing) {
    return []
  }
  return summaryData.value.featuredMeapResourcesListing.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${stripMeapFromURI(obj.uri)}`,
    }
  })
})
// HEAD METADATA
useHead({
  title: summaryData.value ? summaryData.value.projectListTitle : '... loading',
})

const route = useRoute()

// SEARCH
const hits = ref([])
const title = ref('')
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: Array.isArray(route.query.q) ? route.query.q[0] || '' : route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})

const parseHitsResults = computed(() => {
  return parseHits(hits.value)
})

// This watcher is called when router pushes updates the query params
watch(
  () => route.query,
  (newVal, oldVal) => {
    console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = Array.isArray(route.query.q) ? route.query.q[0] || '' : route.query.q || ''
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    searchES()
  }, { deep: true, immediate: true }
)
const allProjects = ref(true)

// ELASTIC SEARCH
async function searchES() {
  const { keywordSearchWithFilters } = useDataAPI()
  if (
    (route.query.q && route.query.q !== '') ||
    (route.query.filters &&
      queryFilterHasValues(
        parseFilters(route.query.filters || ''),
        config.meapProject.filters
      ))
  ) {
    console.log('Search ES HITS query,', route.query.q)
    const queryText = Array.isArray(route.query.q) ? route.query.q[0] || '*' : route.query.q || '*'
    const results = await keywordSearchWithFilters(
      queryText,
      config.meapProject.searchFields,
      'sectionHandle:meapProject',
      parseFilters(route.query.filters || ''),
      config.meapProject.sortField,
      config.meapProject.orderBy,
      config.meapProject.resultFields,
      config.meapProject.filters
    )

    if (results && results.hits && results.hits.total.value > 0) {
      console.log('Search ES HITS,', results.hits.hits)
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      noResultsFound.value = true
      hits.value = []
    }
    allProjects.value = false
  } else {
    // Fetch all Data for this content type
    const queryText = Array.isArray(route.query.q) ? route.query.q[0] || '*' : route.query.q || '*'
    const results = await keywordSearchWithFilters(
      queryText,
      config.meapProject.searchFields,
      'sectionHandle:meapProject',
      parseFilters(route.query.filters || ''),
      config.meapProject.sortField,
      config.meapProject.orderBy,
      config.meapProject.resultFields,
      config.meapProject.filters
    )
    if (results && results.hits && results.hits.total.value > 0) {
      console.log('Search ES HITS,', results.hits.hits)
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      noResultsFound.value = true
      hits.value = []
    }
    allProjects.value = true
  }
}

async function setFilters() {
  const { getAggregations } = useDataAPI()
  const searchAggsResponse = await getAggregations(
    config.meapProject.filters,
    'meapProject'
  )

  console.log(
    'Search Aggs Response: ' + JSON.stringify(searchAggsResponse)
  )

  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.meapProject.filters
  )
}

function parseHits(hits = []) {
  return hits?.map((obj) => {
    return {
      ...obj["_source"],
      to: `/${stripMeapFromURI(obj["_source"].uri)}`,
      image: _get(obj["_source"], "heroImage[0].image[0]", null),
      text: _get(obj["_source"], "summary", null),
    }
  })
}

// This is event handler which is invoked by search-generic component selections
function getSearchData(data) {
  // Construct the filters parameter dynamically
  const filters = []
  if (data.filters) {
    for (const key in data.filters) {
      if (data.filters[key].length > 0) {
        filters.push(`${key}:(${data.filters[key].join(' OR ')})`)
      }
    }
  }
  // Use the router to navigate with the new query parameters
  useRouter().push({
    path: '/projects',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    }
  })
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
    class="page page-project-list"
  >
    <masthead-secondary
      :title="summaryData.projectListTitle"
      :text="summaryData.projectListSummary"
    />

    <search-generic
      search-type="about"
      :filters="searchFilters"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      placeholder="Search Projects"
      @search-ready="getSearchData"
    />

    <section-wrapper theme="divider">
      <divider-way-finder class="search-margin" />
    </section-wrapper>


    <section-wrapper
      v-show="hits && hits.length > 0"
      class="section-no-top-margin"
      :section-title="allProjects ? 'All Projects' : 'Search Results'"
    >
      <h2
        v-if="route.query.q"
        class="about-results"
      >
        Displaying {{ hits.length }} results for
        <strong><em>“{{ route.query.q }}</em></strong>”
      </h2>
      <h2
        v-else-if="!allProjects"
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>

      <section-teaser-card
        data-test="project-results-es"
        :items="parseHitsResults"
      />
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
    <section-wrapper
      v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
      theme="divider"
    >
      <divider-way-finder color="help" />
    </section-wrapper>

    <section-wrapper v-if="parsedAssociatedTopics && parsedAssociatedTopics.length">
      <section-cards-with-illustrations
        :items="parsedAssociatedTopics"
        title="Associated Topics"
        button-text="All Resources"
        to="/applicants/resources"
      />
    </section-wrapper>
  </main>
</template>



<style lang="scss" scoped>
.generic-search {
  z-index: 30;
}

::v-deep .section-teaser-card {
  z-index: 0;
}

::v-deep .block-highlight .meta {
  z-index: 0;
}
</style>
