<script setup>
// COMPONENTS
import { MastheadSecondary, SearchGeneric, SectionWrapper, DividerWayFinder, DividerGeneral, RichText, SectionCardsWithIllustrations, SearchResult, SectionPagination } from '@ucla-library-monorepo/ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'

// UTILITIES
import config from '../utils/searchConfig'
import queryFilterHasValues from '../utils/queryFilterHasValues'
import parseFilters from '../utils/parseFilters'
import formatDates from '../utils/formatDates'
import formatTimes from '../utils/formatTimes'

const route = useRoute()
const page = ref({})
const from = ref(0)
const previous = ref(false)
const next = ref(false)
const prevFrom = ref(0)
const nextFrom = ref(0)
const size = ref(10)
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: route.query.filters ? parseFilters(decodeURIComponent(route.query.filters)) : {},
})
const isSearching = ref(true)

// This watcher is called when router push updates the query params
watch(
  () => route.query,
  (newVal, oldVal) => {
    // console.log('Site search page ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    // console.log('Site search page ES queryText updated', searchGenericQuery.value.queryText)
    searchGenericQuery.value.queryFilters = route.query.filters ? parseFilters(decodeURIComponent(route.query?.filters)) : {}
    searchES()
  }, { deep: true, immediate: true }
)

async function searchES() {
  page.value = {}
  // console.log('In fetch start')
  try {
    if (
      (route.query.q && route.query.q !== '') ||
      (route.query.filters &&
        queryFilterHasValues(
          parseFilters(decodeURIComponent(route.query.filters) || ''),
          config.siteSearch.filters
        ))
    ) {
      // console.log('Search site in router query in asyc data', decodeURIComponent(route.query.filters))
      const { siteSearch } = useSearch()
      page.value = await siteSearch(
        route.query.q || '*',
        route.query.from || from.value,
        parseFilters(decodeURIComponent(route.query.filters || '')),
        config.siteSearch.sectionHandleMapping
      )
      if (
        page.value &&
        page.value.hits &&
        page.value.hits.total.value > 0
      ) {
        // This is pagination logic
        from.value = Number(route.query.from || 0)
        // console.log("from 1: " + from.value)
        if (from.value + size.value >= page.value.hits.total.value)
          next.value = false
        else next.value = true

        if (from.value === 0) previous.value = false
        else previous.value = true

        if (next.value) nextFrom.value = from.value + size.value
        if (previous.value) prevFrom.value = from.value - size.value
        // Pagination logic ends
        noResultsFound.value = false
        isSearching.value = false
      } else {
        noResultsFound.value = true
        page.value = {}
        from.value = 0
        previous.value = false
        next.value = false
        isSearching.value = false
      }
    }
    else {
      isSearching.value = false
      // console.log('No Search site in router query in asyc data')
      noResultsFound.value = true
      page.value = {}
    }

    // console.log('Search Response: ' + JSON.stringify(page.value))
  } catch (e) {
    console.log('Search Site Error found ' + JSON.stringify(e))
    throw e
  }
}

const parsedSearchResults = computed(() => {
  return page.value?.hits?.hits?.map((obj) => {
    if (obj._source.sectionHandle === 'Libguide')
      obj._source.sectionHandleDisplayName = 'Libguide'
    if (
      obj._source.sectionHandle === 'Libguide' ||
      obj._source.sectionHandle === 'externalResource' ||
      obj._source.sectionHandle === 'affiliateLibrary'
    ) {
      return {
        ...obj._source,
        to: obj._source.uri ? obj._source.uri : obj._source.to,
      }
    } else if (obj._source.externalResourceUrl != null) {
      return {
        ...obj._source,
        to: obj._source.externalResourceUrl != null
          ? _get(obj._source, 'externalResourceUrl', '')
          : obj._source.uri
            ? `/${obj._source.uri}`
            : `/${obj._source.to}`,
      }
    }

    else {
      return {
        ...obj._source,
        startDate: obj._source.sectionHandle === 'event'
          ? _get(
            obj._source,
            'startDateWithTime',
            null
          )
          : _get(
            obj._source,
            'startDate',
            null
          ),
        endDate: obj._source.sectionHandle === 'event' ? _get(obj._source, 'endDateWithTime', null) : _get(obj._source, 'endDate', null),
        to: obj._source.uri
          ? `/${obj._source.uri}`
          : `/${obj._source.to}`,
      }
    }
  })
})
const parsePrev = computed(() => {
  if (previous.value)
    return `${route.path}?q=${route.query.q}&filters=${encodeURIComponent(route.query.filters || '')}&from=${prevFrom.value}`
  return ''
})
const parseNext = computed(() => {
  if (next.value)
    return `${route.path}?q=${route.query.q}&filters=${encodeURIComponent(route.query.filters || '')}&from=${nextFrom.value}`
  return ''
})
const searchAdditionalResources = computed(() => {
  return [
    {
      iconName: 'illustration-book-binding',
      to: 'https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&_ga=2.45842788.1343136842.1666633264-241535065.1664829276',
      title: 'UC Library Search',
      text: 'Locate books, journal articles, course reserves and other content at UCLA, other UC schools and beyond.',
      isHorizontal: false,
    },
    {
      iconName: 'illustration-find-space',
      to: 'https://guides.library.ucla.edu/az.php?&_ga=2.94193502.2106042584.1646675621-1729352043.1643913957',
      title: 'A-Z Databases',
      text: 'Find the best library databases for your research.',
      isHorizontal: false,
    },
    {
      iconName: 'illustration-digitized-resources',
      to: 'https://guides.library.ucla.edu/index.php',
      title: 'Library Research Guides',
      text: 'Our research guides help users of all backgrounds discover resources by subject, course, format or topic.',
      isHorizontal: false,
    },
  ]
})

function parseCategory(sectionHandle) {
  if (!sectionHandle) return
  if (sectionHandle === 'Libguide') {
    return 'RESEARCH GUIDE'
  } else
    return sectionHandle
      .split(/(?=[A-Z])/)
      .join(' ')
      .toUpperCase()
}

onMounted(async () => {
  // console.log('onMounted called')
  // console.log("ESREADkey:" + config.esReadKey)
  // console.log("ESURLkey:" + config.esURL)
  await setFilters()
})

function setFilters() {
  const filters = []
  // Not using searchconfig here as types filter data comming from ES was not useful
  const obj = {
    label: config.siteSearch.filters[0].label,
    esFieldName: config.siteSearch.filters[0].esFieldName,
    inputType: config.siteSearch.filters[0].inputType,
    items:
      config.siteSearch.sectionHandleMapping.reduce(
        (accumulator, value) => {
          return [...accumulator, { name: value.key }]
        },
        []
      ) || [],
  }
  // console.log('getlisting obj:' + JSON.stringify(obj))
  filters.push(obj)

  searchFilters.value = filters
}

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
  try {
    useRouter().push({
      path: '/search-site/',
      query: {
        q: data.text,
        filters: encodeURIComponent(filters.join(' AND '))
      },
    })
  } catch (e) {
    throw new Error('ES error maybe: ' + e)
  }
}

const parsedDate = (props) => {
  if (props.startDate) {
    return props.endDate ? formatDates(props.startDate, props.endDate, props.dateFormat) : formatDates(props.startDate, props.startDate, props.dateFormat)
  }
  return ''
}
const parsedTime = (props) => {
  return formatTimes(props.startDate, props.endDate)
}

useHead({
  title: 'Search Site',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge.',
    },
  ],
})

</script>
<template lang="html">
  <main
    id="main"
    class="page page-search-site"
  >
    <MastheadSecondary title="Search Results" />

    <SearchGeneric
      :search-generic-query="searchGenericQuery"
      placeholder="Search library website"
      :filters="searchFilters"
      @search-ready="getSearchData"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="search-margin"
        color="default"
      />
    </SectionWrapper>

    <SectionWrapper
      v-show="isSearching"
      class="results section-no-top-margin"
    >
      <div>
        <p>...Search results loading</p>
      </div>
    </SectionWrapper>
    <div v-show="!isSearching">
      <SectionWrapper
        v-show="page && page?.hits && page?.hits?.hits?.length > 0"
        class="meta section-no-top-margin"
      >
        <h2
          v-show="!page.fuzzySearchPerformed"
          class="about-results"
        >
          Displaying {{ page?.hits?.total?.value }} results for
          <strong><em>“{{ route.query.q }}”</em></strong>
        </h2>
        <h2
          v-show="page.fuzzySearchPerformed"
          class="about-results"
        >
          Displaying {{ page?.hits?.total?.value }} results for misspelled search
          Term
          <strong><em>“{{ route.query.q }}”</em></strong>
        </h2>

        <SectionWrapper
          v-for="(result, index) in parsedSearchResults"
          :key="`SearchResultBlock${index}`"
          class="section-wrapper-block"
        >
          <SearchResult
            :title="result.title"
            :category="parseCategory(result.sectionHandle)"
            :summary="result.summary || result.text"
            :to="result.to"
            class="search-result-item"
          >
            <template #mid>
              <div class="date-time">
                <time
                  v-if="result.startDate"
                  class="schedule-item"
                >{{ parsedDate(result) }}</time>
                <time
                  v-if="result.startDate && result.sectionHandle === 'event'"
                  class="schedule-item"
                >{{ parsedTime(result) }}</time>
                <div
                  v-if="result.ongoing"
                  class="ongoing-item"
                >
                  Ongoing
                </div>
              </div>
            </template>
          </SearchResult>
          <DividerGeneral class="divider-general" />
        </SectionWrapper>
        <SectionWrapper v-if="page?.hits?.total?.value > 10">
          <SectionPagination
            :previous-to="parsePrev"
            :next-to="parseNext"
          />
        </SectionWrapper>
      </SectionWrapper>
      <SectionWrapper
        v-show="noResultsFound"
        class="section-no-top-margin"
      >
        <RichText class="error-text">
          <h2>Search for “{{ route.query.q }}” not found.</h2>
          <p>
            We can’t find the page you are looking for, but we're
            here to help. Try these regularly visited links or one
            of the Additional Search Tools below.
          </p>
          <ul>
            <li>
              <a href="https://library.ucla.edu/">UCLA Library Home</a>
            </li>
            <li>
              <a href="https://www.library.ucla.edu/research-teaching-support/research-help/">Research Help</a>
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
      </SectionWrapper>

      <SectionWrapper>
        <DividerWayFinder class="divider-way-finder" />
      </SectionWrapper>

      <SectionWrapper>
        <SectionCardsWithIllustrations
          class="section-cards"
          :items="searchAdditionalResources"
          section-title="Additional Search Tools"
        />
      </SectionWrapper>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.section-wrapper-block:last-child {
  .divider-general {
    display: none;
  }
}

.date-time {
  display: flex;
  flex-direction: column;

  @include step-0;
  color: var(--color-secondary-grey-05);
  // margin: $component-02 + px 0 var(--space-s);
}
</style>
