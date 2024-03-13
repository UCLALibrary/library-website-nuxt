<script setup>
// HELPERS
import _get from 'lodash/get'
import { format } from 'date-fns'
import removeTags from '../utils/removeTags'

// GQL
import ARTICLE_LIST from '../gql/queries/ArticleList.gql'

// TODO: Enable when Elastic Search is implemented
// UTILITIES
// import getListingFilters from '../utils/getListingFilters'
// import config from '../utils/searchConfig'
// import queryFilterHasValues from '../utils/queryFilterHasValues'

const { $graphql } = useNuxtApp()

const { data } = await useAsyncData('news', async () => {
  const data = await $graphql.default.request(ARTICLE_LIST)
  return data
})

// TODO: Enable when Elastic Search is implemented
// const route = useRoute()

// Data
const page = ref(_get(data.value, 'entry', {}))
const news = ref(_get(data.value, 'entries', []))
const hits = ref([])
const title = ref('')
const noResultsFound = ref(false)

// TODO: Enable/update when Elastic Search is implemented
// const searchFilters = ref([])
// const searchGenericQuery = ref({
//   queryText: $route.query.q || '',
//   queryFilters:
//     (route.$query.filters &&
//       JSON.parse($route.query.filters)) ||
//     {},
// })

// TODO: Enable/update when Elastic Search is implemented
// async fetch() {
//   // console.log("Fetch hook  news index ")

//   this.news = []
//   this.hits = []

//   if (
//     (this.$route.query.q && this.$route.query.q !== '') ||
//     (this.$route.query.filters &&
//       queryFilterHasValues(
//         this.$route.query.filters,
//         config.newsIndex.filters
//       ))
//   ) {
//     if (!this.page.title) {
//       const data = await this.$graphql.default.request(ARTICLE_LIST)
//       // console.log("data for masthead:" + data)

//       this.page.title = _get(data, 'entry.title', '')
//       this.page.text = _get(data, 'entry.text', '')
//     }
//     // eslint-disable-next-line camelcase
//     const query_text = this.$route.query.q || '*'

//     // console.log("in router query in asyc data")
//     const results = await this.$dataApi.keywordSearchWithFilters(
//       query_text,
//       config.newsIndex.searchFields,
//       'sectionHandle:article',
//       (this.$route.query.filters &&
//         JSON.parse(this.$route.query.filters)) ||
//       {},
//       config.newsIndex.sortField,
//       config.newsIndex.orderBy,
//       config.newsIndex.resultFields,
//       config.newsIndex.filters
//     )
//     // console.log("getsearchdata method:" + JSON.stringify(results))

//     this.news = []
//     this.hits = []
//     if (results && results.hits && results.hits.total.value > 0) {
//       this.hits = results.hits.hits
//       this.noResultsFound = false
//       this.news = []
//     } else {
//       this.noResultsFound = true
//       this.hits = []

//       this.news = []
//     }
//     this.searchGenericQuery = {
//       queryText: this.$route.query.q || '',
//       queryFilters:
//         (this.$route.query.filters &&
//           JSON.parse(this.$route.query.filters)) ||
//         {},
//     }
//   } else {
//     this.hits = []
//     this.noResultsFound = false
//     // if route queries are empty fetch data from craft
//     const data = await this.$graphql.default.request(ARTICLE_LIST)
//     // //console.log("data:" + data)

//     this.page = _get(data, 'entry', {})
//     this.news = _get(data, 'entries', [])
//   }
// },

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text)
    }
  ]
})

// TODO: Enable/update when Elastic Search is implemented
// const parseDisplayResults = computed(() => {
//   if (hits.length > 1)
//     return `Displaying ${hits.length} results`
//   else return `Displaying ${hits.length} result`
// })

const parsedFeaturedNews = computed(() => {
  return page.value.featuredNews.map((obj) => {
    return {
      ...obj,
      to:
        obj.externalResourceUrl != null
          ? _get(obj, 'externalResourceUrl', '')
          : `/${obj.to}`,
      image: _get(obj, 'heroImage[0].image[0]', null),
      category: _get(obj, 'articleCategories[0].title', ''),
      dateCreated: _get(obj, 'postDate', ''),
      byline: _get(obj, 'articleStaff', []),
      bylineOne: _get(obj, 'articleStaff[0].title', ''),
      bylineTwo: _get(obj, 'postDate', ''),
    }
  })
})

const parsedBannerHeader = computed(() => {
  return parsedFeaturedNews.value[0]
})

const parsedSectionHighlight = computed(() => {
  return parsedFeaturedNews.value.slice(1, 3).map((obj) => {
    return {
      ...obj,
      bylineTwo:
        obj.bylineTwo != null
          ? format(new Date(obj.bylineTwo), 'MMMM d, yyyy')
          : '',
    }
  })
})

const parsedNewsList = computed(() => {
  return news.value.map((obj) => {
    return {
      ...obj,
      to:
        obj.externalResourceUrl != null
          ? _get(obj, 'externalResourceUrl', '')
          : `/${obj.to}`,
      image: _get(obj, 'heroImage[0].image[0]', null),
      staffName: obj.fullName ? `${obj.fullName}` : null,
      // category: _get(obj, "articleCategories[0].title", null),
      category: parseArticleCategory(obj.articleCategories),
    }
  })
})

const parsedDate = computed(() => {
  return format(new Date(news.value.postDate), 'MMMM d, Y')
})

const parsedByline = computed(() => {
  const byline = (news.value.contributors || []).map((entry) => {
    return `${entry.byline} ${entry.title || entry.staffMember[0].title
      }`
  })
  return byline.map((entry) => {
    return entry
  })
})

const parsedPlaceholder = computed(() => {
  return `Search ${page.title}`
})

// TODO: Enable when Elastic Search is implemented
// const parseHitsResults = computed(() => {
//   /* //console.log(
//           "ParseHits Results checking results data:" +
//               JSON.stringify(this.hits)
//       ) */

//   return parseHits(hits.value)
// })

// TODO: Enable/update when Elastic Search is implemented
// watch: {
//   '$route.query': '$fetch',
//     '$route.query.q'(newValue) {
//     // console.log("watching querytEXT:" + newValue)
//   },
//   '$route.query.filters'(newValue) {
//     // console.log("watching filters:" + newValue)
//   },
// },

// TODO: Enable/update when Elastic Search is implemented
// async function mounted() {
// console.log("In mounted")
/* //console.log("ESREADkey:" + this.$config.esReadKey)
    //console.log("ESURLkey:" + this.$config.esURL) */
// bookmarked search queries are not calling fetch
// this.setFilters()
// }

function parseArticleCategory(categories) {
  if (!categories || categories.length === 0) return ''
  let result = ''
  categories.forEach((obj) => {
    result = result + obj.title + ', '
  })
  return result.slice(0, -2)
}

// TODO: Enable/update when Elastic Search is implemented
// async function setFilters() {
//   const searchAggsResponse = await this.$dataApi.getAggregations(
//     config.newsIndex.filters,
//     'article'
//   )

//   /* console.log(
//           "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
//       ) */
//   searchFilters = getListingFilters(
//     searchAggsResponse,
//     config.newsIndex.filters
//   )
// }

// TODO: Enable when Elastic Search is implemented
// function parseHits(hits = []) {
//   return hits.value.map((obj) => {
//     // //console.log(obj["_source"]["image"])
//     return {
//       ...obj._source,
//       description: obj._source.text,
//       date: obj._source.postDate,
//       articleCategories: obj._source.category,
//       to: `/${obj._source.uri}`,
//       image: _get(obj._source, 'heroImage[0].image[0]', null),
//       staffName: obj._source.fullName,
//       // category: _get(obj["_source"], "category[0].title", null),
//       category: parseArticleCategory(
//         obj._source.category
//       ),
//     }
//   })
// }

// TODO: Enable when Elastic Search is implemented
// function getSearchData(data) {
// console.log("On the page getsearchdata called")
/* this.page = {}
      this.hits = [] */
//   route.push({
//     path: '/about/news',
//     query: {
//       q: data.text,
//       filters: JSON.stringify(data.filters),
//     },
//   })
// }

/* Used with Options API; to delete? */
// fetchOnServer: false,
// multiple components can return the same `fetchKey` and Nuxt will track them both separately
// fetchKey: 'news-index',
</script>

<template>
  <main
    id="main"
    class="page page-news"
  >
    <masthead-secondary
      v-if="page.title"
      :title="page.title"
      :text="page.text"
    />

    <search-generic
      search-type="about"
      :filters="searchFilters"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    />

    <section-wrapper theme="divider">
      <divider-way-finder class="search-margin" />
    </section-wrapper>

    <section-wrapper
      v-show="page &&
        page.featuredNews &&
        page.featuredNews.length &&
        hits.length == 0 &&
        !noResultsFound
      "
      class="section-no-top-margin"
    >
      <banner-featured
        :media="parsedBannerHeader.image"
        :title="parsedBannerHeader.title"
        breadcrumb="Featured"
        :byline="parsedByline"
        :description="parsedBannerHeader.text"
        :date-created="parsedBannerHeader.postDate"
        :to="parsedBannerHeader.to"
        :align-right="true"
        prompt="Read More"
        class="banner section-featured-banner"
      />

      <divider-general
        v-if="page &&
          page.featuredNews &&
          page.featuredNews.length &&
          hits.length == 0 &&
          !noResultsFound
        "
      />

      <section-teaser-highlight
        v-if="parsedSectionHighlight.length"
        class="section"
        :items="parsedSectionHighlight"
      />
    </section-wrapper>

    <section-wrapper
      v-show="page &&
        page.featuredNews &&
        page.featuredNews.length &&
        hits.length == 0 &&
        !noResultsFound
      "
      theme="divider"
    >
      <divider-way-finder color="about" />
    </section-wrapper>

    <section-wrapper
      v-show="news && news.length > 0"
      section-title="All News"
    >
      <section-staff-article-list :items="parsedNewsList" />
      <!-- TODO: Remove JSON output when Staff Article Component is migrated -->
      {{ parsedNewsList }}
    </section-wrapper>

    <!-- FILTERS -->
    <section-wrapper
      v-show="hits && hits.length > 0"
      class="section-no-top-margin"
    >
      <h2
        v-if="$route.query.q"
        class="about-results"
      >
        Displaying {{ hits.length }} results for
        <strong><em>“{{ $route.query.q }}”</em></strong>
      </h2>
      <h2
        v-else
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>
      <section-staff-article-list :items="parseHitsResults" />
    </section-wrapper>

    <!-- NO RESULTS -->
    <section-wrapper
      v-show="noResultsFound"
      class="section-no-top-margin"
    >
      <div class="error-text">
        <rich-text>
          <h2>Search for “{{ $route.query.q }}” not found.</h2>
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

    <section-wrapper theme="divider">
      <divider-way-finder color="about" />
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
.page-news {}
</style>
