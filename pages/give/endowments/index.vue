<script setup>
import { onMounted } from 'vue'

// import getListingFilters from "../utils/getListingFilters"
import _get from 'lodash/get'
import config from '../utils/searchConfig'

// HELPERS
import fixUri from '../utils/fixUri'
import removeTags from '../utils/removeTags'

// GQL
import ENDOWMENTS_LIST from '../gql/queries/EndowmentList.gql'

const { $graphql } = useNuxtApp()
const route = useRoute()

const { data, error } = await useAsyncData('endowments-list', async () => {
  const data = await $graphql.default.request(ENDOWMENTS_LIST, {})
  return { data }
})
if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}
// console.log('In endowment listing page data.value: ', JSON.stringify(data.value))

if (!data.value.data.entry && !data.value.data.entries) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

const page = ref(_get(data.value.data, 'entry', {}))
const endowments = ref(_get(data.value.data, 'entries', []))
const featuredEndowments = ref(_get(data.value.data, 'entry.featuredEndowments[0].featuredEndowments', []))

watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal.data, 'entry', {})
  endowments.value = _get(newVal.data, 'entries', [])
  featuredEndowments.value = _get(newVal.data, 'entry.featuredEndowments[0].featuredEndowments', [])
})

const hits = ref([])
const title = ref('')
const noResultsFound = ref(false)
// const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
})

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

/* TODO: Refactor when search functionality is ready */
/*
  async fetch() {
  this.endowments = []
  this.hits = []
  if (
    (this.$route.query.q && this.$route.query.q !== "")
  ) {
    if (!this.page.title) {
      const data = await this.$graphql.default.request(
        ENDOWMENTS_LIST
      )
      this.page["title"] = _get(data, "entry.title", "")
      this.page["text"] = _get(data, "entry.text", "")
    }
    let query_text = this.$route.query.q || "*"
    //console.log("in router query in asyc data")
    const results = await this.$dataApi.keywordSearchWithFilters(
      query_text,
      config.endowmentsList.searchFields,
      "sectionHandle:endowment",
      JSON.parse(this.$route.query.q) || "*",
      config.endowmentsList.sortField,
      config.endowmentsList.orderBy,
      config.endowmentsList.resultFields,
      // config.endowmentsList.filters
      []
    )
    // console.log("getsearchdata method:" + JSON.stringify(results))
    this.endowments = []
    this.hits = []
    if (results && results.hits && results.hits.total.value > 0) {
      this.hits = results.hits.hits
      this.endowments = []
      this.noResultsFound = false
    } else {
      this.hits = []
      this.endowments = []
      this.noResultsFound = true
    }
    this.searchGenericQuery = {
      queryText: this.$route.query.q || "",
      // queryFilters:
      //     (this.$route.query.filters &&
      //         JSON.parse(this.$route.query.filters)) ||
      //     {},
    }
  } else {
    this.hits = []
    // if route queries are empty fetch data from craft
    const data = await this.$graphql.default.request(ENDOWMENTS_LIST)
    // //console.log("data:" + data)
    this.page = _get(data, "entry", {})
    this.endowments = _get(data, "entries", [])
  }
}
*/

// Computed
const parsedFeaturedEndowments = computed(() => {
  return featuredEndowments.value.map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
      image: _get(obj, 'heroImage[0].image[0]', null),
      alternativeFullName: _get(
        obj,
        'alternativeName[0].fullName',
        null
      ),
      language: _get(
        obj,
        'alternativeName[0].languageAltName',
        null
      ),
    }
  }
  )
})

const parsedEndowmentsList = computed(() => {
  return endowments.value.map((obj) => {
    return {
      ...obj,
      jobPostingURL: `/${obj.uri}`,
      associatedLocations: _get(obj, 'associatedLocations', []).map((loc) => {
        return {
          ...loc,
          uri: fixUri(loc.uri),
        }
      }),
      alternativeFullName: _get(
        obj,
        'alternativeName[0].fullName',
        null
      ),
      language: _get(
        obj,
        'alternativeName[0].languageAltName',
        null
      ),
    }
  })
})

const parsedPlaceholder = computed(() => {
  return `Search ${page.value.title}`
})

const parseHitsResults = computed(() => {
  return parseHits(hits.value)
})

/* TODO: Refactor when search functionality is ready */
/*
watch: {
  "$route.query": "$fetch",
    "$route.query.q"(newValue) {
    //console.log("watching queryText:" + newValue)
  },
  // "$route.query.filters"(newValue) {
  //     //console.log("watching filters:" + newValue)
  // },
}
*/

// onMounted(async () => {
//   console.log("In mounted")
//   setFilters()
// })

/* TODO: Refactor when search functionality is ready */
// methods: {
// queryFilterHasValues() {
//     if (!this.$route.query.filters) return false
//     let routeQueryFilters = JSON.parse(this.$route.query.filters)
//     // //console.log(
//     //     "is route query exixts:" + JSON.stringify(routeQueryFilters)
//     // )
//     let configFilters = config.endowmentsList.filters
//     for (const filter of configFilters) {
//         if (
//             Array.isArray(routeQueryFilters[filter.esFieldName]) &&
//             routeQueryFilters[filter.esFieldName].length > 0
//         ) {
//             return true
//         } else if (
//             routeQueryFilters[filter.esFieldName] &&
//             !Array.isArray(routeQueryFilters[filter.esFieldName]) &&
//             routeQueryFilters[filter.esFieldName] != ""
//         ) {
//             return true
//         }
//     }
//     return false
// },
// async setFilters() {
//     const searchAggsResponse = await this.$dataApi.getAggregations(
//         config.endowmentsList.filters,
//         "endowment"
//     )
//     /*console.log(
//         "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
//     )*/
//     this.searchFilters = getListingFilters(
//         searchAggsResponse,
//         config.endowmentsList.filters
//     )
// },

function parseHits(hits = []) {
  return hits.value.map((obj) => {
    return {
      ...obj._source,
      jobPostingURL: `/${obj._source.uri}`,
      image: _get(obj._source, 'heroImage[0].image[0]', null),
      alternativeFullName: _get(
        obj._source,
        'alternativeName[0].fullName',
        null
      ),
      language: _get(
        obj._source,
        'alternativeName[0].languageAltName',
        null
      ),
      summary: _get(obj._source, 'text', null),
      associatedLocations: _get(obj._source, 'associatedLocations', []).map((loc) => {
        return {
          ...loc,
          uri: fixUri(loc.uri),
        }
      }),
    }
  })
}

function getSearchData(data) {
  // console.log("On the page getsearchdata called " + data)

  route.push({
    path: '/give/endowments',
    query: {
      q: data.text,
      // filters: JSON.stringify(data.filters),
    },
  })
}

// fetchOnServer: false,
// multiple components can return the same `fetchKey` and Nuxt will track them both separately
// fetchKey: "endowments-index",
// }
</script>

<template lang="html">
  <!-- v-ifs working on section wrappers without v-show -->
  <main
    id="main"
    class="page page-endowment-listing"
  >
    <masthead-secondary
      :title="page.title"
      :text="page.text"
    />

    <!-- ToDo: Enable for search -->
    <!-- <search-generic
      search-type="about"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    /> -->

    <section-wrapper theme="divider">
      <divider-way-finder
        class="search-margin"
        color="about"
      />
    </section-wrapper>

    <section-wrapper
      v-if="page &&
        parsedFeaturedEndowments &&
        parsedFeaturedEndowments.length &&
        hits.length == 0 &&
        !noResultsFound
      "
      class="section-no-top-margin"
      :section-title="page.featuredEndowments[0].titleGeneral"
      :section-summary="page.featuredEndowments[0].sectionSummary"
    >
      <section-teaser-card
        v-if="parsedFeaturedEndowments.length"
        class="section"
        :items="parsedFeaturedEndowments"
      />
    </section-wrapper>

    <section-wrapper
      v-if="page &&
        parsedFeaturedEndowments &&
        parsedFeaturedEndowments.length &&
        hits.length == 0 &&
        !noResultsFound
      "
      theme="divider"
    >
      <divider-way-finder color="about" />
    </section-wrapper>

    <!-- ToDo: Remove json data display -->
    <section-wrapper
      v-if="page &&
        parsedEndowmentsList &&
        parsedEndowmentsList.length &&
        hits.length == 0 &&
        !noResultsFound
      "
      section-title="All Collection Endowments"
    >
      <section-generic-list :items="parsedEndowmentsList" />

      <!-- pagination -->
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
        <strong><em>"{{ route.query.q }}"</em></strong>
      </h2>
      <h2
        v-else
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>
      <section-generic-list :items="parseHitsResults" />
      <!-- pagination -->
    </section-wrapper>
    <section-wrapper v-else>
      <div class="error-text">
        <rich-text>
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
        </rich-text>
      </div>
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder color="about" />
    </section-wrapper>

    <section-wrapper>
      <block-call-to-action
        svg-name="svg-call-to-action-money"
        title="Give to the UCLA Library"
        text="Your contributions help us build our collections for the benefit or our students, faculty, staff and the general public."
        name="Give Now"
        to="/give"
      />
    </section-wrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-endowment-listing {
  :deep(.block-highlight.is-vertical:not(.has-triangle)) .image {
    height: 572px;
  }

  :deep(.block-highlight.is-vertical:not(.has-triangle) .image .media) {
    object-fit: contain;
  }

  :deep(.section-teaser-card .card) {
    width: calc((100% - 32px) / 2);

    @media #{$small} {
      width: 100%;
    }
  }

  @media #{$medium} {
    :deep(.block-highlight.is-vertical:not(.has-triangle)) .image {
      height: 390px;
    }
  }
}
</style>
