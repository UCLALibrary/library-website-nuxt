<script setup>
// COMPONENTS
import { MastheadSecondary, SearchGeneric, BannerFeatured, SectionTeaserHighlight, SectionWrapper, DividerGeneral, DividerWayFinder, SectionStaffArticleList, RichText, BlockCallToAction } from '@ucla-library-monorepo/ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import { format } from 'date-fns'
import removeTags from '../utils/removeTags'
import parseFilters from '../utils/parseFilters'

// GQL
import ARTICLE_LIST from '../gql/queries/ArticleList.gql'

import getListingFilters from '../utils/getListingFilters'
import config from '../utils/searchConfig'
import queryFilterHasValues from '../utils/queryFilterHasValues'
import useSearch from '~/composables/useSearch'
// console.log('In news listing page')

const { $graphql } = useNuxtApp()
const { data, error } = await useAsyncData('news-listing', async () => {
  const data = await $graphql.default.request(ARTICLE_LIST)
  // console.log('data in useasync for news listing: ', data)
  return data
})
// console.log('data: ', data.value, 'error: ', error.value)

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value?.entry && !data.value?.entries) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

if (data.value.entry && import.meta.prerender) {
  const { index } = useIndexer()
  const doc = {
    title: data.value.entry.title,
    text: data.value.entry.text,
    uri: 'about/news/'
  }
  await index(doc, 'news-listing')
}

// console.log('In news listing page data.value: ', JSON.stringify(data.value))

const route = useRoute()

// DATA
const page = ref(_get(data.value, 'entry', {}))
const news = ref(_get(data.value, 'entries', []))

// PREVIEW MODE
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
  news.value = _get(newVal, 'entries', [])
})

// HEAD METADATA FOR THE TAB TITLES ON THE PAGE
useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value?.text)
    }
  ]
})

// COMPUTED
const parsedFeaturedNews = computed(() => {
  return page.value?.featuredNews?.map((obj) => {
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
  // console.log('parsedBannerHeader', parsedFeaturedNews.value)
  return parsedFeaturedNews.value ? parsedFeaturedNews.value[0] : {}
})

const parsedSectionHighlight = computed(() => {
  return parsedFeaturedNews.value?.slice(1, 3).map((obj) => {
    return {
      ...obj,
      bylineTwo:
        obj.bylineTwo != null
          ? format(new Date(obj.bylineTwo), 'MMMM d, yyyy')
          : '',
    }
  })
})

function parseArticleCategory(categories) {
  if (!categories || categories.length === 0) return ''
  let result = ''
  categories.forEach((obj) => {
    result = result + obj.title + ', '
  })
  return result.slice(0, -2)
}

const parsedNewsList = computed(() => {
  return news.value?.map((obj) => {
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
  return format(new Date(news.value?.postDate), 'MMMM d, Y')
})

const parsedByline = computed(() => {
  const byline = (news.value?.contributors || []).map((entry) => {
    return `${entry.byline} ${entry.title || entry.staffMember[0].title
      }`
  })
  return byline.map((entry) => {
    return entry
  })
})

// ELASTIC SEARCH FUNCTIONALITY\
// function parseFilters(filtersString) {
//   if (!filtersString) return {}

//   const filters = {}
//   const conditions = filtersString.split(' AND ')

//   conditions.forEach((condition) => {
//     const [key, value] = condition.split(':(')
//     const cleanedKey = key.trim()
//     const values = value.replace(')', '').split(' OR ').map(v => v.trim())

//     filters[cleanedKey] = values
//   })

//   return filters
// }

const hits = ref([])
const title = ref('')
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})

// This watcher is called when router pushes updates the query params
watch(
  () => route.query,
  (newVal, oldVal) => {
    // console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    searchES()
  }, { deep: true, immediate: true }
)

// ELASTIC SEARCH FUNCTION
async function searchES() {
  if (
    (route.query.q && route.query.q !== '') ||
    (route.query.filters &&
      queryFilterHasValues(
        parseFilters(route.query.filters || ''),
        config.newsIndex.filters
      ))
  ) {
    // console.log('Search ES HITS query,', route.query.q)
    const queryText = route.query.q || '*'
    const { keywordSearchWithFilters } = useSearch()
    const results = await keywordSearchWithFilters(
      queryText,
      config.newsIndex.searchFields,
      ['article'],
      parseFilters(route.query.filters || ''),
      config.newsIndex.sortField,
      config.newsIndex.orderBy,
      config.newsIndex.resultFields,
      config.newsIndex.filters
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

const parseDisplayResults = computed(() => {
  if (hits.length > 1)
    return `Displaying ${hits.length} results`
  else return `Displaying ${hits.length} result`
})

const parsedPlaceholder = computed(() => {
  return `Search ${page.value?.title}`
})
const parseHitsResults = computed(() => {
  /* console.log(
          "ParseHits Results checking results data:" +
              JSON.stringify(hits)
      ) */

  return parseHits(hits.value)
})

function parseHits(hits = []) {
  return hits?.map((obj) => {
    // //console.log(obj["_source"]["image"])
    return {
      ...obj._source,
      description: obj._source.text,
      date: obj._source.postDate,
      articleCategories: obj._source.category,
      to: obj._source.externalResourceUrl != null
        ? _get(obj._source, 'externalResourceUrl', '')
        : `/${obj._source.uri}`,
      image: _get(obj._source, 'heroImage[0].image[0]', null),
      staffName: obj._source.fullName,
      // category: _get(obj["_source"], "category[0].title", null),
      category: parseArticleCategory(
        obj._source.category
      ),
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
    path: '/about/news/',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    }
  })
}

// fetch filters for the page from ES after page loads in Onmounted hook on the client side
async function setFilters() {
  const { getAggregations } = useSearch()
  const searchAggsResponse = await getAggregations(
    config.newsIndex.filters,
    'article'
  )

  /* console.log(
          "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
      ) */
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.newsIndex.filters
  )
}

onMounted(async () => {
  // console.log('onMounted called')
  // console.log("ESREADkey:" + config.esReadKey)
  // console.log("ESURLkey:" + config.esURL)
  await setFilters()
})
</script>

<template>
  <main
    id="main"
    class="page page-news"
  >
    <MastheadSecondary
      v-if="page.title"
      :title="page.title"
      :text="page.text"
    />

    <SearchGeneric
      search-type="about"
      :filters="searchFilters"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder class="search-margin" />
    </SectionWrapper>
    <SectionWrapper
      v-show="page &&
        page.featuredNews &&
        page.featuredNews.length > 0 &&
        hits.length === 0 &&
        !noResultsFound
      "
      class="section-no-top-margin"
    >
      <BannerFeatured
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

      <DividerGeneral
        v-show="page &&
          page.featuredNews &&
          page.featuredNews.length &&
          hits.length === 0 &&
          !noResultsFound
        "
      />

      <SectionTeaserHighlight
        v-show="parsedSectionHighlight.length > 0"
        class="section"
        :items="parsedSectionHighlight"
      />
    </SectionWrapper>

    <SectionWrapper
      v-show="page &&
        page.featuredNews &&
        page.featuredNews.length > 0 &&
        hits.length === 0 &&
        !noResultsFound
      "
      theme="divider"
    >
      <DividerWayFinder color="about" />
    </SectionWrapper>

    <SectionWrapper
      v-show="news &&
        news.length > 0 &&
        hits.length === 0 &&
        !noResultsFound"
      section-title="All News"
    >
      <SectionStaffArticleList :items="parsedNewsList" />
    </SectionWrapper>

    <!-- FILTERS -->
    <SectionWrapper
      v-show="hits && hits.length > 0"
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
      <SectionStaffArticleList :items="parseHitsResults" />
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
            <a href="https://library.ucla.edu/">UCLA Library Home</a>, or try one of the these
            regularly visited links:
          </p>
          <ul>
            <li>
              <a href="https://www.library.ucla.edu/research-teaching-support/research-help/">Research
                Help</a>
            </li>
            <li>
              <a href="/help/services-resources/ask-us/">Ask Us</a>
            </li>
            <li>
              <a href="https://www.library.ucla.edu/use/access-privileges/disability-resource/">Accessibility
                Resources</a>
            </li>
          </ul>
        </RichText>
      </div>
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="about" />
    </SectionWrapper>

    <SectionWrapper>
      <BlockCallToAction
        class="block-call-to-action"
        :is-global="true"
      />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-news {}
</style>
