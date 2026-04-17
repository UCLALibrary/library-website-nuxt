<script setup>
// HELPERS
import _get from 'lodash/get'
import format from 'date-fns/format'

// GQL
import ARTICLE_NEWS_LIST from '../gql/queries/ArticleNewsList.gql'

// SEARCH HELPERS
import getListingFilters from '@/utils/getListingFilters'
import config from '@/utils/searchConfig'
import queryFilterHasValues from '@/utils/queryFilterHasValues'
import parseFilters from '@/utils/parseFilters'

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('article-news-list', async () => {
  const data = await $graphql.default.request(ARTICLE_NEWS_LIST)
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

// DATA
const summaryData = ref(_get(data.value, 'entry', []))

// PREVIEW MODE
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  summaryData.value = _get(newVal, 'entry', [])
})

// HEAD METADATA
useHead({
  title: summaryData.value ? summaryData.value.title : '... loading',
})

// COMPUTED
const parsedFeaturedNews = computed(() => {
  if (summaryData.value && summaryData.value.meapNewsListing) {
    return summaryData.value.meapNewsListing.map((obj) => {
      return {
        ...obj,
        to: `/about/news/${obj.to}`,
        image: _get(obj, 'heroImage[0].image[0]', null),
        category: _get(obj, 'category[0].title', ''),
        dateCreated: _get(obj, 'dateCreated', ''),
        byline: _get(obj, 'articleStaff', []),
        bylineOne: _get(obj, 'articleStaff[0].title', ''),
        bylineTwo: _get(obj, 'dateCreated', ''),
      }
    })
  } else return []
})

const parsedBannerHeader = computed(() => {
  if (summaryData.value && summaryData.value.meapNewsListing) {
    return parsedFeaturedNews.value[0]
  } else return {}
})

const parsedSectionHighlight = computed(() => {
  if (summaryData.value && summaryData.value.meapNewsListing) {
    return parsedFeaturedNews.value.slice(1).map((obj) => {
      return {
        ...obj,
        bylineTwo:
          obj.bylineTwo != null
            ? format(
              new Date(obj.bylineTwo),
              'MMMM d, yyyy'
            )
            : '',
      }
    })
  } else return []
})

const parsedByline = computed(() => {
  const byline = (summaryData.value.meapNewsListing.articleStaff || []).map((entry) => {
    return `${entry.byline} ${entry.title || entry.staffMember[0].title
      }`
  })
  return byline.map((entry) => {
    return entry
  })
})

const route = useRoute()

// SEARCH
const hits = ref([])
const title = ref('')
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})

const parseHitsResults = computed(() => {
  return parseHits(hits.value)
})

// This watcher is called when router pushes updates the query params
watch(
  () => route.query,
  (newVal, oldVal) => {
    console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    searchES()
  }, { deep: true, immediate: true }
)
const allNews = ref(true)
// ELASTIC SEARCH
async function searchES() {
  const { keywordSearchWithFilters } = useDataAPI()
  if (
    (route.query.q && route.query.q !== '') ||
    (route.query.filters &&
      queryFilterHasValues(
        parseFilters(route.query.filters || ''),
        config.meapArticle.filters
      ))
  ) {
    console.log('Search ES HITS query,', route.query.q)
    const queryText = route.query.q || '*'
    const results = await keywordSearchWithFilters(
      queryText,
      config.meapArticle.searchFields,
      'sectionHandle:meapArticle',
      parseFilters(route.query.filters || ''),
      config.meapArticle.sortField,
      config.meapArticle.orderBy,
      config.meapArticle.resultFields,
      config.meapArticle.filters
    )

    if (results && results.hits && results.hits.total.value > 0) {
      console.log('Search ES HITS,', results.hits.hits)
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      noResultsFound.value = true
      hits.value = []
    }
    allNews.value = false
  } else {
    // Fetch all Data for this content type
    const queryText = route.query.q || '*'
    const results = await keywordSearchWithFilters(
      queryText,
      config.meapArticle.searchFields,
      'sectionHandle:meapArticle',
      parseFilters(route.query.filters || ''),
      config.meapArticle.sortField,
      config.meapArticle.orderBy,
      config.meapArticle.resultFields,
      config.meapArticle.filters
    )
    if (results && results.hits && results.hits.total.value > 0) {
      console.log('Search ES HITS,', results.hits.hits)
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      noResultsFound.value = true
      hits.value = []
    }
    allNews.value = true
  }
}

async function setFilters() {
  const { getAggregations } = useDataAPI()
  const searchAggsResponse = await getAggregations(
    config.meapArticle.filters,
    'meapArticle'
  )

  console.log(
    'Search Aggs Response: ' + JSON.stringify(searchAggsResponse)
  )

  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.meapArticle.filters
  )
}

function parseHits(hits = []) {
  return hits?.map((obj) => {
    return {
      ...obj._source,
      to: `/about/news/${obj._source.to}`,
      image: _get(obj._source, 'heroImage[0].image[0]', {}),
      category: _get(obj._source, 'category[0].title', ''),
      description: _get(obj._source, 'text', ''),
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
    path: '/about/news',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    }
  })
}

onMounted(async () => {
  console.log('onMounted called')
  // console.log("ESREADkey:" + config.esReadKey)
  // console.log("ESURLkey:" + config.esURL)
  await setFilters()
})


const { hasCTA } = useGlobalCallToAction()

</script>

<template>
  <main
    id="main"
    class="page page-news"
  >
    <masthead-secondary
      :title="summaryData.title"
      :text="summaryData.summary"
    />

    <search-generic
      search-type="about"
      :filters="searchFilters"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      placeholder="Search News"
      @search-ready="getSearchData"
    />

    <h2 class="visually-hidden">
      Highlighted News
    </h2>

    <section-wrapper
      v-show="summaryData &&
        parsedFeaturedNews &&
        parsedFeaturedNews.length &&
        allNews === true
        "
      class="section-no-top-margin"
    >
      <banner-featured
        :media="parsedBannerHeader.image"
        :title="parsedBannerHeader.title"
        :byline="parsedByline"
        breadcrumb="Featured"
        :description="parsedBannerHeader.text"
        :date-created="parsedBannerHeader.dateCreated"
        :to="parsedBannerHeader.to"
        :align-right="true"
        prompt="Read More"
        class="banner section-featured-banner"
      />

      <divider-general v-if="parsedSectionHighlight.length" />

      <section-teaser-highlight
        v-if="parsedSectionHighlight.length"
        class="section"
        :items="parsedSectionHighlight"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider"
        color="search-margin"
      />
    </section-wrapper>

    <section-wrapper
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
        v-else-if="!allNews"
        class="about-results"
      >
        Displaying {{ hits.length }} results
      </h2>

      <section-staff-article-list
        :items="parseHitsResults"
        :section-title="allNews ? 'All News' : 'Search Results'"
      />
    </section-wrapper>

    <!-- NO RESULTS -->
    <section-wrapper
      v-show="noResultsFound"
      class="section-no-top-margin"
    >
      <div class="error-text">
        <rich-text>
          <h2>Search for “{{ route.query.q }}” not found.</h2>
          <p>
            We can’t find the term you are looking for on this page.
            <br>
          </p>
        </rich-text>
      </div>
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        color="search-margin"
        class="divider"
      />
    </section-wrapper>
    <client-only>
      <section-wrapper>

        <block-call-to-action
          v-if="hasCTA"
          class="block-call-to-action"
          :is-meap-global="true"
        />

      </section-wrapper>
    </client-only>
  </main>
</template>

<style lang="scss" scoped>
.page-news {

  .generic-search {
    margin-bottom: var(--space-3xl);
  }

  :deep(.block-staff-article-item) {
    --divider-color: var(--color-secondary-grey-02);
  }

  .banner-header.color-about {
    --color-theme: var(--color-visit-fushia-03);
  }

  :deep(.block-highlight.color-about) {
    --floating-highlight-color-theme: var(--color-visit-fushia-03);
  }

  @media #{$medium} {
    .banner-header {
      margin-top: 0;
    }
  }
}
</style>
