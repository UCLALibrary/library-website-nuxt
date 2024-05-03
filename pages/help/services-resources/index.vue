<script setup>
import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'

// SEARCH UTILS
import getListingFilters from '../utils/getListingFilters'
import config from '../utils/searchConfig'
import queryFilterHasValues from '../utils/queryFilterHasValues'

// UTILITIES
import removeTags from '../utils/removeTags'
import sortByTitle from '../utils/sortByTitle'

// GQL
import SERVICE_RESOURCE_WORKSHOPSERIES_LIST from '../gql/queries/ServiceResourceWorkshopSeriesList.gql'
import HELP_TOPIC_LIST from '../gql/queries/HelpTopicList.gql'

const { $graphql, $elasticsearchplugin, $dataApi } = useNuxtApp()
const route = useRoute()

const { data, error } = await useAsyncData('services-resources-list', async () => {
  const data = await $graphql.default.request(SERVICE_RESOURCE_WORKSHOPSERIES_LIST)
  const helpTopicData = await $graphql.default.request(HELP_TOPIC_LIST)
  return { data, helpTopicData }
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.data && !data.value.helpTopicData) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

// ELASTIC SEARCH INDEX
// GETS DATA FROM CRAFT
// CREATES ES INDEX TO BE SEARCHED
// CHECK THAT NUXT IS RUNNING ON THE SERVER (process.server)
console.log('DATA-DATA-DATA-DATA' + data)
if (
  data.value.externalResource &&
  data.value.externalResource.length > 0 &&
  process.server
) {
  for (const externalResource of data.value.externalResource) {
    await $elasticsearchplugin.index(
      { ...externalResource, serviceOrResourceType: 'external resource' },
      externalResource.slug
    )
  }
}

const page = ref(data.value.data)
const helpTopic = ref(data.value.helpTopicData)
const summaryData = ref(_get(data.value.data, 'entry', {}))

// ENABLE PREVIEW
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal.data, 'entry', {})
  helpTopic.value = ref(newVal.helpTopicData)
  summaryData.value = ref(_get(newVal.data, 'entry', {}))
})

// FUNCTION AND METHODS RELATED TO ES
// COMPUTED METHODS THAT USE CRAFT DATA
const hits = ref([])
const noResultsFound = ref(false)
const searchFilters = ref([])

const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters:
    (route.query.filters &&
      JSON.parse(route.query.filters)) ||
    {},
})

// THIS WATCHER IS CALLED WHEN THE ROUTER PUSHES UPDATES TO THE QUERY PARAM
// ie: someone changes the query or starts viewing from a bookmarked page
watch(() => route?.query, (oldValue, newValue) => {
  if (oldValue !== newValue) {
    if (newValue?.q === '') hits.value = []
    // DO WE NEED THIS LINE BELOW?
    searchGenericQuery.value.queryText = route.query.q || ''
    searchES()
  }
}, { deep: true, immediate: true })

// ES search function
async function searchES() {
  page.value = {}
  hits.value = []
  helpTopic.value = {}
  if (
    (route?.query && route?.query.q && route?.query.q !== '') ||
    (route?.query.filters &&
      queryFilterHasValues(
        route?.query.filters,
        config.serviceOrResources.filters
      ))
  ) {
    page.value = {}
    hits.value = []
    helpTopic.value = {}

    const queryText = route.query.q || '*'
    const results = await $dataApi.keywordSearchWithFilters(
      queryText,
      config.serviceOrResources.searchFields,
      '(sectionHandle:serviceOrResource OR sectionHandle:workshopSeries OR sectionHandle:helpTopic) OR (sectionHandle:externalResource AND displayEntry:yes)',
      (route.query.filters &&
        JSON.parse(route.query.filters)) ||
      [],
      config.serviceOrResources.sortField,
      config.serviceOrResources.orderBy,
      config.serviceOrResources.resultFields,
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
    searchGenericQuery.value = {
      queryText: route.query.q || '',
      queryFilters: (route.query.filters && JSON.parse(route.query.filters)) || {},
    }
    const getSummaryData = await $graphql.default.request(
      SERVICE_RESOURCE_WORKSHOPSERIES_LIST
    )
    summaryData.value = _get(getSummaryData, 'entry', {})
  } else {
    // console.log('data.value', data.value)
    // console.log('page.value', page.value)
    hits.value = []
    noResultsFound.value = false
    page.value = {}
    helpTopic.value = {}
    page.value = await $graphql.default.request(
      SERVICE_RESOURCE_WORKSHOPSERIES_LIST
    )
    helpTopic.value = await $graphql.default.request(
      HELP_TOPIC_LIST
    )
    summaryData.value = _get(page.value, 'entry', {})
    hits.value = []
    searchGenericQuery.value.queryText = ''
  }
}

// METADATA FOR THE TAB
useHead({
  title: page.value ? summaryData.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(summaryData.value.text),
    },
  ],
})

// COMPUTED PROPERTIES

// DATA FROM CRAFT
const parsedPages = computed(() => {
  if (
    page.value &&
    (page.value.serviceOrResource ||
      page.value.workshopseries ||
      page.value.externalResource ||
      helpTopic.value.entries)
  ) {
    return [
      ...(page.value.serviceOrResource || []),
      ...(page.value.workshopseries || []),
      ...(page.value.externalResource || []),
      ...(helpTopic.value.entries || []),
    ]
  } else {
    return []
  }
})

const parsedServiceAndResourceList = computed(() => {
  const externalResourcesDisplay = (
    page.value.externalResource || []
  ).filter(obj => obj.displayEntry === 'yes')
  return [
    ...(page.value.serviceOrResource || []),
    ...(page.value.workshopseries || []),
    ...(externalResourcesDisplay || []),
    ...(helpTopic.value.entries || []),
  ]
    .sort(sortByTitle)
    .map((obj) => {
      return {
        ...obj,
        category:
          obj.category === 'help/services-resources'
            ? 'workshop series'
            : obj.typeHandle === 'helpTopic'
              ? 'help topic'
              : obj.typeHandle === 'externalResource'
                ? 'resource'
                : obj.category,
        to:
          obj.typeHandle === 'externalResource'
            ? `${obj.to}`
            : `/${obj.to}`,
      }
    })
})

const parsedPlaceholder = computed(() => {
  return `Search ${summaryData.value.title}`
})

// DATA FROM ELASTIC SEARCH
const parseHitsResults = computed(() => {
  return hits.value.map((obj) => {
    return {
      title: obj._source.title,
      sectionHandle: obj._source.sectionHandle,
      to:
        obj._source.sectionHandle === 'externalResource'
          ? `${obj._source.externalResourceUrl}`
          : `/${obj._source.uri}`,
      iconName:
        obj._source.illustrationsResourcesAndServices,
      text: obj._source.text || obj._source.summary,
      category:
        obj._source.sectionHandle === 'workshopSeries'
          ? 'workshop'
          : obj._source.sectionHandle === 'helpTopic'
            ? 'help topic'
            : obj._source.sectionHandle ===
              'externalResource'
              ? 'resource'
              : obj._source.type,
    }
  })
})

const parseDisplayResultsText = computed(() => {
  if (hits.value.length > 1)
    return `Displaying ${hits.value.length} results`
  else return `Displaying ${hits.value.length} result`
})

// ES MOUNTED for FILTERS
onMounted(async () => {
  console.log('onMounted called')
  await setFilters()
})

// ELEASTIC SEARCH METHODS
// FETCH FILTERS FROM ES
async function setFilters() {
  const searchAggsResponse = await $dataApi.getAggregations(
    config.serviceOrResources.filters,
    'serviceOrResource OR workshopSeries OR helpTopic OR externalResource',
  )
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.serviceOrResources.filters
  )
}

//  This event handler is invoked by the search-generic component (filtered search )selections
function getSearchData(data) {
  console.log('On the page getsearchdata called')
  const filterData =
    (data.filters && JSON.stringify(data.filters)) || {}
  useRouter().push({
    path: '/help/services-resources',
    query: {
      q: data.text,
      filters: filterData,
    },
  })
}
</script>

<template lang="html">
  <!-- v-ifs working on section wrappers without v-show -->
  <main
    id="main"
    class="page page-help"
  >
    <masthead-secondary
      v-if="summaryData"
      :title="summaryData.title || ''"
      :text="summaryData.text || ''"
    />

    <search-generic
      search-type="help"
      class="generic-search"
      :filters="searchFilters"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    />

    <!--
    <h3 style="margin: 30px 400px">
      {{ `Number of hits from craft is ${parsedPages.length}` }}
    </h3>
    <h3 style="margin: 30px 400px">
      {{
        hits &&
          `Number of hits from ES calling parsedhitsresults length
      ${hits.length}`
      }}
    </h3>
    -->

    <section-wrapper theme="divider">
      <divider-way-finder
        color="help"
        class="search-margin"
      />
    </section-wrapper>

    <section-wrapper
      v-if="(page.serviceOrResource || page.workshopseries) &&
        hits.length == 0
        "
      class="section-no-top-margin"
    >
      <section-cards-with-illustrations
        :items="parsedServiceAndResourceList"
        :is-horizontal="true"
      />
    </section-wrapper>
    <section-wrapper
      v-else-if="hits && hits.length > 0"
      class="section-no-top-margin"
    >
      <h2
        v-if="route.query.q"
        class="about-results"
      >
        Displaying {{ hits.length }} results for
        <strong><em>“{{ route.query.q }}”</em></strong>
      </h2>
      <h2
        v-else
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>
      <section-cards-with-illustrations
        :items="parseHitsResults"
        :is-horizontal="true"
      />
    </section-wrapper>

    <section-wrapper
      v-else-if="noResultsFound"
      class="section-no-top-margin"
    >
      <div class="error-text">
        <rich-text>
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
              <a href="/help/services-resources/ask-us">Ask Us</a>
            </li>
            <li>
              <a href="https://www.library.ucla.edu/use/access-privileges/disability-resources">Accessibility
                Resources</a>
            </li>
          </ul>
        </rich-text>
      </div>
    </section-wrapper>

    <section-wrapper>
      <divider-way-finder
        class="divider-way-finder"
        color="help"
      />
    </section-wrapper>

    <section-wrapper>
      <block-call-to-action
        class="block-call-to-action"
        :is-global="true"
      />
    </section-wrapper>
  </main>
</template>

<style
  lang="scss"
  scoped
>
.page-help {
  :deep(label.label) {
    text-transform: capitalize;
  }
}
</style>
