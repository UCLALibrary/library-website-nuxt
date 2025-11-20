<!-- eslint-disable no-console -->
<script setup>
// COMPONENTS
import { MastheadSecondary, DividerWayFinder, RichText, SectionWrapper } from '@ucla-library-monorepo/ucla-library-website-components'

// UTILITIES
import _get from 'lodash/get'

// GQL
import TUTORIALS_LIST from '../gql/queries/TutorialsList.gql'

// HELPERS
import config from '../utils/searchConfig'
import getListingFilters from '../utils/getListingFilters'
import queryFilterHasValues from '../utils/queryFilterHasValues'
import removeTags from '../utils/removeTags'
// import sortByTitle from '../utils/sortByTitle'

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

// ES Functionality Test Start
const routeFilters = computed(() => {
  return parseFilters(_get(route, 'query.filters', ''))
})

const hits = ref([])
const title = ref('')
const searchFilters = ref([])
const noResultsFound = ref(false)

const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})

function parseFilters(filtersString) {
  if (!filtersString) return {}

  const filters = {}
  const conditions = filtersString.split(' AND ')

  conditions.forEach((condition) => {
    const [key, value] = condition.split(':(')
    const cleanedKey = key.trim()
    const values = value.replace(')', '').split(' OR ').map(v => v.trim())

    filters[cleanedKey] = values
  })

  return filters
}

const hasSearchQuery = computed(() => {
  // console.log("hasSearchQuery", (route.query.q !== undefined && route.query.q !== ''), (route.query.filters && queryFilterHasValues(routeFilters.value, config.tutorialsList.filters)), (routeFilters.value.past[0] === 'yes'))
  return (route.query.q !== undefined && route.query.q !== '')
    || (route.query.filters && queryFilterHasValues(routeFilters.value, config.tutorialsList.filters))
    || (routeFilters.value.past && routeFilters.value.past.length > 0 && routeFilters.value.past[0] === 'yes')
})

// This watcher is called when router push updates the query params
watch(
  () => route.query,
  (newVal, oldVal) => {
    // console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    searchES()
  }, { deep: true, immediate: true }
)

async function searchES() {


  // if (hasSearchQuery.value)

  if (
    (route.query.q && route.query.q !== '') ||
    (route.query.filters &&
      queryFilterHasValues(
        parseFilters(route.query.filters || ''),
        config.tutorialsList.filters
      ))
  ) {
    // console.log('Search ES HITS query,', route.query.q)

    const queryText = route.query.q || '*'

    const { past, ...filters } = routeFilters.value

    const { keywordSearchWithFilters } = useSearch()

    const results = await keywordSearchWithFilters(
      queryText,
      config.tutorialsList.searchFields,
      ['tutorial', 'tutorials', 'tutorialsDetail'],
      filters,
      // queryText === '*' ? config.tutorialsList.sortField : '',
      parseFilters(route.query.filters || ''),
      config.tutorialsList.orderBy,
      config.tutorialsList.resultFields,
      config.tutorialsList.filters,
      [],
    )
    if (results && results.hits && results.hits.total.value > 0) {
      // console.log('Search ES HITS,', results.hits.hits)
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      noResultsFound.value = true
      hits.value = []
    }
  } else {
    hits.value = []
    noResultsFound.value = false
  }
}

function parseHits(hits = []) {
  return hits.value
}

const parseHitsResults = computed(() => {
  return parseHits(hits.value)
})

console.log('Hits: ', parseHitsResults.value)

async function setFilters() {
  const { getAggregations } = useSearch()
  const searchAggsResponse = await getAggregations(
    config.tutorialsList.filters,
    'tutorials'
  )

  console.log(
    "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
  )
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.tutorialsList.filters
  )
}

onMounted(async () => {
  // await setFilters()
})
// ES Functionality Test End

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

    <SectionWrapper theme="divider">
      <DividerWayFinder color="help" />
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
