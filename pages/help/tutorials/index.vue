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
const tutorials = ref(_get(data.value.data, 'entries', {}))

watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal.data, 'entry', {})
  tutorials.value = _get(newVal.data, 'entries', {})
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

const parsedPlaceholder = computed(() => {
  return `Search ${page.value.title}`
})

const parsedFeaturedTutorial = computed(() => {
  const obj = page?.value.featuredResourcesSection[0].featuredResources[0]
  return [{
    ...obj,
    to: `/${obj.to}`
  }]
})

const parsedSecondaryTutorials = computed(() => {
  return page?.value.featuredResourcesSection[0].featuredResources.slice(1).map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
      image: obj.image[0]
    }
  })
})

// Tutorials listing from Craft for initial display
const parsedTutorialsList = computed(() => {
  if (tutorials.value.length === 0) {
    return null
  }

  const data = tutorials.value.map((obj) => {
    const stringifyTutorialTypes = obj.tutorialType?.map(item => item.title).join(', ')

    const groupTutorialCategoryTitles = obj.tutorialCategory?.map(item => item.title)

    return {
      ...obj,
      image: _get(obj, 'image[0]', null),
      category: stringifyTutorialTypes, // For SectionTeaserCard field
      tutorialCategory: groupTutorialCategoryTitles
    }
  })

  const grouping = []

  // Get the category titles to create tutorial grouping / headings
  data.forEach((tutorial) => {
    // If the tutorial has a category or categories...
    if (tutorial.tutorialCategory.length > 0) {
      tutorial.tutorialCategory.forEach((category) => {
        // Check if each category already exists in the grouping array
        const categoryExists = grouping.some(obj =>
          obj.groupTitle === category
        )

        // If the category does not exist in the grouping array, create a category grouping object
        if (!categoryExists && category) {
          const groupingObj = {
            groupTitle: category, // new category title
            groupTutorials: [tutorial] // tutorials
          }
          grouping.push(groupingObj)
        } else {
          // If the category exists in the grouping array, find the index in the grouping array and push tutorial there
          const categoryIndex = grouping.findIndex(obj =>
            obj.groupTitle === category
          )
          grouping[categoryIndex].groupTutorials.push(tutorial)
        }
      })
    }
    // If the tutorial has no category at all...
    else {
      // Group the tutorial to have no category title
      const groupingObj = {
        groupTitle: '',
        groupTutorials: [tutorial]
      }
      grouping.push(groupingObj)
    }
  })

  // Sort final grouping alphabetically
  const sortedGrouping = grouping.sort((a, b) => a.groupTitle.localeCompare(b.groupTitle))

  return sortedGrouping
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
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})

const routeFilters = computed(() => {
  return parseFilters(_get(route, 'query.filters', ''))
})

const hasSearchQuery = computed(() => {
  return (route.query.q !== undefined && route.query.q !== '')
    || (route.query.filters && queryFilterHasValues(routeFilters.value, config.tutorialsList.filters))
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

// ES - Tutorials listing for search
async function searchES() {
  if (hasSearchQuery.value) {
    const queryText = route.query.q || '*'
    const { keywordSearchWithFilters } = useSearch()
    const results = await keywordSearchWithFilters(
      queryText,
      config.tutorialsList.searchFields,
      ['tutorial'],
      parseFilters(route.query.filters || ''),
      config.tutorialsList.sortField,
      config.tutorialsList.orderBy,
      config.tutorialsList.resultFields,
      []
    )

    if (results && results.hits && results.hits.total.value > 0) {
      // console.log('Search ES HITS,', results.hits.hits)
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      noResultsFound.value = true
      hits.value = []
    }
  }
  else {
    hits.value = []
    noResultsFound.value = false
  }
}

watch(
  () => route.query,
  (newVal, oldVal) => {
    // console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    searchES()
  }, { deep: true, immediate: true }
)

function parseHits(hits = []) {
  return hits?.filter(obj => obj._source.typeHandle === 'tutorial').map((obj) => {
    const parseTutorialType = obj._source?.tutorialType?.map(item => item.title).join(', ')

    const cleanedHits = {
      category: parseTutorialType, // For SectionTeaserCard field
      image: _get(obj._source, 'image[0]', null),
      title: _get(obj._source, 'title', null),
      text: _get(obj._source, 'summary', null),
      to: `/${obj._source.uri}`,
    }
    return cleanedHits
  })
}

const parsedSearchResults = computed(() => {
  return parseHits(hits.value)
})

// Event handler invoked by search-generic component selections
function getSearchData(data) {
  // Construct the filters parameter dynamically
  const filters = []

  if (Object.keys(data.filters).length) {
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

  // console.log(
  //   'Search Aggs Response: ' + JSON.stringify(searchAggsResponse)
  // )
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.tutorialsList.filters
  )
}

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
      v-show="hits.length === 0 && !noResultsFound"
      class="section-no-top-margin"
      :section-title="page.sectionTitle"
    >
      <RichText :rich-text-content="page.richTextDefault" />
      <div v-show="parsedFeaturedTutorial.length > 0">
        <DividerWayFinder color="help" />
        <SectionHeader class="section-header__featured-tutorials">
          {{ page.featuredResourcesSection[0].titleGeneral }}
        </SectionHeader>

        <BannerFeatured
          :media="parsedFeaturedTutorial[0].image[0]"
          :title="parsedFeaturedTutorial[0].title"
          breadcrumb="Featured"
          :align-right="true"
          :text="parsedFeaturedTutorial[0].text"
          :to="parsedFeaturedTutorial[0].to"
          prompt="View Tutorial"
          class="banner section-featured-banner"
        />
      </div>
      <div v-show="parsedSecondaryTutorials.length > 0">
        <DividerGeneral />
        <SectionTeaserHighlight
          class="section"
          :items="parsedSecondaryTutorials"
        />
      </div>
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <!-- TUTORIALS LISTING -->
    <SectionWrapper v-show="parsedTutorialsList.length > 0 && hits.length === 0 && !noResultsFound">
      <SectionHeader :level="2">
        All Tutorials
      </SectionHeader>
      <SectionWrapper
        v-for="category in parsedTutorialsList"
        :key="category.groupTitle"
        theme="divider"
      >
        <SectionHeader
          :level="3"
          class="section-header_tutorials-listings"
        >
          {{ category.groupTitle }}
        </SectionHeader>

        <SectionTeaserCard
          class="section-teaser-card"
          :items="category.groupTutorials"
        />

        <DividerWayFinder color="help" />
      </SectionWrapper>
    </SectionWrapper>

    <!-- SEARCH RESULTS -->
    <SectionWrapper
      v-show="hits && hits.length > 0"
      class="section-no-top-margin"
    >
      <h2
        v-if="route.query.q"
        class="about-results"
      >
        Displaying {{ parsedSearchResults.length }} results for
        <strong><em>“{{ route.query.q }}</em></strong>”
      </h2>
      <h2
        v-else
        class="about-results"
      >
        Displaying {{ parsedSearchResults.length }} results
      </h2>

      <SectionTeaserCard
        class="section-teaser-card"
        :items="parsedSearchResults"
      />
    </SectionWrapper>

    <!-- NO RESULTS -->
    <SectionWrapper
      v-show="noResultsFound"
      class="section-no-top-margin"
    >
      <div class="error-text">
        <RichText>
          <h2>Search for “{{ route.query.q }}” not found.</h2>
          <p>
            We can’t find the term you are looking for on this page,
            but we're here to help. <br>
            Try searching the whole site from
            <a href="https://library.ucla.edu/">UCLA Library Home</a>, or try one of the these
            regularly visited links:
          </p>
          <ul>
            <li>
              <a href="https://www.library.ucla.edu/research-teaching-support/research-help/">Research
                Help</a>
            </li>
            <li>
              <a href="/help/services-resources/ask-us/">Ask Us</a>
            </li>
            <li>
              <a href="https://www.library.ucla.edu/use/access-privileges/disability-resources/">Accessibility
                Resources</a>
            </li>
          </ul>
        </RichText>
      </div>
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <!-- CALL TO ACTION -->
    <SectionWrapper>
      <BlockCallToActionTwoUp :items="parsedBlockCTA2Up" />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.section-header__featured-tutorials {
  margin-bottom: 24px;
}

.section-header_tutorials-listings {
  margin-bottom: 48px;
}
</style>
