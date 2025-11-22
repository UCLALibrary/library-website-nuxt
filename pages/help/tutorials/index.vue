<!-- eslint-disable no-console -->
<script setup>
// COMPONENTS
import { MastheadSecondary, DividerWayFinder, RichText, SearchGeneric, SectionWrapper } from '@ucla-library-monorepo/ucla-library-website-components'

// UTILITIES
import _get from 'lodash/get'

// GQL
import TUTORIALS_LIST from '../gql/queries/TutorialsList.gql'

// HELPERS
import config from '../utils/searchConfig'
import getListingFilters from '../utils/getListingFilters'
import queryFilterHasValues from '../utils/queryFilterHasValues'
import removeTags from '../utils/removeTags'
import sortByTitle from '../utils/sortByTitle'

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('tutorials-list', async () => {
  const data = await $graphql.default.request(TUTORIALS_LIST)
  return { data }
})
// console.log('Tutorials data: ', data.value, 'error: ', error.value)

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.', fatal: true
  })
}

if (!data.value?.data) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

if (data.value?.data && import.meta.prerender) {
  const { index } = useIndexer()
  const doc = {
    title: data.value.data.title,
    text: data.value.data.summary,
    uri: 'help/tutorials/'
  }
  await index(doc, 'tutorials-list')
}

const route = useRoute()

// Data
const page = ref(_get(data.value.data, 'entry', {}))
console.log('Page Data: ', page.value)

watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal.data, 'entry', {})
})

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.summary),
    },
  ],
})

// ES Functionality
const hits = ref([])
const title = ref('')
const searchFilters = ref([])
const noResultsFound = ref(false)
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})

// ES
async function searchES() {
  const queryText = route.query.q || '*'
  const { keywordSearchWithFilters } = useSearch()
  const results = await keywordSearchWithFilters(
    queryText,
    config.tutorialsList.searchFields,
    ['tutorial'],
    // parseFilters(route.query.filters || ''),
    // config.tutorialsList.sortField,
    // config.tutorialsList.orderBy,
    // config.tutorialsList.resultFields,
    []
  )
  if (results && results.hits && results.hits.total.value > 0) {
    console.log('Search ES HITS,', results.hits.hits)
    hits.value = results.hits.hits
    noResultsFound.value = false
  } else {
    noResultsFound.value = true
    hits.value = []
  }
}

watch(
  () => route.query,
  (newVal, oldVal) => {
    // console.log('ES newVal, oldVal', newVal, oldVal)
    // searchGenericQuery.value.queryText = route.query.q || ''
    // searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    searchES()
    console.log('On page load?')
  }, { deep: true, immediate: true }
)

const parseHitsResults = computed(() => {
  return parseHits(hits.value)
})
console.log('Parse Hits Results: ', parseHitsResults.value)

function parseHits(hits = []) {
  return hits?.map((obj) => {
    return {
      ...obj._source
    }
  })
}

// Event handler invoked by search-generic component selections
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
    path: '/help/tutorials/',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    }
  })
}

async function setFilters() {
  const { getAggregations } = useSearch()
  const searchAggsResponse = await getAggregations(
    config.tutorialsList.filters,
    'tutorial'
  )

  console.log(
    'Search Aggs Response: ' + JSON.stringify(searchAggsResponse)
  )
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.tutorialsList.filters
  )
}

const parsedPlaceholder = computed(() => {
  return `Search ${page.value.title}`
})

onMounted(async () => {
  await setFilters()
})

</script>

<template lang="html">
  <main
    id="main"
    class="page page-tutorials-listing"
  >
    <MastheadSecondary
      :title="page.title"
      :text="page.summary"
    />

    <SearchGeneric
      search-type="about"
      class="generic-search"
      :filters="searchFilters"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder
        color="help"
        class="search-margin"
      />
    </SectionWrapper>

    <SectionWrapper :section-title="page.sectionTitle">
      <RichText :rich-text-content="page.richTextDefault" />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <SectionWrapper :section-title="page.featuredResourcesSection[0].titleGeneral">
      <!-- <pre style="text-wrap: auto;">{{ page.featuredResourcesSection[0].featuredResources }}</pre> -->
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      {{ parseHitsResults }}
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <SectionWrapper section-title="CTA">
      <!-- <pre style="text-wrap: auto;">{{ page.callToAction2Up }}</pre> -->
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped></style>
