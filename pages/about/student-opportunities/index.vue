<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, SectionWrapper, DividerWayFinder, SectionGenericList, SectionCardsWithIllustrations } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import fixUri from '../utils/fixUri'
import removeTags from '../utils/removeTags'

// GQL
import STUDENT_OPPORTUNITIES_LIST from '../gql/queries/JobStudentOpportunitiesList.gql'

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('student-opportunities-list', async () => {
  const data = await $graphql.default.request(STUDENT_OPPORTUNITIES_LIST)

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

if (data.value.entry && import.meta.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  const doc = {
    title: data.value.entry.title,
    text: data.value.entry.text,
    email: data.value.entry.email,
    phoneNumber: data.value.entry.phoneNumber,
    uri: 'about/student-opportunities/'
  }
  await $elasticsearchplugin.index(doc, 'student-opportunities-list')
}

const page = ref(_get(data.value, 'entry', {}))
const allJobs = ref(_get(data.value, 'allJobs', {}))

watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
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

const parsedStudentJobs = computed(() => {
  const allStudentJobs = allJobs.value.filter((obj) => {
    return obj.jobType[0].title === 'Student Job'
  })
  return allStudentJobs.map((obj) => {
    return {
      ...obj,
      payRate: _get(obj, 'payRate', null),
      associatedLocations: obj.associatedLocations.map(
        (entry) => {
          return {
            ...entry,
            to: fixUri(entry.uri),
          }
        }
      ),
    }
  })
})

const parsedStudentInternships = computed(() => {
  const allInternships = allJobs.value.filter((obj) => {
    return obj.jobType[0].title === 'Student Internship'
  })
  return allInternships.map((obj) => {
    return {
      ...obj,
      payRate: _get(obj, 'payRate', null),
      associatedLocations: obj.associatedLocations.map(
        (entry) => {
          return {
            ...entry,
            to: `${entry.uri}`,
          }
        }
      ),
    }
  })
})

const parsedAssociatedPrograms = computed(() => {
  return page.value.associatedPrograms.map((obj) => {
    return {
      ...obj,
      jobPostingURL:
        obj.programUrlBehavior === 'externalSite'
          ? obj.buttonUrl[0].buttonUrl
          : `/${obj.jobPostingURL}`,
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
    class="page page-student-opportunities"
  >
    <NavBreadcrumb
      to="/about"
      :title="page.title"
      parent-title="About"
    />

    <BannerText
      v-if="
        page.buttonUrl &&
        page.buttonUrl[0] &&
        page.buttonUrl[0].buttonText
      "
      class="banner-text"
      :title="page.title"
      :text="page.text"
      :email="page.email"
      :phone="page.phoneNumber"
      :button-text="page.buttonUrl[0].buttonText"
      :to="page.buttonUrl[0].buttonUrl"
    />
    <BannerText
      v-else
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

    <!-- STUDENT JOBS -->
    <SectionWrapper section-title="Student Jobs">
      <SectionGenericList
        v-if="parsedStudentJobs.length > 0"
        :items="parsedStudentJobs"
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

    <!-- STUDENT INTERNSHIPS -->
    <SectionWrapper section-title="Student Internships">
      <SectionGenericList
        v-if="parsedStudentInternships.length > 0"
        :items="parsedStudentInternships"
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

    <SectionWrapper section-title="Awards, Grants, and Fellowships">
      <SectionGenericList
        v-if="parsedAssociatedPrograms.length > 0"
        :items="parsedAssociatedPrograms"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="parsedAssociatedTopics.length > 0"
      theme="divider"
    >
      <DividerWayFinder color="about" />
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
.page-student-opportunities {
  .no-positions {
    @include step-1;
    font-style: italic;
    color: var(--color-primary-blue-05);
  }
}
</style>
