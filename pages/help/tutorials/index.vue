<!-- eslint-disable no-console -->
<script setup>
// COMPONENTS
import { BannerFeatured, BlockCallToActionTwoUp, MastheadSecondary, DividerGeneral, DividerWayFinder, RichText, SearchGeneric, SectionHeader, SectionTeaserCard, SectionTeaserHighlight, SectionWrapper } from '@ucla-library-monorepo/ucla-library-website-components'

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

const parsedFeaturedTutorial = computed(() => {
  const obj = page?.value.featuredResourcesSection[0].featuredResources[0]
  return {
    ...obj,
    to: `/${obj.to}`
  }
})

const parsedSecondaryTutorials = computed(() => {
  return page?.value.featuredResourcesSection[0].featuredResources.slice(1).map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
      image: obj.image[0],
      // category: obj.tutorialType // TBD
    }
  })
})

const parsedBlockCTA2Up = computed(() => {
  return page?.value.callToAction2Up.map((obj) => {
    return {
      svgName: obj.icon,
      title: obj.titleCta,
      text: obj.summary,
      name: obj.buttonText,
      to: obj.buttonLink,
      isDark: obj.backgroundColor === 'true'
    }
  })
})

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

function parseHits(hits = []) {
  return hits?.map((obj) => {
    const getTutorialType = obj._source.tutorialType.map(item => item.title).join(', ')

    return {
      ...obj._source,
      to: `/${obj._source.uri}`,
      image: _get(obj._source, 'image[0].image[0]', null),
      category: getTutorialType,
      title: _get(obj._source, 'title', null),
      text: _get(obj._source, 'summary', null)
    }
  })
}

const parsedTutorialsList = computed(() => {
  const tutorialGrouping = []

  parseHitsResults.value.forEach((obj) => {
    // Get the category titles
    if (obj.tutorialCategory && obj.tutorialCategory.length > 1) {
      const catTitle = obj.tutorialCategory.map(item => item.title)

      catTitle.forEach((title) => {
        const categoryExists = tutorialGrouping.some(item =>
          item.title === title
        )
        if (!categoryExists) {
          const testObj = {
            title: obj.tutorialCategory[0].title,
            // tutorials: [obj.title]
            tutorials: [obj]
          }
          tutorialGrouping.push(testObj)
        } else {
          const categoryIndex = tutorialGrouping.findIndex(item =>
            item.title === title
          )
          // tutorialGrouping[categoryIndex].tutorials.push(obj.title)
          tutorialGrouping[categoryIndex].tutorials.push(obj)
        }
      })
    } else {
      const categoryExists = tutorialGrouping.some(item =>
        item.title === obj.tutorialCategory[0].title
      )
      if (!categoryExists) {
        const testObj = {
          title: obj.tutorialCategory[0].title,
          // tutorials: [obj.title]
          tutorials: [obj]
        }
        tutorialGrouping.push(testObj)
      } else {
        // find index and push title there
        const categoryIndex = tutorialGrouping.findIndex(item =>
          item.title === obj.tutorialCategory[0].title
        )
        // console.log('Index is: ', categoryIndex)
        // tutorialGrouping[categoryIndex].tutorials.push(obj.title)
        tutorialGrouping[categoryIndex].tutorials.push(obj)
      }
    }
  })

  return tutorialGrouping
  // return parseHitsResults.value.map((obj) => {
  //   return {
  //     ...obj,
  //     to: obj.to,
  //     // image: obj.image, // Confirm
  //     category: obj.category,
  //     title: obj.title,
  //     text: obj.text,
  //   }
  // })
})

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

    <!-- FEATURED TUTORIALS -->
    <SectionWrapper
      class="section-no-top-margin"
      :section-title="page.sectionTitle"
    >
      <RichText :rich-text-content="page.richTextDefault" />
      <DividerWayFinder color="help" />
      <SectionHeader class="featured-tutorial-header">
        {{ page.featuredResourcesSection[0].titleGeneral }}
      </SectionHeader>
      <BannerFeatured
        :media="parsedFeaturedTutorial.image[0]"
        :title="parsedFeaturedTutorial.title"
        breadcrumb="Featured"
        :align-right="true"
        :text="parsedFeaturedTutorial.text"
        :to="parsedFeaturedTutorial.to"
        prompt="View Tutorial"
        class="banner section-featured-banner"
      />
      <DividerGeneral />
      <SectionTeaserHighlight
        class="section"
        :items="parsedSecondaryTutorials"
      />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <!-- TUTORIALS LISTING -->
    <SectionWrapper
      v-for="category in parsedTutorialsList"
      :key="category.title"
      theme="divider"
    >
      <SectionHeader
        :level="3"
        class="listings-header"
      >
        {{ category.title }}
      </SectionHeader>

      <SectionTeaserCard
        class="section-teaser-card"
        :items="category.tutorials"
      />

      <DividerWayFinder color="help" />
    </SectionWrapper>

    <!-- CALL TO ACTION -->
    <SectionWrapper>
      <BlockCallToActionTwoUp :items="parsedBlockCTA2Up" />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.featured-tutorial-header {
  margin-bottom: 24px;
}

.listings-header {
  margin-bottom: 48px;
}
</style>
