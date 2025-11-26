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
const searchInitiated = ref(false)
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
  // || (routeFilters.value.past && routeFilters.value.past.length > 0 && routeFilters.value.past[0] === 'yes')
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

// ES
async function searchES() {
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

  if (hasSearchQuery.value) {
    searchInitiated.value = true
  }

  if (results && results.hits && results.hits.total.value > 0) {
    // console.log('Search ES HITS,', results.hits.hits)
    hits.value = results.hits.hits
    noResultsFound.value = false
  } else {
    noResultsFound.value = true
    hits.value = []
  }
}

// console.log('route: ', route)
// console.log('route query: ', route.query)
// console.log('route query q: ', route.query.q)
// console.log('route query filters: ', route.query.filters)
// console.log('hasSearchQuery: ', hasSearchQuery.value)
// console.log('search filters: ', searchFilters.value)
// console.log('search generic query: ', searchGenericQuery.value)
// console.log('parsed filters: ', parseFilters(route.query.filters || ''))
// console.log('initiated search: ', searchInitiated.value)

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
    const getTutorialType = obj._source?.tutorialType?.map(item => item.title).join(', ')

    const getTutorialCategory = obj._source?.tutorialCategory?.map(item => item.title)

    const cleanedHits = {
      category: getTutorialType, // For SectionTeaserCard; although we're parsing the tutorial types, the component expects a category field'
      image: _get(obj._source, 'image[0]', null),
      tutorialCategory: getTutorialCategory,
      title: _get(obj._source, 'title', null),
      text: _get(obj._source, 'summary', null),
      to: `/${obj._source.uri}`,
      typeHandle: obj._source.typeHandle
    }

    return cleanedHits
  })
}

const parseHitsResults = computed(() => {
  return parseHits(hits.value)
})

const parsedTutorialsList = computed(() => {
  if (parseHitsResults.value.length === 0) {
    return null
  }

  const grouping = []

  // Get the category titles to create tutorial grouping
  parseHitsResults.value.forEach((tutorial) => {
    // Check if each category already exists in the grouping array
    tutorial.tutorialCategory.forEach((category) => {
      const categoryExists = grouping.some(obj =>
        obj.groupTitle === category
      )

      // If category does not exist, create the category object
      if (!categoryExists) {
        const groupingObj = {
          groupTitle: category,
          groupTutorials: [tutorial]
        }
        grouping.push(groupingObj)
      } else {
        // If the category exists, find the index and push tutorial there
        const categoryIndex = grouping.findIndex(obj =>
          obj.groupTitle === category
        )
        grouping[categoryIndex].groupTutorials.push(tutorial)
      }
    })
  })

  // Sort groupings alphabetically
  const sortedGrouping = grouping.sort((a, b) => a.groupTitle.localeCompare(b.groupTitle))

  return sortedGrouping
})

// Event handler invoked by search-generic component selections
function getSearchData(data) {
  // Construct the filters parameter dynamically
  const filters = []

  if (Object.keys(data.filters).length) {
    searchInitiated.value = true
    for (const key in data.filters) {
      if (data.filters[key].length > 0) {
        filters.push(`${key}:(${data.filters[key].join(' OR ')})`)
      }
    }
  } else {
    searchInitiated.value = false
  }

  // Use the router to navigate with the new query parameters
  useRouter().push({
    path: '/help/tutorials/',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    }
  })

  console.log('hasSearchQuery: ', hasSearchQuery.value)
  console.log('initiated search: ', searchInitiated.value)
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
    <!-- <SectionWrapper
      class="section-no-top-margin"
      :section-title="page.sectionTitle"
    >
      <RichText :rich-text-content="page.richTextDefault" />
      <DividerWayFinder color="help" />
      <SectionHeader class="section-header__featured-tutorials">
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
      <DividerWayFinder color="help" />
    </SectionWrapper> -->

    <!-- TUTORIALS LISTING -->
    <!-- <SectionWrapper
      v-for="category in parsedTutorialsList"
      v-show="parsedTutorialsList"
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
    </SectionWrapper> -->

    <!-- hasSearchQuery && searchInitiated -->
    <!-- v-show="hasSearchQuery && searchInitiated" -->
    <!-- SEARCH RESULTS -->
    <SectionWrapper class="section-no-top-margin">
      <h2
        v-if="route.query.q"
        class="about-results"
      >
        Displaying {{ hits.length }} results for
        <strong><em>“{{ route.query.q }}</em></strong>”
      </h2>
      <h2
        v-else
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>

      <SectionTeaserCard
        class="section-teaser-card"
        :items="parseHitsResults"
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
