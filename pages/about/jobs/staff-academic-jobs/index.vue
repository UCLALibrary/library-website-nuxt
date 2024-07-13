<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, SectionWrapper, DividerWayFinder, SectionGenericList, SectionCardsWithIllustrations } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import fixUri from '../utils/fixUri'
import removeTags from '../utils/removeTags'

// GQL
import JOB_OPPORTUNITIES_LIST from '../gql/queries/JobOpportunitiesList.gql'

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('job-opportunities-list', async () => {
  const data = await $graphql.default.request(JOB_OPPORTUNITIES_LIST)

  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}
if (!data.value.entry && !data.value.allJobs) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

const page = ref(_get(data.value, 'entry', {}))
const allJobs = ref(_get(data.value, 'allJobs', {}))

watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
  allJobs.value = _get(newVal, 'allJobs', {})
})

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

const parsedAcademicLibrarianJobs = computed(() => {
  const allAcademicLibrarianJobs = allJobs.value.filter((obj) => {
    return obj.jobType[0].title === 'Academic Librarian'
  })
  return allAcademicLibrarianJobs.map((obj) => {
    return {
      ...obj,
      text: _get(obj, 'text', ''),
      associatedLocations: obj.associatedLocations.map((entry) => {
        return {
          ...entry,
          to: fixUri(entry.uri),
        }
      })
    }
  })
})

const parsedStaffJobs = computed(() => {
  const allStaffJobs = allJobs.value.filter((obj) => {
    return obj.jobType[0].title === 'Staff'
  })
  return allStaffJobs.map((obj) => {
    return {
      ...obj,
      payRate: _get(obj, 'payRate', null),
      text: _get(obj, 'text', ''),
      associatedLocations: obj.associatedLocations.map((entry) => {
        return {
          ...entry,
          to: fixUri(entry.uri),
        }
      })
    }
  })
})

const parsedAssociatedTopics = computed(() => {
  return page.value.associatedTopics.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
    }
  })
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-job-opportunities"
  >
    <NavBreadcrumb
      to="/about/jobs"
      :title="page.title"
      parent-title="Jobs"
    />

    <BannerText
      class="banner-text"
      :title="page.title"
      :text="page.text"
      :email="page.email"
      :phone="page.phoneNumber"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <!-- ASSOCIATED LIBRARIAN JOBS -->
    <SectionWrapper section-title="Academic Librarian Jobs">
      <SectionGenericList
        v-if="parsedAcademicLibrarianJobs.length > 0"
        :items="parsedAcademicLibrarianJobs"
      />
      <div
        v-else
        class="no-positions"
      >
        No positions available at this time
      </div>
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <!-- STAFF JOBS -->
    <SectionWrapper section-title="Staff Jobs">
      <SectionGenericList
        v-if="parsedStaffJobs.length > 0"
        :items="parsedStaffJobs"
      />
      <div
        v-else
        class="no-positions"
      >
        No positions available at this time
      </div>
    </SectionWrapper>
    <SectionWrapper
      v-if="parsedAssociatedTopics.length > 0"
      theme="divider"
    >
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <!-- ASSOCIATED TOPICS -->
    <SectionWrapper>
      <SectionCardsWithIllustrations
        v-if="parsedAssociatedTopics.length > 0"
        :items="parsedAssociatedTopics"
        section-title="Associated Topics"
      />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-job-opportunities {
  .no-positions {
    @include step-1;
    font-style: italic;
    color: var(--color-primary-blue-05)
  }
}
</style>
