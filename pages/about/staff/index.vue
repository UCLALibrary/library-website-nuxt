<script setup>
// COMPONENTS
import { IconWithLink, MastheadSecondary, SearchGeneric, SectionWrapper, SmartLink, DividerWayFinder, AlphabeticalBrowseBy, SectionStaffList, RichText, TableComponent, TableRow } from '@ucla-library-monorepo/ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import _ from 'lodash'
// GQL
import STAFF_LIST from '../gql/queries/StaffList.gql'
// UTILITIES
import fixUri from '../utils/fixUri'
import getListingFilters from '../utils/getListingFilters'
import config from '../utils/searchConfig'
import removeTags from '../utils/removeTags'

const { $graphql } = useNuxtApp()
const { data, error } = await useAsyncData('staff-list', async () => {
  const data = await $graphql.default.request(STAFF_LIST)
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry && !data.value.entries) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

if (data.value.entry && import.meta.prerender) {
  const { index } = useIndexer()
  const doc = {
    title: data.value.entry.title,
    text: data.value.entry.text,
    uri: 'about/staff/'
  }
  await index(doc, 'staff-list')
}

const route = useRoute()

const summaryData = ref(_get(data.value, 'entry', {}))

watch(data, (newVal, oldVal) => {
  summaryData.value = _get(newVal, 'entry', {})
})

useHead({
  title: summaryData ? summaryData.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(summaryData.value?.text)
    }
  ]
})

// ELASTIC SEARCH FUNCTIONALITY
function parseFilters(filtersString) {
  // console.log([parseFilters], filtersString)
  if (!filtersString) return {}

  const filters = {}
  const conditions = filtersString.split(' AND ')
  // console.log('conditions', conditions)

  conditions.forEach((condition) => {
    const [key, value] = condition.split(':(')
    const cleanedKey = key.trim()
    const values = value.replace(')', '').split(' OR ').map(v => v.trim())
    if (cleanedKey === 'lastNameLetter') {
      filters[cleanedKey] = [`LastName: ${values[0]}`]
    } else {
      filters[cleanedKey] = values
    }
  })

  return filters
}

const tableHeaders = ref([
  'Academic Departments',
  'Name',
  'Contact Information',
])

// const routeFilters = computed(() => {
//   return JSON.parse(_get(route, 'query.filters', []))
// })

const routeFilters = computed(() => {
  // console.log('routeFilters', _get(route, 'query.filters', ''))
  return parseFilters(_get(route, 'query.filters', ''))
})

const hits = ref([])
const noResultsFound = ref(false)
const searchFilters = ref([])
const selectedLetterProp = ref('')

const searchGenericQuery = ref({
  queryText: route.query.q || '',
  queryFilters: parseFilters(route.query.filters || ''),
})

// This watcher is called when router push updates the query params
watch(
  () => route.query,
  (newVal, oldVal) => {
    // console.log('ES newVal, oldVal', newVal, oldVal)
    searchGenericQuery.value.queryText = route.query.q || ''
    searchGenericQuery.value.queryFilters = parseFilters(route.query.filters || '')
    selectedLetterProp.value = searchGenericQuery.value.queryFilters.lastNameLetter ? searchGenericQuery.value.queryFilters.lastNameLetter[0].split(':')[1].trim() : ''
    searchES()
  }, { deep: true, immediate: true }
)

// ELASTIC SEARCH FUNCTION
async function searchES() {
  const queryText = route.query.q || '*'

  const { 'subjectLibrarian.keyword': subjectLibrarianKeyword, lastNameLetter, ...filters } = routeFilters.value
  const extrafilters = (subjectLibrarianKeyword && subjectLibrarianKeyword.length > 0 && subjectLibrarianKeyword[0] === 'yes') ?
      [
        { term: { 'subjectLibrarian.keyword': 'yes' } }
      ]
    : []
  if (lastNameLetter && lastNameLetter.length > 0)
    extrafilters.push({ wildcard: { 'nameLast.keyword': `${lastNameLetter[0].split(':')[1].trim()}*` } })
  // console.log('extrafilters', extrafilters, lastNameLetter)

  // console.log('in router query in asyc data queryText', queryText)
  const { keywordSearchWithFilters } = useSearch()
  const results = await keywordSearchWithFilters(
    queryText,
    config.staff.searchFields,
    ['staffMember'],
    filters,
    config.staff.sortField,
    config.staff.orderBy,
    config.staff.resultFields,
    config.staff.filters,
    extrafilters
  )

  if (results && results.hits && results.hits.total.value > 0) {
    // console.log('Search ES HITS,', results.hits.hits)

    hits.value = results.hits.hits
    noResultsFound.value = false
  } else {
    noResultsFound.value = true
    hits.value = []
  }
}

const groupByAcademicLibraries = computed(() => {
  const parseResults = parseHitsResults.value
  const groupBySubjectAreas = []
  const allacademicDepts = []
  for (const item of parseResults) {
    for (const obj of item.academicDepartments) {
      allacademicDepts.push(obj.title)
    }
  }
  // console.log("All academicDepts:" + allacademicDepts)
  const uniqueAcademicDepts = Array.from(
    new Set(allacademicDepts.sort())
  )
  /* console.log(
      "All uniqueAcademicDepts:" + JSON.stringify(uniqueAcademicDepts)
  ) */
  for (const title of uniqueAcademicDepts) {
    for (const item of parseResults) {
      for (const obj of item.academicDepartments) {
        if (title === obj.title)
          groupBySubjectAreas.push({
            subjectArea: title,
            ...item,
            staffName:
              item.alternativeName.length > 0
                ? `${item.nameFirst} ${item.nameLast} ${item.alternativeName[0].fullName}`
                : `${item.nameFirst} ${item.nameLast}`,
          })
      }
    }
  }
  /* const groupBySubjectAreas = _.groupBy(
      parseResults,
      (row) => row.academicDepartments[0].title
  ) */
  return groupBySubjectAreas
})

const parsedPlaceholder = computed(() => {
  return `Search ${summaryData.value.title}`
})

const parseHitsResults = computed(() => {
  return hits.value.map((obj) => {
    // //console.log(obj["_source"]["image"])
    return {
      ...obj._source,
      to: `/${obj._source.uri}`,
      image: _get(obj._source.image, '[0]', null),
      alternativeFullName:
        obj._source.alternativeName.length > 0
          ? obj._source.alternativeName[0].fullName
          : null,
      language:
        obj._source.alternativeName.length > 0
          ? obj._source.alternativeName[0].languageAltName
          : null,
      staffName: `${obj._source.nameFirst} ${obj._source.nameLast}`,
      locations: _get(obj, '_source.locations', []).map((loc) => {
        return {
          ...loc,
          uri: fixUri(loc.uri),
        }
      }),
    }
  })
})

function searchBySelectedLetter(data) {
  // console.log("On the page searchBySelectedLetter called", data)
  const filters = []
  if (searchGenericQuery.value.queryFilters) {
    for (const key in searchGenericQuery.value.queryFilters) {
      if (key !== 'lastNameLetter') {
        if (searchGenericQuery.value.queryFilters[key].length > 0) {
          filters.push(`${key}:(${searchGenericQuery.value.queryFilters[key].join(' OR ')})`)
        }
      }
    }
  }

  if (data && data !== '') {
    filters.push(`lastNameLetter:(${data})`)
    console.log('searchBySelectedLetter filters', filters.join(' AND '))
  }
  useRouter().push({
    path: '/about/staff/',
    query: {
      q: searchGenericQuery.value.queryText,
      filters: filters.join(' AND '),
      // lastNameLetter: data,
    },
  })
}

function getSearchData(data) {
  // console.log('On the page getsearchdata called')

  // Create a URLSearchParams object
  const params = new URLSearchParams()

  // Add the text query parameter
  params.append('q', data.text)

  // Construct the filters parameter dynamically
  const filters = []
  if (data.filters) {
    // console.log('getSearchData filters', JSON.stringify(data.filters))
    for (const key in data.filters) {
      if (key !== 'lastNameLetter') {
        if (data.filters[key].length > 0) {
          filters.push(`${key}:(${data.filters[key].join(' OR ')})`)
        }
      } else if (data.filters[key].length > 0) {
        // console.log("in searhc data for last name", data.filters[key][0].split(':')[1].trim())
        filters.push(`lastNameLetter:(${data.filters[key][0].split(':')[1].trim()})`)
      }
    }
  }

  console.log('getSearchData filters', filters)
  // Add the filters query parameter

  // Use the router to navigate with the new query parameters
  // https://uclalibrary-test-nuxt3x.netlify.app/about/staff?q=&departments=Software Development and Library Systems, Administration&locations=UCLA Film & Television Archive, Eugene and Maxine Rosenfeld Management Library&subjectLibrarian=yes&lastNameLetter=G

  useRouter().push({
    path: '/about/staff/',
    query: {
      q: data.text,
      filters: filters.join(' AND ')
    }
  })
}

async function setFilters() {
  const { getAggregations } = useSearch()
  const searchAggsResponse = await getAggregations(
    config.staff.filters,
    'staffMember'
  )
  /* console.log(
    'Search Aggs Response: ' + JSON.stringify(searchAggsResponse)
  ) */
  searchFilters.value = getListingFilters(
    searchAggsResponse,
    config.staff.filters
  )
  /* console.log(
    'searchFilters.value Response: ' + JSON.stringify(searchFilters.value)
  ) */
}
onMounted(async () => {
  // console.log('onMounted called')
  // console.log("ESREADkey:" + config.esReadKey)
  // console.log("ESURLkey:" + config.esURL)
  await setFilters()
  await searchES()
})

</script>
<template>
  <main
    id="main"
    class="page page-staff"
  >
    <MastheadSecondary
      v-if="summaryData"
      :title="summaryData.title || ''"
      :text="summaryData.text || ''"
    />

    <!-- SEARCH
    Filters by location, department, subject libarian -->
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

    <!-- FILTERS -->
    <SectionWrapper
      v-show="hits &&
        hits.length > 0 &&
        ((searchGenericQuery.queryFilters['subjectLibrarian.keyword'] &&
          (searchGenericQuery.queryFilters[
            'subjectLibrarian.keyword'
          ][0] === '')) ||
          !searchGenericQuery.queryFilters[
            'subjectLibrarian.keyword'
          ])
      "
      class="section-no-top-margin"
    >
      <AlphabeticalBrowseBy
        class="browse-margin"
        :selected-letter-prop="selectedLetterProp"
        :display-all="false"
        @selected-letter="searchBySelectedLetter"
      />
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
      <SectionStaffList :items="parseHitsResults" />
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
            <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these regularly visited
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

    <!-- SUBJECT LIBRARIANS -->
    <SectionWrapper
      v-show="searchGenericQuery.queryFilters['subjectLibrarian.keyword'] &&
        searchGenericQuery.queryFilters['subjectLibrarian.keyword'][0] ===
        'yes' &&
        groupByAcademicLibraries
      "
      class="section-no-top-margin"
    >
      <h3 class="section-title subject-librarian">
        Contact a Subject Librarian
      </h3>

      <TableComponent
        :table-headers="tableHeaders"
        table-caption="Subject Librarians"
      >
        <TableRow
          v-for="item, index in groupByAcademicLibraries"
          :key="index"
          :num-cells="3"
          class="subject-librarian-item"
        >
          <template #column1>
            {{ item.subjectArea }}
          </template>
          <template #column2>
            <SmartLink
              :to="item.to"
              class="staff-name"
            >
              {{ item.nameFirst }} {{ item.nameLast }}
              <span
                v-if="item.alternativeName && item.alternativeName.length !== 0"
                :lang="item.alternativeName[0].languageAltName"
              >
                {{ item.alternativeName[0].fullName }}
              </span>
            </SmartLink>
            <div
              class="job-title"
              v-html="item.jobTitle"
            />
            <ul
              v-if="item.departments.length"
              class="departments"
            >
              <li class="department">
                {{ item.departments[item.departments.length - 1].title }}
              </li>
            </ul>
            <div v-if="item.locations && item.locations.length !== 0">
              <IconWithLink
                v-for="location in item.locations"
                :key="'location-' + location.id"
                :text="location.title ?? ''"
                icon-name="svg-icon-location"
                :to="'/' + location.to"
              />
            </div>
          </template>
          <template #column3>
            <div class="email">
              <IconWithLink
                :text="item.email"
                icon-name="svg-icon-email"
                :to="'mailto:' + item.email"
              />
            </div>

            <div
              v-if="item.phone"
              class="phone"
            >
              <IconWithLink
                :text="item.phone"
                icon-name="svg-icon-phone"
                :to="'tel:' + item.phone"
              />
            </div>
            <div
              v-if="item.consultation"
              class="consultation"
            >
              <IconWithLink
                text="Book a consultation"
                icon-name="svg-icon-consultation"
                :to="item.consultation"
              />
            </div>
          </template>
        </TableRow>
      </TableComponent>
    </SectionWrapper>
  </main>
</template>
<style lang="scss" scoped>
.page-staff {
  .browse-margin {
    margin-bottom: var(--space-m);
  }

  .search-container {
    position: relative;
    width: $container-l-cta + px;
    // height: 240px;
    background-color: var(--color-white);
    margin: 0 auto;
    margin-top: -96px;
    z-index: 10;
    border-radius: $rounded-slightly + px;
    padding: var(--space-l) var(--space-xl);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;

    .empty-search-box {
      background: var(--color-primary-blue-01);
      width: 100%;
      height: var(--space-2xl);
    }

    .input-indicator {
      width: 100%;
      height: 2px;
      border-bottom: 2px solid var(--color-default-cyan-03);
      margin: var(--space-s) auto;
    }

    .filters {
      display: flex;
      flex-direction: row;
      gap: var(--space-xs);

      div {
        background: var(--color-primary-blue-03);
        height: var(--space-2xl);
        // width: calc((100% / 3) - (var(--space-xs) * 2));
        flex-grow: 1;
      }
    }

    @media #{$medium} {
      width: 100%;
      margin-top: 0;
    }

    @media #{$small} {
      .filters {
        flex-direction: column;
      }
    }
  }

  .browse-by {
    max-width: $container-l-main + px;
    margin: 0 auto var(--space-xl);
  }

  .section-heading {
    @include step-2;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-m);
  }

  .browse-by-options {
    list-style: none;
    display: flex;
    justify-content: space-between;
    @include step-1;
    color: var(--color-primary-blue-03);
  }

  .section-title {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-xl);
  }

  @media #{$medium} {
    .search-container {
      margin-top: -64px;
      width: calc(100% - (var(--unit-gutter) * 2));
    }

    .browse-by {
      padding: 0 var(--unit-gutter);
    }
  }

  @media #{$small} {
    .search-container {
      margin-top: -48px;
    }

    .browse-by-options {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      gap: 4px 0;
    }

    li {
      padding: 4px;
      min-width: 44px;
    }
  }
}
</style>
