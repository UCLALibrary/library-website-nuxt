<script lang="ts" setup>
// COMPONENTS
import { MastheadSecondary, SearchGeneric, BannerFeatured, SectionTeaserHighlight, SectionWrapper, DividerWayFinder, SectionStaffArticleList, RichText, BlockCallToAction } from 'ucla-library-website-components'

// UTILITIES
import _get from 'lodash/get'
import getListingFilters from '../utils/getListingFilters'
import config from '../utils/searchConfig'
import queryFilterHasValues from '../utils/queryFilterHasValues'
import parseFilters from '../utils/parseFilters'

// HELPERS
import removeTags from '../utils/removeTags'

// GQL
import PROGRAMS_LIST from '../gql/queries/ProgramsList.gql'

// GET DATA-
const { $graphql, $dataApi } = useNuxtApp()
const route = useRoute()

const { data, error } = await useAsyncData('program-listing', async () => {
  const data = await $graphql.default.request(PROGRAMS_LIST, {})
  return data
}
)

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry && !data.value.entries) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

if (data.value.entry && import.meta.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  const doc = {
    title: data.value.entry.title,
    text: data.value.entry.text,
    uri: 'about/programs/'
  }
  await $elasticsearchplugin.index(doc, 'program-listing')
}
// MAP DATA TO VARIABLES & WATCH
const page = ref(_get(data.value, 'entry', {}))
const programs = ref(_get(data.value, 'entries', []))
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
  programs.value = _get(newVal, 'entries', [])
})

// HEAD META INFO
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

// ES search functionality
const hits = ref([])
const noResultsFound = ref(false)
const searchFilters = ref([])
const searchGenericQuery = ref({
  queryText: route.query?.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})
async function searchES() {
  if (
    (route.query && route.query.q && route.query.q !== '') ||
    (route.query.filters &&
      queryFilterHasValues(
        parseFilters(route.query.filters || ''),
        config.programsList.filters
      ))
  ) {
    const queryText = route.query?.q || '*'
    const results = await $dataApi.keywordSearchWithFilters(
      queryText as string,
      config.programsList.searchFields,
      'sectionHandle:program',
      parseFilters(route.query.filters || ''),
      config.programsList.sortField,
      config.programsList.orderBy,
      config.programsList.resultFields,
      config.programsList.filters
    )
    if (results && results.hits && results.hits.total.value > 0) {
      hits.value = results.hits.hits
      noResultsFound.value = false
    } else {
      hits.value = []
      noResultsFound.value = true
    }
  } else {
    hits.value = []
    noResultsFound.value = false
  }
}
watch(
  () => route.query,
  (newVal, oldVal) => {
    // console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query?.q || ''
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    searchES()
  }, { deep: true, immediate: true }
)

// COMPUTED
const parsedFeaturedPrograms = computed(() => {
  if (!page.value?.featuredPrograms) {
    return []
  }
  return page.value.featuredPrograms?.map((obj) => {
    return {
      ...obj,
      image: _get(obj, 'heroImage[0].image[0]', ''),
      title: _get(obj, 'title', ''),
      text: obj.summary,
      to: `/${obj.uri}`,
      category: _get(obj, 'programType[0].title', ''),
    }
  })
})
const parsedBannerHeader = computed(() => {
  // console.log('bannerheader', parsedFeaturedPrograms.value[0]);
  return parsedFeaturedPrograms.value[0]
})
const parsedSectionHighlight = computed(() => {
  return parsedFeaturedPrograms.value.slice(1).map((obj) => {
    return {
      ...obj,
      image: _get(obj, 'heroImage[0].image[0]', ''),
      to: `/${obj.uri}`,
      text: obj.summary,
      category: _get(obj, 'programType[0].title', ''),
    }
  })
})
const parsedProgramsList = computed(() => {
  return programs.value.map((obj) => {
    if (obj.programUrlBehavior === 'externalSite') {
      // console.log(obj.programUrlBehavior, obj)
    }
    return {
      ...obj,
      to:
        obj.programUrlBehavior === 'externalSite'
          ? obj.buttonUrl && obj.buttonUrl.length > 0 && obj.buttonUrl[0].buttonUrl ? obj.buttonUrl[0].buttonUrl : null
          : `/${obj.uri}`,
      image: _get(obj, 'heroImage[0].image[0]', null),
      staffName: `${obj.fullName}`,
      category: _get(obj, 'programType[0].title', null),
      description: _get(obj, 'text', null),
    }
  })
})
const parsedPlaceholder = computed(() => {
  return `Search ${page.value.title}`
})
const parseHitsResults = computed(() => {
  return hits.value.map((obj) => {
    return {
      ...obj._source,
      description: obj._source.text,
      to:
        obj._source.programUrlBehavior === 'externalSite'
          ? obj._source.buttonUrl && obj._source.buttonUrl.length > 0 && obj._source.buttonUrl[0].buttonUrl ? obj._source.buttonUrl[0].buttonUrl : null
          : `/${obj._source.uri}`,
      image: _get(obj._source, 'heroImage[0].image[0]', null),
      category: _get(
        obj._source,
        'programType[0].title',
        null
      ),
    }
  })
})

// METHODS
//  This is event handler which is invoked by search-generic component selections
function getSearchData(data) {
  // Construct the filters parameter dynamically
  const filters = []
  // if filters are selected, add to the filters parameter
  if (data.filters) {
    for (const key in data.filters) {
      if (data.filters[key].length > 0) {
        filters.push(`${key}:(${data.filters[key].join(' OR ')})`)
      }
    }
  }
  useRouter().push({
    path: '/about/programs/',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    },
  })
}
// fetch filters for the page from ES after page loads in Onmounted hook on the client side
async function setFilters() {
  const searchAggsResponse = await $dataApi.getAggregations(
    config.programsList.filters,
    'program'
  )
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.programsList.filters
  )
}

onMounted(async () => {
  await setFilters()
})
</script>
<template>
  <main
    id="main"
    class="page page-programs"
  >
    <NavBreadcrumb
      to="/about"
      :title="page.title"
      parent-title="About"
    />

    <MastheadSecondary
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
    <SectionWrapper
      v-show="page &&
        page.featuredPrograms &&
        page.featuredPrograms.length &&
        hits.length == 0 &&
        !noResultsFound
      "
      theme="divider"
    >
      <DividerWayFinder
        class="search-margin"
        color="about"
      />
    </SectionWrapper>

    <SectionWrapper
      v-show="page &&
        page.featuredPrograms &&
        page.featuredPrograms.length &&
        hits.length == 0 &&
        !noResultsFound
      "
      class="section-no-top-margin"
    >
      <BannerFeatured
        :media="parsedBannerHeader.image"
        :title="parsedBannerHeader.title"
        :category="parsedBannerHeader.category"
        breadcrumb="Featured"
        :description="parsedBannerHeader.text"
        :to="parsedBannerHeader.to"
        :align-right="true"
        prompt="View Program"
        class="banner section-featured-banner"
      />

      <DividerGeneral v-if="parsedSectionHighlight && parsedSectionHighlight.length" />

      <SectionTeaserHighlight
        v-if="parsedSectionHighlight && parsedSectionHighlight.length"
        class="section"
        :items="parsedSectionHighlight"
      />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder class="search-margin" />
    </SectionWrapper>

    <SectionWrapper
      v-show="parsedProgramsList &&
        parsedProgramsList.length > 0 &&
        hits.length == 0 &&
        !noResultsFound
      "
      section-title="All Programs & Initiatives"
    >
      <SectionStaffArticleList :items="parsedProgramsList" />
    </SectionWrapper>

    <!-- RESULTS -->
    <SectionWrapper
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
            <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these regularly
            visited
            links:
          </p>
          <ul>
            <li>
              <a href="https://www.library.ucla.edu/research-teaching-support/research-help">Research Help</a>
            </li>
            <li>
              <a href="/help/services-resources/ask-us/">Ask Us</a>
            </li>
            <li>
              <a href="https://www.library.ucla.edu/use/access-privileges/disability-resources">Accessibility
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
