<script setup>
import { onMounted } from 'vue'
import _get from 'lodash/get'

import config from '../utils/searchConfig'
import fixUri from '../utils/fixUri'
import removeTags from '../utils/removeTags'

// GQL
import ENDOWMENTS_LIST from '../gql/queries/EndowmentList.gql'

const { $graphql, $dataApi } = useNuxtApp()
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

// ES search functionality
const hits = ref([])
const title = ref('')
const noResultsFound = ref(false)
const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: {} // queryFilters must be passed even if not used
})

watch(() =>
  route.query,
(newVal, oldVal) => {
  console.log('ES newVal, oldVal', newVal, oldVal)
  searchGenericQuery.value.queryText = route.query.q || ''
  searchES()
}, { deep: true, immediate: true }
)

async function searchES() {
  if (
    route.query.q && route.query.q !== ''
  ) {
    console.log('Search ES HITS query,', route.query.q)
    const queryText = route.query.q || '*'
    const results = await $dataApi.keywordSearchWithFilters(
      queryText,
      config.endowmentsList.searchFields,
      'sectionHandle:endowment',
      [],
      config.endowmentsList.sortField,
      config.endowmentsList.orderBy,
      config.endowmentsList.resultFields,
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
  } else {
    hits.value = []
    noResultsFound.value = false
  }
}

function parseHits(hits = []) {
  return hits.map((obj) => {
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

//  Event handler invoked by search-generic component selections
function getSearchData(data) {
  // console.log('On the page getsearchdata called')

  useRouter().push({
    path: '/give/endowments',
    query: {
      q: data.text,
    },
  })
}
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

    <search-generic
      search-type="about"
      class="generic-search"
      :search-generic-query="searchGenericQuery"
      :placeholder="parsedPlaceholder"
      @search-ready="getSearchData"
    />

    <section-wrapper theme="divider">
      <divider-way-finder
        class="search-margin"
        color="about"
      />
    </section-wrapper>

    <section-wrapper
      v-show="page &&
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
        v-if="parsedFeaturedEndowments.length > 0"
        class="section"
        :items="parsedFeaturedEndowments"
      />
    </section-wrapper>

    <section-wrapper
      v-show="page &&
        parsedFeaturedEndowments &&
        parsedFeaturedEndowments.length &&
        hits.length == 0 &&
        !noResultsFound
      "
      theme="divider"
    >
      <divider-way-finder color="about" />
    </section-wrapper>

    <section-wrapper
      v-show="page &&
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
      v-show="hits && hits.length > 0"
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
    <section-wrapper v-show="noResultsFound">
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
