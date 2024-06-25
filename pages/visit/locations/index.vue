<script setup>
// COMPONENTS
import { MastheadSecondary, SearchGeneric, SectionLocationList, ButtonMore, SectionWrapper, DividerWayFinder, RichText, BlockCallToAction } from 'ucla-library-website-components'

import { onMounted } from 'vue'

// UTILITIES
import _get from 'lodash/get'
import getListingFilters from '../utils/getListingFilters'
import config from '../utils/searchConfig'
import queryFilterHasValues from '../utils/queryFilterHasValues'
import parseFilters from '../utils/parseFilters'

// HELPERS
import removeTags from '../utils/removeTags'
import parseAddress from '../utils/parseAddress'
import parseAmenities from '../utils/parseAmenities'

// GQL
import LOCATIONS_LIST from '../gql/queries/LocationsList.gql'

const { $graphql, $dataApi } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData('locations-list', async () => {
  const data = await $graphql.default.request(LOCATIONS_LIST)

  return data
})

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.', fatal: true
  })
}
if (!data.value.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

// console.log('In endowment listing page data.value: ', JSON.stringify(data.value))
// Index data on server only
if (data?.value?.entry.affiliateLibraries && data.value.entry.affiliateLibraries.length > 0 && process.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  for (const affiliateLibrary of data.value.entry.affiliateLibraries) {
    await $elasticsearchplugin.index(
      affiliateLibrary,
      affiliateLibrary.slug
    )
  }
}

const page = ref(_get(data.value, 'entry', {}))
const uclaLibraries = ref(_get(data.value, 'uclaLibraries', []))
const affiliateLibraries = ref(_get(data.value, 'affiliateLibraries', []))
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
  uclaLibraries.value = _get(newVal, 'uclaLibraries', [])
  affiliateLibraries.value = _get(newVal, 'affiliateLibraries', [])
})

const showOtherCampus = ref(false)
const hits = ref([])
const title = ref('')
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})
// ELASTICSEARCH
async function searchES() {
  if (
    (route.query.q && route.query.q !== '') ||
    (route.query.filters &&
      queryFilterHasValues(
        parseFilters(route.query.filters || ''),
        config.locationsList.filters
      ))
  ) {
    // console.log('Search ES HITS query,', route.query.q)
    const queryText = route.query.q || '*'
    const results = await $dataApi.keywordSearchWithFilters(
      queryText,
      config.locationsList.searchFields,
      'sectionHandle:location OR sectionHandle:affiliateLibrary',
      parseFilters(route.query.filters || ''),
      config.locationsList.sortField,
      config.locationsList.orderBy,
      config.locationsList.resultFields,
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
  } else {
    // console.log('data.value', data.value)
    hits.value = []
    noResultsFound.value = false
  }
}

// Watch route for new queries
watch(
  () => route.query,
  (newVal, oldVal) => {
    // console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    // TODO is the line correct? empty object not array?
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    searchES()
  }, { deep: true, immediate: true }
)

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text)
    },
  ],
})

// Computed
const parsedUclaLibraries = computed(() => {
  return uclaLibraries.value.map((obj) => {
    return {
      ...obj,
      to: obj.uri ? `/${obj.uri}` : null,
      image: _get(obj, 'heroImage[0].image[0]', null),
      address: parseAddress(obj)[0],
      addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
      amenities:
        obj.amenitiesIcons.length > 0
          ? parseAmenities(obj)
          : null,
      isUclaLibrary: true,
    }
  })
})

const parsedAffiliateLibraries = computed(() => {
  return affiliateLibraries.value.map((obj) => {
    return {
      ...obj,
      to: obj.affiliateLibraryUrl
        ? obj.affiliateLibraryUrl
        : null,
      image: _get(obj, 'heroImage[0].image[0]', null),
      address: parseAddress(obj)[0],
      addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
      amenities:
        obj.amenitiesIcons.length !== 0
          ? parseAmenities(obj)
          : null,
      isUclaLibrary: false,
    }
  })
})

// COMPUTED VALUES

const parsedPlaceholder = computed(() => {
  return `Search ${page.value.title}`
})

const parseHitsResults = computed(() => {
  return parseHits(hits.value)
})
// METHODS
function showMoreOtherCampusLibrary() {
  showOtherCampus.value = !showOtherCampus.value
}

async function setFilters() {
  const searchAggsResponse = await $dataApi.getAggregations(
    config.locationsList.filters,
    'location'
  )
  console.log(
    'Search Aggs Response: ' + JSON.stringify(searchAggsResponse)
  )
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.locationsList.filters
  )
}

function parseHits(hits = []) {
  return hits?.map((obj) => {
    // //console.log(obj["_source"]["_source"]["image"])
    return {
      ...obj._source,
      to:
        obj._source.locationType === 'affiliateLibrary'
          ? obj._source.affiliateLibraryUrl
          : `/${obj._source.uri}`,
      image: _get(obj._source, 'heroImage[0].image[0]', null),
      address: parseAddress(obj._source)[0],
      addressLink: `https://map.ucla.edu/?id=${obj._source.campusMapId}&e=true`,
      amenities:
        obj._source.amenitiesIcons.length !== 0
          ? parseAmenities(obj._source)
          : null,
      isUclaLibrary:
        obj._source.locationType !== 'affiliateLibrary',
    }
  })
}
// console.log('parseHits: ', parseHits())

/* TODO: Refactor when search functionality is ready */
function getSearchData(data) {
  const filters = []
  // if filters are selected, add to the filters parameter
  if (data.filters) {
    for (const key in data.filters) {
      if (data.filters[key].length > 0) {
        filters.push(`${key}:(${data.filters[key].join(' OR ')})`)
      }
    }
  }
  useRouter().push({
    path: '/visit/locations',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    },
  })
}
// ON MOUNTED HOOK
onMounted(async () => {
  await setFilters()
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-location"
  >
    <MastheadSecondary
      :title="page.title"
      :text="page.text"
    />

    <!-- SEARCH -->
    <SearchGeneric
      search-type="about"
      :filters="searchFilters"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder
        color="visit"
        class="search-margin"
      />
    </SectionWrapper>

    <!-- UCLA LIBRARIES -->
    <SectionWrapper
      v-show="page &&
        uclaLibraries &&
        parsedUclaLibraries.length &&
        hits.length == 0 &&
        !noResultsFound
        "
      class="section-no-top-margin"
      section-title="UCLA Library Locations"
    >
      <SectionLocationList
        class="blockLocationListWrapper"
        :items="parsedUclaLibraries"
      />
      <ButtonMore
        text="See Other Campus Libraries & Archives"
        @click="showMoreOtherCampusLibrary()"
      />
    </SectionWrapper>

    <!-- AFFILIATE LIBRARIES -->
    <SectionWrapper
      v-show="page &&
        affiliateLibraries &&
        parsedAffiliateLibraries.length &&
        showOtherCampus &&
        hits.length == 0 &&
        !noResultsFound
        "
      section-title="Other Campus Libraries & Archives"
    >
      <SectionLocationList
        class="blockLocationListWrapper"
        :items="parsedAffiliateLibraries"
      />
    </SectionWrapper>

    <!-- RESULTS -->
    <SectionWrapper
      v-show="hits && hits.length > 0"
      class="meta section-no-top-margin"
    >
      <h2
        v-if="route.query.q"
        class="about-results"
      >
        Displaying {{ hits.length }} results for
        <strong><em>"{{ route.query.q }}</em></strong>"
      </h2>
      <h2
        v-else
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>

      <SectionLocationList
        class="blockLocationListWrapper"
        :items="parseHitsResults"
      />
    </SectionWrapper>

    <!-- NO RESULTS -->
    <SectionWrapper
      v-show="noResultsFound"
      class="meta section-no-top-margin"
    >
      <div class="error-text">
        <RichText>
          <h2>Search for "{{ route.query.q }}" not found.</h2>
          <p>
            We can't find the term you are looking for on this page,
            but we're here to help. <br>
            Try searching the whole site from
            <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these
            regularly visited links:
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
        </RichText>
      </div>
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider-way-finder"
        color="visit"
      />
    </SectionWrapper>

    <SectionWrapper>
      <BlockCallToAction
        class="section block-call-to-action"
        :is-global="true"
      />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-location {
  .about-results {
    margin-top: var(--space-xl);
    margin-bottom: var(--space-l);
  }
}
</style>
