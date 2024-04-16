<script setup>
// HELPERS
import _get from "lodash/get"
import fixUri from "../utils/fixUri"
import removeTags from "../utils/removeTags"

// GQL
import STUDENT_OPPORTUNITIES_LIST from "../gql/queries/JobStudentOpportunitiesList.gql"

const { $graphql } = useNuxtApp()

const { data } = await useAsyncData('student-opportunities-list', async () => {
  const data = await $graphql.default.request(STUDENT_OPPORTUNITIES_LIST)

  return data
})

const page = ref(_get(data.value, 'entry', {}))
const allJobs = ref(_get(data.value, 'allJobs', {}))

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
  let allStudentJobs = allJobs.value.filter((obj) => {
    return obj.jobType[0].title === "Student Job"
  })
  return allStudentJobs.map((obj) => {
    return {
      ...obj,
      payRate: _get(obj, "payRate", null),
      associatedLocations: obj.associatedLocations.map(
        (entry) => {
          return {
            ...entry,
            uri: fixUri(entry.uri),
          }
        }
      ),
    }
  })
})

const parsedStudentInternships = computed(() => {
  let allInternships = allJobs.value.filter((obj) => {
    return obj.jobType[0].title === "Student Internship"
  })
  return allInternships.map((obj) => {
    return {
      ...obj,
      payRate: _get(obj, "payRate", null),
      associatedLocations: obj.associatedLocations.map(
        (entry) => {
          return {
            ...entry,
            uri: `${entry.uri}`,
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
        obj.programUrlBehavior === "externalSite"
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
    <nav-breadcrumb
      to="/about"
      :title="page.title"
      parent-title="About"
    />

    <banner-text
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
    <banner-text
      v-else
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

    <!-- STUDENT JOBS -->
    <section-wrapper section-title="Student Jobs">
      <section-generic-list
        v-if="parsedStudentJobs.length > 0"
        :items="parsedStudentJobs"
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

    <!-- STUDENT INTERNSHIPS -->
    <section-wrapper section-title="Student Internships">
      <section-generic-list
        v-if="parsedStudentInternships.length > 0"
        :items="parsedStudentInternships"
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

    <section-wrapper section-title="Awards, Grants, and Fellowships">
      <section-generic-list
        v-if="parsedAssociatedPrograms.length > 0"
        :items="parsedAssociatedPrograms"
      />
    </section-wrapper>

    <section-wrapper
      v-if="parsedAssociatedTopics.length > 0"
      theme="divider"
    >
      <divider-way-finder color="about" />
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
.page-student-opportunities {
  .no-positions {
    @include step-1;
    font-style: italic;
    color: var(--color-primary-blue-05);
  }
}
</style>
