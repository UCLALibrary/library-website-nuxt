<script lang="ts" setup>
// COMPONENTS
import { NavBreadcrumb, SectionWrapper, DividerWayFinder, BlockStaffDetail, SectionStaffOrcidPublications, SectionStaffArticleList, BlockCallToAction } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import STAFF_DETAIL from '../gql/queries/StaffDetail.gql'

const route = useRoute()
const { $graphql, $elasticsearchplugin } = useNuxtApp()

// ASYNC DATA into PAGE const
const { data, error } = await useAsyncData(`staff/${route.params.slug}`, async () => {
  const data = await $graphql.default.request(STAFF_DETAIL, { slug: route.params.slug })
  // console.log('In staff Slug page data', data)
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}
if (!data.value.entry) {
  // console.log('In staff Slug page no data')
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}
// ES Index
if (route.params.slug && import.meta.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  // console.log("elasticsearchplugin", $elasticsearchplugin, route.params.slug)
  await $elasticsearchplugin?.index(data.value.entry, route.params.slug)
}

const page = ref(_get(data.value, 'entry', {}))
const entries = ref(_get(data.value, 'entries', {}))

watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
  entries.value = _get(newVal, 'entries', {})
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

// COMPUTED
const parsedImage = computed(() => {
  return _get(page.value, 'image[0]', {})
})
const parsedAlternativeFullName = computed(() => {
  return _get(page.value, 'alternativeName', '')
})
const parsedLanguage = computed(() => {
  return _get(page.value, 'alternativeName[0].languageAltName', '')
})
const parsedItems = computed(() => {
  // was page value entries
  return entries.value.map((obj) => {
    return {
      ...obj,
      to:
        obj.externalResourceUrl != null
          ? _get(obj, 'externalResourceUrl', '')
          : `/${obj.to}`,
      image: _get(obj, 'heroImage[0].image[0]', null),
      staffName: `${obj.nameFirst} ${obj.nameLast}`,
    }
  })
})
</script>
<template>
  <main
    id="main"
    class="page page-staff-detail"
  >
    <!-- staff page here -->
    <NavBreadcrumb
      to="/about/staff/"
      :title="page.title"
      parent-title="Staff Directory"
    />
    <SectionWrapper>
      <BlockStaffDetail
        :image="parsedImage"
        :name-first="page.nameFirst"
        :name-last="page.nameLast"
        :alternative-name="parsedAlternativeFullName"
        :language="parsedLanguage"
        :job-title="page.jobTitle"
        :departments="page.departments"
        :locations="page.locations"
        :pronouns="page.pronouns"
        :email="page.email"
        :phone="page.phone"
        :consultation="page.consultation"
        :topics="page.topics"
        :academic-departments="page.academicDepartments"
        :biography="page.biography"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="parsedItems?.length ||
        page.publications ||
        page.orcid
      "
      class="selected-articles"
      theme="divider"
    >
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <div
      v-if="parsedItems?.length ||
        page.publications ||
        page.orcid
      "
      class="selected-articles"
    >
      <SectionWrapper>
        <SectionStaffOrcidPublications
          class="staff-orcid-publications"
          :orcid="page.orcid"
          :publications="page.publications"
        />
      </SectionWrapper>

      <SectionWrapper theme="divider">
        <DividerWayFinder
          v-if="parsedItems?.length &&
            (page.publications || page.orcid)
          "
          class="divider divider-first"
          color="about"
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionStaffArticleList
          v-if="parsedItems?.length"
          class="staff-article-list-section"
          section-title="Articles"
          :items="parsedItems"
        />
      </SectionWrapper>
    </div>

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider divider-first"
        color="about"
      />
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
.page-staff-detail {
  .selected-articles {
    :deep(.divider .dotted) {
      border-color: var(--color-secondary-grey-03);
    }
  }
}
</style>
