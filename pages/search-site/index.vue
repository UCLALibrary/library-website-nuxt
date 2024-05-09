<script setup>
// UTILITIES
import getListingFilters from '../utils/getListingFilters'
import config from '../utils/searchConfig'
import queryFilterHasValues from '../utils/queryFilterHasValues'

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
  queryFilters:
    (route.query.filters &&
      JSON.parse(route.query.filters)) ||
    {},
})
const isSearching = ref(true)

const { $dataApi } = useNuxtApp()
async function searchES() {
  page.value = {}
  // console.log("In fetch start")
  try {
    if (
      (route.query.q && route.query.q !== '') ||
      (route.query.filters &&
        queryFilterHasValues(
          route.query.filters,
          config.siteSearch.filters
        ))
    ) {
      console.log('in router query in asyc data')
      page.value = await $dataApi.siteSearch(
        route.query.q || '*',
        route.query.from || from.value,
        (route.query.filters &&
          JSON.parse(route.query.filters)) ||
        {},
        config.siteSearch.sectionHandleMapping
      )
      if (
        page.value &&
        page.value.hits &&
        page.value.hits.total.value > 0
      ) {
        // console.log("search success")
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
        // console.log("what is start now:" + from.value)
        // Pagination logic ends
        noResultsFound.value = false
      } else {
        noResultsFound.value = true
        page.value = {}
        from.value = 0
        previous.value = false
        next.value = false
      }

    } else {
      noResultsFound.value = true
      page.value = {}
    }
    isSearching.value = false
    // console.log("Search Response: " + JSON.stringify(this.page))
  } catch (e) {
    throw new Error('Some Error with ES search ' + e)
  }
}

const parsedSearchResults = computed(() => {
  return page.value.hits.hits.map((obj) => {
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
    } else {
      return {
        ...obj._source,
        to: obj._source.uri
          ? `/${obj._source.uri}`
          : `/${obj._source.to}`,
      }
    }
  })
})
const parsePrev = computed(() => {
  if (previous.value)
    return `${route.path}?q=${route.query.q}&from=${prevFrom.value}`
  return ''
})
const parseNext = computed(() => {
  if (next.value)
    return `${route.path}?q=${route.query.q}&from=${nextFrom.value}`
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

// This watcher is called when router push updates the query params
watch(
  () => route.query,
  (newVal, oldVal) => {
    console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    searchGenericQuery.value.queryFilters = (route.query.filters && JSON.parse(route.query.filters)) || {}
    searchES()
  }, { deep: true, immediate: true }
)
onMounted(async () => {
  console.log('onMounted called')
  // console.log("ESREADkey:" + config.esReadKey)
  // console.log("ESURLkey:" + config.esURL)
  await setFilters()
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
  console.log('getlisting obj:' + JSON.stringify(obj))
  filters.push(obj)

  searchFilters.value = filters
}

function getSearchData(data) {
  // const queryString = new URLSearchParams(data.filters).toString()
  // console.log("using url search params:" + queryString)
  try {
    useRouter().push({
      path: route.path,
      query: {
        q: data.text,
        filters: JSON.stringify(data.filters),
      },
    })
  } catch (e) {
    throw new Error('ES error maybe: ' + e)
  }
}

</script>
<template lang="html">
  <main
    id="main"
    class="page page-search-site"
  >
    <masthead-secondary title="Search Results" />

    <search-generic
      :search-generic-query="searchGenericQuery"
      placeholder="Search library website"
      :filters="searchFilters"
      @search-ready="getSearchData"
    />

    <section-wrapper theme="divider">
      <divider-way-finder
        class="search-margin"
        color="default"
      />
    </section-wrapper>

    <section-wrapper
      v-if="isSearching"
      class="results section-no-top-margin"
    >
      <div>
        <p>...Search results loading</p>
      </div>
    </section-wrapper>
    <div v-else>
      <section-wrapper
        v-show="page && page.hits && page.hits.hits.length > 0"
        class="meta section-no-top-margin"
      >
        <h2 class="about-results">
          Displaying {{ page.hits.total.value }} results for
          <strong><em>“{{ route.query.q }}”</em></strong>
        </h2>

        <section-wrapper
          v-for="(result, index) in parsedSearchResults"
          :key="`SearchResultBlock${index}`"
          class="section-wrapper-block"
        >
          <search-result
            :title="result.title"
            :category="parseCategory(result.sectionHandle)"
            :summary="result.summary || result.text"
            :to="result.to"
            class="search-result-item"
          />
          <divider-general class="divider-general" />
        </section-wrapper>
        <section-wrapper v-if="page.hits.total.value > 10">
          <section-pagination
            :previous-to="parsePrev"
            :next-to="parseNext"
          />
        </section-wrapper>
      </section-wrapper>
      <section-wrapper
        v-show="noResultsFound"
        class="section-no-top-margin"
      >
        <rich-text class="error-text">
          <h2>Search for “{{ route.query.q }}” not found.</h2>
          <p>
            We can’t find the page you are looking for, but we're
            here to help. Try these regularly visited links or one
            of the Additional Search Tools below.
          </p>
          <ul>
            <li>
              <a href="https://library.ucla.edu">UCLA Library Home</a>
            </li>
            <li>
              <a href="https://www.library.ucla.edu/research-teaching-support/research-help">Research Help</a>
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
      </section-wrapper>

      <section-wrapper>
        <divider-way-finder class="divider-way-finder" />
      </section-wrapper>

      <section-wrapper>
        <section-cards-with-illustrations
          class="section-cards"
          :items="searchAdditionalResources"
          section-title="Additional Search Tools"
        />
      </section-wrapper>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.section-wrapper-block:last-child {
  .divider-general {
    display: none;
  }
}
</style>
