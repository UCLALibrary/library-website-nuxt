<script setup>
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
          uri: fixUri(entry.uri),
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
          uri: fixUri(entry.uri),
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
    <nav-breadcrumb
      to="/about/jobs"
      :title="page.title"
      parent-title="Jobs"
    />

    <banner-text
      class="banner-text"
      :title="page.title"
      :text="page.text"
      :email="page.email"
      :phone="page.phoneNumber"
    />

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider"
        color="about"
      />
    </section-wrapper>

    <!-- ASSOCIATED LIBRARIAN JOBS -->
    <section-wrapper section-title="Academic Librarian Jobs">
      <section-generic-list
        v-if="parsedAcademicLibrarianJobs.length > 0"
        :items="parsedAcademicLibrarianJobs"
      />
      <div
        v-else
        class="no-positions"
      >
        No positions available at this time
      </div>
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider"
        color="about"
      />
    </section-wrapper>

    <!-- STAFF JOBS -->
    <section-wrapper section-title="Staff Jobs">
      <section-generic-list
        v-if="parsedStaffJobs.length > 0"
        :items="parsedStaffJobs"
      />
      <div
        v-else
        class="no-positions"
      >
        No positions available at this time
      </div>
    </section-wrapper>
    <section-wrapper
      v-if="parsedAssociatedTopics.length > 0"
      theme="divider"
    >
      <divider-way-finder
        class="divider"
        color="about"
      />
    </section-wrapper>

    <!-- ASSOCIATED TOPICS -->
    <section-wrapper>
      <section-cards-with-illustrations
        v-if="parsedAssociatedTopics.length > 0"
        :items="parsedAssociatedTopics"
        section-title="Associated Topics"
      />
    </section-wrapper>
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
