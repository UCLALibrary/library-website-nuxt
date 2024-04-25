<script setup>
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
  alias: ['/listing-collections/access'],
})

// ASYNC DATA
const { data: page, error } = await useAsyncData('access-collections', async () => {
  const data = await $graphql.default.request(ACCESS_COLLECTIONS)
  if (
    data.entry.accessCollections &&
    data.entry.accessCollections.length > 0
  ) {
    for (const collection of data.entry.accessCollections) {
      collection.searchType = 'accessCollections'
      collection.to = collection.uri
        ? collection.uri
        : collection.externalResourceUrl
      collection.category =
        collection.workshopOrEventSeriesType ===
          'help/services-resources'
          ? 'workshop'
          : collection.serviceOrResourceType
            ? collection.serviceOrResourceType
            : collection.typeHandle === 'externalResource'
              ? 'resource'
              : collection.typeHandle === 'generalContentPage'
                ? 'resource'
                : collection.typeHandle
      await $elasticsearchplugin.index(collection, collection.slug)
    }
  }

  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.', fatal: true
  })
}
if (!page.value.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

// DATA VARS
const noResultsFound = ref(false)
const hits = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
})

// FETCH
const fetchNew = async () => {
  hits.value = []
  if (route.query.q && route.query.q !== '') {
    const results = await $dataApi.keywordSearchWithFilters(
      route.query.q || '*',
      config.accessCollections.searchFields,
      'searchType:accessCollection',
      [],
      config.accessCollections.sortField,
      config.accessCollections.orderBy,
      config.accessCollections.resultFields,
      []
    )
    hits.value = []
    if (results && results.hits && results.hits.total.value > 0) {
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      hits.value = []
      noResultsFound.value = true
    }
    searchGenericQuery.value = {
      queryText: route.query.q || '',
    }
  } else {
    hits.value = []
    noResultsFound.value = false
    searchGenericQuery.value = { queryText: '' }
  }
}

// HEAD
useHead({
  title: page.value.entry ? page.value.entry.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.entry.text)
    },
  ],
})

// COMPUTED
const parsedAccessCollections = computed(() => {
  return page.value.entry.accessCollections.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
    }
  })
})
const parsedAssociatedTopics = computed(() => {
  return page.value.entry.associatedTopics.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.to}`,
    }
  })
})
const parseHitsResults = computed(() => {
  return parseHits(hits)
})

// WATCHERS
watch(() => route.query, async (oldValue, newValue) => {
  if (oldValue !== newValue) await fetchNew()
})
watch(() => route.query.q, (newValue) => {
  if (newValue === '') hits.value = []
})

// METHODS
function parseHits(hits) {
  return hits.value.map((obj) => {
    return {
      ...obj._source,
      to: obj._source.externalResourceUrl
        ? obj._source.externalResourceUrl
        : `/${obj._source.uri}`,
    }
  })
}
function getSearchData(data) {
  route.push({
    path: '/collections/access',
    query: {
      q: data.value.entry.text,
    },
  })
}
</script>
<template lang="html">
  <main
    id="main"
    class="page page-collections-access"
  >
    <nav-breadcrumb
      to="/collections"
      :title="page.entry.title"
      parent-title="Collections"
      class="secondary-breadcrumb"
    />

    <masthead-secondary
      :title="page.entry.title"
      :text="page.entry.text"
      class="secondary"
    />

    <search-generic
      search-type="default"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      placeholder="ACCESS COLLECTIONS"
      @search-ready="getSearchData"
    />

    <section-wrapper theme="divider">
      <divider-way-finder class="search-margin" />
    </section-wrapper>

    <section-wrapper v-show="page.entry.accessCollections && hits.length == 0 && !noResultsFound
        ">
      <section-cards-with-illustrations
        class="section"
        :items="parsedAccessCollections"
        :is-horizontal="true"
      />
    </section-wrapper>
    <section-wrapper v-show="hits && hits.length > 0">
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
      <section-cards-with-illustrations
        class="section"
        :items="parseHitsResults"
        :is-horizontal="true"
      />
    </section-wrapper>

    <section-wrapper
      v-show="noResultsFound"
      class="section-no-top-margin"
    >
      <div class="error-text">
        <rich-text>
          <h2>Search for “{{ route.query.q }}” not found.</h2>
          <p>
            We can’t find the term you are looking for on this page,
            but we're here to help. <br>
            Try searching the whole site from
            <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these regularly visited links:
          </p>
          <ul>
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
      </div>
    </section-wrapper>

    <section-wrapper>
      <divider-way-finder class="divider divider-way-finder" />
    </section-wrapper>

    <section-wrapper>
      <section-cards-with-illustrations
        class="section"
        :items="parsedAssociatedTopics"
        section-title="Associated Topics"
        to="/help/services-resources"
        button-text="All services & Resources"
        :is-horizontal="false"
      />
    </section-wrapper>
  </main>
</template>
<style
  lang="scss"
  scoped
></style>
