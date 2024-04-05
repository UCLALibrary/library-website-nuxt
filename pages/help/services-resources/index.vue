<script setup>
// HELPERS
import _get from 'lodash/get'
import getListingFilters from '../utils/getListingFilters'
import sortByTitle from '../utils/sortByTitle'
import queryFilterHasValues from '../utils/queryFilterHasValues'
import removeTags from '../utils/removeTags'

// GQL
import SERVICE_RESOURCE_WORKSHOPSERIES_LIST from '../gql/queries/ServiceResourceWorkshopSeriesList.gql'
import HELP_TOPIC_LIST from '../gql/queries/HelpTopicList.gql'

// UTILITIES
import config from '../utils/searchConfig'

const { $graphql } = useNuxtApp()
const route = useRoute()

const { data } = await useAsyncData('services-resources-list', async () => {
  const data = await $graphql.default.request(SERVICE_RESOURCE_WORKSHOPSERIES_LIST)
  const helpTopicData = await $graphql.default.request(HELP_TOPIC_LIST)

  /* TODO: Incorporate when search functionality is ready? */
  // if (
  //   pageAsyncData.externalResource &&
  //   pageAsyncData.externalResource.length > 0
  // ) {
  //   for (let externalResource of pageAsyncData.externalResource) {
  //     await $elasticsearchplugin.index(
  //       { ...externalResource, serviceOrResourceType: "external resource" },
  //       externalResource.slug
  //     )
  //   }
  // }

  console.log('async data: ', data)
  console.log('async helpTopicData: ', helpTopicData)

  return { data, helpTopicData }
})

const page = ref(data.value.data)
const helpTopic = ref(data.value.helpTopicData)
const noResultsFound = ref(false)
const summaryData = ref(_get(data.value.data, 'entry', {}))
const searchFilters = ref([])
const hits = ref([])
const searchGenericQuery = ref(
  {
    queryText: route.query.q || '',
    queryFilters:
      (route.query.filters &&
        JSON.parse(route.query.filters)) ||
      {},
  }
)

console.log('expected page data: ', page.value)
console.log('expected helpTopic data: ', helpTopic.value.entries)

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

//   async fetch() {
//   this.page = {}
//   this.hits = []
//   this.helptopic = {}
//   if (
//     (this.$route.query.q && this.$route.query.q !== "") ||
//     (this.$route.query.filters &&
//       queryFilterHasValues(
//         this.$route.query.filters,
//         config.serviceOrResources.filters
//       ))
//   ) {
//     this.page = {}
//     this.hits = []
//     this.helptopic = {}
//     const results = await this.$dataApi.keywordSearchWithFilters(
//       this.$route.query.q || "*",
//       config.serviceOrResources.searchFields,
//       "(sectionHandle:serviceOrResource OR sectionHandle:workshopSeries OR sectionHandle:helpTopic) OR (sectionHandle:externalResource AND displayEntry:yes)",
//       (this.$route.query.filters &&
//         JSON.parse(this.$route.query.filters)) ||
//       {},
//       config.serviceOrResources.sortField,
//       config.serviceOrResources.orderBy,
//       config.serviceOrResources.resultFields,
//       []
//     )
//     if (results && results.hits && results.hits.total.value > 0) {
//       this.hits = results.hits.hits
//       this.noResultsFound = false
//     } else {
//       this.hits = []
//       this.noResultsFound = true
//     }
//     this.searchGenericQuery = {
//       queryText: this.$route.query.q || "",
//       queryFilters: (this.$route.query.filters && JSON.parse(this.$route.query.filters)) || {},
//     }
//     const getSummaryData = await this.$graphql.default.request(
//       SERVICE_RESOURCE_WORKSHOPSERIES_LIST
//     )
//     this.summaryData = _get(getSummaryData, "entry", {})
//   } else {
//     this.hits = []
//     this.noResultsFound = false
//     this.page = {}
//     this.helptopic = {}
//     this.page = await this.$graphql.default.request(
//       SERVICE_RESOURCE_WORKSHOPSERIES_LIST
//     )
//     this.helpTopic = await this.$graphql.default.request(
//       HELP_TOPIC_LIST
//     )
//     this.summaryData = _get(this.page, "entry", {})
//     this.hits = []
//     this.searchGenericQuery.queryText = ""
//   }
// }

const parseDisplayResultsText = computed(() => {
  if (hits.value.length > 1)
    return `Displaying ${hits.value.length} results`
  else return `Displaying ${hits.value.length} result`
})

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

const parseHitsResults = computed(() => {
  return parseHits()
})

/* TODO: Refactor when search functionality is ready */
// watch: {
//   "$route.query": "$fetch",
//     "$route.query.q"(newValue) {
//     // if (newValue === "") this.hits = []
//   }
// }

/* TODO: Enable for search */
// onMounted(async () => {
//   setFilters()
// })

// Methods
/* TODO: Enable for search */
// async function setFilters() {
//   const searchAggsResponse = await this.$dataApi.getAggregations(
//     config.serviceOrResources.filters,
//     "serviceOrResource OR workshopSeries OR helpTopic OR externalResource",
//   )
//   searchFilters = getListingFilters(
//     searchAggsResponse,
//     config.serviceOrResources.filters
//   )
// }

/* TODO: Enable for search */
// function parseHits() {
//   return hits.value.map((obj) => {
//     return {
//       title: obj["_source"].title,
//       sectionHandle: obj["_source"].sectionHandle,
//       to:
//         obj["_source"].sectionHandle === "externalResource"
//           ? `${obj["_source"].externalResourceUrl}`
//           : `/${obj["_source"].uri}`,
//       iconName:
//         obj["_source"]["illustrationsResourcesAndServices"],
//       text: obj["_source"].text || obj["_source"].summary,
//       category:
//         obj["_source"].sectionHandle === "workshopSeries"
//           ? "workshop"
//           : obj["_source"].sectionHandle === "helpTopic"
//             ? "help topic"
//             : obj["_source"].sectionHandle ===
//               "externalResource"
//               ? "resource"
//               : obj["_source"].type,
//     }
//   })
// }

/* TODO: Enable for search */
// async function getSearchData(data) {
//   route.push({
//     path: "/help/services-resources",
//     query: {
//       q: data.text,
//       filters: JSON.stringify(data.filters),
//     },
//   })
// }

// fetchOnServer: false,
// multiple components can return the same `fetchKey` and Nuxt will track them both separately
// fetchKey: "services-resources-workshops",

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

    <!--h4 style="margin: 30px 400px">
            No of hits
            {{ `from craft is ${parsedPages.length}` }}
        </h4>
        <h4 style="margin: 30px 400px">
            No of hits from ES
            {{
                hits &&
                    `calling parsedhitsresults length
            ${hits.length}`
            }}
        </h4-->

    <section-wrapper theme="divider">
      <divider-way-finder
        color="help"
        class="search-margin"
      />
    </section-wrapper>

    <section-wrapper
      v-if="
        (page.serviceOrResource || page.workshopseries) &&
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

<style lang="scss" scoped>
.page-help {
  :deep(label.label) {
    text-transform: capitalize;
  }
}
</style>
