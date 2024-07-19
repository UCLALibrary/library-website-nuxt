<!-- eslint-disable no-console -->
<script setup>
// COMPONENTS
import { MastheadSecondary, SearchGeneric, SectionWrapper, DividerWayFinder, BannerFeatured, SectionTeaserHighlight, SectionTeaserCard, SectionTeaserList, RichText, BlockCallToAction } from 'ucla-library-website-components'

// UTILITIES
import _get from 'lodash/get'

// GQL
import EXHIBITIONS_AND_EVENTS_LIST from '../gql/queries/ExhibitionsAndEventsList.gql'
import EXHIBITIONS_AND_EVENTS_LIST_SINGLE from '../gql/queries/ExhibitionsAndEventsListSingle.gql'

// HELPERS
import config from '../utils/searchConfig'
import getListingFilters from '../utils/getListingFilters'
import queryFilterHasValues from '../utils/queryFilterHasValues'
import removeTags from '../utils/removeTags'
import sortByTitle from '../utils/sortByTitle'

const { $graphql, $dataApi } = useNuxtApp()

const { data, error } = await useAsyncData('events-list', async () => {
  const data = await $graphql.default.request(EXHIBITIONS_AND_EVENTS_LIST)
  const single = await $graphql.default.request(EXHIBITIONS_AND_EVENTS_LIST_SINGLE)

  return { data, single }
})
// console.log('Events and exhibition data: ', data.value, 'error: ', error.value)

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.', fatal: true
  })
}

if (!data.value?.data && !data.value?.single) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
if (data.value.single && import.meta.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  const doc = {
    title: data.value.single.title,
    text: data.value.single.text,
    uri: 'visit/events-exhibitions/'
  }
  await $elasticsearchplugin.index(doc, 'events-exhibition-list')
}

const route = useRoute()

// Data
const page = ref(_get(data.value.single, 'entry', {}))
const events = ref(_get(data.value.data, 'events', []))
const series = ref(_get(data.value.data, 'series', []))
const exhibitions = ref(_get(data.value.data, 'exhibitions', []))

watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal.single, 'entry', {})
  events.value = _get(newVal.data, 'events', [])
  series.value = _get(newVal.data, 'series', [])
  exhibitions.value = _get(newVal.data, 'exhibitions', [])
})

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text),
    },
  ],
})

const parsedFeaturedEventsAndExhibits = computed(() => {
  return page.value.featuredEvents.map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
      title: obj.eventTitle ? obj.eventTitle : obj.title,
      image: _get(obj, 'heroImage[0].image[0]', null),
      startDate:
        obj.typeHandle === 'event'
          ? obj.startDateWithTime
          : obj.startDate,
      endDate:
        obj.typeHandle === 'event'
          ? obj.endDateWithTime
          : obj.endDate,
      prompt:
        obj.typeHandle === 'exhibition'
          ? 'View exhibition'
          : obj.workshopOrEventSeriesType ===
            'visit/events-exhibitions'
            ? 'View event series'
            : 'View event',
      text:
        obj.typeHandle === 'event'
          ? obj.eventDescription
          : obj.summary,
      locations:
        obj.typeHandle === 'exhibition'
          ? obj.associatedLocationsAndPrograms
          : obj.associatedLocations[0] != null
            ? obj.associatedLocations
            : obj.eventLocation != null
              ? obj.eventLocation
              : obj.associatedLocationsAndPrograms,
    }
  })
})

const parsedBannerHeader = computed(() => {
  return parsedFeaturedEventsAndExhibits.value[0]
})

const parsedSectionHighlight = computed(() => {
  const highlights = parsedFeaturedEventsAndExhibits.value.slice(1)
  return highlights.map((obj) => {
    return {
      ...obj,
      category:
        obj.typeHandle === 'exhibition'
          ? 'Exhibition'
          : obj.workshopOrEventSeriesType ===
            'visit/events-exhibitions'
            ? 'Event Series'
            : obj.workshopOrEventSeriesType ===
              'help/services-resources'
              ? 'Workshop Series'
              : obj.eventType != null && obj.eventType.length > 0
                ? obj.eventType[0].title
                : 'Event',
      title: obj.title,
    }
  })
})

const parsedEvents = computed(() => {
  return [...(events.value || [])].map((obj) => {
    const eventOrExhibtion = obj || {}
    return {
      ...eventOrExhibtion,
      to: `/${eventOrExhibtion.to}`,
      image: _get(eventOrExhibtion, 'image[0]', null),
      startDate: _get(
        eventOrExhibtion,
        'startDateWithTime',
        null
      ),
      endDate: _get(eventOrExhibtion, 'endDateWithTime', null),
      category: _get(
        eventOrExhibtion,
        'eventType[0].title',
        null
      ),
      locations:
        eventOrExhibtion.associatedLocations[0] != null
          ? eventOrExhibtion.associatedLocations
          : eventOrExhibtion.eventLocation,
    }
  })
})

const parsedSeriesAndExhibitions = computed(() => {
  return [...(page.value.featuredEventSeriesAndExhibitions || [])]
    .sort(sortByTitle)
    .map((obj) => {
      return {
        ...obj,
        category:
          obj.typeHandle === 'exhibition'
            ? 'Exhibition'
            : obj.workshopOrEventSeriesType ===
              'visit/events-exhibitions'
              ? 'Event Series'
              : obj.workshopOrEventSeriesType ===
                'help/services-resources'
                ? 'Workshop Series'
                : obj.eventType != null
                  ? obj.eventType[0].title
                  : 'Event',
        to: `/${obj.to}`,
        image: _get(obj, 'heroImage[0].image[0]', null),
      }
    })
})

const parseHitsResults = computed(() => {
  return parseHits(hits.value)
})

const parsedPlaceholder = computed(() => {
  return `Search ${page.value.title}`
})

const routeFilters = computed(() => {
  return parseFilters(_get(route, 'query.filters', ''))
})

// console.log('route filter values: ', routeFilters.value)

// ES search functionality
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
  // console.log("hasSearchQuery", (route.query.q !== undefined && route.query.q !== ''), (route.query.filters && queryFilterHasValues(routeFilters.value, config.eventsExhibitionsList.filters)), (routeFilters.value.past[0] === 'yes'))
  return (route.query.q !== undefined && route.query.q !== '')
    || (route.query.filters && queryFilterHasValues(routeFilters.value, config.eventsExhibitionsList.filters))
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
  // console.log("searchES route details", route.query.q, route.query.filters, routeFilters.value.past)
  // Followed what was done in Nuxt 2 https://github.com/UCLALibrary/library-website-nuxt/blob/main/pages/visit/events-exhibitions/index.vue#L221C19-L221C33
  if (hasSearchQuery.value) {
    // console.log('Search ES HITS query,', route.query.q)

    const queryText = route.query.q || '*'

    const { past, ...filters } = routeFilters.value

    const extrafilters = (past && past.length > 0 && past[0] === 'yes')
      ? []
      : [
        {
          range: {
            endDateWithTime: {
              gte: 'now',
            },
          },
        },
      ]

    const results = await $dataApi.keywordSearchWithFilters(
      queryText,
      config.eventsExhibitionsList.searchFields,
      'sectionHandle:event OR sectionHandle:exhibition OR sectionHandle:eventSeries',
      filters, // following this line in nuxt 2 https://github.com/UCLALibrary/library-website-nuxt/blob/main/pages/visit/events-exhibitions/index.vue#L245C19-L245C24
      config.eventsExhibitionsList.sortField,
      config.eventsExhibitionsList.orderBy,
      config.eventsExhibitionsList.resultFields,
      config.eventsExhibitionsList.filters,
      extrafilters,
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
  return hits.map((obj) => {
    if (obj._source.sectionHandle === 'event') {
      return {
        ...obj._source,
        to: `/${obj._source.to}`,
        image: _get(obj._source, 'image[0].image[0]', null),
        startDate: _get(
          obj._source,
          'startDateWithTime',
          null
        ),
        endDate: _get(obj._source, 'endDateWithTime', null),
        category: _get(
          obj._source,
          'eventType[0].title',
          null
        ),
      }
    } else if (obj._source.sectionHandle === 'exhibition') {
      return {
        ...obj._source,
        to: `/${obj._source.uri}`,
        image: _get(obj._source, 'image[0].image[0]', null),
        startDate: _get(obj._source, 'startDate', null),
        endDate: _get(obj._source, 'endDate', null),
        category: _get(obj._source, 'sectionHandle', null),
      }
    } else if (obj._source.sectionHandle === 'eventSeries') {
      return {
        ...obj._source,
        to: `/${obj._source.uri}`,
        image: _get(obj._source, 'image[0].image[0]', null),
        startDate: _get(obj._source, 'startDate', null),
        endDate: _get(obj._source, 'endDate', null),
        category: 'Event Series',
      }
    } else {
      return {
        ...obj._source,
        to: `/${obj._source.uri}`,
      }
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
    path: '/visit/events-exhibitions/',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    }
  })
}

async function setFilters() {
  const searchAggsResponse = await $dataApi.getAggregations(
    config.eventsExhibitionsList.filters,
    'event'
  )
  /* console.log(
            "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
        ) */
  searchFilters.value = [
    ...getListingFilters(
      searchAggsResponse,
      config.eventsExhibitionsList.filters
    ),
    {
      esFieldName: 'past',
      inputType: 'single-checkbox',
      label: 'Include Past Events',
    }
  ]
}

onMounted(async () => {
  await setFilters()
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-events-exhibits"
  >
    <MastheadSecondary
      :title="page.title"
      :text="page.text"
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
      <DividerWayFinder class="search-margin" />
    </SectionWrapper>

    <!-- HIGHLIGHTED & FEATURED EVENTS -->
    <SectionWrapper
      v-show="parsedFeaturedEventsAndExhibits.length > 0 &&
        hits.length == 0 &&
        !noResultsFound
        "
      class="section-no-top-margin"
    >
      <BannerFeatured
        v-if="parsedFeaturedEventsAndExhibits.length > 0 &&
          hits.length == 0 &&
          !noResultsFound
        "
        :media="parsedBannerHeader.image"
        :title="parsedBannerHeader.title"
        breadcrumb="Featured"
        :align-right="false"
        :start-date="parsedBannerHeader.startDate"
        :end-date="parsedBannerHeader.endDate"
        :text="parsedBannerHeader.text"
        :to="parsedBannerHeader.to"
        :prompt="parsedBannerHeader.prompt"
        :locations="parsedBannerHeader.locations"
        :section-handle="parsedBannerHeader.sectionHandle"
        class="banner section-featured-banner"
      />

      <DividerGeneral v-if="parsedSectionHighlight.length" />

      <SectionTeaserHighlight
        class="section"
        :items="parsedSectionHighlight"
      />
    </SectionWrapper>

    <SectionWrapper
      v-show="parsedFeaturedEventsAndExhibits.length > 0 &&
        parsedEvents.length &&
        hits.length == 0 &&
        !noResultsFound
        "
      theme="divider"
    >
      <DividerWayFinder color="visit" />
    </SectionWrapper>

    <!-- UPCOMING EVENTS -->
    <SectionWrapper
      v-show="parsedEvents &&
        parsedEvents.length > 0 &&
        hits.length == 0 &&
        !noResultsFound
        "
      section-title="All Upcoming Events"
    >
      <SectionTeaserList :items="parsedEvents" />
    </SectionWrapper>

    <SectionWrapper
      v-show="parsedEvents &&
        parsedEvents.length > 0 &&
        hits.length == 0 &&
        !noResultsFound
        "
      theme="divider"
    >
      <DividerWayFinder color="visit" />
    </SectionWrapper>

    <!-- EVENT SERIES & EXHIBITIONS -->
    <SectionWrapper
      v-show="parsedSeriesAndExhibitions &&
        parsedSeriesAndExhibitions.length > 0 &&
        hits.length == 0 &&
        !noResultsFound
        "
      section-title="Event Series & Exhibitions"
    >
      <SectionTeaserCard :items="parsedSeriesAndExhibitions" />
    </SectionWrapper>
    <SectionWrapper
      v-show="hits && hits.length > 0"
      class="section-no-top-margin"
    >
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

      <SectionTeaserList :items="parseHitsResults" />
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
            <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these
            regularly visited links:
          </p>
          <ul>
            <li>
              <a href="https://www.library.ucla.edu/research-teaching-support/research-help">Research
                Help</a>
            </li>
            <li>
              <a href="/help/services-resources/ask-us/">Ask Us</a>
            </li>
            <li>
              <a href="https://www.library.ucla.edu/use/access-privileges/disability-resources">Accessibility
                Resources</a>
            </li>
          </ul>
        </RichText>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <DividerWayFinder color="visit" />
    </SectionWrapper>
    <SectionWrapper>
      <BlockCallToAction
        class="section block-call-to-action"
        :is-global="true"
      />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped></style>
