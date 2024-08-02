<script setup>
// COMPONENTS
import { NavBreadcrumb, MastheadSecondary, SearchGeneric, SectionWrapper, DividerWayFinder, SectionCardsWithIllustrations, RichText } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import ACCESS_COLLECTIONS from '../gql/queries/CollectionsAccessList.gql'

// UTILITIES & PLUGINS
import config from '../utils/searchConfig'
const { $graphql, $elasticsearchplugin, $dataApi } = useNuxtApp()

// ROUTING
const route = useRoute()
definePageMeta({
  layout: 'default',
  path: '/collections/access',
  alias: ['/listing-collections/access/'],
})

// ASYNC DATA
const { data, error } = await useAsyncData('access-collections', async () => {
  const data = await $graphql.default.request(ACCESS_COLLECTIONS)
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.', fatal: true
  })
}
if (!data.value.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

if (data.value.entry && import.meta.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  const doc = {
    title: data.value.entry.title,
    text: data.value.entry.text,
    uri: 'collections/access/'
  }
  await $elasticsearchplugin.index(doc, 'access-collection')
}

// only index on server
// console.log("Access collections to be indexed are:", JSON.stringify(data.value.entry.accessCollections))
if (
  data.value.entry.accessCollections &&
  data.value.entry.accessCollections.length > 0 &&
  import.meta.server
) {
  for (const collection of data.value.entry.accessCollections) {
    collection.searchType = 'accessCollections'
    collection.to = collection.uri
      ? collection.uri
      : collection.externalResourceUrl
    // console.log('Index Access collections:', collection.slug)
    await $elasticsearchplugin.index(collection, collection.slug)
  }
}
// end indexing

const page = ref(_get(data.value, 'entry', {}))
// console.log('In page', page.value)

watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

// ES search functionality
const noResultsFound = ref(false)
const hits = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  // queryFilters must be passed even if not used
  queryFilters: {},
})

// ES search function
async function searchES() {
  if (route?.query && route?.query.q && route?.query.q !== '') {
    // console.log('searchES', route.query.q)
    const queryText = route.query.q || '*'
    const results = await $dataApi.keywordSearchWithFilters(
      queryText,
      config.accessCollections.searchFields,
      'searchType:accessCollection',
      {},
      config.accessCollections.sortField,
      config.accessCollections.orderBy,
      config.accessCollections.resultFields,
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
    // console.log('page.value', page.value)
    hits.value = []
    noResultsFound.value = false
  }
}

// ES watcher
watch(() => route?.query, (oldValue, newValue) => {
  if (oldValue !== newValue) {
    if (newValue?.q === '') hits.value = []
    searchGenericQuery.value.queryText = route.query.q || ''
    searchES()
  }
}, { deep: true, immediate: true })

// HEAD
useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text),
    }
  ],
})

function getCategory(obj) {
  // console.log('TypeHandle', obj.typeHandle)
  const category = obj.workshopOrEventSeriesType ===
    'help/services-resources'
    ? 'workshop'
    : obj.serviceOrResourceType
      ? obj.serviceOrResourceType
      : obj.typeHandle === 'externalResource'
        ? 'resource'
        : obj.typeHandle === 'generalContentPage'
          ? 'resource'
          : obj.typeHandle
  return category
}

// COMPUTED
const parsedAccessCollections = computed(() => {
  return page.value?.accessCollections?.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
      category:
        getCategory(obj)
    }
  })
})
const parsedAssociatedTopics = computed(() => {
  return page.value?.associatedTopics?.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.to}`,
    }
  })
})
const parseHitsResults = computed(() => {
  return hits.value?.map((obj) => {
    return {
      ...obj._source,
      to: obj._source.externalResourceUrl
        ? obj._source.externalResourceUrl
        : `/${obj._source.uri}`,
      category:
        getCategory(obj._source)
    }
  })
})

function getSearchData(data) {
  useRouter().push({
    path: '/collections/access',
    query: {
      q: data?.text,
    },
  })
}
</script>

<template lang="html">
  <main
    id="main"
    class="page page-collections-access"
  >
    <NavBreadcrumb
      to="/collections/"
      :title="page.title"
      parent-title="Collections"
      class="secondary-breadcrumb"
    />

    <MastheadSecondary
      v-if="page.title"
      :title="page.title"
      :text="page.text"
      class="secondary"
    />

    <SearchGeneric
      search-type="default"
      class="generic-search"
      placeholder="ACCESS COLLECTIONS"
      :search-generic-query="searchGenericQuery"
      @search-ready="getSearchData"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder class="search-margin" />
    </SectionWrapper>

    <SectionWrapper v-show="page && page.accessCollections && hits.length == 0 && !noResultsFound
      ">
      <SectionCardsWithIllustrations
        class="section"
        :items="parsedAccessCollections"
        :is-horizontal="true"
      />
    </SectionWrapper>

    <SectionWrapper v-show="hits && hits.length > 0">
      <h2
        v-if="route.query && route.query.q"
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
      <SectionCardsWithIllustrations
        class="section"
        :items="parseHitsResults"
        :is-horizontal="true"
      />
    </SectionWrapper>

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
            <a href="https://library.ucla.edu/">UCLA Library Home</a>, or try one of the these regularly visited
            links:
          </p>
          <ul>
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
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <DividerWayFinder class="divider divider-way-finder" />
    </SectionWrapper>

    <SectionWrapper>
      <SectionCardsWithIllustrations
        class="section"
        :items="parsedAssociatedTopics"
        section-title="Associated Topics"
        to="/help/services-resources/"
        button-text="All services & Resources"
        :is-horizontal="false"
      />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped></style>
